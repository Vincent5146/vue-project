<template>
  <Navbar/>
  <Banner/>
  <div class="FollowPage mt-5">
    <Loading :active="isLoading"/>
    <div class="container">
      <h1 class="fs-2 text-center fw-bold" v-if="followProduct.length !== 0">我的收藏</h1>
      <div class="d-flex flex-column align-items-center" v-if="followProduct.length === 0">
        <p class="fs-2 fw-bold">目前沒有收藏的產品 !</p>
        <router-link to="/products" class="btn btn-dark btn-hover rounded-0 mt-5">查看產品 Go</router-link>
      </div>
      <div class="row row-cols-1 row-cols-md-5 g-3 mt-5" v-if="followProduct.length !== 0">
        <div class="col" v-for="item in followProduct" :key="item.id">
          <div class="product">
            <div class="product_img">
              <div style="height: 250px; background-size: cover; background-position: center"
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
                class="text-end"
                @click="getProduct(item.id)"
              >
              </div>
            </div>
            <div class="product_title">{{ item.title }}</div>
            <div class="product_price">
              <div class="product_price_1" v-if="!item.price">
                {{ $filters.currency(item.origin_price) }} 元
              </div>
              <del class="product_price_2" v-if="item.price">
                原價 {{ $filters.currency(item.origin_price) }} 元
              </del>
              <div class="product_price_2" v-if="item.price">
                特價 {{ $filters.currency(item.price) }} 元
              </div>
            </div>
            <div class="card-footer border-0 d-flex justify-content-between align-items-center bg-transparent">
              <div>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning" v-if="Math.floor(Math.random() * 2) == 1"></i>
              </div>
              <small>已售出 {{ Math.floor(Math.random() * 150) }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'FollowPage',
  components: {
    Navbar,
    Banner,
    Footer
  },
  data () {
    return {
      isLoading: false,
      products: [],
      followProduct: [],
      followList: JSON.parse(localStorage.getItem('followData')) || []
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          this.products = response.data.products
          this.getFollow()
          this.isLoading = false
        }
      })
      document.documentElement.scrollTop = 0
    },
    getFollow () {
      this.followProduct = this.products.filter(item => this.followList.indexOf(item.id) !== -1)
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="scss">
  .col {
    @media only screen and (max-width: 992px) {
      width: 30%;
    }
    @media only screen and (max-width: 600px) {
      flex: 0 0 auto;
      width: 100%;
    }
  }
</style>
