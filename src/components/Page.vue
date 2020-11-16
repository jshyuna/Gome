<template>
  <div>
    <!-- 头部 -->
    <!-- <div class="header">
            <div class="head-site">
                <img src="../images/dingwei.png" alt />
                北京市
            </div>
            <div class="head-inp">
                <img src="../images/search.png" alt />
                <span>平板电视</span>
            </div>
            <div class="head-login">登录</div>
        </div>-->
    <!-- 目录 -->
    <div class="classify">
      <div class="classify-left">
        <div class="classify-item">
          <p>精选</p>
        </div>
        <div class="classify-item">
          <p>国美超市</p>
        </div>
        <div class="classify-item">
          <p>国美管家</p>
        </div>
        <div class="classify-item">
          <p>手机电脑</p>
        </div>
        <div class="classify-item">
          <p>橱柜厨具</p>
        </div>
        <div class="classify-item">
          <p>国美家电</p>
        </div>
        <div class="classify-item">
          <p>舒适家</p>
        </div>
        <div class="classify-item">
          <p>食品百货</p>
        </div>
        <div class="classify-item">
          <p>家居家装</p>
        </div>
      </div>
      <div class="classify-right">
        <div class="classify-right-img">
          <img src alt />
        </div>
        <div class="classify-right-fl">分类</div>
      </div>
    </div>
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
        <a href="">
          <img src="//gfs9.gomein.net.cn/T12RJeBmJT1RCvBVdK.gif" alt="" />
        </a>
      </div>
    </div>
    <!-- 礼包 -->
    <div class="gift">
      <div class="gift-lift">
        <img
          src="//gfs5.gomein.net.cn/wireless/T1FvJmB5Cv1RCvBVdK_533_363.png"
          alt
        />
      </div>
      <div class="gift-right">
        <img
          src="//gfs7.gomein.net.cn/wireless/T1WoEKBsCv1RCvBVdK_533_363.png"
          alt
        />
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
          <img
            src="//gfs7.gomein.net.cn/wireless/T1LsZ7BjV_1RCvBVdK_562_225.png"
            alt
          />
        </div>
        <div class="fchh-top-item">
          <img
            src="//gfs8.gomein.net.cn/wireless/T1fBW7BTAv1RCvBVdK_562_225.png"
            alt
          />
        </div>
      </div>
      <!-- 下 -->
      <div class="fchh-bot">
        <div class="fchh-bot-cons">
          <div class="fchh-bot-con">
            <div class="fchh-bot-item" v-for="item in fchhList1" :key="item.id">
              <a href="">
                <img :src="item.img" alt="" />
              </a>
            </div>
            <!-- <div class="fchh-bot-item">
                            <a href="">
                                <img src="//gfs7.gomein.net.cn/wireless/T1rsd7BQ__1RCvBVdK_281_375.png" alt="">
                            </a> 
                        </div>
                        <div class="fchh-bot-item">
                            <a href="">
                                <img src="//gfs6.gomein.net.cn/wireless/T1GsA7Bjhv1RCvBVdK_281_375.png" alt="">
                            </a> 
                        </div>
                        <div class="fchh-bot-item">
                            <a href="">
                                <img src="//gfs6.gomein.net.cn/wireless/T123W7Bv_v1RCvBVdK_281_375.png" alt="">
                            </a> 
                        </div> -->
          </div>
          <div class="fchh-bot-con">
            <div class="fchh-bot-item" v-for="item in fchhList2" :key="item.id">
              <a href="">
                <img :src="item.img" alt="" />
              </a>
            </div>
            <!-- <div class="fchh-bot-item">
                            <a href="">
                                <img src="//gfs6.gomein.net.cn/wireless/T1.Wh7ByCv1RCvBVdK_281_375.png" alt="">
                            </a> 
                        </div>
                        <div class="fchh-bot-item">
                            <a href="">
                                <img src="//gfs9.gomein.net.cn/wireless/T1XWd7BvdT1RCvBVdK_281_375.png" alt="">
                            </a> 
                        </div>
                        <div class="fchh-bot-item">
                            <a href="">
                                <img src="//gfs9.gomein.net.cn/wireless/T1ZqK7BmZ_1RCvBVdK_281_375.png" alt="">
                            </a> 
                        </div> -->
          </div>
          <div class="fchh-bot-con">
            <div class="fchh-bot-item" v-for="item in fchhList3" :key="item.id">
              <a href="">
                <img :src="item.img" alt="" />
              </a>
            </div>
            <!-- <div class="fchh-bot-item">
                            <a href="">
                                <img src="//gfs9.gomein.net.cn/wireless/T11sd7B_b_1RCvBVdK_281_375.png" alt="">
                            </a> 
                        </div>
                        <div class="fchh-bot-item">
                            <a href="">
                                <img src="//gfs8.gomein.net.cn/wireless/T1PqD7BTV_1RCvBVdK_281_375.png" alt="">
                            </a> 
                        </div>
                        <div class="fchh-bot-item">
                            <a href="">
                                <img src="//gfs9.gomein.net.cn/wireless/T1qq_7B4D_1RCvBVdK_281_375.png" alt="">
                            </a> 
                        </div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- 懒加载部分 -->
    <div class="lazy">
      <div class="lazy-cons">
        <div class="lazy-top">dsdfsd</div>
        <div class="lazy-bot">xfdfgadfg</div>
      </div>
    </div>
  </div>
</template>

<script>
// import list from "../../public/data/page.json";
export default {
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: true,
        loop: true,
        // Some Swiper option/callback...
      },
      listSwiper: [
        {
          id: "001",
          imgUrl:
            "//gfs6.gomein.net.cn/wireless/T1iqK7B7h_1RCvBVdK_1065_390.jpg",
        },
        {
          id: "002",
          imgUrl:
            "//gfs8.gomein.net.cn/wireless/T133A7BsYv1RCvBVdK_1065_390.png",
        },
        {
          id: "003",
          imgUrl:
            "//gfs6.gomein.net.cn/wireless/T1sBW7BK_v1RCvBVdK_1065_390.jpg",
        },
        {
          id: "004",
          imgUrl:
            "//gfs7.gomein.net.cn/wireless/T1Eqx7BXJg1RCvBVdK_1065_390.jpg",
        },
        {
          id: "005",
          imgUrl:
            "//gfs7.gomein.net.cn/wireless/T1fsY7BTZ_1RCvBVdK_1065_390.jpg",
        },
        {
          id: "006",
          imgUrl:
            "//gfs6.gomein.net.cn/wireless/T1yqL7BTJv1RCvBVdK_1065_390.jpg",
        },
        {
          id: "007",
          imgUrl:
            "//gfs5.gomein.net.cn/wireless/T1ssZ7B7__1RCvBVdK_1065_390.jpg",
        },
        {
          id: "008",
          imgUrl:
            "//gfs5.gomein.net.cn/wireless/T1gib7BmET1RCvBVdK_1065_390.jpg",
        },
      ],
      fchhList1: [
        {
          id: "0001",
          img: "//gfs7.gomein.net.cn/wireless/T14WV7BKhT1RCvBVdK_281_375.png",
        },
        {
          id: "0002",
          img: "//gfs7.gomein.net.cn/wireless/T1rsd7BQ__1RCvBVdK_281_375.png",
        },
        {
          id: "0003",
          img: "//gfs6.gomein.net.cn/wireless/T1GsA7Bjhv1RCvBVdK_281_375.png",
        },
        {
          id: "0004",
          img: "//gfs6.gomein.net.cn/wireless/T123W7Bv_v1RCvBVdK_281_375.png",
        },
      ],
      fchhList2: [
        {
          id: "0005",
          img: "//gfs8.gomein.net.cn/wireless/T19xD7BKET1RCvBVdK_281_375.png",
        },
        {
          id: "0006",
          img: "//gfs6.gomein.net.cn/wireless/T1.Wh7ByCv1RCvBVdK_281_375.png",
        },
        {
          id: "0007",
          img: "//gfs9.gomein.net.cn/wireless/T1XWd7BvdT1RCvBVdK_281_375.png",
        },
        {
          id: "0008",
          img: "//gfs9.gomein.net.cn/wireless/T1ZqK7BmZ_1RCvBVdK_281_375.png",
        },
      ],
      fchhList3: [
        {
          id: "0009",
          img: "//gfs8.gomein.net.cn/wireless/T10Wh7BXdv1RCvBVdK_281_375.png",
        },
        {
          id: "0010",
          img: "//gfs9.gomein.net.cn/wireless/T11sd7B_b_1RCvBVdK_281_375.png",
        },
        {
          id: "0011",
          img: "//gfs8.gomein.net.cn/wireless/T1PqD7BTV_1RCvBVdK_281_375.png",
        },
        {
          id: "0012",
          img: "//gfs9.gomein.net.cn/wireless/T1qq_7B4D_1RCvBVdK_281_375.png",
        },
      ],
    };
  },
  created() {
    var xhr = new XMLHttpRequest();
    var that = this;
    xhr.open("GET", "../../public/data/page.json");
    xhr.send();
    xhr.onload = function () {
      let result = JSON.parse(xhr.response).data;
      console.log(result);
      if (response.data.code == 200) {
        that.fchhList1 = response.data.fchhList1;
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    list() {
      return this.$store.state.list;
    },
    fchhList1() {
      return this.$store.state.fchhList1;
    },
    fchhList2() {
      return this.$store.state.fchhList2;
    },
    fchhList3() {
      return this.$store.state.fchhList3;
    },
  },
  mounted() {
    // console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(1, 1000, false);
  },
};
</script>

<style scoped>
/* 头部 */
/* .header {
    height: 6%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 0;
    flex-shrink: 0;
    justify-content: space-between;
    background-color: #f20c59;
}

.head-site,
.head-inp,
.head-login {
    height: 80%;
    color: #fff;
}
.head-site,
.head-login {
    width: 15%;
    font-size: 12px;
    justify-content: center;
}
.head-login {
    display: flex;
    align-items: center;
}
.head-site {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.head-site img {
    width: 12px;
    height: 12px;
}
.head-inp {
    width: 70%;
    display: flex;
    align-items: center;
    border-radius: 24px;
    background-color: #fff;
}
.head-inp img {
    width: 16px;
    height: 16px;
    margin-left: 10px;
}
.head-inp span {
    font-size: 12px;
    color: #999;
    margin-left: 10px;
} */

/* 目录  */
.classify {
  display: flex;
  flex-direction: row;
  color: white;
  align-items: center;
}
.classify-left {
  width: 85%;
  display: flex;
  flex-direction: row;
  overflow: auto;

  background-color: #f20c59;
}
.classify-item p {
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  padding: 12px;
}
.classify-right {
  width: 15%;
  display: flex;
  flex-direction: row;
  text-align: center;
  height: 100%;
  flex-wrap: nowrap;
  background-color: #ee1955;
  padding: 12px 0;
}
.classify-right-img {
  height: 100%;
  width: 50%;
}
.classify-right-fl {
  font-size: 15px;
  white-space: nowrap;
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
.lazy-cons {
  width: 100%;
  background-color: #21daa5;
}
</style>
