<template>
  <Navbar/>
    <RouterView/>
  <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Footer,
    Navbar
  }
}
</script>
