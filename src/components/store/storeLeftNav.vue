<template>
   <div class="mainLeft">
            <ul v-for=" (T,index) in titleNav" :key="index">
                <li>
                    {{T}}
                </li>
            </ul>
        </div>
</template>

<script>
    import {reactive} from 'vue'
    export default {
        name:'storeLeftNav',
        setup(){
            const titleNav = reactive(
                ['咖啡','周邊用品','手工餐具','送禮禮盒','免費禮物']
            )
            return{
                titleNav
            }
        }
    }
</script>

<style>
    /*   main left */
.mainLeft{
    width: 200px;
    margin: 50px 40px 0;
    text-align: center;
    font-size: 40px;
    color: #42210b;
    flex-shrink: 0;
}
.mainLeft li{
    margin: 20px 0;
    
}
.mainLeft li:hover {
    color: #ac571f;
    border-bottom: 1px dashed #42210b;
}
.mainLeft h1{
    font-weight: bold;
}
.mainLeft h2{
    font-size: 30px;
}
@media (max-width:414px) {
    .mainLeft{
        width: 100%;
        margin: 0;
        margin-top: 75px;
        margin-bottom: 20px;
    }
    .mainLeft ul{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .mainLeft li{
        margin: 5px 0;
        padding: 0 10px;
    }
    .mainLeft li:last-child{
        display: none;
    }
    .mainLeft li h2{
        font-size: 22px;
        color: #42210b;
        font-weight: bold;
    }
}
</style>