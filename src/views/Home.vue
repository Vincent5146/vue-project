<template>
  <Navbar/>
  <Banner/>
  <div class="home mt-5">
    <Loading v-model:active="isLoading"/>
    <div class="container">
      <section>
        <div class="d-flex justify-content-center">
          <h1 class="fs-3 fw-bold">「心綿寵物旅館」簡單來說：</h1>
        </div>
        <div class="card-group mt-5">
          <div class="card border-0">
            <div class="px-5">
              <img src="https://images.unsplash.com/photo-1593091816440-27564545a7aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" class="card-img-top" alt="碳纖維車身">
            </div>
            <div class="card-body animated">
              <h3 class="card-title text-center fw-bold">教育理念</h3>
              <p class="card-text mt-3">尊重寵物個性，適性發展，狗狗享自由社交空間，貓咪享獨立玩樂空間，以安全為前提，寵物愛玩什麼玩什麼</p>
            </div>
          </div>
          <div class="card border-0">
            <div class="px-5">
              <img src="https://images.unsplash.com/photo-1572634236483-199f41b2e9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" class="card-img-top" alt="低風阻係數輪胎">
            </div>
            <div class="card-body animated">
              <h3 class="card-title text-center fw-bold">24H 褓母照顧</h3>
              <p class="card-text mt-3">24 小時專業褓母駐館照顧，褓母個別觀察寵物身心理需求，給予每隻寵物個別化、最適切的空間、照顧和作息安排</p>
            </div>
          </div>
          <div class="card border-0">
            <div class="px-5">
              <img src="https://images.unsplash.com/photo-1607109120350-b0adef8aa4db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" class="card-img-top" alt="完善的後勤團隊">
            </div>
            <div class="card-body animated">
              <h3 class="card-title text-center fw-bold">嚴格防疫 清潔 消毒</h3>
              <p class="card-text mt-3">寵物入館嚴格檢查疫苗紀錄，全館每天醫療級消毒，HRV 全熱交換器維持室內空氣高含氧量</p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-5 animated">
          <button type="button" class="btn btn-dark btn-lg btn-hover rounded-0"><a href="#/about" class="text-light">了解更多</a></button>
        </div>
      </section>
      <section class="mt-5">
        <div class="row">
          <div class="col-6 col-md-6 d-flex justify-content-end animated">
            <div class="card mb-3 border-0" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4 d-flex justify-content-center">
                  <img src="https://images.unsplash.com/photo-1579017919837-61418cbef18e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" width="180" alt="優惠碼">
                </div>
                <div class="col-md-8 d-flex align-items-center">
                  <div class="card-body">
                    <h5 class="card-title fw-bold">領取優惠碼</h5>
                    <p class="card-text mt-3">12/31前結帳時輸入，優惠碼 <span class="text-strong">ilovePETS</span> 可享全商品 9 折優惠，時間有限要買要快!</p>
                    <div class="d-flex justify-content-end">
                      <a href="#/products/all" class="btn btn-dark btn-hover rounded-0">查看更多</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-6 d-flex justify-content-start animated">
            <div class="card mb-3 border-0" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-8 d-flex align-items-center">
                  <div class="card-body">
                    <h5 class="card-title fw-bold">新品上市</h5>
                    <p class="card-text mt-3">快來看看本週新品，絕對讓您愛不釋手，讓您享受騎乘樂趣!</p>
                    <div class="d-flex justify-content-end">
                      <a href="#/products/all" class="btn btn-dark btn-hover rounded-0">查看更多</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 d-flex justify-content-center">
                  <img src="https://images.unsplash.com/photo-1436397543931-01c4a5162bdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" width="180" alt="商品">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <Footer/>
</template>

<script>
import $ from 'jquery'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'

export default {
  components: {
    Footer,
    Navbar,
    Banner
  },
  data () {
    return {
      isLoading: false
    }
  },
  mounted () {
    // 類似監聽 scroll 滾動位置
    $(window).scroll(function () {
      // 讀取 scroll 滾動位置
      const scrollPos = $(window).scrollTop()
      // 讀取 window 高度
      const windowHeight = $(window).height()
      // css 動畫
      $('.animated').each(function () {
        const thisPos = $(this).offset().top
        if ((windowHeight + scrollPos) >= (thisPos + 300)) {
          $(this).addClass('fadeIn')
        }
      })
    })
  }
}
</script>

<style scoped>
/* animated */
.animated{
  opacity: 0;
  transition: all 2s;
  transform: translateX(-300px);
}
.fadeIn{
  opacity: 1;
  transform: translateY(0px);
}
</style>
