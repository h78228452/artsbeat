<template>
  <div class="mainRightnav">
                <ul v-for="T in titleList" :key="T.id">
                    <li :class="T.id">{{T.navTitle}}</li>
                </ul>
            </div>
</template>

<script>
    import {reactive} from 'vue'
    export default {
        name:'newsMainTopNav',
        setup(){
            const titleList = reactive([
                {navTitle:'聯名活動',id:'cardTit1'},
                {navTitle:'親子體驗',id:'cardTit2'},
                {navTitle:'固定課程',id:'cardTit3'},
                {navTitle:'會員活動',id:'cardTit4'},
            ])

            return{
                titleList,
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
    display: flex;
    justify-content: space-between;
}

.mainRightnav li {
    font-weight: bold;
}

.mainRightnav li:hover {
    color: #42210b;
    border-bottom: #42210b 1px solid;
}

.lihover {
    color: #42210b;
    border-bottom: #42210b 1px solid;
}


</style>