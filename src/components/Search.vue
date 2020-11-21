<template>
  <div>
       <div class="header">
                <div class="h-left" @click="btnback('page')">
                    <span class="qx">取消</span>
                </div>
                <div class="h-center">
                    <span class="iphone">iPhone12 Pro Max</span>
                    <img src="../images/search_icon.png" alt class="search" />
                </div>
        </div>
        <div class="search-show">
            <div class="hot">
                <img src="../images/hot.png" alt="">
                <span>热词推荐</span>
            </div>
            <div class="hot_word_container">
                <span>苹果手机</span>
                <span>Macbook</span>
                <span>海尔冰箱</span>
                <span>格力空调</span>
                <span>洗发水</span>
                <span>百得吸尘器</span>
                <span>西门子</span>
                <span>电脑包</span>
                <span>小米</span>
                <span>Airpods</span>
            </div>
        </div>
  </div>
</template>

<script>
export default {
 methods: {
        btnback(a) {
            this.$router.push({
                path: "/",
            });
        },
    }
}
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    border-bottom: 1px solid rgb(251, 251, 251);
    justify-content: space-between;
    width: 100%;
    padding: 4%;
}
.h-center {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 24px;
    background-color: #f6f6f6;
    padding:2%;
    /* margin-left: 29px;
    margin-top: 2px;
    margin-bottom: 2px; */
}
.iphone {
    font-size: 12px;
    color: #999;
    margin-left: 10px;
}
.search {
    width: 16px;
    height: 16px;
    /* margin-left: 146px; */
}
.qx{
    width: 10%;
    color: #666666;
}
.hot{
    display: flex;
    align-items: center;
    padding: 2%;
}
.hot img{
    height: 16px;
    width: 16px;
    margin-right: 5px;
}
.hot span{
    color: #333;
    font-size: 14px;
}
.hot_word_container{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 2%;
}
.hot_word_container span{
    display: inline-block;
    border: 1px solid #e6e6e6;
    color: #666;
    font-size: 14px;
    padding: 2%;
    margin:3px;
}
</style>