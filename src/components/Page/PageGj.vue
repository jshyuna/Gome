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
        <!-- 好服务 -->
        <div class="hfw">
            <div class="hfw-cons">
                <div class="hfw-cons-top">好服务更懂家</div>
                <div class="hfw-cons-bot">
                    <div class="hfw-cons-bot-left">
                        <img
                            src="//gfs7.gomein.net.cn/wireless/T1xJh7Bg_v1RCvBVdK_850_1136.png"
                            alt
                        />
                    </div>
                    <div class="hfw-cons-bot-right">
                        <img
                            src="//gfs6.gomein.net.cn/wireless/T1WgY5BQ_v1RCvBVdK_1280_568.png"
                            alt
                        />
                        <div class="hfw-right-bot">
                            <div class="hfw-right-bot-item">
                                <img
                                    src="//gfs6.gomein.net.cn/wireless/T181A5BXbT1RCvBVdK_640_568.png"
                                    alt
                                />
                            </div>
                            <div class="hfw-right-bot-item">
                                <img
                                    src="//gfs5.gomein.net.cn/wireless/T1ZhJ5BvLT1RCvBVdK_320_284.png"
                                    alt
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 服务内容 -->
        <div class="fwnr">
            <div class="fwnr-cons">
                <div class="fwnr-item" v-for="item in fwList" :key="item.id">
                    <div class="fwnr-item-left">
                        <img :src="item.img" alt />
                    </div>
                    <div class="fwnr-item-right">
                        <div
                            class="fwnr-item-right-item"
                            v-for="itemList in item.fwzList"
                            :key="itemList.id"
                        >
                            <a href class="fwnr-item-right-item-a">
                                <img :src="itemList.imgUrl" alt />
                                <span>{{itemList.name }}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 维修服务 -->
        <div class="wxfw">
            <img src="//gfs7.gomein.net.cn/wireless/T1Bhh5B__T1RCvBVdK_1400_400.jpg" alt="">
        </div>
         <!-- 维修服务  项 -->
        <div class="wxfwx">
            <img src="//gfs6.gomein.net.cn/wireless/T1s7AmBCAv1RCvBVdK_351_205.png" alt="">
            <img src="//gfs5.gomein.net.cn/wireless/T10NC4B7_T1RCvBVdK_351_205.png" alt="">
            <img src="//gfs6.gomein.net.cn/wireless/T1rNE4BCAg1RCvBVdK_351_205.png" alt="">
            <img src="//gfs7.gomein.net.cn/wireless/T1UNx4BsDv1RCvBVdK_351_205.png" alt="">
        </div>
        <!-- 大家都在买 -->
        <div class="dzm">
            <img src="//gfs8.gomein.net.cn/wireless/T1ywL5BbhT1RCvBVdK_2250_300.png" alt="">
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
            // 服务内容
            fwList: [],
            // 服务 子内容
            fwzList: [],
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
        xhr.open("GET", "http://localhost:8080/data/PageGj.json");
        xhr.send();
        xhr.onload = function () {
            that.listSwiper = JSON.parse(xhr.response).listSwiper;
            // console.log(that.listSwiper);
        };
        // 服务内容
        var that = this;
        var xhr1 = new XMLHttpRequest();
        xhr1.open("GET", "http://localhost:8080/data/PageGj.json");
        xhr1.send();
        xhr1.onload = function () {
            that.fwList = JSON.parse(xhr1.response).fwList;
            // console.log(that.listSwiper);
        };
        // 服务 子内容
        var that = this;
        var xhr2 = new XMLHttpRequest();
        xhr2.open("GET", "http://localhost:8080/data/PageGj.json");
        xhr2.send();
        xhr2.onload = function () {
            that.fwzList = JSON.parse(xhr2.response).fwzList;
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
    display: flex;
    padding: 2%;
}
.swiper img {
    border-radius: 10px;
    width: 100%;
}
/* 好服务 */
.hfw {
    width: 100%;
    padding: 2%;
}
.hfw-cons {
    width: 100%;
    border-radius: 10px;
    background-color: #fff;
    /* overflow: hidden; */
}
.hfw-cons-top {
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    padding: 10px 8px;
}

.hfw-cons-bot {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* padding-right:4%; */
}
.hfw-cons-bot-left {
    width: 40%;
}
.hfw-cons-bot-left img {
    width: 100%;
}
.hfw-cons-bot-right {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

.hfw-cons-bot-right > img {
    width: 100%;
}
.hfw-right-bot {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.hfw-right-bot-item {
    width: 50%;
}

.hfw-right-bot-item > img {
    width: 100%;
}
/* 服务内容 */
.fwnr {
    width: 100%;
    padding:0 2%;
}
.fwnr-cons {
    width: 100%;
}
.fwnr-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom:6px;
    /* background-color: aquamarine; */
}
.fwnr-item-left {
    width: 33%;
}
.fwnr-item-left img {
    width: 100%;
    border-radius: 10px;
}

.fwnr-item-right {
    width: 66%;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
}

.fwnr-item-right-item {
    width: 50%;
    padding: 9px 4px 9px 10px;
    border: 1px solid #f2f2f2;
    background-color: #fff;
}
.fwnr-item-right-item-a {
    width: 100%;
    font-size: 12px;
    color: #333;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
}
.fwnr-item-right-item-a img {
    width: 30%;
}
.fwnr-item-right-item-a span {
        white-space: nowrap;
}
/* 维修服务 */
.wxfw{
    width: 100%;
    padding:0 2%;
}
.wxfw img{
    width: 100%;
    border-radius: 10px;
}
/* 维修服务  项 */

.wxfwx{
    width: 100%;
    padding:2%;
    display: flex;
    flex-direction:row;
    align-items: center;
    flex-wrap:wrap;
}
.wxfwx img{
    width: 50%;
}
.dzm{
    width: 100%;
    padding:0 2%;
}
.dzm img{
    width: 100%;
}






</style>