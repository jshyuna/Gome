<template>
    <div>
        <!-- 轮播图 -->
        <div class="swiper" id="top">
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
        <!-- 子目录 -->
        <div class="classify-sub">
            <div style="display:flex;align-items:center">
                <div
                    class="classify-sub-item"
                    :class="[subName=='pagejx-qb'?'active':'']"
                    @click="subName='pagejx-qb'"
                >
                    <a href="#">
                        <p class="sub-item-title">全部</p>
                        <p class="sub-item-body">猜你喜欢</p>
                    </a>
                </div>
                <div
                    class="classify-sub-item"
                    :class="[subName=='pagejx-yy'?'active':'']"
                    @click="subName='pagejx-yy'"
                >
                    <a href="#">
                        <p class="sub-item-title">影音盛宴</p>
                        <p class="sub-item-body">崭新视界</p>
                    </a>
                </div>
                <div
                    class="classify-sub-item"
                    :class="[subName=='pagejx-dp'?'active':'']"
                    @click="subName='pagejx-dp'"
                >
                    <a href="#">
                        <p class="sub-item-title">大牌手机</p>
                        <p class="sub-item-body">畅享5G</p>
                    </a>
                </div>
                <div
                    class="classify-sub-item"
                    :class="[subName=='pagejx-gm'?'active':'']"
                    @click="subName='pagejx-gm'"
                >
                    <a href="#">
                        <p class="sub-item-title">国美超市</p>
                        <p class="sub-item-body">低价好物</p>
                    </a>
                </div>
                <div
                    class="classify-sub-item"
                    :class="[subName=='pagejx-bk'?'active':'']"
                    @click="subName='pagejx-bk'"
                >
                    <a href="#">
                        <p class="sub-item-title">爆款大家电</p>
                        <p class="sub-item-body">真选推荐</p>
                    </a>
                </div>
                <div
                    class="classify-sub-item"
                    :class="[subName=='pagejx-jp'?'active':'']"
                    @click="subName='pagejx-jp'"
                >
                    <a href="#">
                        <p class="sub-item-title">精品小家电</p>
                        <p class="sub-item-body">发现好物</p>
                    </a>
                </div>
                <div
                    class="classify-sub-item"
                    :class="[subName=='pagejx-zn'?'active':'']"
                    @click="subName='pagejx-zn'"
                >
                    <a href="#">
                        <p class="sub-item-title">智能数码</p>
                        <p class="sub-item-body">惊喜抢购</p>
                    </a>
                </div>
            </div>
        </div>
         <div class="go-top">
            <a href="#top">
                 <img src="https://js.gomein.net.cn/ssr/statics/images/return-top.ae68c0e.png" alt="">
            </a>
        </div>
        <component :is="subName"></component>
    </div>
</template>

<script>
import PageJxQb from "../PageSub/PageJxQb.vue";
import PageJxYy from "../PageSub/PageJxYy.vue";
import PageJxDp from "../PageSub/PageJxDp.vue";
import PageJxGm from "../PageSub/PageJxGm.vue";
import PageJxBk from "../PageSub/PageJxBk.vue";
import PageJxJp from "../PageSub/PageJxJp.vue";
import PageJxZn from "../PageSub/PageJxZn.vue";
export default {
    name: "carrousel",
    data() {
        return {
            subName: "pagejx-qb",
            // 轮播图
            listSwiper: [],
            // 返场好货 1
            fchhList1: [],
            // 返场好货 2
            fchhList2: [],
            // 返场好货 3
            fchhList3: [],

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
    },
    components: {
        // 子目录
        "pagejx-qb": PageJxQb,
        "pagejx-yy": PageJxYy,
        "pagejx-dp": PageJxDp,
        "pagejx-gm": PageJxGm,
        "pagejx-bk": PageJxBk,
        "pagejx-jp": PageJxJp,
        "pagejx-zn": PageJxZn,
    },
    computed: {
        swiper() {
           
            return this.$refs.mySwiper.$swiper;
        },
    },
    mounted() {
        // console.log("Current Swiper instance object", this.swiper);
        // this.swiper.slideTo(1, 1000, false);
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
    display: flex;
    padding: 2%;
}
.swiper img {
    border-radius: 10px;
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
    padding: 0 2%;
}
.gg-cons {
    width: 100%;
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

/*  子目录 */
.classify-sub {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: auto;
    flex: 1;
}
.classify-sub::-webkit-scrollbar {
    display: none;
}

.classify-sub-item {
    width: 25%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    text-align: center;
}
.classify-sub-item > a {
    border-right: 1px solid #ebeced;
}
.sub-item-title {
    font-size: 15px;
    color: #262c32;
}

.sub-item-body {
    font-size: 12px;
    color: #999;
}

.active .sub-item-title{
    font-weight: 600;
    color: #f20c59;
}
.active .sub-item-body{
    color: #fff;
    background-color: #f20c59;
    border-radius: 10px;
    padding:0 8px;
}
.go-top img{
    width: 44px;
    height: 44px;
}
.go-top{
    position: fixed;
    right: 1px;
    bottom: 80px;
}
</style>