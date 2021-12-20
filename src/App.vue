<template>
  <Alert/>
  <GoTop/>
  <Router-view/>
</template>

<script>

import Alert from '@/components/AlertToastMessage.vue'
import GoTop from '@/components/GoTop.vue'

export default {
  name: 'APP',
  components: {
    Alert,
    GoTop
  }
}
</script>

<style lang="scss">
@import './assets/all.scss';
</style>
