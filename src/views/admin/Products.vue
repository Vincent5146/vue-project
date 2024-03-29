<template>
    <Loading :active="isLoading"/>
    <div class="text-end mt-4">
      <button type="button" class="btn btn-dark btn-hover rounded-0" @click="openModal(true)">
        增加一個產品
      </button>
    </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="150">分類</th>
        <th>產品名稱</th>
        <th width="120">產品圖片</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category}}</td>
        <td>{{ item.title }}</td>
        <td><img class="img-fluid" :src="item.imageUrl" alt="產品圖" /></td>
        <td class="text-right">
          {{ $filters.currency(item.origin_price) }}
        </td>
        <td class="text-right">
          {{ $filters.currency(item.price) }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">
              編輯
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="openDelProductModal(item)">
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="d-flex justify-content-center">
    <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
  </div>
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct">
  </ProductModal>
  <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"/>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue'
import DelModal from '@/components/DelModal.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false
    }
  },
  components: {
    ProductModal,
    DelModal,
    Pagination
  },
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        this.isLoading = false
        if (res.data.success) {
          this.products = res.data.products
          this.pagination = res.data.pagination
        }
      })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    updateProduct (item) {
      this.tempProduct = item
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      this.isLoading = true
      let httpMethod = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      const productComponent = this.$refs.productModal
      this.$http[httpMethod](api, { data: this.tempProduct }).then((response) => {
        this.isLoading = false
        productComponent.hideModal()
        if (response.data.success) {
          this.getProducts()
          this.emitter.emit('message:push', { message: response.data.message, status: 'success' })
        } else {
          this.emitter.emit('message:push', { message: response.data.message, status: 'danger' })
        }
      })
    },
    openDelProductModal (item) {
      this.tempProduct = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.isLoading = true
      this.$http.delete(url).then((response) => {
        this.isLoading = false
        this.emitter.emit('message:push', { message: response.data.message, status: 'danger' })
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getProducts()
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
