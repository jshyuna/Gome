<template>
    <div id="app">
        <!-- 头 -->
        <div class="detail-top">
            <div class="detail-top-left">
                <div class="detail-top-left-img" @click="btnback('page')">
                    <img src="../images/back.png" alt class="back" />
                </div>
                <div class="detail-top-left-con">
                    <div
                        class="detail-top-left-item"
                        :class="[cartName=='cart-sp'?'active':'']"
                        @click="cartName='cart-sp'"
                    >
                        <p>商品</p>
                    </div>
                    <div
                        class="detail-top-left-item"
                        :class="[cartName=='cart-xq'?'active':'']"
                        @click="cartName='cart-xq'"
                    >
                        <p>详情</p>
                    </div>
                    <div
                        class="detail-top-left-item"
                        :class="[cartName=='cart-pj'?'active':'']"
                        @click="cartName='cart-pj'"
                    >
                        <p>评价</p>
                    </div>
                </div>
            </div>
            <div class="detail-top-right">
                <span>
                    <img src="../images/heart.png" alt />
                </span>
                <span @click="btngwc('cart')">
                    <img src="../images/gwc.png" alt />
                </span>
                <span>
                    <img src="../images/slh.png" alt />
                </span>
            </div>
        </div>
        <!-- 中 -->
        <div class="detail-mill">
            <transition :name="transitionName">
                <component :is="cartName"></component>
            </transition>
        </div>
        <!-- 底 -->
        <div class="detail-bot">
            <div class="detail-bot-md">
                <img src="../images/foot1.png" alt />
                <p>门店</p>
            </div>
            <div class="detail-bot-dg">
                <img src="//gfs11.gomein.net.cn/T1LoW7BTx_1RCvBVdK_60_60.jpg" alt />
                <p>全程导购</p>
            </div>
            <div class="detail-bot-gwc">
                <p>加入购物车</p>
            </div>
            <div class="detail-bot-gm">
                <p>立即购买</p>
            </div>
        </div>
    </div>
</template>

<script>
import CartSp from "./Page/CartSp.vue";
import CartXq from "./Page/CartXq.vue";
import CartPj from "./Page/CartPj.vue";

export default {
    data() {
        return {
            cartName: "cart-sp",
            transitionName: "right-left",
            pageIndex: 0,
        };
    },
    components: {
        "cart-sp": CartSp,
        "cart-xq": CartXq,
        "cart-pj": CartPj,
    },
    methods: {
        btnback(a) {
            this.$router.push({
                path: "/",
            });
        },
        btngwc(a) {
            this.$router.push({
                path: "/cart",
            });
        },
    },
    watch: {
        pageIndex(newVal, oldVal) {
            switch (newVal) {
                case 0:
                    this.componentName = "cart-sp";
                    break;
                case 1:
                    this.componentName = "cart-xq";
                    break;
                case 2:
                    this.componentName = "cart-pj";
                    break;
            }

            if (newVal > oldVal) {
                this.transitionName = "right-left";
            } else {
                this.transitionName = "left-right";
            }
        },
    }
};
</script>

<style scoped>
.right-left-enter {
    transform: translateX(100%);
}

.right-left-leave-to {
    transform: translateX(-100%);
}

.right-left-enter-active,
.right-left-leave-active,
.left-right-enter-active,
.left-right-leave-active {
    transition: all 0.3s;
}

.left-right-enter {
    transform: translateX(-100%);
}

.left-right-leave-to {
    transform: translateX(100%);
}
/* 头 */
.detail-top {
    width: 100%;
    padding: 0 2%;
    /* height: 7%; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
}
.detail-top-left,
.detail-top-right {
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* background-color: #fff; */
}
.detail-top-left {
    justify-content: left;
}
.detail-top-left-img {
    padding: 2%;
    width: 20%;
    /* background-color:blue; */
}
.detail-top-left-img img {
    width: 50%;
    color: #333;
}
.detail-top-left-con {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.detail-top-left-item {
    width: 28%;
    font-size: 12px;
    color: #666;
    text-align: center;
    padding: 4% 0;
    padding-right: 2%;
}
.detail-top-right {
    justify-content: flex-end;
}
.detail-top-right span {
    width: 20%;
}

.detail-top-right span > img {
    width: 50%;
}
.active {
    font-size: 16px;
    color: #333;
    border-bottom: 2px solid #f20c59;
}
/* 中 */
.detail-mill {
    flex-shrink: 1;
    width: 100%;
    display: flex;
    flex-grow: 1;
    flex: 1;
    flex-direction: column;
    flex: 1;
    overflow: auto;
    background-color: #f2f2f2;
}

.v-enter{
    transform: translateX(100%);
}

.v-leave-to{
    transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active{
    transition:all 0.5s ease;
}


/* 底 */
.detail-bot {
    width: 100%;
    height: 7%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-top: 1px solid #ddd;
}
.detail-bot > div {
    width: 25%;
    text-align: center;
}
.detail-bot-md {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #333;
    background-color: #fafafa;
}
.detail-bot-md img {
    width: 24%;
    padding: 2px 0;
}
.detail-bot-dg {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fafafa;
}
.detail-bot-dg img {
    width: 22%;
    padding: 2px 0;
    border-radius: 14px;
}
.detail-bot-dg p {
    font-size: 12px;
    border-radius: 10px;
    padding: 0 4px;
    background-color: #fac905;
}
.detail-bot-gwc {
    height: 100%;
    font-size: 16px;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #fac905;
}
.detail-bot-gm {
    height: 100%;
    font-size: 16px;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #fc1e56;
}
</style>