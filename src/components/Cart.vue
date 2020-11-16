<template>
    <div class="gouwuche">
        <div class="header">
            <div class="h-left">
                <img src="../images/back.png" alt />
            </div>
            <div class="h-center">
                <h1 class="h-tit">购物车</h1>
            </div>
            <div class="h-right">
                <img src="../images/slh.png" alt />
            </div>
        </div>
        <div class="Setup">
                <p>立即登录，同步电脑和手机购物车中的商品</p>
                <a href=""><i>去登录</i></a>
            </div>
        <div class="empty">
            <img src="../images/bj_baobei.png" alt />
            <p>购物车还是空的</p>
            <div class="box1">
              <span><a href>逛逛首页</a></span>
              <span><a href>秒杀</a></span>
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
        </div>
    </div>
    
</template>

<script>
export default {};
</script>

<style scoped>
.gouwuche{
  background-color:rgb(243, 245, 247);
}
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
.h-right {
    width: 10%;
}
.Setup {
  display: flex;
  border-top: 1px solid#cacccf;
    padding: 4px 13px;
    height: 40px;
    font-size: 15px;
    color: #999;
    margin-bottom: 5px;
    justify-content: space-between;
    background-color: #fff;
}
.Setup a{
  text-decoration: none;
}
.Setup p {
  margin-top: 5px;
  
}

.Setup i {
    display: block;
    color: #5a6066;
    width: 65px;
    height:24px;
    text-align: center;
    border: 1px solid #cacccf;
    border-radius:1.24em;
    margin-top: 5px;
    font-style: normal;
}

.empty {
  width: 100%;
  text-align: center;
  margin-top: calc(140rem / 75);
}

.empty img {
  width:49px;
  height: 49px;
}

.empty p {
 color: #999;
    text-align: center;
    font-size: 15px;
    margin-bottom: 15px;
}

.box1{
  display: flex;
  justify-content: center;
}
.empty a {
  display: block;
  color: #333333;
  width: 99px;
  height:32px;
  background-color:rgb(243, 245, 247);
 margin-right: 15px;
  border: 1px solid #cacccf;
  border-radius:1.24em;
  line-height: 32px;
  text-align: center;
  text-decoration: none;
}
.cart-title{
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
}
.line{
  height: 1px;
  width: 24px;
  background: -webkit-linear-gradient(left,#ff0027,#d900b4,#f0f);
 
}
.icon{
  display: inline-block;
  width: 19px;
  height: 19px;
  background: url(../images/like.png) no-repeat;
  background-size: 100% 100%;
  margin-right: 2px;
  margin-left: 6px;
  margin-bottom: -3px;
}
.tuijian{
  font-size: 19px;
  color: #f20c59;
  margin-right: 2px;
}
</style>