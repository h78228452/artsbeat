<template>
  <div class="mainRightcard">
                <ul>
                    <li class="card1">
                        <div class="card">
                            <img src="../../../assets/news/Simg.png" alt="">
                            <h1>聯名活動</h1>
                            <p>活動時間:2050/02/30</p>
                            <div class="cardBack">
                                背面1
                            </div>
                        </div>
                    </li>                 
                </ul>
            </div>
</template>

<script>
    export default {
        name:'newsCard'
    }
</script>

<style>
    .mainRightcard li .card {
    width: 200px;
    height: 400px;
    background-color: #fff;
    text-align: center;
    padding: 25px;
    margin: 30px;
    box-shadow: lightgray 2px 2px 5px;
    transition: all 1s;
    transform-style: preserve-3d;
    perspective: 500px;
    position: relative;
    backface-visibility: hidden;
}

.lihover {
    color: #42210b;
    border-bottom: #42210b 1px solid;
}

.cardBack {
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    line-height: 400px;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    transition: all 1s;

}

.mainRightcard li:hover .card {
    transform: rotateY(180deg);
}

.cardHide {
    width: 0;
    height: 0;
    opacity: 0;
}

.mainRightcard img {
    width: 200px;
}

.mainRightcard h1 {
    margin: 10px 0;
    font-weight: bold;
    color: #42210b;
    font-size: 26px;
    padding: 20px 0;
}

.mainRightcard p {
    color: #ac571f;
    font-size: 22px;
}
@media (max-width: 414px) {
    .mainRightcard ul{
        width: 100%;
    }
    .mainRightcard li{
        width: 190px;
    }
    .mainRightcard li img{
        width: 120px;
    }
    .mainRightcard li .card{
       width: 120px;
       margin-right: 20px;
    }
    
}

</style>