<template>
  <div>
    <Loading :active="isLoading"/>
    <div class="text-end mt-4">
      <button type="button" class="btn btn-dark btn-hover rounded-0" @click="openCouponModal(true)">
        建立新的優惠券
      </button>
    </div>
    <div class="table-responsive-lg mt-4">
      <table class="table table-striped lh-lg">
        <thead class="table-dark">
          <tr class="table-nowrap">
            <th width="150" class="text-center">名稱</th>
            <th width="150" class="text-center">優惠碼</th>
            <th width="150" class="text-center">折扣百分比</th>
            <th width="150" class="text-center">到期日</th>
            <th width="150" class="text-center">是否啟用</th>
            <th width="150" class="text-center">編輯</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr class="table-nowrap" v-for="(item) in coupons" :key="item.code">
            <td>{{ item.title }}</td>
            <td>{{ item.code }}</td>
            <td>{{ item.percent }}%</td>
            <td>{{ $filters.date(item.due_date) }}</td>
            <td>
              <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
              <span v-else class="text-muted">未起用</span>
            </td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-primary btn-sm" @click="openCouponModal(false, item)">
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm" @click="openDelCouponModal(item)">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <couponModal :coupon="tempCoupon" ref="couponModal" @update-coupon="updateCoupon"/>
    <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon"/>
  </div>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue'
import DelModal from '@/components/DelModal.vue'

export default {
  components: {
    CouponModal,
    DelModal
  },
  props: {
    config: Object
  },
  data () {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      isLoading: false,
      isNew: false
    }
  },
  methods: {
    openCouponModal (isNew, item) {
      this.isNew = isNew
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
      } else {
        this.tempCoupon = { ...item }
      }
      this.$refs.couponModal.showModal()
    },
    openDelCouponModal (item) {
      this.tempCoupon = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    getCoupons () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.$http.get(url, this.tempCoupon).then((response) => {
        this.coupons = response.data.coupons
        this.isLoading = false
      })
    },
    updateCoupon (tempCoupon) {
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        httpMethod = 'put'
      }
      this.$http[httpMethod](url, { data: tempCoupon }).then((response) => {
        this.emitter.emit('message:push', { message: response.data.message, status: 'success' })
        this.getCoupons()
        this.$refs.couponModal.hideModal()
      })
    },
    delCoupon () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.isLoading = true
      this.$http.delete(url).then((response) => {
        this.emitter.emit('message:push', { message: response.data.message, status: 'danger' })
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getCoupons()
        this.isLoading = false
      })
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
