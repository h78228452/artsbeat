<template>
  <article>
    <storeLetfNav></storeLetfNav>
    <storeMain></storeMain>
  </article>
</template>

<script>
  import storeLetfNav from '../components/store/storeLeftNav.vue'
  import storeMain from '../components/store/storeMain.vue'
  export default {
      name:'store',
      components:{storeLetfNav,storeMain}
  }
</script>

<style>
  /*   main ---- */

article{
    display: flex;
    
}
@media (max-width:414px) {
      /* ----- main ----- */
    article{
        flex-direction: column;
    }
}
</style>