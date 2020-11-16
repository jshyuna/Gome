<template>
  <div>
      <div class="header">
            <div class="h-left">
                <img src="../images/back.png" alt />
            </div>
            <div class="h-center">
                <h1 class="h-tit">消息列表</h1>
            </div>
      </div>
      <div class="noxiaoxi">
        <span class="text1">暂无客服聊天信息哟～</span>
      </div>
  </div>
</template>

<script>
export default {

}
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
.text1{
  color: #919599;
  font-size: 14px;
}
</style>