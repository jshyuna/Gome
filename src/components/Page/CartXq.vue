<template>
    <div>
        <div class="xq">
            <div class="infobox">
                <div class="des_pic">
                    <img
                        src="//gfs17.gomein.net.cn/T1E9K7B7d_1RCvBVdK_160.jpg?v=20170727"
                        alt
                        class="tp"
                    />
                </div>
                <div class="info">
                    <p class="ellipsis_four">Apple iPhone 12 128G 蓝色 移动联通电信 5G手机</p>
                    <span class="jg">￥6799</span>
                </div>
            </div>
            <div class="tip">
                <p>A14仿生芯片，6.1英寸超视网膜XDR显示屏，升维大提速</p>
            </div>
            <!-- 商品.规格.售后 -->
        <div class="description-con">
            <div
                class="description-item"
                :class="[cartsName=='carts-js'?'active1':'']"
                @click="cartsName='carts-js'"
            >
                <p>商品介绍</p>
            </div>
            <div
                class="description-item"
                :class="[cartsName=='carts-gg'?'active1':'']"
                @click="cartsName='carts-gg'"
            >
                <p>规格参数</p>
            </div>
            <div
                class="description-item b"
                :class="[cartsName=='carts-sh'?'active1':'']"
                @click="cartsName='carts-sh'"
            >
                <p>包装售后</p>
            </div>
        </div>
        <component :is="cartsName"></component>
        </div>
        
    </div>
</template>

<script>
import CartsJs from "../PageSub/CartsJs.vue";
import CartsGg from "../PageSub/CartsGg.vue";
import CartsSh from "../PageSub/CartsSh.vue";
export default {
  data() {
    return {
        cartsName: "carts-js",
    }
  },
 components: {
        "carts-js": CartsJs,
        "carts-gg": CartsGg,
        "carts-sh": CartsSh,
    }
};
</script>

<style scoped>
   .v-enter,
    .v-leave-to {
      opacity: 0;
      transform: translateX(150px);
    }

    .v-enter-active,
    .v-leave-active {
      transition: all 0.5s ease;
    }
.xq {
    background: white;
}
.infobox {
    display: flex;
    /* align-items: center; */
    padding: 3%;
}
.tp {
    height: 85px;
    width: 85px;
}
.ellipsis_four {
    color: #333;
    font-size: 14px;
}
.info {
    padding: 1%;
}
.jg {
    color: #f20c59;
    font-size: 14px;
}
.tip {
    background: #fffde5;
    border: 1px solid #ffebd4;
    border-radius: 3px;
    font-size: 12px;
    color: #ff8000;
    padding: 2%;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 15px;
}
.description-con {
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
.description-item {
    width: 33.33%;
    flex-shrink: 0;
    font-size: 14px;
    color: #919599;
    border-right: 1px solid #d0d3d3;
}
.description-item.b {
    border-right: none;
}
.active1 {
    color: #00051a;
}
</style>