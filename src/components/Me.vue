<template>
    <div>
        <div class="header">
<<<<<<< HEAD
            <div class="h-left" @click="btnback('page')">
                <img src="../images/back.png" alt />
            </div>
            <div class="h-center">
                <h1 class="h-tit">我的国美</h1>
            </div>
            <div class="h-right">
                <img src="../images/slh.png" alt />
            </div>
        </div>
        <div class="center">
            <div>
                <img src="../images/shopdefault.jpg" alt class="toux" />
            </div>
            <a href>登录/注册</a>
            <div class="right">
                <img src="../images/re-03.gif" alt class="gift" />
                <img src="../images/re-04.png" alt class="qipao" />
            </div>
        </div>
        <div class="main">
            <div class="first-box">
                <ul>
                    <li>
                        <img src="../images/daifukuai.png" alt />
                        <p>待付款</p>
                    </li>
                    <li>
                        <img src="../images/daishouhuo.png" alt />
                        <p>待收货</p>
                    </li>
                    <li>
                        <img src="../images/daipingjia.png" alt />
                        <p>待评价</p>
                    </li>
                    <li>
                        <img src="../images/tuihou.png" alt />
                        <p>退款/售后</p>
                    </li>
                    <li class="special">
                        <img src="../images/dingdan.png" alt />
                        <p>全部订单</p>
                        <p style="transform: scale(0.8); color: #999999;">查看电子发票</p>
                    </li>
                </ul>
            </div>
            <div class="first-box second">
                <ul>
                    <li>
                        <img src="../images/gmb.png" alt />
                        <p>国美币余额</p>
                    </li>
                    <li>
                        <img src="../images/youhuiquan.png" alt />
                        <p>优惠券</p>
                    </li>
                    <li>
                        <img src="../images/meidou.png" alt />
                        <p>美豆</p>
                    </li>
                    <li>
                        <img src="../images/meitongka.png" alt />
                        <p>美通卡</p>
                    </li>
                    <li class="special">
                        <img src="../images/qianbao.png" alt />
                        <p>我的钱包</p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 猜你喜欢 -->
        <div class="maylike">
            <div class="maylike-title">
                <img src="../images/arrow-up.png" alt="" class="arrow">
                <span class="text1">你可能喜欢</span>
            </div>
=======
            我的国美
>>>>>>> 3f01950716fb72e67ffc3661c29dbc74335653e8
        </div>
    </div>
</template>

<script>

export default {}

</script>

<style scoped>
<<<<<<< HEAD
.header {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    background-color: #fff;
}
.h-tit {
    display: inline-block;
    line-height: 100%;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    font-weight: normal;
    margin: 14px auto;
}
.h-left {
    width: 10%;
}
.h-center {
    width: 80%;
    height: 100%;
}
.h-right {
    width: 10%;
}
.center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 4.57rem 1.8rem 0.57rem 0.5rem;
    background: url("../images/mebg.png");
    /* background-repeat: no-repeat; */
}
.toux {
    width: 4.1rem;
    height: 4.1rem;
    border: 0.03rem solid #fff;
    border-radius: 4.2rem;
    margin-left: 18px;
    margin-top: -50px;
}
.center a {
    margin-left: -70px;
    margin-top: -64px;
    text-align: left;
    font-weight: 700;
    font-size: 20px;
    color: #fff;
    text-decoration: none;
}
.right {
    margin-top: -126px;
}
.gift {
    height: 40px;
    width: 45px;
}
.qipao {
    height: 25px;
    width: 25px;
}
.main {
    background-color: #f2f2f2;
}
.first-box {
    width: 100%;
    height: 110px;
}
.first-box ul {
    display: flex;
    width: 100%;
    height: 100%;
    list-style: none;
}
.first-box ul li {
    width: 20%;
    background-color: #fff;
    text-align: center;
}
.first-box ul li img {
    width: 35px;
    margin-top: 20px;
    margin-bottom: 10px;
}
.first-box ul li p {
    color: #666666;
    font-size: 12px;
}
.first-box ul .special {
    background-color: #fcfcfc;
    border-left: 1px solid #eeeeee;
}
.second{
    margin-top: 15px;
}
.maylike-title{
    height: 50px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.arrow{
    height: 15px;
    width: 15px;
    margin-right: 5px;
    margin-top: 5px;
}
.text1{
    color: #999;
    font-size: 13px;
    margin-top:3px;
}
.text1::after{
    content: '';
    display: block;
    border-bottom: 1px solid red;
    margin-top: -.14rem;
}
=======

>>>>>>> 3f01950716fb72e67ffc3661c29dbc74335653e8
</style>