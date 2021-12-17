<template>
  <Navbar/>
  <Banner/>
  <div class="home mt-5">
    <Loading v-model:active="isLoading"/>
    <div class="container">
      <section>
        <div class="d-flex justify-content-center">
          <h1 class="fs-3 fw-bold">「綿綿寵物旅館」簡單來說：</h1>
        </div>
        <div class="card-group mt-5">
          <div class="card border-0">
            <div class="px-5">
              <img src="https://upload.cc/i1/2021/11/22/epfbaw.jpg" height="250" class="card-img-top" alt="碳纖維車身">
            </div>
            <div class="card-body animated">
              <h3 class="card-title text-center fw-bold">教育理念</h3>
              <p class="card-text mt-3">尊重寵物個性，適性發展，狗狗享自由社交空間，貓咪享獨立玩樂空間，以安全為前提，寵物愛玩什麼玩什麼</p>
            </div>
          </div>
          <div class="card border-0">
            <div class="px-5">
              <img src="https://upload.cc/i1/2021/11/22/hVS83U.jpg" height="250" class="card-img-top" alt="低風阻係數輪胎">
            </div>
            <div class="card-body animated">
              <h3 class="card-title text-center fw-bold">24H 褓母照顧</h3>
              <p class="card-text mt-3">24 小時專業褓母駐館照顧，褓母個別觀察寵物身心理需求，給予每隻寵物個別化、最適切的空間、照顧和作息安排</p>
            </div>
          </div>
          <div class="card border-0">
            <div class="px-5">
              <img src="https://upload.cc/i1/2021/11/22/75Mchj.jpg" height="250" class="card-img-top" alt="完善的後勤團隊">
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
                  <img src="https://upload.cc/i1/2021/12/10/SutRyh.jpg" width="180" height="174" alt="優惠碼">
                </div>
                <div class="col-md-8 d-flex align-items-center">
                  <div class="card-body">
                    <h5 class="card-title fw-bold">領取優惠碼</h5>
                    <p class="card-text mt-3">12/31前結帳時輸入，優惠碼 <span class="text-strong">綿綿</span> 可享 8 折優惠，時間有限要買要快!</p>
                    <div class="d-flex justify-content-end">
                      <a href="#/user/products" class="btn btn-dark btn-hover rounded-0">查看更多</a>
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
                    <p class="card-text mt-3">12/31前結帳時輸入，優惠碼 <span class="text-strong">綿綿</span> 可享 8 折優惠，時間有限要買要快!</p>
                    <div class="d-flex justify-content-end">
                      <a href="#/user/products" class="btn btn-dark btn-hover rounded-0">查看更多</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 d-flex justify-content-center">
                  <img src="https://upload.cc/i1/2021/12/10/SutRyh.jpg" width="180" height="174" alt="商品">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section_2 ">
        <div class="container">
          <div class="section_title">
            <h2>
              精選好文
            </h2>
          </div>
          <div class="blog">
            <div class="blog_item">
              <div class="blog_pic">
                <a target="_blank" href="https://pets.ettoday.net/news/2142169">
                  <img src="https://upload.cc/i1/2021/12/10/No9aH3.jpg" height="250" class="card-img-top" alt="寵物窩">
                </a>
              </div>
              <div class="blog_txt">
                <h3 class="blog_txt_title">寵物窩「一個用到底」埋健康危機！</h3>
                <p class="blog_txt_des">
                  貓狗床窩要定期清潔，更要記得定期更換
                </p>
              </div>
            </div>
            <div class="blog_item">
              <div class="blog_pic">
                <a target="_blank" href="https://www.abibpet.com/blog/%E3%80%90%E4%B8%BB%E4%BA%BA%E4%B8%8D%E5%8F%AF%E4%B8%8D%E7%9F%A5%EF%BC%8F%E7%8B%97%E7%8B%97%E8%88%94%E8%88%94%E8%88%94-%E6%83%B3%E8%A6%81%E5%91%8A%E8%A8%B4%E4%BD%A0%E4%BB%80%E9%BA%BC%E4%BA%8B%E5%97%8E%E3%80%91">
                  <img src="https://upload.cc/i1/2021/12/10/2z1dBc.jpg" height="250" class="card-img-top" alt="舔舔舔">
                </a>
              </div>
              <div class="blog_txt">
                <h3 class="blog_txt_title">主人不可不知</h3>
                <p class="blog_txt_des">
                  毛孩舔舔舔，有代表什麼意思呢？
                </p>
              </div>
            </div>
            <div class="blog_item">
              <div class="blog_pic">
                <a target="_blank" href="https://www.businessweekly.com.tw/style/blog/8524">
                  <img src="https://upload.cc/i1/2021/12/10/q5VXxG.jpg" height="250" class="card-img-top" alt="訓練">
                </a>
              </div>
              <div class="blog_txt">
                <h3 class="blog_txt_title">教你訓練狗狗</h3>
                <p class="blog_txt_des">
                  關鍵在於主人的教導方法喔！
                </p>
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

<style lang="scss" scoped>
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
.section {
  padding: 90px 20px 140px;
  @media only screen and (max-width: 600px) {
    padding: 40px 12px 100px;
  }
  &_2 {
    margin-top:50px;
  }
  &_title {
    margin: 0 auto 40px;
    text-align: center;
    @media only screen and (max-width: 600px) {
      margin: 0 auto 30px;
    }
    & h2 {
      font-size: 2.25rem;
      font-weight: 600;
      & span {
        @media only screen and (max-width: 768px) {
          display: block;
          text-align: left;
        }
      }
      @media only screen and (max-width: 576px) {
        font-size: 26px;
      }
    }
  }
}
.blog {
  display: flex;
  flex-wrap: wrap;
  &_item {
    width: 30%;
    margin: 0 5% 0 0;
    &:last-child {
      margin: 0;
    }
    @media only screen and (max-width: 600px) {
      width: 100%;
      margin: 0 0 50px 0;
      &:last-child {
        margin: 0 0 20px 0;
      }
    }
  }
  &_pic {
    position: relative;
    z-index: 1;
    margin-bottom: 40px;
    @media only screen and (max-width: 600px) {
      margin-bottom: 15px;
    }
    & img {
      border-radius: 2px;
      transition: all 0.3s;
    }
    &:hover img {
      transform: scale(0.9, 0.9);
      transition: all 0.5s ease 0s;
    }
    &:after {
      content: '';
      background-color: #a9caaf;
      width: 0%;
      height: 0%;
      position: absolute;
      bottom: 50%;
      right: 50%;
      z-index: -1;
      transition: all 0.5s ease 0s;
      border-radius: 2px;
    }
    &:hover:after {
      bottom: 0px;
      right: 0px;
      width: 100%;
      height: 100%;
      transition: all 0.5s ease 0s;
    }
  }
  &_txt {
    &_title {
      font-size: 2.25rem;
      font-weight: 600;
      margin-bottom: 15px;
      @media only screen and (max-width: 992px) {
        font-size: 24px;
      }
      @media only screen and (max-width: 600px) {
        font-size: 22px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
