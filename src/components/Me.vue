<template>
    <div>
        <div class="header">
            <div class="h-left">
                <img src="../images/back.png" alt />
            </div>
            <div class="h-center">
                <h1 class="h-tit">我的国美</h1>
            </div>
            <div class="h-right">
                <img src="../images/slh.png" alt />
            </div>
        </div>
        <div class="center">
            <div class="userInfor">
                <a href class="userHead">
                    <img
                        src="//js.gomein.net.cn/plus/plus-public//images/public/shopdefault.jpg"
                        alt
                        class="toux"
                    />
                </a>
                <div>
                    <p>
                        <a href class="login">登录/注册</a>
                    </p>
                </div>
                <a href class="gift">
                    <span class="giftbtn"></span>
                </a>
                <a href class="msgbtn"></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* .me {
    background-color: #f2f2f2 !important;
    position: relative;
} */
.header {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 8%;
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
    margin: 6px auto;
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
.center {
    padding: 0.57rem 1.8rem 0.57rem 0.5rem;
    background: url("../images/mebg.png");
    background-size: 100%;
}
.uerInfor {
   width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    -webkit-box-align: center;
    -webkit-box-pack: start;
}
.toux {
    display: block;
    width: 1.1rem;
    height: 1.1rem;
    border: 0.03rem solid #fff;
    border-radius: 1.2rem;
}
.login {
    margin-left: 0.4rem;
    text-align: left;
    font-size: 0.36rem;
    font-weight: 700;
    color: #fff;
}
.gift {
    top: 0.07rem;
    right: 0.98rem;
}
.giftbtn {
    display: inline-block;
    width: 0.7rem;
    height: 0.57rem;
    background: url("../images/gift.gif") no-repeat;
    background-size: contain;
}
.msgbtn {
    display: inline-block;
    right: 0.3rem;
    top: 0.25rem;
    width: 0.41rem;
    height: 0.38rem;
    background: url("../images/qipao.png") center no-repeat;
    background-size: contain;
}
</style>