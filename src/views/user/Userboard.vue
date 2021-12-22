<template>
  <Navbar/>
  <div class="products">
    <div class="container">
      <!-- 優惠碼 -->
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
      <div class="row mt-4">
        <div class="col-12 mb-4">
          <div class="row d-flex justify-content-between align-items-end">
            <!-- 選單 -->
            <h1 class="title">綿綿產品</h1>
            <div class="service-container">
              <router-link to='products' class="serviceBox">
                <img src="https://upload.cc/i1/2021/12/10/6d0Gxb.png" alt="">
                <h3>預約按這裡</h3>
              </router-link>
              <router-link to='boarding' class="serviceBox">
                <img src="https://upload.cc/i1/2021/12/10/CmpNFI.png" alt="">
                <h3>24H褓母 ‧ 住宿</h3>
              </router-link>
              <router-link to="daycare" class="serviceBox">
                <img src="https://upload.cc/i1/2021/12/10/n5bUHD.png" alt="">
                <h3>社交 ‧ 安親</h3>
              </router-link>
              <router-link to='spa' class="serviceBox">
                <img src="https://upload.cc/i1/2021/12/10/JvQPr1.png" alt="">
                <h3>純淨‧ 沐浴</h3>
              </router-link>
              <router-link to='swimming' class="serviceBox">
                <img src="https://upload.cc/i1/2021/12/10/HXudeC.png" alt="">
                <h3>溫水 ‧ 游泳</h3>
              </router-link>
            </div>
            <div class="row">
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
