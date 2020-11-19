<template>
    <div>
        <!-- 懒加载 底部分 -->
        <div class="lazy-bot">
            <div class="lazy-bot-left">
                <div class="lazy-bot-left-cons">
                    <div class="lazy-bot-left-item" v-for="item in QbLazyLeftList" :key="item.id" @click="btnxq('detail')">
                        <a href="#" class="lazy-bot-left-item-con">
                            <div class="lazy-bot-left-item-img">
                                <img :src="item.imgUrl" alt />
                            </div>
                            <div class="lazy-bot-left-item-site">
                                <div class="lazy-bot-left-item-site-con">
                                    <img :src="item.LogoImgUrl" alt />
                                    <span class="lazy-bot-left-item-site-name">{{item.siteName}}</span>
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
                                <span class="lazy-bot-left-item-other-tag">{{item.otherPrice}}</span>
                            </div>
                            <div class="lazy-bot-left-item-other-price">
                                <div class="item-other-price">
                                    <i>￥</i>
                                    <big>{{item.price}}</big>
                                </div>
                                <div class="alike">
                                    <a href>找相似</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lazy-bot-right">
                <div class="lazy-bot-right-cons">
                    <div class="lazy-bot-right-item" v-for="item in QbLazyRightList" :key="item.id">
                        <a href="#" class="lazy-bot-right-item-con">
                            <div class="lazy-bot-right-item-img">
                                <img :src="item.imgUrl" alt />
                            </div>
                            <div class="lazy-bot-right-item-site">
                                <div class="lazy-bot-right-item-site-con">
                                    <img :src="item.LogoImgUrl" alt />
                                    <span class="lazy-bot-right-item-site-name">{{item.siteName}}</span>
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
                                <span class="lazy-bot-right-item-other-tag">{{item.otherPrice}}</span>
                            </div>
                            <div class="lazy-bot-right-item-other-price">
                                <div class="item-other-price">
                                    <i>￥</i>
                                    <big>{{item.price}}</big>
                                </div>
                                <div class="alike">
                                    <a href>找相似</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Detail from "../Detail.vue";
export default {
    data() {
        return {
             // 懒加载 底 左部分
            QbLazyLeftList: [],
            // 懒加载 底 右部分
            QbLazyRightList: [],
        };
    },
    methods:{
        btnxq(a) {
            this.$router.push({
                path:"/detail"
            })
        }
    },
    components:{
         "detail":Detail
    },

    created(){
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
        }
    }
};
</script>

<style scoped>
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
    font-weight: 400;
    padding: 0 4px;
    border: 1px solid #ccc;
    border-radius: 10px;
}
.alike > a {
    color: #666;
}
</style>