<template>
    <div>
        <!-- 目录 -->
        <div class="classify">
            <div class="classify-left">
                <div
                    class="classify-item"
                    :class="[stateName=='page-jx'?'active':'']"
                    @click="stateName='page-jx'"
                >
                    <p>精选</p>
                </div>
                <div
                    class="classify-item"
                    :class="[stateName=='page-cs'?'active':'']"
                    @click="stateName='page-cs'"
                >
                    <p>国美超市</p>
                </div>
                <div
                    class="classify-item"
                    :class="[stateName=='page-gj'?'active':'']"
                    @click="stateName='page-gj'"
                >
                    <p>国美管家</p>
                </div>
                <div
                    class="classify-item"
                    :class="[stateName=='page-dn'?'active':'']"
                    @click="stateName='page-dn'"
                >
                    <p>手机电脑</p>
                </div>
                <div
                    class="classify-item"
                    :class="[stateName=='page-cj'?'active':'']"
                    @click="stateName='page-cj'"
                >
                    <p>橱柜厨具</p>
                </div>
                <div
                    class="classify-item"
                    :class="[stateName=='page-jd'?'active':'']"
                    @click="stateName='page-jd'"
                >
                    <p>国美家电</p>
                </div>
                <div
                    class="classify-item"
                    :class="[stateName=='page-ssj'?'active':'']"
                    @click="stateName='page-ssj'"
                >
                    <p>舒适家</p>
                </div>
                <div
                    class="classify-item"
                    :class="[stateName=='page-bh'?'active':'']"
                    @click="stateName='page-bh'"
                >
                    <p>食品百货</p>
                </div>
                <div
                    class="classify-item"
                    :class="[stateName=='page-jz'?'active':'']"
                    @click="stateName='page-jz'"
                >
                    <p>家居家装</p>
                </div>
            </div>
            <div class="classify-right">
                <!-- <div class="classify-right-img"> -->
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAQlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////8IX9KGAAAAFXRSTlMA7fOC11I4Ecy1PfWfi21oZTAiCOcL1HjnAAAAdElEQVQ4y+WTyQ6AIBBDQVZxX/r/vypGzCQKmbPYSw+8NKTpiC/LajmykAawRp8lXupUgs43G90joyZBCvCCSxLBbKJauaFfWKgFpItuZKbLu6cGQLjgDPVM2vNJ9Kd6xe+JljmVG6eN61LjdC3lJLq7/+oAXBYRruLDsRwAAAAASUVORK5CYII="
                    alt
                />
                <!-- </div> -->
                <span class="classify-right-fl">分类</span>
            </div>
        </div>
        <component :is="stateName"></component>

        <!-- 底部文字 -->
        <div class="other">
            <div class="other-img"></div>
            <p>互联网药品信息服务资格证编号（沪）-经营性-2019-0006</p>
            <p>营业执照 经营证照 增值电信业务经营许可证 出版物经营许可证</p>
            <p>网络文化经营许可证沪网文[2017]5537-436号 京B2-20191290</p>
            <p>
                <img src="../images/gwab-icon.png" alt /> 京公网安备11010502038379号 沪B2-20120004号
            </p>
            <p>沪ICP备11009419号/京ICP备19011786号</p>
            <p>网络食品销售第三方平台提供者备案：沪网食备A0015号</p>
            <p>copyright © 2000-2019 gome.com.cn</p>
            <p>客服热线: 4008-113-333</p>
        </div>
    </div>
</template>

<script>
import PageJx from "./PageJx.vue";
import PageCs from "./PageCs.vue";
import PageGj from "./PageGj.vue";
import PageDn from "./PageDn.vue";
import PageCj from "./PageCj.vue";
import PageJd from "./PageJd.vue";
import PageSsj from "./PageSsj.vue";
import PageBh from "./PageBh.vue";
import PageJz from "./PageJz.vue";

export default {
    data() {
        return {
            stateName: "page-jx",
        };
    },
    components: {
        "page-jx": PageJx,
        "page-cs": PageCs,
        "page-gj": PageGj,
        "page-dn": PageDn,
        "page-cj": PageCj,
        "page-jd": PageJd,
        "page-ssj": PageSsj,
        "page-bh": PageBh,
        "page-jz": PageJz,
    },
};
</script>

<style scoped>
/* 目录  */
.classify {
    display: flex;
    flex-direction: row;
    color: white;
    align-items: center;
    /* padding:10px 0; */
}
.classify-left {
    width: 85%;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: auto;
    background-color: #f20c59;
}
.classify-item {
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    padding: 10px;
}
.classify-right {
    width: 15%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    /* text-align: center; */
    /* flex-wrap: nowrap; */
    background-color: #ee1955;
}

.classify-right img {
    width: 30%;
    text-align: center;
}
.classify-right-fl {
    padding: 13px 0 12px;
    font-size: 16px;
    white-space: nowrap;
}
.active {
    font-size: 20px;
    font-weight: 800;
}
/* 底部文字 */
.other {
    text-align: center;
    margin-bottom: 10px;
}
.other p {
    line-height: 2;
    font-size: 12px;
    color: #7a7f85;
}
.other-img {
    width: 100%;
    height: 15px;
    background: url(../images/other.png) no-repeat 50%;
    background-size: 285px 15px;
}
</style>
