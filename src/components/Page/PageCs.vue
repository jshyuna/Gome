<template>
    <div>
        <!-- 轮播图 -->
        <!-- <div class="swiper">
            <swiper ref="mySwiper" class="swiper-item" :options="swiperOptions">
                <swiper-slide v-for="item in listSwiper" :key="item.id">
                    <img :src="item.imgUrl" alt />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div> -->
        <!-- 返场降价 -->
        <div class="fcjj">
            <div class="fcjj-cons">
                <a href>
                    <img src="//gfs6.gomein.net.cn/wireless/T10tZeB5Zv1RCvBVdK_1065_284.png" alt />
                </a>
            </div>
        </div>
        <!-- 品种 -->
        <div class="pzfl">
            <div class="pzfl-cons">
                <div class="pzfl-item" v-for="item in pzflList" :key="item.id">
                    <div class="pzfl-img">
                        <img :src="item.img" alt />
                    </div>
                    <div class="pzfl-txt">{{ item.txt }}</div>
                </div>
            </div>
        </div>
        <!-- 精选好货 -->
        <div class="jxhh">
            <img src="//gfs6.gomein.net.cn/wireless/T1pnJ5BsCT1RCvBVdK_750_80.jpg" alt />
        </div>
        <!-- 精选好货==内容 -->
        <div class="hhnr">
            <div class="hhnr-cons">
                <div class="hhnr-con" v-for="item in hhList" :key="item.id">
                    <div class="hhnr-con-top">
                        <span>查看更多</span>
                        <img src="../../images/next.png" alt />
                    </div>
                    <div class="hhnr-con-bot">
                        <div
                            class="hhnr-con-item"
                            v-for="itemList in item.jxhhList"
                            :key="itemList.id"
                        >
                            <div class="hhnr-con-img">
                                <img :src="itemList.img" alt />
                            </div>
                            <p class="hhnr-con-name">{{ itemList.name }}</p>
                            <p class="hhnr-con-price">
                                <i>￥</i>
                                <span>{{ itemList.yuan }}</span>
                                <i>{{ itemList.jiao }}</i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 精选好店 -->
        <div class="jxhd">
            <img src="//gfs5.gomein.net.cn/wireless/T1.TY5Bvhv1RCvBVdK_750_80.jpg" alt />
        </div>
        <!-- 精选好店==内容 -->
        <div class="hdnr">
            <div class="hdnr-cons">
                <div class="hdnr-left">
                    <img src="//gfs5.gomein.net.cn/wireless/T12.CKB_ET1RCvBVdK_450_600.png" alt />
                </div>
                <div class="hdnr-right">
                    <img src="//gfs8.gomein.net.cn/wireless/T1NTKKBKCv1RCvBVdK_675_305.png" alt />
                    <div class="hdnr-right-bot">
                        <div class="hdnr-right-bot-item">
                            <img
                                src="//gfs7.gomein.net.cn/wireless/T1GRdKB4hv1RCvBVdK_338_296.png"
                                alt
                            />
                        </div>
                        <div class="hdnr-right-bot-item">
                            <img
                                src="//gfs9.gomein.net.cn/wireless/T1gFKKBgZv1RCvBVdK_338_296.png"
                                alt
                            />
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
            // 品种
            pzflList: [],
            // 精选好货
            jxhhList: [],
            // 精选 总内容
            hhList: [],

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
        xhr.open("GET", "http://localhost:8080/data/PageCs.json");
        xhr.send();
        xhr.onload = function () {
            that.listSwiper = JSON.parse(xhr.response).listSwiper;
            // console.log(that.listSwiper);
        };
        // 品种
        var that = this;
        var xhr1 = new XMLHttpRequest();
        xhr1.open("GET", "http://localhost:8080/data/PageCs.json");
        xhr1.send();
        xhr1.onload = function () {
            that.pzflList = JSON.parse(xhr1.response).pzflList;
            // console.log(that.listSwiper);
        };
        // 精选好货
        var that = this;
        var xhr2 = new XMLHttpRequest();
        xhr2.open("GET", "http://localhost:8080/data/PageCs.json");
        xhr2.send();
        xhr2.onload = function () {
            that.jxhhList = JSON.parse(xhr2.response).jxhhList;
            // console.log(that.listSwiper);
        };
        // 精选好货 总内容
        var that = this;
        var xhr3 = new XMLHttpRequest();
        xhr3.open("GET", "http://localhost:8080/data/PageCs.json");
        xhr3.send();
        xhr3.onload = function () {
            that.hhList = JSON.parse(xhr3.response).hhList;
            // console.log(that.listSwiper);
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
/* 品种 */
.pzfl {
    width: 100%;
    padding: 2%;
}
.pzfl-cons {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 10px;
    background-color: #fff;
}
.pzfl-item {
    width: 25%;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    padding: 3%;
    justify-content: space-between;
}
.pzfl-img {
    width: 100%;
    overflow: hidden;
}
.pzfl-img img {
    width: 100%;
}
.pzfl-txt {
    width: 100%;
    font-size: 14px;
    text-align: center;
}

/* 精选好货 */
/* 精选好店 */
.jxhh,
.jxhh img,
.jxhd,
.jxhd img {
    width: 100%;
}

.hhnr {
    width: 100%;
    padding: 2%;
}
.hhnr-cons,
.hhnr-con {
    width: 100%;
}
.hhnr-con {
    width: 100%;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    margin-bottom: 8px;
}
.hhnr-con-top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    font-size: 14px;
    color: #919599;
    padding: 4px 0;
}
.hhnr-con-top img {
    height: 60%;
    /* color: #555; */
}

.hhnr-con-bot {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.hhnr-con-item {
    width: 33.3%;
    padding: 2%;
    text-align: center;
}
.hhnr-con-img,
.hhnr-con-img img {
    width: 100%;
}
.hhnr-con-name {
    width: 100%;
    padding: 0 4px;
    font-size: 14px;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: wrap;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    word-break: break-all;
    -webkit-box-orient: vertical;
    letter-spacing: 2px;
}
.hhnr-con-price {
    width: 100%;
    font-weight: 600;
    text-align: left;
    color: #f20c59;
}
.hhnr-con-price i {
    font-size: 12px;
}
.hhnr-con-price span {
    font-size: 14px;
}

/* 精选好店==内容 */
.hdnr {
    width: 100%;
    padding: 2%;
}
.hdnr-cons {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    background-color: #fff;
}
.hdnr-left {
    width: 40%;
}
.hdnr-left img {
    width: 100%;
}
.hdnr-right {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.hdnr-right-top {
    width: 100%;
}

.hdnr-right > img {
    width: 100%;
}
.hdnr-right-bot {
    width: 100%;
    /* height: 50%; */
    display: flex;
    flex-direction: row;
    align-items: center;
}
.hdnr-right-bot-item {
    width: 50%;
}

.hdnr-right-bot-item img {
    width: 100%;
}
</style>