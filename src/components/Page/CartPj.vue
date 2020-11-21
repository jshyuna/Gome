<template>
    <div>
        <div class="pj">
          <ul class="evaluate_nav_list">
            <li>全部</li>
            <li>好评(0)</li>
            <li>中评(0)</li>
            <li>差评(0)</li>
            <li>有图(0)</li>
            <li>不看默认评价</li>
          </ul>
          <div class="praise_degree">
            <div class="degree_text">
              <p class="hp">好评度</p>
              <p class="Percentage">
                100
                <span>%</span>
              </p>
            </div>
          </div>
        </div>
        <div class="no">
          <img src="//css.gomein.net.cn/plus/style/product/item/images/no-one.png?v=2017092001" alt="">
          <p>还没有人评价过此商品哦~</p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pj{
  display: flex;
  justify-content: space-between;
}
.evaluate_nav_list{
  background: white;
  display: flex;
  padding:0 2%;
  width: 85%;
  flex-wrap: wrap;

}
.evaluate_nav_list li{
  background-color: #FFE4ED;
    color: #262c32;
    border-radius: 16px;
    text-align: center;
    font-size: 12px;
    padding: 2%;
    margin:2%;
    flex-shrink: 0;
}
.praise_degree{
  width: 15%;
  background: white;
  display: flex;
  align-items: center;
}
.hp{
  font-size: 12px;
  color: #666666;
}
.Percentage{
    font-size: 23px;
    margin-top: 9px;
    color: #F20C59;
     margin-left: -11px;
}
.Percentage span{
  font-size: 12px;
  margin-left: -5px;
}
.no img{
  width: 60px;
  height: 77px;
}
.no{
    margin-top: 20%;
    text-align: center;
    /* height: 12rem; */
}
.no p{
  margin-top: 2%;
    font-size: 13px;
    color: #666;
}
</style>