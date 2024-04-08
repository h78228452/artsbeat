<template>
  <header>
        <div class="top">
            <router-link to="/"><img src="../assets/home/LOGO.png" alt=""></router-link>
            <div class="topNav">
                <ul>
                    <li>
                        <router-link to="/news"><i class="fa-solid fa-mug-saucer"></i>優惠活動</router-link>
                    </li>
                    <li>
                        <router-link to="/store"><i class="fa-solid fa-store"></i>商品</router-link>
                    </li>
                    <li>
                        <router-link to="/about"><i class="fa-solid fa-user"></i>關於我們</router-link>
                    </li>
                </ul>
            </div>
            <i class="fa-sharp fa-solid fa-bars"></i>
        </div>
    </header>
</template>

<script>
export default {

//功能1 topNav懸浮效果

//功能2 414px以下 將上方選項變為伸縮列表

}
</script>

<style scoped>
    /* --------------頁首----------------- */
header {
    background-color: #ac571f;
    opacity: 0.95;
}

.top {
    width: 1100px;
    margin: 0 auto;
    overflow: hidden;
}

.top img {
    float: left;
    padding-top: 5px;
}

.topNav {
    float: right;
}

.topNav ul {
    display: flex;
}

.topNav li {
    margin-left: 20px;
}

.topNav a {
    text-decoration: none;
    line-height: 50px;
    color: #42210b;
    font-size: 20px;
    font-weight:900;
}

.topNav li:hover a {
    color: #fff;
}

.topNav .fa-solid {
    margin-right: 10px;
}

.topScroll {
    position: fixed;
    opacity: 0;
    top: -50px;
    width: 100%;
    z-index: 2;
}

.top .fa-bars {
    display: none;
}

@media (max-width: 414px) {
    /* ----- top ----- */
    header {
        height: 52px;
        width: 100%;
        position: fixed;
        border-bottom: #42210b 1px solid;
    }

    .top {
        width: 100%;
        overflow: hidden;
    }
    .top img{
        margin-left: 10px;
        margin-top: 8px;
        width: 100px;
    }

    .top a {
        padding-left: 10px;
    }

    .topNav {
        display: none;
        position: fixed;
        right: -135px;
        top: 53px;
        background-color: #ac571f;
        padding-right: 20px;
    }

    .topNav ul {
        flex-direction: column;
    }

    .topNav li {
        flex-shrink: 0;
    }

    .top .fa-bars {
        display: block;
        font-size: 36px;
        float: right;
        margin-right: 15px;
        margin-top: 10px;
    }
}
</style>
