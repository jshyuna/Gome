<template>
    <div class="gouwuche">
        <div class="header">
            <div class="h-left" @click="btnback('page')">
                <img src="../images/back.png" alt />
            </div>
            <div class="h-center">
                <h1 class="h-tit">购物车</h1>
                <div class="bj">
                    <img src="../images/dw.png" alt class="dw" />
                    <span>北京市</span>
                </div>
            </div>
            <div class="h-right">
                <div v-if="isbianji" class="h-edit" @click="bianji">编辑</div>
                <div v-else class="h-edit" @click="bianji">完成</div>
                <img src="../images/slh.png" alt />
            </div>
        </div>
        <div class="con">
            <div class="Setup" id="top">
                <img src="../images/laba.png" alt class="laba" />
                <p>立即开通九九会员享受会员折扣</p>
                <a href>
                    <i>
                        去开通
                        <img src="../images/hjt.png" alt class="hjt" />
                    </i>
                </a>
            </div>

            <!-- 购物车 -->
            <div class="carts">
                <div class="cart-list">
                    <div class="cart-item" v-for="(item,index) in shoplist" :key="item.index">
                        <div class="item-top">
                            <div class="item-left">
                                <span>
                                    <input type="checkbox" @click="select" :checked="check" />
                                </span>
                            </div>
                            <div class="item-right">
                                <div class="item-right-img">
                                    <img
                                        src="//gfs17.gomein.net.cn/T1E9K7B7d_1RCvBVdK_250.jpg?v=2"
                                        alt
                                    />
                                </div>
                                <div class="item-right-con">
                                    <div class="item-right-con-txt">
                                        <p>Apple iPhone 12 128G 蓝色 移动联通电信 5G手机</p>
                                    </div>
                                    <span class="item-right-con-xg">限购99件</span>
                                    <div class="item-right-con-prices">
                                        <div class="item-right-con-price">
                                            <i>￥</i>
                                            <span>{{danjia}}</span>
                                        </div>
                                        <div class="item-right-con-inp">
                                            <span class="jian" @click="jian(index)">-</span>
                                            <input class="inp" type="number" :value="message" />
                                            <span class="add" @click="add(index)">+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item-bot">
                            <span class="ys">移入收藏</span>
                            <span class="del" @click="del(index)">删除</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart-like">
                <div class="cart-title">
                    <p class="line"></p>
                    <span class="tuijian">
                        <i class="icon"></i>
                        为你推荐
                    </span>
                    <p class="line"></p>
                </div>
                <!-- 懒加载 底部分 -->
                <div class="lazy-bot">
                    <div class="lazy-bot-left">
                        <div class="lazy-bot-left-cons">
                            <div
                                class="lazy-bot-left-item"
                                v-for="item in QbLazyLeftList"
                                :key="item.id"
                            >
                                <a href="#" class="lazy-bot-left-item-con">
                                    <div class="lazy-bot-left-item-img" @click="btnxq('detail')">
                                        <img :src="item.imgUrl" alt />
                                    </div>
                                    <div class="lazy-bot-left-item-site">
                                        <div class="lazy-bot-left-item-site-con">
                                            <img :src="item.LogoImgUrl" alt />
                                            <span
                                                class="lazy-bot-left-item-site-name"
                                            >{{item.siteName}}</span>
                                        </div>
                                    </div>
                                    <div class="lazy-bot-left-item-info">
                                        <p class="lazy-bot-left-item-desc">
                                            <span class="lazy-bot-left-item-tag">
                                                <span>{{item.tag}}</span>
                                            </span>
                                            <span class="lazy-bot-left-item-txt">{{item.txt}}</span>
                                        </p>
                                    </div>
                                </a>
                                <div class="lazy-bot-left-item-other">
                                    <div class="lazy-bot-left-item-other-list">
                                        <span
                                            class="lazy-bot-left-item-other-tag"
                                        >{{item.otherPrice}}</span>
                                    </div>
                                    <div class="lazy-bot-left-item-other-price">
                                        <div class="item-other-price">
                                            <i>￥</i>
                                            <big>{{item.price}}</big>
                                        </div>
                                        <div class="alike">
                                            <img src="../images/chat3.png" alt class="gwc" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lazy-bot-right">
                        <div class="lazy-bot-right-cons">
                            <div
                                class="lazy-bot-right-item"
                                v-for="item in QbLazyRightList"
                                :key="item.id"
                            >
                                <a href="#" class="lazy-bot-right-item-con">
                                    <div class="lazy-bot-right-item-img" @click="btnxq('detail')">
                                        <img :src="item.imgUrl" alt />
                                    </div>
                                    <div class="lazy-bot-right-item-site">
                                        <div class="lazy-bot-right-item-site-con">
                                            <img :src="item.LogoImgUrl" alt />
                                            <span
                                                class="lazy-bot-right-item-site-name"
                                            >{{item.siteName}}</span>
                                        </div>
                                    </div>
                                    <div class="lazy-bot-right-item-info">
                                        <p class="lazy-bot-right-item-desc">
                                            <span class="lazy-bot-right-item-tag">
                                                <span>{{item.tag}}</span>
                                            </span>
                                            <span class="lazy-bot-right-item-txt">{{item.txt}}</span>
                                        </p>
                                    </div>
                                </a>
                                <div class="lazy-bot-right-item-other">
                                    <div class="lazy-bot-right-item-other-list">
                                        <span
                                            class="lazy-bot-right-item-other-tag"
                                        >{{item.otherPrice}}</span>
                                    </div>
                                    <div class="lazy-bot-right-item-other-price">
                                        <div class="item-other-price">
                                            <i>￥</i>
                                            <big>{{item.price}}</big>
                                        </div>
                                        <div class="alike">
                                            <img src="../images/chat3.png" alt class="gwc" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="go-top">
                <a href="#top">
                    <img
                        src="https://js.gomein.net.cn/ssr/statics/images/return-top.ae68c0e.png"
                        alt
                    />
                </a>
            </div>
        </div>
        <div class="foot" v-if="isbianji">
            <div class="foot-left">
                <input type="checkbox" @click="select" :checked="check" />
                <span @click="quanxuan">全选</span>
            </div>
            <div class="foot-right">
                <div class="hjs">
                    <span class="hj">合计:</span>
                    <i>￥</i>
                    <span class="hjp">{{message3}}</span>
                </div>

                <div class="qjs" @click="qhj">
                    <a href="https://cart.m.gome.com.cn/shopping_cart.html" class="jiesuan">去结算</a>

                    <span>
                        <span v-if="message2">(</span>
                        {{message2}}
                    </span>
                    <span v-if="message2">)</span>
                </div>
            </div>
        </div>
        <div class="foot" v-else>
            <div class="foot-left">
                <input type="checkbox" @click="select" :checked="check" />
                <span @click="quanxuan">全选</span>
            </div>
            <div class="foot-right">
                <div class="hjs2">移入收藏</div>
                <div class="qjs2" @click="del()">删除</div>
            </div>
        </div>
    </div>
</template>

<script>
import Detail from "./Detail.vue";
import store from "../store/index.js";
export default {
    data() {
        return {
            // 懒加载 底 左部分
            QbLazyLeftList: [],
            // 懒加载 底 右部分
            QbLazyRightList: [],
            shoplist: [1],
            message: 1,
            message2: "",
            danjia: 6799,
            check: false,
            message3: 0.0,
            isbianji: true,
        };
    },
    // computed:{
    //   shoplist(){
    //      return this.$store.state.shoplist
    //   },
    // },
    methods: {
        open() {
            this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
                center: true,
            })
                .then(() => {
                    this.$message({
                        type: "success",
                        message: "删除成功!",
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除",
                    });
                });
        },
        btnback(a) {
            this.$router.push({
                path: "/",
            });
        },
        btnxq(a) {
            this.$router.push({
                path: "/detail",
            });
        },

        // 加
        add(index) {
            this.message++;
            this.message2 = this.message;
            this.message3 = this.message * this.danjia;
        },

        // 减
        jian(index) {
            this.message--;
            this.message2 = this.message;
            this.message3 = this.message * this.danjia;
            if (this.message < 1) {
                alert("商品数量不能少于1");
                this.message = 1;
            }
            // 删除
        },
        del(index) {
            this.shoplist.splice(index, 1);
        },
        // 全选
        quanxuan() {},
        select() {
            this.check = !this.check;
            if (this.check == true) {
                this.message2 = this.message;
                this.message3 = this.message * this.danjia;
            } else {
                this.message2 = "";
                this.message3 = 0.0;
            }
            // this.$refs.kuang1.isCheck = true
            // this.$refs.inputs.isCheck = true
        },
        //  总件
        qhj() {},
        bianji() {
            this.isbianji = !this.isbianji;
            this.check = !this.check;
            // this.isActive = true;
        },
    },
    components: {
        detail: Detail,
    },
    created() {
        // 懒加载 底 左部分
        var that = this;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8080/data/PageJx.json");
        xhr.send();
        xhr.onload = function () {
            that.QbLazyLeftList = JSON.parse(xhr.response).QbLazyLeftList;
            // console.log(that.lazyLeftList);
        };
        // 懒加载 底 右部分
        var that = this;
        var xhr1 = new XMLHttpRequest();
        xhr1.open("GET", "http://localhost:8080/data/PageJx.json");
        xhr1.send();
        xhr1.onload = function () {
            that.QbLazyRightList = JSON.parse(xhr1.response).QbLazyRightList;
            // console.log(that.lazyLeftRight);
        };
    },
};
</script>

<style scoped>
.gwc {
    height: 27px;
    width: 27px;
}
.gouwuche {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgb(243, 245, 247);
}
.header,
.foot {
    height: 8%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    background-color: #fff;
}
.h-tit {
    display: inline-block;
    line-height: 100%;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    left: 50%;
    top: 0;
    font-weight: normal;
    margin: 14px auto;
    color: #333;
    font-weight: 700;
}
.h-left {
    width: 33%;
}
.dw {
    height: 15px;
    width: 15px;
    margin-right: 3px;
}
.h-center {
    width: 33%;
    display: flex;
    align-items: center;
}
.h-right {
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.h-edit {
    color: #333333;
    font-size: 17px;
    padding: 0px 6px 3px 0px;
}
.h-center span {
    font-size: 13px;
    color: #333;
}
.bj {
    display: flex;
    align-items: center;
}

.con {
    width: 100%;
    height: 84%;
    display: flex;
    flex-shrink: 0;
    flex: 1;
    overflow: auto;
    flex-direction: column;
}

.Setup {
    display: flex;
    padding: 2%;
    background: #fff7d2;
    color: #ff8000;
    border-radius: 35px;
    font-size: 15px;
    justify-content: space-between;
    align-items: center;
}
.laba {
    height: 22px;
    width: 22px;
}
.hjt {
    width: 9px;
    height: 12px;
}
.Setup a {
    text-decoration: none;
}

.Setup i {
    display: block;
    color: #ff8000;
    text-align: center;
    font-style: normal;
}
.Setup p {
    margin-left: -60px;
}

/* 购物车 */
.carts,
.cart-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.cart-list {
    padding: 2%;
}
.cart-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
}
.item-top {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.item-left {
    width: 10%;
    padding: 2%;
}
.item-left span {
    border-radius: 50%;
}
.item-left input {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    outline: none;
}
.item-right {
    width: 90%;
    padding: 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.item-right-img {
    width: 30%;
}
.item-right-img img {
    width: 100%;
}
.item-right-con {
    width: 70%;
    display: flex;
    flex-direction: column;
}
.item-right-con-txt {
    width: 100%;
    margin-bottom: 5%;
    font-size: 14px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;

    -webkit-line-clamp: 2;
    display: -webkit-box;
    word-break: break-all;
    -webkit-box-orient: vertical;
}
.item-right-con-xg {
    width: 30%;
    padding: 0 2%;
    font-size: 12px;
    text-align: center;
    color: #f20c59;
    border: #f20c59 1px solid;
    border-radius: 4px;
}
.item-right-con-prices {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.item-right-con-price {
    width: 60%;
    color: #f20c59;
}
.item-right-con-price i {
    font-size: 12px;
}
.item-right-con-price span {
    font-size: 16px;
}
.item-right-con-inp {
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: space-between;
}
.item-right-con-inp span {
    width: 25%;
    border: 1px solid #ccc;
    background-color: #f4f4f4;
}
.item-right-con-inp .inp {
    width: 50%;
    outline: none;
    border: none;
    text-align: center;
}

.item-bot {
    font-size: 13px;
    padding: 2% 0;
    color: #919599;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
}
.item-bot span {
    padding: 0 3%;
}
.ys {
    border-right: 1px solid #dedcdd;
}
.empty {
    width: 100%;
    text-align: center;
    margin-top: calc(140rem / 75);
}

.empty img {
    width: 49px;
    height: 49px;
}

.empty p {
    color: #999;
    text-align: center;
    font-size: 15px;
    margin-bottom: 15px;
}

.box1 {
    display: flex;
    justify-content: center;
}
.empty a {
    display: block;
    color: #333333;
    width: 99px;
    height: 32px;
    background-color: rgb(243, 245, 247);
    margin-right: 15px;
    border: 1px solid #cacccf;
    border-radius: 1.24em;
    line-height: 32px;
    text-align: center;
    text-decoration: none;
}
.cart-title {
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
}
.line {
    height: 1px;
    width: 24px;
    background: -webkit-linear-gradient(left, #ff0027, #d900b4, #f0f);
}
.icon {
    display: inline-block;
    width: 19px;
    height: 19px;
    background: url(../images/like.png) no-repeat;
    background-size: 100% 100%;
    margin-right: 2px;
    margin-left: 6px;
    margin-bottom: -3px;
}
/*  懒加载  底部分 */
.lazy-bot {
    width: 100%;
    display: flex;
    padding: 2px 2%;
}

.lazy-bot-left,
.lazy-bot-right {
    width: 50%;
    padding: 3px;
}
.lazy-bot-left-cons,
.lazy-bot-right-cons {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.lazy-bot-left-item,
.lazy-bot-right-item {
    width: 100%;
    border-radius: 6px;
    background-color: #fff;
    margin: 3px 0;
}

.lazy-bot-left-item a,
.lazy-bot-right-item a {
    width: 100%;
}

.lazy-bot-left-item-img,
.lazy-bot-right-item-img {
    width: 100%;
}
.lazy-bot-left-item-img img,
.lazy-bot-right-item-img img {
    width: 100%;
    border-radius: 6px;
}
.lazy-bot-left-item-site,
.lazy-bot-right-item-site {
    width: 100%;
    padding: 0 10px;
}
.lazy-bot-left-item-site-con,
.lazy-bot-right-item-site-con {
    width: 100%;
    display: flex;
    padding: 8px 0;
    align-items: center;
    border-bottom: 1px dashed #999;
}
.lazy-bot-left-item-site-con img,
.lazy-bot-right-item-site-con img {
    width: 10%;
    border-radius: 50%;
}
.lazy-bot-left-item-site-name,
.lazy-bot-right-item-site-name {
    color: #7a7f85;
    font-size: 13px;
    padding: 0px 0px 0px 4px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.lazy-bot-left-item-info,
.lazy-bot-right-item-info {
    width: 100%;
    padding: 4px 10px;
    padding-bottom: none;
}
.lazy-bot-left-item-desc,
.lazy-bot-right-item-desc {
    width: 100%;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: wrap;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-size: 12px;
}
.lazy-bot-left-item-tag,
.lazy-bot-right-item-tag {
    display: inline-block;
    background-color: #f20c59;
    text-align: center;
    color: white;
    border-radius: 4px;
    padding: 0px 2px;
}
.lazy-bot-left-item-txt,
.lazy-bot-right-item-txt {
    color: #333;
    padding-left: 4px;
}
.lazy-bot-left-item-other,
.lazy-bot-right-item-other {
    width: 100%;
    padding: 0 10px 10px;
    /* background-color: #21daa5; */
}

.lazy-bot-left-item-other-list,
.lazy-bot-right-item-other-list {
    width: 100%;
    padding: 4px 0;
    font-size: 12px;
    color: #f20c59;
}
.lazy-bot-left-item-other-tag,
.lazy-bot-right-item-other-tag {
    border-radius: 2px;
    border: 1px solid #f20c59;
    background-color: #fff;
}
.lazy-bot-left-item-other-price,
.lazy-bot-right-item-other-price {
    width: 100%;
    display: flex;
    font-size: 12px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 4px;
}
.item-other-price {
    display: inline-block;
    color: #f20c59;
    font-weight: 600;
}

.item-other-price big {
    font-size: 16px;
}
.alike {
    padding: 0 4px;
}

.go-top img {
    width: 44px;
    height: 44px;
}
.go-top {
    position: fixed;
    right: 1px;
    bottom: 80px;
}
/* 底部 */
.foot {
    width: 100%;
}
.foot-left {
    width: 20%;
    padding: 0 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.foot-left input {
    width: 20px;
    height: 20px;
}
.foot-left span {
    color: #666;
    font-size: 16px;
    padding-left: 10%;
}
.foot-right {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
}
.hj {
    color: #333;
    font-size: 15px;
}
.qjs {
    width: 40%;
    padding: 5% 0;
    margin-left: 2%;
    font-size: 18px;
    color: #fff;
    text-align: center;
    background-color: #fa1e8c;
}
.hjs i,
.hjp {
    color: #f20c59;
    font-size: 17px;
    font-weight: 600;
}
.hjs2 {
    color: #b3b8bd;
    font-size: 17px;
}
.qjs2 {
    width: 40%;
    padding: 5% 0;
    margin-left: 2%;
    font-size: 18px;
    color: #fff;
    text-align: center;
    background-color: #d7d8d9;
}
.jiesuan {
    color: #fff;
}
.sc {
    color: #fff;
    font-size: 20px;
}
</style>