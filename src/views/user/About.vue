<template>
  <Navbar/>
  <Banner/>
  <div class="about mt-5">
    <Loading v-model:active="isLoading"/>
    <div class="container">
      <section class="mt-lg-5">
        <div class="about">
          <div class="about_box animated">
            <div class="about_txt">
              <h2 class="about_h2 text-center">關於綿綿</h2>
              <div class="about_text">
                <p>
                <span class="fw-bold">綿綿</span> 我們希望將心綿幼兒教育精神- 親近自然、尊重、自由與愛，落實在台灣的寵物照護。
                讓貓咪狗狗享受歐洲等級的優質環境，讓飼主安心出門無負擔。
                </p>
                <p>
                  <span class="fw-bold">綿綿</span> 的寵物們都快樂、幸福、翻肚肚。
                </p>
              </div>
            </div>
            <div class="about_img">
              <img
                src="https://upload.cc/i1/2021/12/10/XSkRGC.jpg"
                alt="關於綿綿"
                width="100%"
              />
            </div>
          </div>
          <div class="about_box animated">
            <div class="about_img">
              <img
                src="https://upload.cc/i1/2021/12/10/R7UYI9.jpg"
                alt="綿綿特色"
                width="100%"
              />
            </div>
            <div class="about_txt about_txt_2">
              <h2 class="about_h2 text-center">綿綿 特色</h2>
              <div class="about_text ">
                <p>
                  我們深信每一次的服務都會讓主人放心。透過褓母細心照顧，無論是甚麼樣的毛孩，來過綿綿後都能變得煥然一新的樣子。
                </p>
                <p>
                  準備好讓家中的毛孩來享受吧！
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-5">
        <h2 class="text-center fw-bold">聯繫我們</h2>
        <div class="row mt-5">
          <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <p class="mb-4 fs-5"><span class="fw-bold">實體店面 :</span> 台北市大安區新生南路九段0號</p>
            <p class="mb-4 fs-5"><span class="fw-bold">營業時間 :</span> 周一至六早10點 ~ 晚9點，周日公休</p>
            <p class="mb-4 fs-5"><span class="fw-bold">聯絡電話 :</span> 02-24123456</p>
            <div class="mb-4">
              <a href="#" @click.prevent=""><i class="fab fa-facebook-square me-4 fs-4 text-dark a-hover"></i></a>
              <a href="#" @click.prevent=""><i class="fab fa-facebook-messenger me-4 fs-4 text-dark a-hover"></i></a>
              <a href="#" @click.prevent=""><i class="fab fa-instagram-square fs-4 text-dark a-hover"></i></a>
            </div>
          </div>
          <div class="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5059.40505069479!2d120.30325747604454!3d22.64000781749225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04f4871d07a7%3A0xccb9296f1ea5e649!2z6auY6ZuE6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1621142424227!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" width="100%" height="350"></iframe>
          </div>
        </div>
      </section>
      <section class="mt-5">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-7">
              <h2 class="text-center fw-bold mb-4">提供寶貴意見</h2>
              <Form class="row g-3 needs-validation" v-slot="{ errors }" @submit="submitFrom">
                <div class="col-md-12">
                  <label for="name" class="form-label">姓名 <small>(必填)</small></label>
                  <Field type="text" class="form-control"  name="姓名" id="name" :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" rules="required"></Field>
                  <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="col-md-12">
                  <label for="email" class="form-label">電子郵件 <small>(必填)</small></label>
                  <Field type="email" class="form-control" id="email" name="Email" :class="{ 'is-invalid': errors['Email'] }" placeholder="請輸入電子郵件" rules="email|required"></Field>
                  <ErrorMessage name="Email" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="col-md-12">
                  <label for="phone" class="form-label">電話 <small>(必填)</small></label>
                  <Field type="number" class="form-control" :class="{ 'is-invalid': errors['電話'] }" name="電話" id="phone" placeholder="請輸入電話" rules="required"></Field>
                  <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="col-md-12">
                  <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="textarea" style="height: 150px" required></textarea>
                    <label for="textarea">請輸入內容</label>
                  </div>
                  <div class="valid-feedback">
                    輸入正確
                  </div>
                </div>
                <div class="col-12 d-flex justify-content-end">
                  <button class="btn btn-dark btn-hover rounded-0" type="submit">送出</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'About',
  components: {
    Navbar,
    Banner,
    Footer
  },
  data () {
    return {
      isLoading: false
    }
  }
}
</script>

<style lang="scss">
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
