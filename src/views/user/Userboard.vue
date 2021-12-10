<template>
  <Navbar/>
  <div class="products">
    <div class="container">
      <!-- 優惠碼 -->
      <div class="introduce">
        <div class="text">
          <h1>12/31前輸入優惠碼 <span>心綿</span></h1>
          <p>可享全館產品、服務9 折優惠!</p>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12 mb-4">
          <div class="row d-flex justify-content-between align-items-end">
            <!-- 選單 -->
            <h1 class="title">綿綿 <span>產品</span></h1>
            <div class="service-container">
              <router-link to='products' class="serviceBox">
                <img src="https://upload.cc/i1/2021/12/10/6d0Gxb.png" alt="">
                <h3>寵物周邊</h3>
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

<style lang="scss" scope>
.introduce{
  margin-top: 80px;
  background:url(https://upload.cc/i1/2021/12/10/xGOZpD.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  text-align:center;
  padding-top: 12rem;
  padding-bottom: 8rem;
  .text{
    margin-right: 150px;
    margin-top: -40px;
  }
  h1{
    color: black;
    font-size: 4rem;
  }
  p{
    padding-top: 1rem;
    font-size: 2rem;
    color:#333;
  }
}
.title{
  display: flex;
  align-items: center;
  font-size: 2rem;
  padding:1.2rem 0;
  border-bottom: #939699;
  border-bottom-style: dotted;
  color:black;
  span{
    color:green;
    padding-left: .7rem;
  }
}
.service-container{
  display:flex;
  justify-content: space-evenly;
  padding: 20px 0;

  .serviceBox{
    text-align: center;
    img{
      height: 50px;
    }
    h3{
      font-size: 1.4rem;
      margin:1rem 0;
      color:#333;
    }
    &:hover h3{
      color:green;
    }
  }
}
</style>
