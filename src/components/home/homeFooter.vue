<template>
  <footer>
        <div class="footerMain">
            <a href="https://goo.gl/maps/AdAnsJcXrtD6PuMWA" target="_blank">地址:這裡有地圖!!</a>
            <ul>
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-facebook-messenger"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    name:'homeFooter'
}
</script>

<style scoped>
    /* ----------頁尾---------- */
footer {
    background-color: #42210b;
    overflow: hidden;
    line-height: 50px;
}

.footerMain {
    display: flex;
    width: 1100px;
    margin: 0 auto;
    justify-content: space-between;
}

.footerMain a {
    text-decoration: none;
    color: #eab25d;
    font-weight: bold;
    letter-spacing: 10px;
    border-bottom: 1px dashed #eab25d;
    height: 37px;
}

.footerMain a:hover {
    color: #fff;
    border-bottom: 1px dashed #fff;
}

.footerMain ul {
    display: flex;
    justify-content: space-between;
}

.footerMain i {
    color: #eab25d;
    margin-right: 20px;
    font-size: 20px;
}

.footerMain li:hover i {
    color: #fff;
}


@media (max-width:414px) {

    html,
    body {
        width: 100%;
    }

    

    
    /* ----- footer ----- */
    .footerMain{
        width: 100%;
    }
    .footerMain a{
        margin-left: 10px;
    }
}

</style>