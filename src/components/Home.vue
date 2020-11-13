<template>
    <div class="menu">
        <div class="container">
            <component :is="name"></component>
        </div>
        <!-- 底部 -->
        <div class="foot">
            <div class="page" @click="btn('page')">
                <div v-if="name=='page'">
                    <img src="../images/home1.png" />
                </div>
                <div v-else>
                    <img src="../images/home2.png" />
                </div>
                <p :class="{active:name=='page'}">首页</p>
            </div>
            <div class="mall" @click="btn('mall')">
                <div v-if="name=='mall'">
                    <img src="../images/mall1.png" />
                </div>
                <div v-else>
                    <img src="../images/mall2.png" />
                </div>
                <p :class="{active:name=='mall'}">门店</p>
            </div>
            <div class="message" @click="btn('message')">
                <div v-if="name=='message'">
                    <img src="../images/message.png" />
                </div>
                <div v-else>
                    <img src="../images/message.png" />
                </div>
                <p :class="{active:name=='message'}">消息</p>
            </div>
            <div class="cart" @click="btn('cart')">
                <div v-if="name=='cart'">
                    <img src="../images/chart1.png" />
                </div>
                <div v-else>
                    <img src="../images/chart1.png" />
                </div>
                <p :class="{active:name=='cart'}">购物车</p>
            </div>
            <div class="me" @click="btn('me')">
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
    },
};
</script>


<style scoped>
.menu {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f8f8f8;
}

.container {
    width: 100%;
    height: 92%;
    flex-shrink: 0;
    flex-grow: 1;
}

.foot {
    width: 100%;
    height: 8%;
    flex-shrink: 0;
    display: flex;
    flex-grow: 1;
    border: 1px solid #EEE;
}

.inp1 {
    width: 100%;
}

.cart,
.mall,
.me,
.message,
.page {
    width: 20%;
    flex-grow: 1;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-items: stretch;
}

.cart p,
.mall p,
.me p,
.message p,
.page p {
    font-size: 12px;
    text-align: center;
}

.cart img,
.mall img,
.me img,
.message img,
.page img {
    width: 25px;
    height: 25px;
}

.cart div,
.mall div,
.me div,
.message div,
.page div {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.active {
    color: #f20c59;
    font-weight: bold;
}
</style>
