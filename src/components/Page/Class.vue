<template>
    <div id="app">
        <div class="pageClass">
            <div class="header">
                <div class="h-left" @click="btnback('page')">
                    <img src="../../images/back.png" alt />
                </div>
                <div class="h-center">
                    <span>iPhone12 Pro Max</span>
                    <img src="../../images/search_icon.png" alt class="search" />
                </div>
                <div class="h-right">
                    <img src="../../images/slh.png" alt />
                </div>
            </div>
            <div class="aside">
                <div class="side">
                    <ul>
                        <li :class="[fenName=='fen-rm'?'active':'']" @click="fenName='fen-rm'">热门分类</li>
                        <li :class="[fenName=='fen-sjsm'?'active':'']" @click="fenName='fen-sjsm'">手机数码</li>
                        <li :class="[fenName=='fen-dnbg'?'active':'']" @click="fenName='fen-dnbg'">电脑办公</li>
                        <li :class="[fenName=='fen-dsyy'?'active':'']" @click="fenName='fen-dsyy'">电视影音</li>
                        <li :class="[fenName=='fen-ktbx'?'active':'']" @click="fenName='fen-ktbx'">空调清洗</li>
                        <li :class="[fenName=='fen-cfwy'?'active':'']" @click="fenName='fen-cfwy'">厨房卫浴</li>
                        <li>生活电器</li>
                        <li>食品酒水</li>
                        <li>美妆个护</li>
                        <li>母婴玩具</li>
                        <li>营养保健</li>
                        <li>服饰鞋帽</li>
                        <li>运动户外</li>
                        <li>箱包奢品</li>
                        <li>钟表首饰</li>
                        <li>住宅家具</li>
                        <li>家装建材</li>
                        <li>家居日用</li>
                        <li>床品家纺</li>
                        <li>汽车用品</li>
                        <li>黄金收藏</li>
                        <li>智能家居</li>
                        <li>生活服务</li>
                    </ul>
                </div>
                <component :is="fenName"></component>
                <div class="bside">
                    <div class="class-right">
                        <div class="jd">
                            <p>大家电</p>
                            <ul>
                                <li>
                                    <a href>
                                        <img src="../../images/classes-01.png" alt />
                                    </a>
                                    <span>平板电视</span>
                                </li>
                                <li>
                                    <a href>
                                        <img src="../../images/classes-02.png" alt />
                                    </a>
                                    <span>冰箱</span>
                                </li>
                                <li>
                                    <a href>
                                        <img src="../../images/classes-03.png" alt />
                                    </a>
                                    <span>壁柜式空调</span>
                                </li>
                            </ul>
                        </div>
                        <div class="jd">
                            <p>数码通讯</p>
                            <ul>
                                <li>
                                    <a href>
                                        <img src="../../images/classes-04.png" alt />
                                    </a>
                                    <span>手机</span>
                                </li>
                                <li>
                                    <a href>
                                        <img src="../../images/classes-05.png" alt />
                                    </a>
                                    <span>笔记本电脑</span>
                                </li>
                                <li>
                                    <a href>
                                        <img src="../../images/classes-06.png" alt />
                                    </a>
                                    <span>单反相机</span>
                                </li>
                            </ul>
                        </div>
                        <div class="jd">
                            <p>厨卫生活</p>
                            <ul>
                                <li>
                                    <a href>
                                        <img src="../../images/classes-07.png" alt />
                                    </a>
                                    <span>电风扇</span>
                                </li>
                                <li>
                                    <a href>
                                        <img src="../../images/classes-08.png" alt />
                                    </a>
                                    <span>空气净化器</span>
                                </li>
                                <li>
                                    <a href>
                                        <img src="../../images/classes-09.png" alt />
                                    </a>
                                    <span>微波炉</span>
                                </li>
                            </ul>
                        </div>
                        <div class="jd">
                            <p>日用百货</p>
                            <ul>
                                <li>
                                    <a href>
                                        <img src="../../images/classes-11.png" alt />
                                    </a>
                                    <span>品牌纸尿裤</span>
                                </li>
                                <li>
                                    <a href>
                                        <img src="../../images/classes-12.png" alt />
                                    </a>
                                    <span>床品件套</span>
                                </li>
                            </ul>
                        </div>
                        <div class="jd">
                            <p>热门品牌</p>
                            <ul>
                                <li>
                                    <a href>
                                        <img src="../../images/classes-13.png" alt />
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        <img src="../../images/classes-14.png" alt />
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        <img src="../../images/classes-15.png" alt />
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href>
                                        <img src="../../images/classes-16.png" alt />
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        <img src="../../images/classes-17.png" alt />
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        <img src="../../images/classes-18.png" alt />
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href>
                                        <img src="../../images/classes-19.png" alt />
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        <img src="../../images/classes-20.png" alt />
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        <img src="../../images/classes-21.png" alt />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import FenSjsm from "../PageSub/FenSjsm.vue";
import FenRm from "../PageSub/FenRm.vue";
import FenDnbg from "../PageSub/FenDnbg.vue";
import FenDsyy from "../PageSub/FenDsyy.vue";
import FenKtbx from "../PageSub/FenKtbx.vue";
import FenCfwy from "../PageSub/FenCfwy.vue";
export default {
    data(){
        return {
            fenName: 'fen-rm',
        }
    },
    components: {
        'fen-rm': FenRm,
        'fen-sjsm': FenSjsm,
        'fen-dnbg': FenDnbg,
        'fen-dsyy': FenDsyy,
        'fen-ktbx': FenKtbx,
        'fen-cfwy': FenCfwy,
        
    },

    methods: {
        btnback(a) {
            this.$router.push({
                path: "/",
            });
        },
        btn(a) {
        this.name = a;
        },
    },
};
</script>

<style scoped>
html,
body,
#app,
.pageClass {
    height: 100%;
    width: 100%;
}

.pageClass {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.header {
    display: flex;
    flex-shrink: 0;
    padding:0 2%;
    border-bottom: 1px solid #ccc;
    justify-content: space-between;
    /* width: 145px; */
}
.h-center {
    width: 70%;
    display: flex;
    align-items: center;
    border-radius: 24px;
    background-color: #f6f6f6;
    margin-left: 29px;
    margin-top: 6px;
    margin-bottom: 6px;
}
.h-center span {
    font-size: 12px;
    color: #999;
    padding-left: 10px;
}
.search {
    width: 16px;
    height: 16px;
    margin-left: 136px;
}
.h-left img {
    width: 80%;
    margin-top: 5px;
}
.h-right img {
    margin-left: 12px;
    margin-top: 2px;
}
.aside {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    overflow: auto;
    justify-content: space-between;
}
.side {
    margin-top: 7px;
    width: 20%;
    height: 100%;
    flex-shrink: 0;
    overflow: auto;
    background-color: #f0f0f0;
}
.side ul {
    overflow: auto;
    flex-shrink: 0;
}
.side li {
    position: relative;
    width: 100%;
    height: 48px;
    line-height: 48px;
    text-align: center;
}
.side li {
    text-decoration: none;
}
.side li::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 7px;
    height: 1px;
    width: 80%;
    border-bottom: 1px solid #dddddd;
}
.bside {
    width: 80%;
    flex: 1;
    overflow: auto;
}
.jd {
    width: 100%;
}

.jd > p {
    color: #999999;
    font-size: 7px;
    margin-left: 5px;
    margin-top: 5px;
}
.jd ul {
    display: flex;
    list-style: none;
}

.jd ul li {
    background-color: #f8f8f8;
    width: 33.333%;
    text-align: center;
    margin: 5px;
    padding: 5px;
}

.jd ul li img {
    width: 100%;
    margin-bottom: 11px;
}
.active{
    border-left: 2px solid red;
    background-color: #fff;
    color: #f20c59;
}

</style>