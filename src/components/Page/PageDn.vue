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
        <!-- 广告 -->
        <div class="gg">
          <img src="//gfs8.gomein.net.cn/wireless/T1EyZeB7hv1RCvBVdK_1125_300.png" alt="">
        </div>
         <!-- 品牌推荐 -->
        <div class="hfw">
            <div class="hfw-cons">
                <div class="hfw-cons-top">品牌推荐</div>
                <div class="hfw-cons-bot">
                    <div class="hfw-cons-bot-left">
                        <img
                            src="//gfs6.gomein.net.cn/wireless/T18NA5BjVv1RCvBVdK_425_568.png"
                            alt
                        />
                    </div>
                    <div class="hfw-cons-bot-right">
                        <img
                            src="//gfs8.gomein.net.cn/wireless/T1msV7B7V_1RCvBVdK_640_284.png"
                            alt
                        />
                        <div class="hfw-right-bot">
                            <div class="hfw-right-bot-item">
                                <img
                                    src="//gfs8.gomein.net.cn/wireless/T15lK7BXA_1RCvBVdK_320_284.png"
                                    alt
                                />
                            </div>
                            <div class="hfw-right-bot-item">
                                <img
                                    src="//gfs8.gomein.net.cn/wireless/T1lYJ7BKVv1RCvBVdK_320_284.png"
                                    alt
                                />
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
           // 品种
            pzflList: [],
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
        xhr.open("GET", "http://localhost:8080/data/PageDn.json");
        xhr.send();
        xhr.onload = function () {
            that.listSwiper = JSON.parse(xhr.response).listSwiper;
            // console.log(that.listSwiper);
        };
      // 品种
        var that = this;
        var xhr1 = new XMLHttpRequest();
        xhr1.open("GET", "http://localhost:8080/data/PageDn.json");
        xhr1.send();
        xhr1.onload = function () {
            that.pzflList = JSON.parse(xhr1.response).pzflList;
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
    padding: 3%;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: space-between;
}
.pzfl-img {
    height: 100%;
    padding: 2%;
    overflow: hidden;
}
.pzfl-img img {
    width: 100%;
    border-radius: 50%;
}
.pzfl-txt {
    width: 100%;
    font-size: 14px;
    text-align: center;
}
/* 广告  */
.gg{
  width: 100%;
  padding: 2%;
}
.gg img{
  width: 100%;
}
/* 品牌推荐 */
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
</style>