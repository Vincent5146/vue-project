<template>
  <Navbar/>
  <Banner/>
  <div class="products">
    <div class="container">
      <div class="row mt-4">
        <div class="col-12 mb-4">
          <div class="row d-flex justify-content-between align-items-end"
          style="margin: 0 5px;">
            <!-- 選單 -->
            <h1 class="title">綿綿服務</h1>
            <div class="service-container">
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
import Banner from '@/components/Banner.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Products',
  components: {
    Navbar,
    Banner,
    Footer
  }
}
</script>
