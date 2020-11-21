<template>
    <div>
        <div class="description-con">
            <div class="description-con-title">
                <p>包装清单</p>
            </div>
            <div class="description-con-body">
                <div class="description-con-con">
                    <p class="con-body-item">装有 iOS14 的 iPhone、USB-C 转闪电连接线、资料</p>
                </div>
            </div>
             <div class="description-con-title">
                <p>售后服务</p>
            </div>
            <div class="description-con-body">
                <div class="description-con-con">
                    <p class="con-body-item">本产品全国联保，享受三包服务，已拆封商品不支持7天无理由退货，已激活商品不支持7天无理由退货，退货商品需确保商品配件、包装、保修卡、说明书、产品本身等齐全。售后服务电话：400-666-8800品牌官方网站：http://www.apple.com.cn/</p>
                </div>
            </div>
             <div class="description-con-title">
                <p>包装清单</p>
            </div>
            <div class="description-con-body">
                <div class="description-con-con">
                    <p class="con-body-item">1.未划线价格： 商品展示的中间未划横线的价格，该价格是商品的销售标价，最终成交价格可能会因使用优惠券等原因而发生变化，请以订单结算页面价格为准。</p>
                    <p class="con-body-item">2.划线价格： 商品展示的中间划横线的价格，该价格是商品的参考价，可能是商品的厂商指导价、正品零售价、商品吊牌价、品牌专柜价，或者是在国美平台上曾经展示过的销售价等价格；由于地区、时间的差异性、市场行情波动、产品批次等因素，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，仅供您选购商品时参考。</p>
                    <p class="con-body-item">3.其他： 商品促销信息以商品详情页促销栏目中的信息为准；如您发现活动商品售价或促销信息有异常，请购买前先联系销售商咨询。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.description-con {
    width: 100%;
    padding: 2%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
}
.description {
    width: 100%;
    padding: 2% 0;
    display: flex;
    flex-direction: column;
    background-color: #fff;
}
.description-con {
    width: 100%;
    font-size: 13px;
    color: #5a6066;
    display: flex;
    flex-direction: column;
}
.description-con-title {
    padding: 2% 0;
}
.description-con-title > p {
    padding-left: 2%;
    border-left: 3px solid#f20c59;
}
.description-con-body {
    width: 100%;
    padding-left: 4%;
}
.description-con-con {
    width: 100%;
    border-bottom: 1px solid #dcddde;
}
.con-body-item {
    width: 100%;
    padding: 1% 0;
    display: flex;
    flex-direction: row;
}
.con-body-item-left {
    width: 17%;
}
.con-body-right {
    width: 83%;
    font-size: 13px;
    color: #00050a;
    margin-left: 13%;
}

</style>