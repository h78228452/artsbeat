<template>
  <div class="mainRightnav">
                <ul v-for=" T in titleList" :key="T.id">
                    <li :class="T.id">{{T.title}}</li>
                </ul>
            </div>
</template>

<script>
import {reactive} from 'vue'
export default {
    name:'storeMainTopNav',
    setup(){
        const titleList = reactive([
            {title:'品牌A',id:'cardTitle1'},
            {title:'品牌B',id:'cardTitle2'},
            {title:'品牌C',id:'cardTitle3'},
            {title:'品牌D',id:'cardTitle4'}
            ])
        return{
            titleList
        }
    }
}
</script>

<style>
    .mainRightnav {
    width: 800px;
    height: 50px;
    margin: 0 auto;
    color: #ac571f;
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
    
    
}
.mainRightnav ul{
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.mainRightnav li{
    font-weight: bold;
}
.mainRightnav li:hover{
    color: #42210b;
    border-bottom: #42210b 1px solid;
}
.lihover{
    color: #42210b;
    border-bottom: #42210b 1px solid;
}
</style>