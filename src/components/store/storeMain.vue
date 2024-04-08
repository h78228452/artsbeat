<template>
        <div class="mainRight">
            <storeMainTopNav></storeMainTopNav>
            <storeCard></storeCard>
        </div>
</template>

<script>
import storeMainTopNav from './storeMain/storeMainTopNav.vue'
import storeCard from './storeMain/storeCard.vue'
export default {
    name:'storeMain',
    components:{storeMainTopNav,storeCard}
}
</script>

<style>
    /*   main right */
.mainRight{
    width: 100%;
    padding: 50px 200px 50px 100px;
}


@media (max-width : 414px) {

   

    
    .mainRight{
        padding: 0;
    }
    
}
</style>