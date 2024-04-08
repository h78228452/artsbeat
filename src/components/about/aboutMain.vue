<template>
  <main>
        <div class="main-top">
            <div class="topBox top-Block1">
                <img src="../../assets/about/main1.jpg" alt="">
                <h2>門面照片</h2>
            </div>
            <div class="topBox top-Block2">
                <img src="../../assets/about/main2.jpg" alt="">
                <h2>餐廳場景</h2>
            </div>
            <div class="topBox top-Block3">
                <img src="../../assets/about/main3.jpg" alt="">
                <h2>手作教室</h2>
            </div>
        </div>
        <h3>手工品展示</h3>
        <div class="main-bottom">
            <img src="../../assets/about/pic1.jpg" alt="">
            <img src="../../assets/about/pic2.png" alt="">
            <img src="../../assets/about/pic3.jpg" alt="">
        </div>
    </main>
</template>

<script>
    export default {
        name:'aboutMain'
    }
</script>

<style>
     /* ----- main----- */
main{
    width: 1100px;
    margin: 0 auto;
    padding-top: 60px;
}
main .topBox{
    height: 400px;
    position: relative;
}
.main-top img{
    width: 500px;
    height: 250px;
}
.top-Block1 img, .top-Block3 img{
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 230px;
}
.top-Block1 h2, .top-Block3 h2{
    background: #fff;
    width: 300px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    position: absolute;
    bottom: 100px;
    right: 220px;
    border-radius: 10px;
    opacity: .9;
}
.top-Block2 img{
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 380px;
}
.top-Block2 h2{
    background: #fff;
    width: 300px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    position: absolute;
    bottom: 100px;
    right: 570px;
    border-radius: 10px;
    opacity: .9;
}
h3{
    color: #42210b;
    font-size: 30px;
    font-weight: bold;
    border-bottom: 1px #42210b solid;
    width: 200px;
}
.main-bottom{
    width: 800px;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
}
.main-bottom img{
    border-radius: 10px;
    width: 200px;
    height: 300px;
}

@media (max-width: 414px) {
     /* ----- main ----- */
    main{
        width: 100%;
    }
    .main-top{
        margin-top: 30px;
    }
    .main-top img{
        width: 350px;
        height: 220px;

    }
    .top-Block1 img , .top-Block3 img{
        top: 0;
        left: 30px;
    }
    .top-Block2 img{
        top: 0;
        left: 30px;
    }
    .top-Block1 h2 , .top-Block3 h2{
        bottom: 150px;
        right: 34px;
        width: 350px;
        height: 50px;
        line-height: 50px;
    }
    .top-Block2 h2{
        bottom: 140px;
        right: 34px;
        width: 350px;
        height: 50px;
        line-height: 50px;
    }
    h3{
        padding-left: 15px;
    }
    .main-bottom{
        width: 100%;
        flex-wrap: wrap;
    }
    .main-bottom img{
        width: 150px;
        height: 200px;
        padding-left: 20px;
        margin-bottom: 30px;
    }
    
}
</style>