<template>
   <article>
        <ul>
            <li>
                <div class="mainBl1">
                    <h2>新品上市</h2>
                    <p>我們的咖啡還經過精心調製，使得它在冷熱兩種溫度下都能呈現最佳口感，不管是喝在辦公室還是外出旅遊都能讓您感受到最完美的咖啡風味。
                    </p>
                    <a href="#">過去看看..</a>
                </div>
            </li>
            <li>
                <div class="mainBl2">
                    <h2>最新優惠</h2>
                    <p>限時特價！現在購買我們的咖啡，即享受高達50%的折扣優惠！品嚐香濃咖啡的同時，還能省下更多金錢，別錯過這個機會！</p>
                    <a href="#">過去看看..</a>
                </div>
            </li>
            <li>
                <div class="mainBl3">
                    <h2>美味餐點</h2>
                    <p>來份下午茶，品味美好時光。現在購買下午茶套餐，送您限定禮盒，讓您的下午時光更加精彩！</p>
                    <a href="#">過去看看..</a>
                </div>

            </li>
        </ul>
    </article>
</template>

<script>
export default {

}
</script>

<style scoped>
    /* ----------------內容--------------------- */
article {
    background-color: #f8e2bfbb;

}

article ul {
    width: 1100px;
    margin: 0 auto;
    padding-bottom: 5px;
    display: flex;
    flex-direction: column;
}

article li {
    width: 1040px;
    height: 300px;
    padding: 30px;
    box-sizing: content-box;
    margin-bottom: 20px;
}

/* main block1 */
article li:first-child {
    background-image: url(../../assets/home/coffe7-3.jpg);
    background-position: -80px 400px;


}

article .mainBl1 {

    width: 300px;
    padding: 20px;
    padding-bottom: 50px;
    background-color: rgba(255, 255, 255, .8);
    border-radius: 20px;
    margin: 15px 0px 0px 60px;
    position: relative;
}

article .mainBl1 a {
    text-decoration: none;
    color: #ac571f;
    position: absolute;
    right: 30px;
    bottom: 20px;
    font-weight: bold;
}

/* main block2 */
article li:nth-child(2) {
    background-image: url(../../assets/home/coffe5-2.jpg);
    background-position: -100px -90px;
}

article .mainBl2 {

    width: 300px;
    padding: 20px;
    padding-bottom: 50px;
    margin: -4px 0 0 630px;
    background-color: rgba(255, 255, 255, .8);
    border-radius: 20px;
    position: relative;


}

article .mainBl2 a {
    text-decoration: none;
    color: #ac571f;
    position: absolute;
    right: 30px;
    bottom: 20px;
    font-weight: bold;
}

/* main block3 */
article li:nth-child(3) {
    background-image: url(../../assets/home/banner3-2.jpg);
    background-position: right top;
    margin-bottom: 5px;

}

article .mainBl3 {
    display: block;
    width: 300px;
    padding: 20px;
    padding-bottom: 50px;
    margin: 15px 0px 0px 60px;
    background-color: rgba(255, 255, 255, .8);
    border-radius: 20px;
    position: relative;
}

article .mainBl3 a {
    text-decoration: none;
    color: #ac571f;
    position: absolute;
    right: 30px;
    bottom: 20px;
    font-weight: bold;
}

/* main block end */
article li div {
    width: 300px;
    height: 200px;
    background-color: rgba(255, 255, 255, .8);
    border-radius: 20px;
}

article li a {
    text-decoration: none;
    color: #42210b;
    line-height: 1.6;
}

article li a:hover {
    color: brown;
}

article li img {
    width: 180px;
    padding: 5px 0;
}

article li h2 {
    font-weight: bold;
    border-bottom: 1px dashed #42210b;
    font-size: 24px;
    margin-bottom: 10px;
    padding-bottom: 10px;
}

article li p {
    line-height: 1.6;
}

@media (max-width:414px) {
    /* ----- main ----- */

    article {
        padding-top: 50px;
    }

    article ul,
    article li {
        width: 100%;
    }

    article li {
        margin: 0;
        padding: 0;
    }

    article div {
        margin: 40px auto 0 !important;
        position: unset !important;
        height: 135px !important; 
    }
    article h2{
        font-size: 20px !important;
    }
    article p{
        font-size: 15px !important;
    }
    article a {
        position: unset !important;
        padding-left: 220px !important;
    }
    
}
</style>