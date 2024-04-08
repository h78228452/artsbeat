<template>
    <topNav></topNav>
    <router-view></router-view>
    
</template>

<script lang="ts">
import {} from 'vue'
import topNav from './components/topNav.vue'

export default {
  components:{topNav}
}


</script>

<style>
@import url('./assets/reset.css');
body {
    background-color: #f8e2bfbb;
}

</style>


