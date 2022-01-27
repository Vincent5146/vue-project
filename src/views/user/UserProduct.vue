<template>
  <div class="productPage">
    <Loading :active="isLoading" />
    <div class="container">
      <!-- 分類 -->
      <nav
        class="mb-md-4 d-flex justify-content-center justify-content-md-start"
        aria-label="breadcrumb"
      >
        <ol class="breadcrumb">
          <li class="me-3" @click="goBack()">
            <a class="text-dark a-hover fw-bold" href="#" @click.prevent>
              <i class="fas fa-arrow-left"></i>
            </a>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/products" class="text-dark a-hover fw-bold">產品</router-link>
          </li>
          <li class="breadcrumb-item" @click="changePage">
            <a class="text-dark a-hover fw-bold" href="#" @click.prevent>{{ product.category }}</a>
          </li>
          <li class="breadcrumb-item fw-bold active" aria-current="page">
            {{ product.title }}
          </li>
        </ol>
      </nav>
      <!-- 內容 -->
      <div class="row d-flex justify-content-center">
        <div class="col-md-6 p-0 d-flex justify-content-center overflow-hidden">
          <div class="row">
            <div class="col p-0">
              <img :src="product.imageUrl" class="image img-fluid" alt="商品照片" />
            </div>
          </div>
        </div>
        <div class="col-md-5 d-flex justify-content-center align-items-center mt-5 mt-md-0">
          <div class="ps-0 ps-md-5">
            <div class="d-flex justify-content-between">
              <h4 class="text-strong fw-bold fs-5 mt-4">{{ product.category }}</h4>
              <div @click="addFollow(product.id)">
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
              <select class="fs-5 px-2 py-1" v-model.number="qty">
                <option v-for="item in numberList" :value="item.value" :key="item.value">{{ item.label }}</option>
              </select>
              <button type="button" class="btn btn btn-dark btn-hover rounded-0 ms-4" @click="addtoCart(product.id, quantity)">
                加入購物車
              </button>
            </div>
            <hr class="mt-4" />
            <h4 class="text-strong fw-bold fs-5 mt-4">購物須知</h4>
            <p class="lh-lg">
              綿綿服務類商品加入購物車後，請先來電預約時間，並告知寵物體型、個性，再進行付款，謝謝您的配合。
            </p>
            <hr class="mt-4" />
            <h4 class="text-strong fw-bold fs-5 mt-4">退換貨須知</h4>
            <p class="lh-lg">
              本館產品不適用7天鑑賞期，若商品有瑕疵請聯絡客服，將有客服人員為您服務。
            </p>
          </div>
        </div>
      </div>
      <hr class="my-5" />
      <div>
        <h3 class="text-center fw-bold mb-5">熱門產品</h3>
        <div class="row row-cols-1 row-cols-md-5 g-3">
          <div class="col" v-for="item in products" :key="item.id">
            <div class="product">
              <div class="product_img">
                <div
                  style="height: 250px; background-size: cover; background-position: center"
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                  class="text-end"
                  @click="$router.push({ path: `/product/${item.id}` })"
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
  </div>
</template>

<script>

export default {
  name: 'ProductPage',
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
      numberList: [
        {
          value: '1',
          label: '1'
        },
        {
          value: '2',
          label: '2'
        },
        {
          value: '3',
          label: '3'
        },
        {
          value: '4',
          label: '4'
        },
        {
          value: '5',
          label: '5'
        }
      ],
      qty: 1,
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
    getProduct (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          this.product = response.data.product
          this.isLoading = false
        }
      }).catch(error => {
        console.warn(error, 'error')
        this.isLoading = false
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
      }).catch(error => {
        console.warn(error, 'error')
        this.isLoading = false
      })
    },
    addtoCart (id, qty = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: this.qty
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
    },
    changePage () {
      if (this.product.category === '溫水 ‧ 游泳') {
        this.$router.push('/user/swimming')
      } else if (this.product.category === '24H褓母 ‧ 住宿') {
        this.$router.push('/user/boarding')
      } else if (this.product.category === '社交 ‧ 安親') {
        this.$router.push('/user/daycare')
      } else if (this.product.category === '純淨‧ 沐浴') {
        this.$router.push('/user/spa')
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

<style lang="scss" scoped>
.productPage {
  margin-top: 100px;
}
.image {
  height: 500px;
  @media only screen and(max-width:992px) {
    height: 400px;
  }
  @media only screen and(max-width:600px) {
    height: 300px;
  }
}
</style>
