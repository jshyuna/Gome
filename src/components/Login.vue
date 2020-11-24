<template>
    <div>
        <div class="header">
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
                <img src="../images/wangjiaer.jpg" alt class="toux" />
            </div>
            <a href>启东王嘉尔</a>
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
                        <i>0.00</i>
                        <p>国美币余额</p>
                    </li>
                    <li>
                        <i>0</i>
                        <p>优惠券</p>
                    </li>
                    <li>
                        <i>0</i>
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
            <div class="first-box second">
                <ul class="third">
                    <li>
                        <img
                            src="//app.gomein.net.cn/plus/images/ucenter/huiyuanbu.png?v=2017092001"
                            alt
                        />
                        <p>会员俱乐部</p>
                    </li>
                    <li>
                        <img
                            src="//app.gomein.net.cn/plus/images/openMembershipCard/viphuiyuanka.png?v=2017092000"
                            alt
                        />
                        <p>我的会员卡</p>
                    </li>
                    <li>
                        <img
                            src="//app.gomein.net.cn/plus/images/ucenter/shoucang.png?v=2017092001"
                            alt
                        />
                        <p>我的收藏</p>
                    </li>
                    <li>
                        <img src="//app.gomein.net.cn/plus/images/ucenter/fapiaozhushou.png" alt />
                        <p>发票助手</p>
                    </li>
                    <li>
                        <img
                            src="//app.gomein.net.cn/plus/images/ucenter/yijian.png?v=2017092001"
                            alt
                        />
                        <p>服务规则</p>
                    </li>
                    <li>
                        <img
                            src="//app.gomein.net.cn/plus/images/ucenter/shouhuo.png?v=2017092001"
                            alt
                        />
                        <p>收货地址</p>
                    </li>
                    <li>
                        <img src="//app.gomein.net.cn/plus/images/ucenter/service_gift_pkg.png" alt />
                        <p>服务礼包</p>
                    </li>
                </ul>
            </div>
            <div class="my_share_module">
                <h3 class="vip-module-title">我的分享活动</h3>
                <div class="share-main">
                    <p class="pt">
                        <img src="../images/pg.png" alt class="pg"/>拼团
                    </p>
                    <p class="yh">
                        好友拼单享优惠
                        <img src="../images/next.png" alt class="pd" />
                    </p>
                </div>
            </div>
        </div>
        <!-- 猜你喜欢 -->
        <div class="maylike">
            <div class="maylike-title">
                <img src="../images/arrow-up.png" alt class="arrow" />
                <span class="text1">你可能喜欢</span>
            </div>
              <div class="guesslike-con">
                <ul class="guesslike-list">
                    <li class="guesslike-item">
                        <div class="shop-tp">
                            <img src="//gfs17.gomein.net.cn/T1O7A_BvJv1RCvBVdK" alt />
                        </div>

                        <div class="guesslike-content">
                            <div class="info-box">
                                <div class="shop-name">
                                    <div class="shop-name-cont">
                                        <img src="//gfs14.gomein.net.cn/T1tLKbBCZT1RCvBVdK.jpg" alt />
                                        <p>仕伟手机专营店</p>
                                    </div>
                                </div>
                                <p
                                    class="xiangqing"
                                >vivo Y81s 刘海全面屏 3GB+32GB/64G 全网通4G 八核 6.22英寸 双卡双待 智能手机(磨砂黑 官方标配)</p>
                                <div class="price-box">
                                    <p class="price">
                                        ¥
                                        <strong class="price2">878</strong>
                                        .00
                                    </p>
                                   
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="guesslike-item">
                        <div class="shop-tp">
                            <img src="//gfs17.gomein.net.cn/T1vLbbBXh_1RCvBVdK" alt />
                        </div>

                        <div class="guesslike-content">
                            <div class="info-box">
                                <div class="shop-name">
                                    <div class="shop-name-cont">
                                        <img src="//gfs14.gomein.net.cn/T1tLKbBCZT1RCvBVdK.jpg" alt />
                                        <p>仕伟手机专营店</p>
                                    </div>
                                </div>
                                <p
                                    class="xiangqing"
                                >华为（HUAWEI）畅玩8A 全网通4G 3G+32G/64G 全面屏手机 双卡双待 智能手机(极光蓝 官方标配)</p>
                                <div class="price-box">
                                    <p class="price">
                                        ¥
                                        <strong class="price2">848</strong>
                                        .00
                                    </p>
                                   
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="guesslike-item">
                        <div class="shop-tp">
                            <img src="//gfs17.gomein.net.cn/T1OFYsBjCv1RCvBVdK" alt />
                        </div>

                        <div class="guesslike-content">
                            <div class="info-box">
                                <div class="shop-name">
                                    <div class="shop-name-cont">
                                        <img
                                            src="//img10.gomein.net.cn/image/bbcimg/2015/6/5/279/787/1433486837186.jpg"
                                            alt
                                        />
                                        <p>斑马龙配件专营店</p>
                                    </div>
                                </div>
                                <p
                                    class="xiangqing"
                                >VIVO X50全屏钢化膜X27防爆玻璃膜步步高IQOONEO3手机保护膜X23高清贴膜(黑色-2片装 NEX标准版)</p>
                                <div class="price-box">
                                    <p class="price">
                                        ¥
                                        <strong class="price2">19</strong>
                                        .80
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="guesslike-item">
                        <div class="shop-tp">
                            <img src="//gfs17.gomein.net.cn/T18RhjB5d_1RCvBVdK" alt />
                        </div>

                        <div class="guesslike-content">
                            <div class="info-box">
                                <div class="shop-name">
                                    <div class="shop-name-cont">
                                        <img
                                            src="//img10.gomein.net.cn/image/bbcimg/2015/6/5/279/787/1433486837186.jpg"
                                            alt
                                        />
                                        <p>斑马龙配件专营店</p>
                                    </div>
                                </div>
                                <p
                                    class="xiangqing"
                                >VIVOX27pro手机壳麋鹿布纹步步高x27pro保护套防摔全包X27PRO硅胶轻薄个性男女后盖(灰色)</p>
                                <div class="price-box">
                                    <p class="price">
                                        ¥
                                        <strong class="price2">26</strong>
                                        .00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="guesslike-item">
                        <div class="shop-tp">
                            <img src="//gfs17.gomein.net.cn/T1FAC_B__T1RCvBVdK" alt />
                        </div>

                        <div class="guesslike-content">
                            <div class="info-box">
                                <div class="shop-name">
                                    <div class="shop-name-cont">
                                        <img src="//gfs14.gomein.net.cn/T1tLKbBCZT1RCvBVdK.jpg" alt />
                                        <p>仕伟手机专营店</p>
                                    </div>
                                </div>
                                <p
                                    class="xiangqing"
                                >Huawei/华为 G9 Plus 全网通4G/移动4G 八核 5.5英寸 3+32G 双卡 智能手机(金色 官方标配)</p>
                                <div class="price-box">
                                    <p class="price">
                                        ¥
                                        <strong class="price2">748</strong>
                                        .00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="guesslike-item">
                        <div class="shop-tp">
                            <img src="//gfs17.gomein.net.cn/T1cdWsBXJT1RCvBVdK" alt />
                        </div>

                        <div class="guesslike-content">
                            <div class="info-box">
                                <div class="shop-name">
                                    <div class="shop-name-cont">
                                        <img
                                            src="//img10.gomein.net.cn/image/bbcimg/2015/6/5/279/787/1433486837186.jpg"
                                            alt
                                        />
                                        <p>斑马龙配件专营店</p>
                                    </div>
                                </div>
                                <p
                                    class="xiangqing"
                                >VIVOX27pro手机壳麋鹿布纹步步高x27pro保护套防摔全包X27PRO硅胶轻薄个性男女后盖(灰色)</p>
                                <div class="price-box">
                                    <p class="price">
                                        ¥
                                        <strong class="price2">26</strong>
                                        .00
                                    </p>

                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        btnback(a) {
            this.$router.push({
                path: "/",
            });
        },
    },
};
</script>

<style scoped>
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
    /* font-weight: 700; */
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
}
.first-box ul {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #fff;
    margin-bottom: 20px;
    list-style: none;
}
.first-box ul li {
    width: 25%;
    padding: 3% 0;
    text-align: center;
}
.third li {
    border-right: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
}
.first-box ul li img {
    width: 35px;
    margin-top: 20px;
    margin-bottom: 10px;
}
.first-box ul li p {
    color: #666666;
    font-size: 13px;
}
.second i {
    display: block;
    font-size: 20px;
    color: #666666;
    padding: 22px;
}

.first-box ul .special {
    background-color: #fcfcfc;
    border-left: 1px solid #eeeeee;
}
.second {
    margin-top: 15px;
}
.third {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.maylike-title {
   padding:  4% ;
    margin-top: 10px;
   text-align: center;
   background: rgba(242,242,242,1);
   z-index: 5;
}
.arrow {
    height: 15px;
    width: 15px;
    margin-right: 5px;
    margin-top: 5px;
}
.text1 {
    color: #999;
    font-size: 13px;
    margin-top: 3px;
}

.my_share_module {
    background: white;
}
.vip-module-title {
    font-size: 16px;
    color: #262c32;
    padding: 2% 2%;
    font-weight: 500;
}
.share-main{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
}
.pg{
    width: 30%;
    height: 30%;
    margin-right: 15px;
   
}
.pd{
    height: 12px;
    width: 12px;
}
.yh{
    font-size: 13px;
    color: #999;
}
.pt{
    display: flex;
    align-items: center;
}
.maylike{
    background: rgb(242,242,242);
}
.guesslike-con{
    background: rgb(242,242,242);
}
.guesslike-item img {
    height: 193px;
    width: 193px;
}
.info-box {
    padding: 6px 0px 10px;
    background: #fff;
}
.shop-name {
    /* display: flex;
  justify-content: space-between; */
    font-size: 14px;
    color: #7a7f85;
}
.shop-name-cont img {
    height: 17px;
    width: 17px;
    border-radius: 50%;
    margin-right: 5px;
}
.shop-name-cont {
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-bottom: 5px;
    border-bottom: 1px dashed #dcddde;
}
.shop-tp {
    background-color: rgb(255, 255, 255);
}
.guesslike-item {
    width: 50%;
    padding: 2%;
}
.guesslike-list {
    display: flex;
    flex-wrap: wrap;
}
.xiangqing {
    font-size: 14px;
    color: #333;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: wrap;
    font-weight: 400;
    /* line-height: 16px;
    height: 32px; */
    padding: 1% 6%;
}
.price-box img {
    height: 29px;
    width: 29px;
}
.price-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12%;
    padding-left: 6%;
    padding-right: 6%;
}
.price {
    color: #f20c59;
    font-size: 18px;
    font-weight:400;
}
.price2 {
     font-weight:400;
}
</style>