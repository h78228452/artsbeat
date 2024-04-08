<template>
  <div class="mainRight">
            <newsMainTopNav></newsMainTopNav>
            <newsCard></newsCard>
        </div>
</template>

<script>
    import newsMainTopNav from './newsMain/newsMainTopNav.vue'
    import newsCard from './newsMain/newsCard.vue'
    export default {
        name:'newsMain',
        components:{newsMainTopNav,newsCard}
    }
</script>

<style>
/*   main right */
.mainRight {
    width: 100%;
    padding: 50px 200px 50px 100px;
}


.mainRightcard ul {
    width: 1000px;
    height: 600px;
    margin: 0 auto;
    overflow: scroll;
    overflow-x: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    /* transition: all 1s; */

}

::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 5px;
}


@media (max-width : 414px) {

    
    .mainRight{
        padding: 0;
    }
    .mainRightnav{
        width: 100%;
        font-size: 18px;
    }
    .mainRightnav ul {
        justify-content: space-around;
    }

}
</style>