<template>
    <div>
        <!-- 轮播图 -->
        <div class="swiper">
            <swiper ref="mySwiper" class="swiper-item" :options="swiperOptions">
                <swiper-slide v-for="item in listSwiper" :key="item.id">
                    <img :src="item.imgUrl" alt />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <!-- 返场降价 -->
        <div class="fcjj">
            <div class="fcjj-cons">
                <a href>
                    <img src="//gfs9.gomein.net.cn/T12RJeBmJT1RCvBVdK.gif" alt />
                </a>
            </div>
        </div>
        <!-- 礼包 -->
        <div class="gift">
            <div class="gift-lift">
                <img src="//gfs5.gomein.net.cn/wireless/T1FvJmB5Cv1RCvBVdK_533_363.png" alt />
            </div>
            <div class="gift-right">
                <img src="//gfs7.gomein.net.cn/wireless/T1WoEKBsCv1RCvBVdK_533_363.png" alt />
            </div>
        </div>
        <!-- 精选补贴 -->
        <div class="subsidys">
            <div class="subsidy">
                <div class="subsidy-top">
                    <div class="subsidy-con">
                        <div class="subsidy-top-item l">
                            <!-- title -->
                            <p class="top-item-title">
                                <span class="top-item-left">真选补贴</span>
                                <span class="top-item-right">99天价保</span>
                            </p>
                            <div class="top-item-body">
                                <div class="top-item-con">
                                    <div class="top-item-img">
                                        <img
                                            src="//gfs17.gomein.net.cn/T1ifL7BQxT1RCvBVdK_260.jpg"
                                            alt
                                        />
                                    </div>
                                    <p class="top-item-price">
                                        <i>￥</i>
                                        <big>39.9</big>
                                    </p>
                                </div>
                                <div class="top-item-con">
                                    <div class="top-item-img">
                                        <img
                                            src="//gfs17.gomein.net.cn/T1T_C7BTL_1RCvBVdK_260.jpg"
                                            alt
                                        />
                                    </div>
                                    <p class="top-item-price">
                                        <i>￥</i>
                                        <big>10</big>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="subsidy-top-item">
                            <p class="top-item-title">
                                <span class="top-item-left"></span>
                                <span class="top-item-right"></span>
                            </p>
                            <div class="top-item-body">
                                <div class="top-item-con">
                                    <div class="top-item-img">
                                        <img
                                            src="//gfs17.gomein.net.cn/T1zuW7B7VT1RCvBVdK_260.jpg"
                                            alt
                                        />
                                    </div>
                                    <p class="top-item-price">
                                        <i>￥</i>
                                        <big>30</big>
                                    </p>
                                </div>
                                <div class="top-item-con">
                                    <div class="top-item-img">
                                        <img
                                            src="//gfs17.gomein.net.cn/T1iTK7B4E_1RCvBVdK_260.jpg"
                                            alt
                                        />
                                    </div>
                                    <p class="top-item-price">
                                        <i>￥</i>
                                        <big>2199</big>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="subsidy-con">
                        <div class="subsidy-con-item l">
                            <!-- title -->
                            <div class="con-item-title">
                                <span class="con-item-left">九九会员</span>
                                <span class="con-item-right">尊享折上折</span>
                            </div>
                            <div class="con-item-txt">一单回本 单单折扣</div>
                            <div class="con-item-img">
                                <img
                                    src="//gfs5.gomein.net.cn/wireless/T1yDE7Bgxv1RCvBVdK_355_160.jpg"
                                    alt
                                />
                            </div>
                        </div>
                        <div class="subsidy-con-item">
                            <!-- title -->
                            <div class="con-item-title">
                                <span class="con-item-left">国美直播</span>
                                <span class="con-item-right">边买边看</span>
                            </div>
                            <div class="con-item-txt">11.11聚惠来袭</div>
                            <div class="con-item-img">
                                <img
                                    src="//gfs8.gomein.net.cn/wireless/T1xDE7B7xv1RCvBVdK_355_180.jpg"
                                    alt
                                />
                            </div>
                        </div>
                    </div>
                    <div class="subsidy-con">
                        <div class="subsidy-bot-item l">
                            <!-- title -->
                            <div class="bot-item-title">
                                <div class="bot-item-left">国美秒杀</div>
                                <div class="bot-item-right djs">
                                    <div class="cc">16点场</div>
                                    <div class="qjsq">
                                        <span class="hour">00</span>
                                        <i>:</i>
                                        <span class="min">00</span>
                                        <i>:</i>
                                        <span class="sec">00</span>
                                    </div>
                                </div>
                            </div>
                            <div class="bot-item-body">
                                <div class="bot-item-con">
                                    <div class="bot-item-img">
                                        <img
                                            src="//gfs17.gomein.net.cn/T1MHCXB_ZT1RCvBVdK_400.jpg"
                                            alt
                                        />
                                    </div>
                                    <p class="bot-item-price">
                                        <i>￥</i>
                                        <big>699</big>
                                        <del class="bot-item-price-del">
                                            <i>￥</i>
                                            <big>799</big>
                                        </del>
                                    </p>
                                </div>
                                <div class="bot-item-con">
                                    <div class="bot-item-img">
                                        <img
                                            src="//gfs17.gomein.net.cn/T1QPhTBsKv1RCvBVdK_400.jpg"
                                            alt
                                        />
                                    </div>
                                    <p class="bot-item-price">
                                        <i>￥</i>
                                        <big>799</big>
                                        <del class="bot-item-price-del">
                                            <i>￥</i>
                                            <big>899</big>
                                        </del>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="subsidy-bot-item">
                            <div class="con-item-title">
                                <span class="con-item-left">国美超市</span>
                                <span class="con-item-right">好物甄选</span>
                            </div>
                            <div class="bot-item-txt">11.11特惠低至5折</div>
                            <div class="con-item-img">
                                <img
                                    src="//gfs5.gomein.net.cn/wireless/T1A_D7BvYT1RCvBVdK_355_160.jpg"
                                    alt
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="subsidy-bot">
                    <div class="subsidy-bot-left">
                        <img
                            src="https://js.gomein.net.cn/ssr/statics/images/toutiao.f5eb335.png"
                            alt
                        />
                    </div>
                    <div class="subsidy-bot-right">
                        <div class="subsidy-bot-cons">
                            <div class="subsidy-bot-con">
                                <div class="subsidy-bot-it">
                                    <a href>
                                        <span class="bot-item-le">国美黄金</span>
                                        <span class="bot-item-ri">投资金条 优惠购金</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 图标 -->
        <div class="gg">
            <div class="gg-cons">
                <a href>
                    <div class="gg-img">
                        <img
                            src="//gfs6.gomein.net.cn/wireless/T1VYZ7BQYT1RCvBVdK_1124_132.png"
                            alt
                        />
                    </div>
                </a>
            </div>
        </div>
        <!-- 返场好货 -->
        <div class="fchh">
            <!-- 上 -->
            <div class="fchh-top">
                <div class="fchh-top-item">
                    <img src="//gfs7.gomein.net.cn/wireless/T1LsZ7BjV_1RCvBVdK_562_225.png" alt />
                </div>
                <div class="fchh-top-item">
                    <img src="//gfs8.gomein.net.cn/wireless/T1fBW7BTAv1RCvBVdK_562_225.png" alt />
                </div>
            </div>
            <!-- 下 -->
            <div class="fchh-bot">
                <div class="fchh-bot-cons">
                    <div class="fchh-bot-con">
                        <div class="fchh-bot-item" v-for="item in fchhList1" :key="item.id">
                            <a href>
                                <img :src="item.img" alt />
                            </a>
                        </div>
                    </div>
                    <div class="fchh-bot-con">
                        <div class="fchh-bot-item" v-for="item in fchhList2" :key="item.id">
                            <a href>
                                <img :src="item.img" alt />
                            </a>
                        </div>
                    </div>
                    <div class="fchh-bot-con">
                        <div class="fchh-bot-item" v-for="item in fchhList3" :key="item.id">
                            <a href>
                                <img :src="item.img" alt />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 懒加载部分 -->
        <div class="lazy">
            <div class="lazy-cons">
                <div class="lazy-top">
                    <!-- 懒加载 头部分 -->
                    <div class="lazy-top-cons">
                        <div class="lazy-top-item" v-for="item in lazyTopList" :key="item.id">
                            <a href>
                                <div class="lazy-top-item-title">{{item.title}}</div>
                                <div class="lazy-top-item-subtitle">{{item.subtitle}}</div>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- 懒加载 底部分 -->
                <div class="lazy-bot">
                    <div class="lazy-bot-left">
                        <div class="lazy-bot-left-cons">
                            <div
                                class="lazy-bot-left-item"
                                v-for="item in lazyLeftList"
                                :key="item.id"
                            >
                                <a href class="lazy-bot-left-item-con">
                                    <div class="lazy-bot-left-item-img">
                                        <img :src="item.imgUrl" alt />
                                    </div>
                                    <div class="lazy-bot-left-item-site">
                                        <div class="lazy-bot-left-item-site-con">
                                            <img :src="item.LogoImgUrl" alt />
                                            <span
                                                class="lazy-bot-left-item-site-name"
                                            >{{item.siteName}}</span>
                                        </div>
                                    </div>
                                    <div class="lazy-bot-left-item-info">
                                        <p class="lazy-bot-left-item-desc">
                                            <span class="lazy-bot-left-item-tag">
                                                <span>{{item.tag}}</span>
                                            </span>
                                            <span class="lazy-bot-left-item-txt">{{item.txt}}</span>
                                        </p>
                                    </div>
                                </a>
                                <div class="lazy-bot-left-item-other">
                                    <div class="lazy-bot-left-item-other-list">
                                        <span
                                            class="lazy-bot-left-item-other-tag"
                                        >{{item.otherPrice}}</span>
                                    </div>
                                    <div class="lazy-bot-left-item-other-price">
                                        <div class="item-other-price">
                                            <i>￥</i>
                                            <big>{{item.price}}</big>
                                        </div>
                                        <div class="alike">
                                            <a href>找相似</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lazy-bot-right">
                        <div class="lazy-bot-right-cons">
                            <div
                                class="lazy-bot-right-item"
                                v-for="item in lazyLeftRight"
                                :key="item.id"
                            >
                                <a href class="lazy-bot-right-item-con">
                                    <div class="lazy-bot-right-item-img">
                                        <img :src="item.imgUrl" alt />
                                    </div>
                                    <div class="lazy-bot-right-item-site">
                                        <div class="lazy-bot-right-item-site-con">
                                            <img :src="item.LogoImgUrl" alt />
                                            <span
                                                class="lazy-bot-right-item-site-name"
                                            >{{item.siteName}}</span>
                                        </div>
                                    </div>
                                    <div class="lazy-bot-right-item-info">
                                        <p class="lazy-bot-right-item-desc">
                                            <span class="lazy-bot-right-item-tag">
                                                <span>{{item.tag}}</span>
                                            </span>
                                            <span class="lazy-bot-right-item-txt">{{item.txt}}</span>
                                        </p>
                                    </div>
                                </a>
                                <div class="lazy-bot-right-item-other">
                                    <div class="lazy-bot-right-item-other-list">
                                        <span
                                            class="lazy-bot-right-item-other-tag"
                                        >{{item.otherPrice}}</span>
                                    </div>
                                    <div class="lazy-bot-right-item-other-price">
                                        <div class="item-other-price">
                                            <i>￥</i>
                                            <big>{{item.price}}</big>
                                        </div>
                                        <div class="alike">
                                            <a href>找相似</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "carrousel",
    data() {
        return {
            // 轮播图
            listSwiper: [],
            // 返场好货 1
            fchhList1: [],
            // 返场好货 2
            fchhList2: [],
            // 返场好货 3
            fchhList3: [],
            // 懒加载 头部分
            lazyTopList: [],
            // 懒加载 底 左部分
            lazyLeftList: [],
            // 懒加载 底 右部分
            lazyLeftRight: [],
            swiperOptions: {
                pagination: {
                    el: ".swiper-pagination",
                },
                autoplay: true,
                loop: true,
                // Some Swiper option/callback...
            },
        };
    },
    created() {
        // 轮播图
        var that = this;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8080/data/PageJx.json");
        xhr.send();
        xhr.onload = function () {
            that.listSwiper = JSON.parse(xhr.response).listSwiper;
            // console.log(that.listSwiper);
        };
        // 返场好货 1
        var that = this;
        var xhr1 = new XMLHttpRequest();
        xhr1.open("GET", "http://localhost:8080/data/PageJx.json");
        xhr1.send();
        xhr1.onload = function () {
            that.fchhList1 = JSON.parse(xhr1.response).fchhList1;
            // console.log(that.fchhList1);
        };
        // 返场好货 2
        var that = this;
        var xhr2 = new XMLHttpRequest();
        xhr2.open("GET", "http://localhost:8080/data/PageJx.json");
        xhr2.send();
        xhr2.onload = function () {
            that.fchhList2 = JSON.parse(xhr2.response).fchhList2;
            // console.log(that.fchhList2);
        };
        // 返场好货 3
        var that = this;
        var xhr3 = new XMLHttpRequest();
        xhr3.open("GET", "http://localhost:8080/data/PageJx.json");
        xhr3.send();
        xhr3.onload = function () {
            that.fchhList3 = JSON.parse(xhr3.response).fchhList3;
            // console.log(that.fchhList3);
        };
        // 懒加载 头部分
        var that = this;
        var xhr4 = new XMLHttpRequest();
        xhr4.open("GET", "http://localhost:8080/data/PageJx.json");
        xhr4.send();
        xhr4.onload = function () {
            that.lazyTopList = JSON.parse(xhr4.response).lazyTopList;
            // console.log(that.lazyTopList);
        };
        // 懒加载 底 左部分
        var that = this;
        var xhr5 = new XMLHttpRequest();
        xhr5.open("GET", "http://localhost:8080/data/PageJx.json");
        xhr5.send();
        xhr5.onload = function () {
            that.lazyLeftList = JSON.parse(xhr5.response).lazyLeftList;
            // console.log(that.lazyLeftList);
        };
        // 懒加载 底 右部分
        var that = this;
        var xhr6 = new XMLHttpRequest();
        xhr6.open("GET", "http://localhost:8080/data/PageJx.json");
        xhr6.send();
        xhr6.onload = function () {
            that.lazyLeftRight = JSON.parse(xhr6.response).lazyLeftRight;
            // console.log(that.lazyLeftRight);
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
    },
    mounted() {
        // console.log("Current Swiper instance object", this.swiper);
        this.swiper.slideTo(1, 1000, false);
    },
};
</script>

<style scoped>
.swiper >>> .swiper-pagination-bullet-active {
    background-color: #fff;
}
/* 轮播图 */
.swiper {
    width: 100%;
    height: 150px;
    display: flex;
    padding: 10px;
}
.swiper-item {
    border-radius: 10px;
}
.swiper img {
    width: 100%;
}

/*  返场降价*/
.fcjj {
    width: 100%;
    padding: 0 2%;
}
.fcjj-cons {
    width: 100%;
}
.fcjj-cons img {
    width: 100%;
}
/* 礼包 */
.gift {
    width: 100%;
    display: flex;
    padding: 6px 12px;
    flex-direction: row;
}
.gift img {
    width: 100%;
}
.gift-lift {
    width: 50%;
}
.gift-right {
    width: 50%;
}
/* 精选补贴 */
.subsidys {
    padding: 0 10px 10px;
}
.subsidy {
    width: 100%;
    border-radius: 10px;
    background-color: #fff;
}
.subsidy-top {
    width: 100%;
}
.subsidy-con {
    display: flex;
    width: 100%;
    /* height:200px; */
    border-bottom: 1px solid #ebeced;
}
.subsidy-top-item,
.subsidy-con-item,
.subsidy-bot-item {
    width: 50%;
    margin: 1px;
    padding: 10px;
}
.l {
    border-right: 1px solid #ebeced;
}
/* titli */
.top-item-title {
    width: 100%;
    padding-bottom: 6px;
}
.con-item-title {
    display: flex;
    width: 100%;
    padding-bottom: 6px;
}
.top-item-left {
    font-size: 18px;
    font-weight: 600;
    padding-right: 10px;
}
.top-item-right {
    font-size: 14px;
    color: #d91a1a;
}
.con-item-left {
    display: flex;
    font-size: 18px;
    font-weight: 600;
    padding-right: 6px;
}
.con-item-right {
    width: 45%;
    color: white;
    text-align: center;
    align-items: center;
    font-size: 12px;
    height: 50%;
    display: inline-block;
    border-radius: 6px;
    background-color: #ff4603;
}
.bot-item-title {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;

    padding-bottom: 6px;
}
.bot-item-right {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    font-size: 10px;
    border-radius: 5px;
    border: 1px solid #ff0069;
}
.cc {
    display: inline-block;
    font-size: 10px;
    color: white;
    background-color: #ff0069;
}
.qjsq {
    font-size: 10px;
    color: #ff0069;
}

.bot-item-left {
    display: flex;
    font-size: 16px;
    font-weight: 600;
    padding-right: 2px;
}
.con-item-txt {
    font-size: 14px;
    padding-bottom: 6px;
    color: #a8805e;
}
.bot-item-txt {
    font-size: 14px;
    padding-bottom: 6px;
    color: #21daa5;
}
.top-item-body,
.bot-item-body {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.top-item-con,
.bot-item-con,
.bot-item-con {
    width: 50%;
}

.top-item-img,
.con-item-img,
.bot-item-img {
    width: 100%;
}
.top-item-img img,
.con-item-img img,
.bot-item-img img {
    width: 95%;
}

.top-item-price,
.bot-item-price {
    width: 100%;
    color: #f20c59;
    font-size: 12px;
    font-weight: 600;
    text-align: center;
}
.bot-item-price-del {
    display: inline-block;
    color: #999;
    font-size: 12px;
    font-weight: 600;
    text-align: center;
}

.subsidy-bot {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 12px;
}
.subsidy-bot-left {
    width: 25%;
    padding: 0 6px;
}
.subsidy-bot-left img {
    width: 90%;
}
.subsidy-bot-right {
    width: 75%;
    padding: 0 6px;
    border-left: 1px solid #ccc;
}
.subsidy-bot-con {
    width: 100%;
    font-size: 12px;
    padding: 0 4px;
}
.subsidy-bot-it {
    width: 100%;
}
.subsidy-bot-it > a {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;
}
.bot-item-le {
    color: #f20c59;
    background-color: #ffdce7;
}
.bot-item-ri {
    color: #333;
    padding-left: 6px;
}

/* 返场好货 */
/* 图标 */
.gg {
    width: 100%;
    /* background-color: #21daa5; */
    padding: 0 2%;
}
.gg-cons {
    width: 100%;
    /* background-color: #999; */
}

.gg-img {
    width: 100%;
}
.gg-img img {
    width: 100%;
}
.fchh {
    width: 100%;
    padding: 0 2%;
    display: flex;
    flex-direction: column;
}
/* 上 */
.fchh-top {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.fchh-top-item {
    width: 50%;
}
.fchh-top-item img {
    width: 100%;
}
/* 下 */
.fchh-bot {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.fchh-bot-cons,
.fchh-bot-con {
    width: 100%;
}
.fchh-bot-con {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.fchh-bot-item {
    width: 25%;
}
.fchh-bot-item img {
    width: 100%;
}

/*  懒加载部分 */
.lazy {
    width: 100%;
    padding: 10px 2%;
}
.lazy-cons， .lazy-top,
.lazy-top-cons {
    width: 100%;
}
.lazy-top-cons {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: auto;
}
.lazy-top-item {
    text-align: center;
    flex-shrink: 0;
    padding: 8px 16px;
}
.lazy-top-item a {
    background-color: #21daa5;
}
.lazy-top-item-title {
    color: #262c32;
    padding: 0px 0px 3px;
}
.lazy-top-item-subtitle {
    color: #999;
    font-size: 12px;
}

.lazy-bot {
    width: 100%;
    display: flex;
    padding: 2px 2%;
}

.lazy-bot-left,
.lazy-bot-right {
    width: 50%;
    padding: 3px;
}
.lazy-bot-left-cons,
.lazy-bot-right-cons {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.lazy-bot-left-item,
.lazy-bot-right-item {
    width: 100%;
    border-radius: 6px;
    background-color: #fff;
    margin: 3px 0;
}

.lazy-bot-left-item a,
.lazy-bot-right-item a {
    width: 100%;
}

.lazy-bot-left-item-img,
.lazy-bot-right-item-img {
    width: 100%;
}
.lazy-bot-left-item-img img,
.lazy-bot-right-item-img img {
    width: 100%;
    border-radius: 6px;
}
.lazy-bot-left-item-site,
.lazy-bot-right-item-site {
    width: 100%;
    padding: 0 10px;
}
.lazy-bot-left-item-site-con,
.lazy-bot-right-item-site-con {
    width: 100%;
    display: flex;
    padding: 8px 0;
    align-items: center;
    border-bottom: 1px dashed #999;
}
.lazy-bot-left-item-site-con img,
.lazy-bot-right-item-site-con img {
    width: 10%;
    border-radius: 50%;
}
.lazy-bot-left-item-site-name,
.lazy-bot-right-item-site-name {
    color: #7a7f85;
    font-size: 13px;
    padding: 0px 0px 0px 4px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.lazy-bot-left-item-info,
.lazy-bot-right-item-info {
    width: 100%;
    padding: 4px 10px;
    padding-bottom: none;
}
.lazy-bot-left-item-desc,
.lazy-bot-right-item-desc {
    width: 100%;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: wrap;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-size: 12px;
}
.lazy-bot-left-item-tag,
.lazy-bot-right-item-tag {
    display: inline-block;
    background-color: #f20c59;
    text-align: center;
    color: white;
    border-radius: 4px;
    padding: 0px 2px;
}
.lazy-bot-left-item-txt,
.lazy-bot-right-item-txt {
    color: #333;
    padding-left: 4px;
}
.lazy-bot-left-item-other,
.lazy-bot-right-item-other {
    width: 100%;
    padding: 0 10px 10px;
    /* background-color: #21daa5; */
}

.lazy-bot-left-item-other-list,
.lazy-bot-right-item-other-list {
    width: 100%;
    padding: 4px 0;
    font-size: 12px;
    color: #f20c59;
}
.lazy-bot-left-item-other-tag,
.lazy-bot-right-item-other-tag {
    border-radius: 2px;
    border: 1px solid #f20c59;
    background-color: #fff;
}
.lazy-bot-left-item-other-price,
.lazy-bot-right-item-other-price {
    width: 100%;
    display: flex;
    font-size: 12px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 4px;
}
.item-other-price {
    display: inline-block;
    color: #f20c59;
    font-weight: 600;
}

.item-other-price big {
    font-size: 16px;
}
.alike {
    font-weight: 400;
    padding: 0 4px;
    border: 1px solid #ccc;
    border-radius: 10px;
}
.alike > a {
    color: #666;
}
</style>