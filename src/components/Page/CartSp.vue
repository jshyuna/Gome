<template>
    <div>
        <div class="detail">
            <!-- 轮播图 -->
            <div class="swiper-cartsp">
                <swiper ref="mySwiper" class="swiper-item" :options="swiperOptions">
                    <swiper-slide v-for="item in listSwiper" :key="item.id">
                        <img :src="item.imgUrl" alt />
                    </swiper-slide>
                </swiper>
            </div>
            <!-- 介绍 -->
            <div class="detail-wrap">
                <div class="detail-wrap-con">
                    <div class="detail-wrap-left">
                        <div class="detail-wrap-left-info">
                            <p class="detail-wrap-left-desc">
                                <span class="detail-wrap-left-tag">
                                    <span>自营</span>
                                </span>
                                <span
                                    class="detail-wrap-left-txt"
                                >Apple iPhone 12 128G 蓝色 移动联通电信 5G手机</span>
                            </p>
                        </div>
                    </div>
                    <div class="detail-wrap-right">
                        <img src="../../images/share.png" alt />
                        <span class="detail-wrap-right-txt">分享</span>
                    </div>
                </div>
                <p class="desc-text">A14仿生芯片，6.1英寸超视网膜XDR显示屏，升维大提速</p>
                <div class="price-box">
                    <span class="addprice">¥</span>
                    <span class="bigprice">6799</span>
                    <span class="smallprice">.00</span>
                </div>
                <div class="foot-moudle">
                    <div class="foot-const">
                        <span class="fq">分期</span>
                        <span class="fa">
                            查看分期付款方案
                            <img src="../../images/next.png" alt class="jt" />
                        </span>
                    </div>
                </div>
            </div>
            <!-- 规格 -->
            <div class="specification-moudle">
                <div class="specification-type">
                    <p>规格</p>
                </div>
                <div class="specification-container">
                    <div class="detail_item">
                        <div class="iconbox">
                            <img src="//gfs1.gomein.net.cn/T123bXBT_T1RCvBVdK.png?v=1" alt />
                        </div>
                        <p class="name-box">SIM卡类型</p>
                        <p class="detail-info">双卡 (nano‑SIM 卡)</p>
                    </div>
                    <div class="detail_item">
                        <div class="iconbox">
                            <img src="//gfs.gomein.net.cn/T1E3bXBgdT1RCvBVdK.png?v=1" alt />
                        </div>

                        <p class="name-box">机身内存</p>

                        <p class="detail-info">128G</p>
                    </div>
                    <div class="detail_item">
                        <div class="iconbox">
                            <img src="//gfs3.gomein.net.cn/T1dsEXB7D_1RCvBVdK.png?v=1" alt />
                        </div>

                        <p class="name-box">运行内存</p>

                        <p class="detail-info">以官网信息为准</p>
                    </div>
                    <div class="detail_item">
                        <div class="iconbox">
                            <img src="//gfs3.gomein.net.cn/T1Jq_XBjET1RCvBVdK.png?v=1" alt />
                        </div>

                        <p class="name-box">屏幕尺寸</p>

                        <p class="detail-info">6.1 英寸</p>
                    </div>
                    <div class="detail_item last">
                        <div class="iconbox">
                            <img src="//gfs.gomein.net.cn/T1yqEXByA_1RCvBVdK.png?v=1" alt />
                        </div>

                        <p class="name-box">后置摄像头</p>

                        <p class="detail-info">双摄：1200 万像素超广角及广角</p>
                    </div>
                </div>
            </div>
            <!-- 增值服务 -->
            <div class="standard-moudle">
                <div class="standard-cont">
                    <span class="standard-text">已选</span>
                    <p class="yanse">
                        <span>蓝色 128G</span>
                        <em>1个</em>
                    </p>
                    <div class="standard-img">
                        <img src="../../images/next.png" alt />
                    </div>
                </div>
                <div class="tuijian">
                    <span>推荐</span>
                    <p>增值服务</p>
                </div>
            </div>
            <!-- 地址 -->
            <div class="address-moudle">
                <div class="address-cont">
                    <span class="sz">送至</span>
                    <div class="address-cont-p">
                        <div class="address-cont-p-img">
                            <img src="../../images/dw.png" alt />
                        </div>
                        <span class="jiedao">北京市朝阳区朝外街道，</span>
                        <span class="yf">免运费</span>
                    </div>
                    <div class="address-cont-img">
                        <img src="../../images/next.png" alt class="szn" />
                    </div>
                </div>
                <div class="service_info">
                    <!-- <div class="service_info-item"> -->
                    <img src="../../images/gou.png" alt />
                    <span>七天无理由退货</span>
                    <!-- </div>
                    <div class="service_info-item">-->
                    <img src="../../images/gou.png" alt />
                    <span>正品保证</span>
                    <!-- </div>
                    <div class="service_info-item">-->
                    <img src="../../images/gou.png" alt />
                    <span>包邮</span>
                    <!-- </div> -->
                </div>
            </div>
            <!-- 换新 -->
            <div class="serve_moudle">
                <div class="serve_moudle-item info">
                    <p class="serve_moudle-p">
                        <img src="../../images/yjhx.png" alt />
                        <span class="title">以旧换新</span>
                    </p>
                    <span class="title2">以旧换新再送好礼</span>
                </div>
                <div class="serve_moudle-item">
                    <p class="serve_moudle-p">
                        <img src="../../images/zzfw.png" alt />
                        <span class="title">可选增值服务</span>
                    </p>
                    <span class="title2">为商品保价护航</span>
                </div>
            </div>
            <!-- 评价 -->
            <div class="evaluate_moudle">
                <div class="evaluate_top">
                    <p class="submit_element">评价(2000+)</p>
                    <div class="good_comment">
                        好评度：
                        <em>99%</em>
                        <img src="../../images/next.png" alt />
                    </div>
                </div>
                <div class="evaluate_list">
                    <div class="message_top">
                        <img src="../../images/shopdefault.jpg" class="yhm" alt />
                        <span class="user_name">洋***k</span>

                        <img src="//gfs11.gomein.net.cn/T1BqbgBCLT1RCvBVdK.png" class="pjx" alt />

                        <div class="star">
                            <img src="../../images/star.png" alt />
                            <img src="../../images/star.png" alt />
                            <img src="../../images/star.png" alt />
                            <img src="../../images/star.png" alt />
                            <img src="../../images/star.png" alt />
                        </div>
                    </div>
                    <p class="pj">手机现货，非常漂亮，手感很好，服务员帮忙导了旧机里的数据，服务态度很好，有朋友需要还来国美买</p>
                    <p class="nc">黑色 128G</p>
                </div>
                <div class="evaluate_top">
                    <p>有图评价(19)</p>
                    <img src="../../images/next.png" alt />
                </div>
                <div class="comment-wrap">
                    <div class="comment-wrap-item" v-for="item in cartSpList" :key="item.id">
                        <img :src="item.imgUrl" alt />
                        <div class="c-content">
                            <span class="user-name">{{item.name}}</span>
                            <img :src="item.img" alt />
                        </div>
                        <span class="pic-num">1张</span>
                    </div>
                </div>
                <div class="serve_dibu">
                    <div class="serve_dibu-item pj">
                        <img src="../../images/pj.png" alt />
                        <span>全部评价(2000+)</span>
                    </div>
                    <div class="serve_dibu-item">
                        <img src="../../images/zx.png" alt />
                        <span>购买咨询(0)</span>
                    </div>
                </div>
            </div>
            <!-- 店铺 -->
            <div class="shop-store">
                <div class="shop-img">
                    <img src="//gfs10.gomein.net.cn/T1kXb4BCZg1RCvBVdK.png" alt />
                </div>
                <div class="shop-store-con">
                    <div class="shop-info">
                        <p class="p1">国美体验店（北京国美富贵园店）</p>
                        <p class="p2">
                            <span>进店逛逛</span>
                            <img src="../../images/next.png" alt />
                        </p>
                    </div>
                    <div class="arrow-icon">
                        <img src="../../images/dw.png" alt />
                        东城区
                    </div>
                </div>
            </div>
            <!-- 全程导购 -->
            <div class="goodDetailGuideModule">
                <div class="v-center">
                    <div class="left">全程导购</div>
                    <div class="right">
                        <span>查看更多</span>
                        <img src="../../images/next.png" alt />
                    </div>
                </div>
                <div class="guide-list">
                    <div class="guide-item" v-for="item in guideList" :key="item.id">
                        <div class="guide-tx">
                            <img :src="item.imgUrl" alt />
                        </div>
                        <div class="guide-info">
                            <div class="guide-left">
                                <span class="name">{{item.name}}</span>
                                <span class="font22">{{item.dg}}</span>
                                <div class="font20">
                                    <span>已服务</span>
                                    <span>{{item.ds}}</span>
                                    <span>单</span>
                                </div>
                            </div>
                            <div class="guide-right">
                                <img src="../../images/zixun.png" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 猜你喜欢 -->
            <div class="youlikebox">
                <p class="guess-title">猜你喜欢</p>
                <div class="guess-side">
                    <div class="guess-side-item"  v-for="item in likeList" :key="item.id">
                        <div class="guess-side-item-sub"  v-for="itemList in item.subLikeList" :key="itemList.id">
                            <div class="item-sub-img">
                                <img :src="itemList.imgUrl" alt />
                            </div>
                            <div class="item-sub-name">{{itemList.name}}</div>
                            <div class="item-sub-price">{{itemList.price}}</div>
                            <div class="item-sub-dw">
                                <img :src="itemList.img" alt />
                                <span>{{itemList.dw}}</span>
                            </div>
                        </div>
                    </div>
                     <!-- <div class="swiper-pagination" slot="pagination"></div> -->
                </div>

            </div>
            <!-- 商品.规格.售后 -->
            <!-- </div class="description"> -->
                <div class="description-con">
                    
                    <div class="description-item" :class="[cartsName=='carts-js'?'active1':'']" @click="cartsName='carts-js'">
                        <p>商品介绍</p>
                    </div>
                    <div class="description-item" :class="[cartsName=='carts-gg'?'active1':'']" @click="cartsName='carts-gg'">
                        <p>规格参数</p>
                    </div>
                    <div class="description-item b" :class="[cartsName=='carts-sh'?'active1':'']" @click="cartsName='carts-sh'">
                        <p>包装售后</p>
                    </div>

                </div>
            <!-- <div> -->
            <component :is="cartsName"></component>
        </div>
    </div>
</template>

<script>
import CartsJs from  "../PageSub/CartsJs.vue"
import CartsGg from  "../PageSub/CartsGg.vue"
import CartsSh from  "../PageSub/CartsSh.vue"

export default {
    name: "carrousel",
    data() {
        return {
             cartsName:'carts-js',

            // 轮播图
            listSwiper: [],
            // 商品页
            cartSpList: [],
            // 导购
            guideList: [],
            // 猜你喜欢
            likeList:[],
            // 猜你喜欢 子列
            subLikeList:[],

            swiperOptions: {
                pagination: {
                    el: ".swiper-pagination",
                },
                autoplay: false,
                loop: true,
                // Some Swiper option/callback...
            },
        };
    },
    components: {
        'carts-js':CartsJs,
        'carts-gg':CartsGg,
        'carts-sh':CartsSh
    },
    created() {
        // 轮播图
        var that = this;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8080/data/CartXq.json");
        xhr.send();
        xhr.onload = function () {
            that.listSwiper = JSON.parse(xhr.response).listSwiper;
            // console.log(that.listSwiper);
        };
        // 商品页
        var that = this;
        var xhr1 = new XMLHttpRequest();
        xhr1.open("GET", "http://localhost:8080/data/CartXq.json");
        xhr1.send();
        xhr1.onload = function () {
            that.cartSpList = JSON.parse(xhr1.response).cartSpList;
        };
        // 导购
        var that = this;
        var xhr2 = new XMLHttpRequest();
        xhr2.open("GET", "http://localhost:8080/data/CartXq.json");
        xhr2.send();
        xhr2.onload = function () {
            that.guideList = JSON.parse(xhr2.response).guideList;
        };
       // 猜你喜欢
        var that = this;
        var xhr3 = new XMLHttpRequest();
        xhr3.open("GET", "http://localhost:8080/data/CartXq.json");
        xhr3.send();
        xhr3.onload = function () {
            that.likeList = JSON.parse(xhr3.response).likeList;
            //  console.log(that.likeList);
        };
         // 猜你喜欢 子列
        var that = this;
        var xhr4 = new XMLHttpRequest();
        xhr4.open("GET", "http://localhost:8080/data/CartXq.json");
        xhr4.send();
        xhr4.onload = function () {
            that.subLikeList = JSON.parse(xhr4.response).subLikeList;
            //  console.log(that.subLikeList);
        };
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
/* .swiper >>> .swiper-pagination-bullet-active {
    background-color: #fff;
} */
.detail {
    width: 100%;
    /* padding: 0 2%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
}
/* 轮播图 */
.swiper-cartsp {
    width: 100%;
    display: flex;
    /* padding:0; */
}
.swiper-cartsp img {
    border-radius: 10px;
    width: 100%;
}
/* 介绍 */
.detail-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2% 0;
    background-color: #fff;
}
.detail-wrap-con {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0 2%;
    /* align-items: center; */
}
.detail-wrap-left {
    width: 85%;
    border-right: 1px solid #e6e6e6;
}

.detail-wrap-left-info {
    width: 100%;
    padding: 4px 0;
    padding-bottom: none;
}
.detail-wrap-left-desc {
    width: 100%;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: wrap;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.detail-wrap-left-tag {
    display: inline-block;
    background-color: #f20c59;
    text-align: center;
    color: white;
    font-size: 12px;
    border-radius: 4px;
    padding: 0px 2px;
}
.detail-wrap-left-txt {
    font-size: 16px;
    color: #333;
    padding-left: 4px;
}

.detail-wrap-right {
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.detail-wrap-right img {
    width: 30%;
}
.detail-wrap-right-txt {
    font-size: 14px;
}
.desc-text {
    font-size: 12px;
    color: #f20c59;
    padding: 0 2%;
    /* padding-bottom: 6px; */
}
.price-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 2%;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    /* justify-content: center; */
}
.price-box span {
    padding-right: 4px;
}
.addprice {
    font-size: 17px;
    color: #f20c59;
    font-weight: 700;
    padding-top: 3px;
}
.bigprice {
    font-size: 24px;
    color: #f20c59;
    font-weight: 700;
}
.smallprice {
    font-size: 17px;
    color: #f20c59;
    padding-top: 3px;
}

.foot-const {
    display: flex;
    padding: 2%;
    justify-content: space-between;
    align-items: center;
}
.foot-moudle {
    background-color: #fff;
}
.fq {
    font-size: 13px;
    color: #a2a4a6;
}
.fa {
    font-size: 12px;
    color: #333;
}
.jt {
    width: 10%;
}
/* 规格 */
.specification-moudle {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 10px 0px;
    padding: 2% 0;
    background: white;
    align-items: center;
}
.specification-type {
    width: 10%;
    text-align: center;
    color: #a2a4a6;
    font-size: 13px;
}

.specification-container {
    width: 90%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: start;
    overflow: auto;
}
.detail_item {
    width: 25%;
    padding: 0 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    /* text-overflow: ellipsis; */
    white-space: nowrap;
    flex-shrink: 0;
    text-align: center;
    border-right: 1px solid rgb(230, 230, 230);
}
.iconbox img {
    width: 40%;
    display: block;
    margin: 0 auto;
}
.name-box {
    font-size: 12px;
}
.detail-info {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 10px;
    color: #919599;
}
/* 增值 */
.standard-moudle {
    width: 100%;
    padding: 2%;
    background-color: white;
}
.standard-cont {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.standard-text {
    width: 10%;
    text-align: left;
    font-size: 13px;
    color: #a2a4a6;
    /* padding-right: 10px; */
}
.yanse {
    width: 85%;
    font-size: 13px;
}
.yanse em {
    font-style: normal;
    padding-left: 3px;
}
.standard-img {
    width: 5%;
}
.standard-cont img {
    width: 85%;
}
.tuijian {
    width: 100%;
    font-size: 13px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.tuijian span {
    width: 10%;
    color: #a2a4a6;
    text-align: left;
    /* padding-right: 3px; */
}
.tuijian p {
    color: #197fe7;
}
/* 地址 */
.address-moudle {
    width: 100%;
    margin: 2% 0;
    padding: 2% 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
}
.address-cont {
    width: 100%;
    display: flex;
    padding: 2%;
    font-size: 13px;
    flex-direction: row;
    justify-content: space-between;
}
.sz {
    width: 10%;
    color: #a2a4a6;
    text-align: left;
}
.address-cont-p {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.address-cont-p-img {
    width: 5%;
}
.address-cont-p-img img {
    width: 80%;
}
.jiedao {
    color: #333;
}
.yf {
    color: #f20c59;
}
.address-cont-img {
    width: 5%;
}

.service_info {
    width: 100%;
    padding: 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background: #fafafa;
}
.service_info img {
    width: 16px;
    padding-right: 4px;
}
.service_info span {
    font-size: 13px;
    padding-right: 10px;
    color: #a2a4a6;
}
/* 换新 */
.serve_moudle {
    width: 100%;
    padding: 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: white;
}
.serve_moudle-item {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.serve_moudle-item > span {
    font-size: 12px;
    color: #a2a4a6;
}
.serve_moudle-p {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.serve_moudle-p > span {
    font-size: 13px;
    color: #333;
}
.serve_moudle-p > img {
    width: 10%;
    padding-right: 6px;
}
.info {
    border-right: 1px solid #e6e6e6;
}

/* 评价 */
.evaluate_moudle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
    margin: 2% 0;
    padding: 2%;
}
.evaluate_top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 13px;
    color: #333;
    padding: 10px 0;
}
.good_comment {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    color: #7a7f85;
}
.good_comment em {
    font-style: normal;
    font-size: 13px;
    color: #f20c59;
    padding-right: 6px;
}
.good_comment img {
    width: 18px;
}

.evaluate_list {
    width: 100%;
    padding-bottom: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #e6e6e6;
}
.message_top {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2% 0;
}
.message_top > .yhm {
    width: 28px;
}
.message_top > .user_name {
    padding: 0 6px;
}
.message_top > .pjx {
    width: 15px;
}
.pj {
    padding-top: 2%;
    padding-right: 1%;
    font-size: 14px;
    color: #262c32;
}
.nc {
    padding-top: 2%;
    font-size: 12px;
    color: #919599;
}
.comment-wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: auto;
}
.comment-wrap-item {
    position: relative;
    width: 25%;
    padding: 2% 0;
    text-align: center;
    background-color: #fff;
    flex-shrink: 0;
}
.comment-wrap-item img {
    width: 95%;
}
.c-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    justify-content: center;
    /* text-align: center; */
}
.user-name {
    font-size: 13px;
    color: #262c32;
    padding-right: 6px;
}
.c-content > img {
    width: 15px;
}
.pic-num {
    font-size: 12px;
    position: absolute;
    top: 70%;
    left: 10px;
    padding: 0 2%;
    background-color: #999;
}
.serve_dibu {
    width: 100%;
    display: flex;
    padding-top: 2%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #e6e6e6;
}
.serve_dibu-item {
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2% 0;
    /* text-align: center; */
}
.serve_dibu-item.pj {
    border-right: 1px solid #e6e6e6;
}
.serve_dibu-item > img {
    width: 17px;
}
.serve_dibu-item > span {
    font-size: 13px;
    color: #333;
    padding-left: 4px;
}
/* 店铺 */
.shop-store {
    width: 100%;
    background: white;
    display: flex;
    justify-content: space-between;
    padding: 4%;
}
.shop-store-con {
    width: 85%;
}
.shop-img {
    width: 15%;
    padding-right: 6px;
}
.shop-img img {
    width: 40px;
    border-radius: 50%;
}
.shop-info {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* margin-left: -50px; */
}
.p1 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #262c32;
    margin-bottom: 6px;
}
.p2 {
    font-size: 13px;
    color: #919599;
}
.p2 img {
    width: 10px;
    /* height: 10px; */
}
.arrow-icon {
    width: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #5a6066;
    font-size: 12px;
}
.arrow-icon img {
    height: 12px;
    width: 12px;
}
/* 全程导购 */
.goodDetailGuideModule {
    width: 100%;
    padding: 0 2%;
    margin: 2% 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
}
.v-center {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2% 0;
    font-size: 13px;
}
.guide-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.left {
    color: #333;
}
.right {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #919599;
}
.guide-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.guide-tx img {
    margin-right: 12px;
    border-radius: 50%;
}
.guide-info {
    width: 100%;
    display: flex;
    padding: 4% 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ebeced;
}

.guide-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
.guide-left .name {
    font-size: 13px;
    color: #262c32;
}
.guide-left .font22 {
    font-size: 12px;
    color: #fff;
    border-radius: 8px;
    background-color: #e6b365;
}
.guide-left .font20 {
    font-size: 12px;
    color: #919599;
    margin: 2% 0;
}
.guide-right img {
    width: 42px;
    border-radius: 50%;
}
/* 猜你喜欢 */
.youlikebox {
    width: 100%;
    padding: 2%;
    background-color: #fff;
}
.guess-title {
    font-size: 13px;
    color: #333;
}
.guess-side {
    display: flex;
    flex-direction: row;
    align-items: center;

    overflow: auto;
    flex-wrap: nowrap;
}

.guess-side-item {
    width: 100%;
    padding:2%;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
}
.guess-side-item-sub {
    width: 32%;
    margin: 0.6%;
    position: relative;
    display: flex;
    flex-direction:column;
    /* align-items: center; */
    flex-shrink: 0;
}
.item-sub-img {
    width: 100%;
}
.item-sub-img img {
    width: 100%;
}
.item-sub-name {
    width: 100%;
    font-size: 12px;
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: wrap;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    word-break: break-all;
    -webkit-box-orient: vertical;
}
.item-sub-price {
    font-size: 13px;
    color: #262c32;
    font-weight: 600;
}
.item-sub-dw {
    width: 100%;
    position: absolute;
    top: 60%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: wrap;
    background-color: rgba(102, 102, 102, 1);
}
.item-sub-dw img {
    width: 13px;
    height: 13px;
    border-radius: 50%;
}
.item-sub-dw span {
    font-size: 12px;
    color: #fff;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
/* 商品.规格.售后 */
/* .description{
    width: 100%;
    padding:2%;
    background-color: #197fe7;
} */
.description-con{
    width: 100%;
    padding: 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    background-color: #fff;
    border-top: 1px solid #d0d3d3;
    border-bottom: 1px solid #d0d3d3;

}
.description-item{
    width: 33.33%;
    flex-shrink: 0;
    font-size: 14px;
    color: #919599;
    border-right: 1px solid #d0d3d3;
}
.description-item.b{
    border-right:none;
}
.active1{
color: #00051a;
}
</style>