<template>
    <div class="gouwuche">
        <div class="header" id="top">
            <div class="h-left" @click="btnback('page')">
                <img src="../images/back.png" alt />
            </div>
            <div class="h-center">
                <h1 class="h-tit">购物车</h1>
                <div class="bj">
                    <img src="../images/dw.png" alt class="dw" />
                    <span>北京市</span>
                </div>
            </div>
            <div class="h-right">
                <div class="h-edit">编辑</div>
                <img src="../images/slh.png" alt />
            </div>
        </div>
        <div class="Setup">
            <img src="../images/laba.png" alt class="laba" />
            <p>立即开通九九会员享受会员折扣</p>
            <a href>
                <i>
                    去开通
                    <img src="../images/hjt.png" alt class="hjt" />
                </i>
            </a>
        </div>
        <div class="empty">
            <img src="../images/bj_baobei.png" alt />
            <p>购物车还是空的</p>
            <div class="box1">
                <span>
                    <a href>逛逛首页</a>
                </span>
                <span>
                    <a href>秒杀</a>
                </span>
            </div>
        </div>
        
        <div class="cart-like">
            <div class="cart-title">
                <p class="line"></p>
                <span class="tuijian">
                    <i class="icon"></i>
                    为你推荐
                </span>
                <p class="line"></p>
            </div>
            <div class="guesslike-con">
                <ul class="guesslike-list">
                    <li class="guesslike-item">
                        <div class="shop-tp">
                            <img src="//gfs17.gomein.net.cn/T1jFZmBTCv1RCvBVdK" alt />
                        </div>

                        <div class="guesslike-content">
                            <div class="info-box">
                                <div class="shop-name">
                                    <div class="shop-name-cont">
                                        <img src="//gfs10.gomein.net.cn/T1kXb4BCZg1RCvBVdK.png" alt />
                                        <p>国美网店</p>
                                    </div>
                                </div>
                                <p
                                    class="xiangqing"
                                >Apple iPad Pro 平板电脑 2020年新款 11英寸 （128G Wifi版/视网膜屏/A12Z芯片/面容ID MY252CH/A）银色</p>
                                <div class="price-box">
                                    <p class="price">
                                        ¥
                                        <strong class="price2">5999</strong>
                                        .00
                                    </p>
                                    <img src="../images/chat3.png" alt />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="guesslike-item">
                        <div class="shop-tp">
                            <img src="//gfs17.gomein.net.cn/T1E9K7B7d_1RCvBVdK" alt />
                        </div>

                        <div class="guesslike-content">
                            <div class="info-box">
                                <div class="shop-name">
                                    <div class="shop-name-cont">
                                        <img src="//gfs10.gomein.net.cn/T1kXb4BCZg1RCvBVdK.png" alt />
                                        <p>国美网店</p>
                                    </div>
                                </div>
                                <p class="xiangqing">Apple iPhone 12 128G 蓝色 移动联通电信 5G手机</p>
                                <div class="price-box">
                                    <p class="price">
                                        ¥
                                        <strong class="price2">6799</strong>
                                        .00
                                    </p>
                                    <img src="../images/chat3.png" alt />
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
                                    <img src="../images/chat3.png" alt />
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
                                    <img src="../images/chat3.png" alt />
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
                                    <img src="../images/chat3.png" alt />
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
                                    <img src="../images/chat3.png" alt />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="go-top">
            <a href="#top">
                <img src="https://js.gomein.net.cn/ssr/statics/images/return-top.ae68c0e.png" alt />
            </a>
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
.gouwuche {
    background-color: rgb(243, 245, 247);
}
.header {
    /* position: relative; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* padding: 2%; */
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
    /* position: absolute; */
    left: 50%;
    top: 0;
    /* transform: translateX(-50%); */
    font-weight: normal;
    margin: 14px auto;
    color: #333;
    font-weight: 700;
}
.h-left {
    width: 33%;
}
.dw {
    height: 15px;
    width: 15px;
    margin-right: 3px;
}
.h-center {
    width: 33%;
    display: flex;
    align-items: center;
    /* height: 100%; */
}
.h-right {
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.h-edit {
    color: #333333;
    font-size: 17px;
    padding: 0px 6px 3px 0px;
}
.h-center span {
    font-size: 13px;
    color: #333;
}
.bj {
    display: flex;
    align-items: center;
}
.Setup {
    display: flex;
    padding: 2%;
    /* height: 40px; */
    background: #fff7d2;
    color: #ff8000;
    border-radius: 35px;
    font-size: 15px;
    /* margin-bottom: 5px; */
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
}
.laba {
    height: 22px;
    width: 22px;
}
.hjt {
    width: 9px;
    height: 12px;
}
.Setup a {
    text-decoration: none;
}

.Setup i {
    display: block;
    color: #ff8000;
    text-align: center;
    font-style: normal;
}
.Setup p {
    margin-left: -60px;
}
.empty {
    width: 100%;
    text-align: center;
    margin-top: calc(140rem / 75);
}

.empty img {
    width: 49px;
    height: 49px;
}

.empty p {
    color: #999;
    text-align: center;
    font-size: 15px;
    margin-bottom: 15px;
}

.box1 {
    display: flex;
    justify-content: center;
}
.empty a {
    display: block;
    color: #333333;
    width: 99px;
    height: 32px;
    background-color: rgb(243, 245, 247);
    margin-right: 15px;
    border: 1px solid #cacccf;
    border-radius: 1.24em;
    line-height: 32px;
    text-align: center;
    text-decoration: none;
}
.cart-title {
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
}
.line {
    height: 1px;
    width: 24px;
    background: -webkit-linear-gradient(left, #ff0027, #d900b4, #f0f);
}
.icon {
    display: inline-block;
    width: 19px;
    height: 19px;
    background: url(../images/like.png) no-repeat;
    background-size: 100% 100%;
    margin-right: 2px;
    margin-left: 6px;
    margin-bottom: -3px;
}
.tuijian {
    font-size: 19px;
    color: #f20c59;
    margin-right: 2px;
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
    font-size: 14px;
    font-weight: 700;
}
.price2 {
    font-size: 18px;
}
.go-top img {
    width: 44px;
    height: 44px;
}
.go-top {
    position: fixed;
    right: 1px;
    bottom: 80px;
}
</style>