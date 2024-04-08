<template>
    <article>
        <newsLeftNav></newsLeftNav>
        <newsMain></newsMain>
    </article>
</template>

<script>
import newsLeftNav from '../components/news/newsLeftNav.vue'
import newsMain from '../components/news/newsMain.vue'
export default {
    name:'News',
    components:{newsLeftNav,newsMain}
}
</script>

<style>
    /*   main ---- */
    article {
        display: flex;

    }
    @media (max-width: 414px) {
        /* ----- main ----- */
    article{
        flex-direction: column;
    }
    }
</style>