<template>
  <Navbar/>
  <div class="products">
    <div class="container">
      <!-- 優惠碼 -->
      <div class="row d-flex justify-content-center align-items-center border py-3 mx-0">
        <div class="col-md-2 text-center d-none d-md-block">
          <img src="https://upload.cc/i1/2021/11/08/Lx7QYW.jpg" class="img-fluid" alt="優惠碼" width="200">
        </div>
        <div class="col-md-9 pt-4 fs-4">
          <p>12/31前輸入優惠碼 <span class="border border-dark py-1 px-2 lh-lg text-strong fw-bold">心綿</span></p>
          <p>可享全館產品、服務9 折優惠，快帶家裡的寶貝來享受吧!</p>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12 mb-4">
          <div class="row d-flex justify-content-between align-items-end">
            <!-- 選單 -->
            <div class="col-md-9 d-none d-md-block">
              <router-link to='products' class="pe-3 text-dark fs-5 fw-bold a-hover">
                <i class="fas fa-biking"></i>
                寵物周邊
              </router-link>
              <router-link to='boarding' class="pe-3 text-dark fs-5 fw-bold a-hover">
                <i class="fas fa-biking"></i>
                24H褓母 ‧ 住宿
              </router-link>
              <router-link to="daycare" class="pe-3 text-dark fs-5 fw-bold a-hover">
                <i class="fas fa-biking"></i>
                社交 ‧ 安親
              </router-link>
              <router-link to='spa' class="pe-3 text-dark fs-5 fw-bold a-hover">
                <i class="fas fa-biking"></i>
                純淨‧ 沐浴
              </router-link>
              <router-link to='swimming' class="pe-3 text-dark fs-5 fw-bold a-hover">
                <i class="fas fa-biking"></i>
                溫水 ‧ 游泳
              </router-link>
            </div>
            <div class="row">
            <!-- <div class="col-md-3">
              <div class="side-menu mb-4">
                <a class="btn btn-green d-md-none mb-2 ms-2" data-bs-toggle="collapse" href="#collapseExample" role="button"  aria-expanded="false" aria-controls="collapseExample">選擇品項 <i class="bi bi-chevron-down icon-open"></i><i class="bi bi-chevron-up icon-close"></i>
                </a>
                <div class="collapse d-md-block" id="collapseExample">
                  <ul>
                    <li @click="filterText = ''" :class="{ 'active': filterText === '' }">全部商品</li>
                    <li v-for="item in categories" :key="item" @click="filterText = item" :class="{ 'active': item === filterText }">{{ item }}</li>
                  </ul>
                </div>
              </div>
            </div> -->
          </div>
        </div>
        <RouterView/>
      </div>
    </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Products',
  components: {
    Navbar,
    Footer
  }
}
</script>
