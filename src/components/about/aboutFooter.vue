<template>
  <footer>
        <div class="footer-left">
            <p>地址 : ___________________________________</p>
            <p>電話 : (04)132-4567</p>
        </div>
        <div class="footer-right">
            <a href="">
                <i class="fa-brands fa-facebook"></i><p>FaceBook</p>
            </a>
            <a href="">
                <i class="fa-brands fa-instagram"></i><p>Instagram</p>
            </a>
            <a href="">
                <i class="fa-brands fa-line"></i><p>Line</p>
            </a>
            <a href="">
                <i class="fa-solid fa-envelope"></i><p>E-mail</p>
            </a>
        </div>
    </footer>
</template>

<script>
export default {
    name:'aboutFooter'
}
</script>

<style>
    /* ----- footer ----- */
footer{
    background-color: #42210b;
    overflow: hidden;
    padding: 50px 0 20px;
    margin-top: 20px;
}
.footer-left{
    float: left;
    padding-left: 300px;
}
.footer-left p {
    color: #ac571f;
    font-style: 20px;
    font-weight: bold;
    padding-bottom: 20px;
}
.footer-right{
    float: right;
    padding-right: 350px;
}
.footer-right a{
    text-decoration: none;
    display: flex;
    margin-bottom: 10px;
    color: #ac571f;
}
.footer-right a:hover{
    color: #fff;
}
.footer-right p{
    font-style: 20px;
    padding-left: 10px;
}


/* ------ 414px ----- */
@media (max-width : 414px) {
   
   
    /*  ----- footer ----- */
    .footer-left{
        padding-left: 20px;
    }
    .footer-right{
        float: left;
        padding-right: 0;
        padding-left: 10px;
       display: flex;
    }
    .footer-right a{
        margin-left: 15px;
    }
}
</style>