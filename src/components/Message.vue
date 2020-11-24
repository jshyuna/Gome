<template>
    <div>
        <div class="header">
            <div class="h-left" @click="btnback('page')">
                <img src="../images/back.png" alt />
            </div>
            <div class="h-center">
                <h1 class="h-tit">消息列表</h1>
            </div>
        </div>
        <div class="noxiaoxi">
            <span class="text1">暂无客服聊天信息哟～</span>
        </div>
        <div class="guide">
            <p class="recommend-title">全程导购</p>
            <div class="item-container">
                <div class="title-wrap">
                    <img src="//gfs12.gomein.net.cn/T1p2d7B_ZT1RCvBVdK_60_60.jpg" alt class="tx" />
                </div>
                <div class="guide-info">
                    <ul class="guide-left">
                        <li>
                            <span class="online"></span>
                            <span class="name">白新炜</span>
                        </li>
                        <li>
                            <div class="flag">
                                <span class="font22">全程导购</span>
                            </div>
                        </li>
                        <li class="font20">
                            <span>已服务</span>
                            <span>388</span>
                            <span>单</span>
                        </li>
                    </ul>
                    <ul class="guide-right">
                        <li>
                            <img src="../images/zixun.png" alt />
                        </li>
                    </ul>
                </div>
            </div>
            <div class="good-brand-list">
                <span>所属品牌：家安保 长虹(CHANGHONG) 容声(Ronshen) 海信(Hisense) 霍尼韦尔(Honeywell) 艾栖 瑞好 乔治 伟星 日立(HITACHI)</span>
            </div>
            <ul class="sale-tags-list">
                <li><span>延保服务</span> </li>
                <li><span>彩电配件</span> </li>
                <li><span>冰洗配件</span> </li>
            </ul>
             <div class="item-container">
                <div class="title-wrap">
                    <img src="//gfs11.gomein.net.cn/T1SZb7BsWv1RCvBVdK_60_60.jpg" alt class="tx" />
                </div>
                <div class="guide-info">
                    <ul class="guide-left">
                        <li>
                            <span class="online"></span>
                            <span class="name">任小娟</span>
                        </li>
                        <li>
                            <div class="flag">
                                <span class="font22">全程导购</span>
                            </div>
                        </li>
                        <li class="font20">
                            <span>已服务</span>
                            <span>273</span>
                            <span>单</span>
                        </li>
                    </ul>
                    <ul class="guide-right">
                        <li>
                            <img src="../images/zixun.png" alt />
                        </li>
                    </ul>
                </div>
            </div>
            <div class="good-brand-list">
                <span>家安保 戴尔(DELL) 惠普(HP) 欧珀(OPPO) iQOO 中国联通 中国移动 中国电信 浦诺菲(pivoful) 华为智选</span>
            </div>
            <ul class="sale-tags-list">
                <li><span>延保服务</span> </li>
                <li><span>电脑</span> </li>
                <li><span>手机配件</span> </li>
            </ul>
             <div class="item-container">
                <div class="title-wrap">
                    <img src="//gfs11.gomein.net.cn/T1LoW7BTx_1RCvBVdK_60_60.jpg" alt class="tx" />
                </div>
                <div class="guide-info">
                    <ul class="guide-left">
                        <li>
                            <span class="online"></span>
                            <span class="name">贺韬</span>
                        </li>
                        <li>
                            <div class="flag">
                                <span class="font22">全程导购</span>
                            </div>
                        </li>
                        <li class="font20">
                            <span>已服务</span>
                            <span>388</span>
                            <span>单</span>
                        </li>
                    </ul>
                    <ul class="guide-right">
                        <li>
                            <img src="../images/zixun.png" alt />
                        </li>
                    </ul>
                </div>
            </div>
            <div class="good-brand-list">
                <span>泥河湾 纳措琼母 栾川印象 兰格格 見龍山 红井源 和田玉枣 高原之宝(TREASURE OF PLATEAU) 凤林溪语 二二四臻品</span>
            </div>
            <ul class="sale-tags-list">
                <li><span>百货-食品饮料</span> </li>
                <li><span>环境小家电</span> </li>
            </ul>
            <div class="item-container">
                <div class="title-wrap">
                    <img src="//gfs11.gomein.net.cn/T1rUb7BKAv1RCvBVdK_60_60.jpg" alt class="tx" />
                </div>
                <div class="guide-info">
                    <ul class="guide-left">
                        <li>
                            <span class="online"></span>
                            <span class="name">孟刘坤</span>
                        </li>
                        <li>
                            <div class="flag">
                                <span class="font22">全程导购</span>
                            </div>
                        </li>
                        <li class="font20">
                            <span>已服务</span>
                            <span>9</span>
                            <span>单</span>
                        </li>
                    </ul>
                    <ul class="guide-right">
                        <li>
                            <img src="../images/zixun.png" alt />
                        </li>
                    </ul>
                </div>
            </div>
            <div class="good-brand-list">
                <span>家安保 惠普(HP) 联想(lenovo) 荣耀(HONOR) 欧珀(OPPO) 苹果(APPLE) 华为(HUAWEI) 国美(GOME) 博士 三洋(SANYO)</span>
            </div>
            <ul class="sale-tags-list">
                <li><span>延保服务</span> </li>
                <li><span>电脑</span> </li>
                <li><span>手机/通讯</span> </li>
                <li><span>洗衣机</span> </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
         btnback(a) {
            this.$router.push({
                path:"/"
            })
        }
    }
};
</script>

<style scoped>
.header {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    background-color: #fff;
}
.h-tit {
    display: inline-block;
    line-height: 100%;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    font-weight: normal;
    margin: 14px auto;
}
.h-left {
    width: 10%;
}
.h-center {
    width: 80%;
    height: 100%;
}
.text1 {
    color: #919599;
    font-size: 14px;
}
.noxiaoxi {
    color: #919599;
    background: #f3f5f7;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 4%;
}
.recommend-title {
    padding: 4%;
    color: #333;
    font-size: 20px;
  
}
.guide-info {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding-right: 12px;
    padding-left: 12px;
}
.online {
    display: inline-block;
    background-color: #09bb07;
    width: 9px;
    height: 9px;
    border-radius: 50%;
}
.name {
    display: inline-block;
    font-size: 13px;
    color: #262c32;
    line-height: 18.5px;
    margin-left: 2px;
}
.flag {
    width: 56px;
    height: 15px;
    background-color: #e6b365;
    color: #fff;
    text-align: center;
    border-radius: 25px;
}
.font22 {
    font-size: 12px;
    display: inline-block;
    vertical-align: middle;
    margin-top: -11px;
}
.font20 {
    color: #919599;
    font-size: 12px;
}
.font20 span {
    margin-right: 2px;
}

.guide-right img {
    height: 42px;
    width: 42px;
}
.tx {
    width: inherit;
    height: auto;
    border-radius: 50%;
}
.item-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2%;
    border-top: 1px solid rgb(251, 251, 251);
}
.good-brand-list{
  padding-left:20%;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: -14px;
}
.sale-tags-list{
    display: flex;
    padding-left: 19%;
    font-size: 12px;
    padding-bottom: 8px;
}
.sale-tags-list span{
    display: inherit;
    color: #262c32;
    background-color: #f3f5f7;
    border-radius: 20px;
    letter-spacing: .72px;
    padding: 7px 7px;
    text-align: center;
}
.title-wrap{
    padding-top: 2%;
}
</style>