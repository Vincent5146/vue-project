<template>
  <Navbar/>
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
  <div class="allBike mt-3">
    <Loading v-model:active="isLoading"/>
    <!-- 商品 -->
    <div class="container px-0">
      <div class="row row-cols-1 row-cols-md-5 g-3">
        <div class="col" v-for="item in products" :key="item.id">
          <div class="card border-0 box-shadow rounded-0 h-100">
            <div style="height: 250px; background-size: cover; background-position: center"
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
              class="text-end"
              @click="getProduct(item.id)"
            >
            </div>
            <div class="card-body text-center">
              <h4 class="card-title fw-bold">{{ item.title }}</h4>
              <div class="d-flex justify-content-around align-items-end">
                <div class="fs-6 text-muted" v-if="!item.price">
                  NT$ {{ $filters.currency(item.origin_price) }}
                </div>
                <del class="fs-6 text-muted" v-if="item.price">
                  NT$ {{ $filters.currency(item.origin_price) }}
                </del>
                <div class="fs-5 text-black fw-bold" v-if="item.price">
                  NT$ {{ $filters.currency(item.price) }}
                </div>
              </div>
            </div>
            <div class="productsFooter">
              <button
                type="button"
                class="btn-products"
                @click="getProduct(item.id)"
              >
                商品資訊
              </button>
              <span class="btn-products2" @click="addtoCart(item.id, 1)"><i class="fas fa-plus"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <Pagination :pages="pagination" @emit-pages="getProducts"/>
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
      loadingStatus: { loadingItem: '' },
      products: [],
      product: {},
      isLoading: false,
      pagination: {}
    }
  },
  methods: {
    getProducts (page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.products = response.data.products
        this.pagination = response.data.pagination
        this.isLoading = false
      })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
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
      })
    }
  },
  created () {
    this.getProducts()
  }
}

</script>

<style lang="scss">
.productsFooter{
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    border-top: 1px solid #dee2e6;
  .btn-products{
    width: 70%;
    color: #fff;
    background-color: #282f2f;
    border-color: #262c2c;
    border-radius: 10px;
    &:hover{
      background-color: #669999;
      color: white;
      border-color: #669999;
    }
  }
  .btn-products2{
    width: 20%;
    font-size: 20px;
  }
  @media (max-width: 991px) {
    .btn-products{
      font-size: 15px
    }
  }
}

</style>
