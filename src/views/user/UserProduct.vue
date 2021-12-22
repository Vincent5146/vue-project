<template>
  <Navbar />
  <div class="productPage">
    <Loading v-model:active="isLoading" />
    <div class="container">
      <!-- 分類 -->
      <nav
        class="mb-md-4 d-flex justify-content-center justify-content-md-start"
        aria-label="breadcrumb"
      >
        <ol class="breadcrumb">
          <li class="me-3" @click.prevent="goBack">
            <a class="text-dark a-hover fw-bold"
              ><i class="fas fa-arrow-left"></i
            ></a>
          </li>
          <li
            class="breadcrumb-item"
            @click="$router.push({ name: 'user-products' })"
          >
            <a class="text-dark a-hover fw-bold">產品</a>
          </li>
          <li class="breadcrumb-item" @click.prevent="changePage">
            <a class="text-dark a-hover fw-bold">{{ product.category }}</a>
          </li>
          <li class="breadcrumb-item fw-bold active" aria-current="page">
            {{ product.title }}
          </li>
        </ol>
      </nav>
      <!-- 內容 -->
      <div class="row d-flex justify-content-center">
        <div class="col-md-6 p-0 d-flex justify-content-center">
          <div class="row">
            <div class="col p-0">
              <img :src="product.imageUrl" class="img-fluid" alt="商品照片" />
            </div>
          </div>
        </div>
        <div
          class="col-md-5 d-flex justify-content-center align-items-center mt-5 mt-md-0"
        >
          <div class="ps-0 ps-md-5">
            <div class="d-flex justify-content-between">
              <h4 class="fw-bold fs-5">{{ product.category }}</h4>
              <div @click.prevent="addFollow(product.id)">
                <span v-if="followList.includes(product.id)">
                  <i class="fas fa-heart text-strong fs-4"></i>
                </span>
                <span v-else>
                  <i class="far fa-heart text-strong fs-4"></i>
                </span>
              </div>
            </div>
            <h2 class="fw-bold">{{ product.title }}</h2>
            <div class="d-flex align-items-center mt-3">
              <div class="me-3">
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
              </div>
              <small>已售出 {{ soldNums }}</small>
            </div>
            <hr class="mt-4" />
            <h4 class="text-strong fw-bold fs-5 mt-4">產品特色</h4>
            <ul >
              <li>{{ product.description }}</li>
              <li>{{ product.description2 }}</li>
            </ul>
            <div class="d-flex align-items-end mt-4">
              <h3 class="text-muted text-decoration-line-through fs-6 me-3">
                NT$ {{ $filters.currency(product.origin_price) }}
              </h3>
              <h3 class="text-black fw-bold fs-4">
                NT$ {{ $filters.currency(product.price) }}
              </h3>
            </div>
            <div class="d-flex align-items-end pt-4">
              <select class="fs-5 px-2 py-1" v-model.number="quantity">
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <button
                type="button"
                class="btn btn btn-dark btn-hover rounded-0 ms-4"
                @click="addtoCart(product.id, quantity)"
              >
                加入購物車
              </button>
            </div>
            <hr class="mt-4" />
            <h4 class="text-strong fw-bold fs-5 mt-4">購物須知</h4>
            <p class="lh-lg">
              商品加入購物車後，請先來電預約時間，並告知寵物體型、個性，再進行付款，謝謝您的配合。
            </p>
            <!-- <hr class="mt-4" />
            <h4 class="text-strong fw-bold fs-5 mt-4">退換貨須知</h4>
            <p class="lh-lg">
              本產品不適用7天鑑賞期，若商品有瑕疵請聯絡客服，我們將提供專人到府服務。
            </p> -->
          </div>
        </div>
      </div>
      <hr class="my-5" />
      <div>
        <h3 class="text-center fw-bold mb-5">熱門產品</h3>
        <div class="row row-cols-1 row-cols-md-5 g-3">
          <div class="col" v-for="item in products" :key="item.id">
            <div class="card border-0 box-shadow rounded-0 h-100" @click="$router.push({ path: `/product/${item.id}` })">
              <div style="height: 250px; background-size: cover; background-position: center" :style="{ backgroundImage: `url(${item. imageUrl})` }">
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
              <div class="card-footer border-0 d-flex justify-content-between align-items-center bg-transparent">
                <div>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                </div>
                <small>已售出 {{ Math.floor(Math.random() * 150) }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ProductPage',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      product: {
        category: '',
        content: '',
        description: '',
        id: '',
        imageUrl: '',
        imagesUrl: [],
        is_enabled: 1,
        origin_price: 0,
        price: 0,
        title: '',
        unit: ''
      },
      products: [],
      quantity: 1,
      random: 0,
      isLoading: false,
      followList: JSON.parse(localStorage.getItem('followData')) || []
    }
  },
  computed: {
    soldNums () {
      return Math.floor(Math.random() * 150)
    }
  },
  methods: {
    getProduct (id, text) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          this.product = response.data.product
          this.isLoading = false
        }
      })
      document.documentElement.scrollTop = 0
    },
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          const tempProducts = []
          while (tempProducts.length < 5) {
            const idx = Math.floor(Math.random() * response.data.products.length)
            tempProducts.push(response.data.products[idx])
            response.data.products.splice(idx, 1)
          }
          this.products = Array.from(tempProducts)
          this.isLoading = false
        }
      })
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
    },
    changePage () {
      if (this.product.category === '寵物周邊') {
        this.$router.push('/user/products')
      } else if (this.product.category === '24H褓母 ‧ 住宿') {
        this.$router.push('/user/boarding')
      } else if (this.product.category === '社交 ‧ 安親') {
        this.$router.push('/user/daycare')
      } else if (this.product.category === '純淨‧ 沐浴') {
        this.$router.push('/user/spa')
      } else if (this.product.category === '溫水 ‧ 游泳') {
        this.$router.push('/user/swimming')
      }
    },
    getRandom (x) {
      return Math.floor(Math.random() * x)
    },
    addFollow (id) {
      const followIdx = this.followList.indexOf(id)
      if (followIdx === -1) {
        this.followList.push(id)
        this.emitter.emit('message:push', { message: '已加入收藏', status: 'success' })
      } else {
        this.followList.splice(followIdx, 1)
        this.emitter.emit('message:push', { message: '已取消收藏', status: 'danger' })
      }
      setTimeout(() => {
        this.isLoading = false
      }, 500)
      localStorage.setItem('followData', JSON.stringify(this.followList))
    },
    goBack () {
      this.$router.back()
    }
  },
  // 相同頁面下不同參數，強制重新渲染頁面
  watch: {
    '$route.params' (newVal, oldVal) {
      if (oldVal !== newVal) {
        this.getProduct(newVal.productId)
        this.getProducts()
      }
    }
  },
  async mounted () {
    await this.getProduct(this.$route.params.productId)
    await this.getProducts()
  }
}
</script>

<style scoped>
.productPage {
  margin-top: 100px;
}
</style>
