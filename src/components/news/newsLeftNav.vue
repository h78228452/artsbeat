<template>
  <div class="mainLeft">
            <ul v-for=" (n,index) in nav" :key="index">
                <li>
                    {{n}}
                </li>
                
            </ul>

        </div>
</template>

<script>
    import {reactive} from 'vue'
    export default {
        name:'newsLeftNav',
        setup(){
            const nav = reactive(['驚喜活動','優惠活動','體驗活動','免費禮物','會員活動'])

            return{
                nav,
            }
        }
    }
</script>

<style>
    /*   main left */
.mainLeft {
    width: 200px;
    margin: 50px 40px 0;
    text-align: center;
    font-size: 40px;
    color: #42210b;
    flex-shrink: 0;
}

.mainLeft li {
    margin: 20px 0;

}

.mainLeft li:nth-child(n+2):hover {
    color: #ac571f;
    border-bottom: 1px dashed #42210b;
}

.mainLeft h1 {
    font-weight: bold;
}

.mainLeft h2 {
    font-size: 30px;
}
@media (max-width: 414px) {
    .mainLeft{
        width: 100%;
        margin: 0;
        margin-top: 75px;
        margin-bottom: 20px;
    }
    .mainLeft ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .mainLeft ul li:first-child{
        margin: 0 auto;
    }
    .mainLeft ul li:nth-child(n+2) {
        display: none;
    }
    
}
</style>