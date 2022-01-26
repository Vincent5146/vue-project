<template>
  <Navbar/>
  <Loading :active="isLoading" />
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="introduce">
          <div class="introduce-text">
            <h1>12/31前輸入優惠碼 <span class="text-strong">綿綿</span></h1>
            <p>可享全館產品、服務9 折優惠!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row mt-4">
      <div class="col-12 col-lg-3 col-xl-2 nav-left" ref="navLeft">
        <p class="nav-tar">
          產品種類
          <span class="material-icons">
            <i class="fas fa-chevron-down"></i>
          </span>
        </p>
        <ul :class="{ open: sideUl }">
          <li @click="getProducts" :class="{ active: productValue === '全部' }">
            全部產品
          </li>
          <li
            type="button" @click="filterCategory('綿綿服務')"
            :class="{ active: '綿綿服務' === productValue }"
          >
            綿綿服務
          </li>
          <li
            type="button" @click="filterCategory('寵物玩具')"
            :class="{ active: '寵物玩具' === productValue }"
          >
            寵物玩具
          </li>
          <li
            type="button" @click="filterCategory('寵物食品')"
            :class="{ active: '寵物食品' === productValue }"
          >
            寵物食品
          </li>
          <li
            type="button" @click="filterCategory('寵物衣服')"
            :class="{ active: '寵物衣服' === productValue }"
          >
            寵物衣服
          </li>
        </ul>
      </div>
      <div class="col-12 col-lg-9 col-xl-10 ms-md-auto ps-md-4">
        <ul class="products row p-0">
          <li
            class="col-6 col-sm-4 col-xl-3 mb-5 text-start list-none"
            v-for="item in getProductsList"
            :key="item.id"
          >
            <div class="product">
              <div class="product_img">
                <div style="height: 250px; background-size: cover; background-position: center"
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                  class="image text-end"
                  @click="getProduct(item.id)"
                >
                </div>
              </div>
              <div class="product-title">{{ item.title }}</div>
              <div class="product_price">
                <div class="product-price-1" v-if="!item.price">
                  {{ $filters.currency(item.origin_price) }} 元
                </div>
                <del class="product-price-2" v-if="item.price">
                  原價 {{ $filters.currency(item.origin_price) }} 元
                </del>
                <div class="product-price-2" v-if="item.price">
                  特價 {{ $filters.currency(item.price) }} 元
                </div>
              </div>
              <div class="productsFooter">
                <button type="button" class="btn-products" @click="getProduct(item.id)">
                  商品資訊
                </button>
                <span class="btn-products2" @click="addtoCart(item.id, 1)">
                  <i class="fas fa-plus"></i>
                </span>
              </div>
            </div>
          </li>
        </ul>
        <div class="d-flex justify-content-center mt-4">
          <Pagination :pages="pagination" @emit-pages="getProducts" v-if="pageIsShown"/>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  components: {
    Navbar,
    Footer,
    Pagination
  },
  data () {
    return {
      products: [],
      product: {},
      isLoading: false,
      pagination: {},
      productValue: '全部',
      sideUl: false,
      pageIsShown: false
    }
  },
  mounted () {
    const sideBtn = this.$refs.navLeft
    sideBtn.addEventListener('click', () => {
      if (window.innerWidth < 993) {
        if (this.sideUl) {
          this.sideUl = false
        } else {
          this.sideUl = true
        }
      }
    })
  },
  computed: {
    getProductsList () {
      return this.products.filter((item) => item.category.match(this.productValue))
    }
  },
  methods: {
    getAllProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.products = response.data.products
        this.pageIsShown = false
        this.isLoading = false
      }).catch(error => {
        console.warn(error, 'error')
        this.isLoading = false
      })
    },
    getProducts (page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.products = response.data.products
        this.pagination = response.data.pagination
        this.pageIsShown = true
        this.productValue = ''
        this.isLoading = false
      }).catch(error => {
        console.warn(error, 'error')
        this.isLoading = false
      })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
      document.documentElement.scrollTop = 0
    },
    filterCategory (item) {
      this.getAllProducts()
      this.productValue = item
    },
    addtoCart (id, qty) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.isLoading = true
      this.$http.post(api, { data: cart }).then((response) => {
        if (response.data.success) {
          this.emitter.emit('message:push', {
            message: response.data.message,
            status: 'success'
          })
          this.emitter.emit('resetCart')
          this.isLoading = false
        } else {
          this.emitter.emit('message:push', {
            message: response.data.message,
            status: 'danger'
          })
          this.isLoading = false
        }
      }).catch(error => {
        console.warn(error, 'error')
        this.isLoading = false
      })
    }
  },
  created () {
    this.getProducts()
  }
}

</script>
