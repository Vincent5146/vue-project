<template>
  <Navbar/>
  <div class="banner">
    <div class="banner-txtbox">
      <h2>綿綿寵物旅館</h2>
    </div>
  </div>
  <div class="container mt-5">
    <main class="form-signin">
      <Form v-slot="{ errors }" @submit="signIn">
        <h1 class="h2 mb-4 text-center fw-bold">登入至後台</h1>
        <label for="email" class="visually-hidden">電子信箱</label>
        <Field
          type="email" id="email" name="Email"
          :class="{ 'is-invalid': errors['Email'] }"
          class="form-control" placeholder="電子信箱"
          v-model="user.username" rules="email|required">
        </Field>
        <ErrorMessage name="Email" class="invalid-feedback"></ErrorMessage>
        <label for="password" class="visually-hidden">密碼</label>
        <Field
          type="password" id="password"
          :class="{ 'is-invalid': errors['密碼'] }" name="密碼"
          class="form-control" placeholder="密碼"
          v-model="user.password" rules="required">
        </Field>
        <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
        <div class="checkbox mb-3 ms-1">
          <label>
            <input type="checkbox" value="remember-me"> 記住我
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-dark btn-hover mb-3 rounded-0" type="submit">
          登入
        </button>
      </Form>
    </main>
  </div>
  <Footer/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Login',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
            this.$router.push('/admin/products')
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 550px);
  .form-signin {
    width: 100%;
    max-width: 340px;
    padding: 15px;
    margin: auto;
    .checkbox {
      font-weight: 400;
    }
    .form-control {
      position: relative;
      box-sizing: border-box;
      height: auto;
      padding: 10px;
      font-size: 16px;
    }
  }
}

.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
