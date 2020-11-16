<template>
    <div id="app">
        <!-- 广告 -->
        <!-- <div class="adevrt" v-if="ade">
            <div class="adevrt-left">
                <div class="adevrt-qu" @click="btnClick('ade')">
                    <img src="//css.gomein.net.cn/plus/style/appDown/images/close.png" />
                </div>
                <div class="adevrt-logo">
                    <img src="//gfs7.gomein.net.cn/T1.g_vB4YT1RCvBVdK.png" />
                </div>
                <div class="adevrt-p">
                    <p>注册送好礼</p>
                    <p>优惠享不停</p>
                </div>
            </div>
            <div class="adevrt-right">
               下载领取
            </div>
        </div>
        -->
        <!-- 头部 -->
        <div class="header">
            <div class="head-site">
                <img src="../images/dingwei.png" alt="">
                北京市
            </div>
            <div class="head-inp">
                <img src="../images/search.png" alt />
                <span>平板电视</span>
            </div>
            <div class="head-login">
                登录
            </div>
        </div>
        <!-- 中间 -->
        <div class="middle">
            <component :is="name" class="middle-auto"></component>
        </div>
        <!-- 底部 -->
        <div class="tail">
            <div class="tail-item" @click="btn('page')">
                <div v-if="name=='page'">
                    <img src="../images/home1.png" />
                </div>
                <div v-else>
                    <img src="../images/home2.png" />
                </div>
                <p :class="{active:name=='page'}">首页</p>
            </div>
            <div class="tail-item" @click="btn('mall')">
                <div v-if="name=='mall'">
                    <img src="../images/mall1.png" />
                </div>
                <div v-else>
                    <img src="../images/mall2.png" />
                </div>
                <p :class="{active:name=='mall'}">门店</p>
            </div>
            <div class="tail-item" @click="btn('message')">
                <div v-if="name=='message'">
                    <img src="../images/message.png" />
                </div>
                <div v-else>
                    <img src="../images/message.png" />
                </div>
                <p :class="{active:name=='message'}">消息</p>
            </div>
            <div class="tail-item" @click="btn('cart')">
                <div v-if="name=='cart'">
                    <img src="../images/chart1.png" />
                </div>
                <div v-else>
                    <img src="../images/chart1.png" />
                </div>
                <p :class="{active:name=='cart'}">购物车</p>
            </div>
            <div class="tail-item" @click="btn('me')">
                <div v-if="name=='me'">
                    <img src="../images/me.png" />
                </div>
                <div v-else>
                    <img src="../images/me.png" />
                </div>
                <p :class="{active:name=='me'}">我的</p>
            </div>
        </div>
    </div>
</template>

<script>
import Cart from "./Cart.vue";
import Mall from "./Mall.vue";
import Message from "./Message.vue";
import Me from "./Me.vue";
import Page from "./Page.vue";

export default {
    data() {
        return {
            name: "page",
            ade: true,
        };
    },
    components: {
        cart: Cart,
        mall: Mall,
        message: Message,
        me: Me,
        page: Page,
    },
    methods: {
        btn(a) {
            this.name = a;
        },
        btnClick(ade) {
            this.ade = false;
        },
    },
};
</script>


<style scoped>
/* 广告 */
.adevrt {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    border-bottom: 1px solid #777;
    color: white;
}
/* 左 */
.adevrt-left {
    width: 70%;
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    background-color: #333;
}
.adevrt-qu {
    width: 20%;
    height: 100%;
    text-align: center;
}
.adevrt-qu img {
    width: 30%;
    margin: 0 auto;
    /* margin:0 auto; */
}
.adevrt-logo {
    width: 20%;
}

.adevrt-logo > img {
    width: 80%;
}
.adevrt-p {
    width: 60%;
    padding-left: 5%;
}
/* 右 */
.adevrt-right {
    width: 30%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #ee1955;
}

/* 头部 */
.header {
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
.head-login{
    display: flex;
    align-items:center;
}
.head-site{
    display: flex;
    flex-direction: column;
    align-items:center;
}
.head-site img{
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
.head-inp img{
    width: 16px;
    height: 16px;
    margin-left: 10px;
}
.head-inp span{
    font-size: 12px;
    color: #999;
    margin-left: 10px;
}
/* 中间 */
.middle {
    width: 100%;
    height: 86%;
    display:flex;
    /* overflow: auto; */
    /* flex-shrink: 0; */
    flex-grow: 1;
    background-color: #f2f2f2;
}

/* 底部 */
.tail {
    width: 100%;
    height: 8%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    text-align: center;
    border: 1px solid #EEE;
}

/* 底部item */
.tail-item {
    width: 20%;
    flex-grow: 1;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-items: stretch;
}

.tail-item p {
    font-size: 12px;
    text-align: center;
}

.tail-item img {
    width: 25px;
    /* height: 25px; */
}

.tail-item div {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

/* .active {
    color: #f20c59;
    font-weight: bold;
} */
</style>
