<template>
  <HomeMain></HomeMain>
  <HomeFooter></HomeFooter>
</template>

<script>
import HomeMain from '../components/home/homeMain.vue'
import HomeFooter from '../components/home/homeFooter.vue'
export default {
  name:'home',
  components:{HomeMain,HomeFooter}
}
</script>
