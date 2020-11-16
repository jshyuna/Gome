<template>
  <div>
      <div class="section">
        <div class="bgi">

        </div>
        <div class="phone">
            <input type="text" placeholder="请输入手机号">
        </div>
        <div class="phone special">
            <input type="text" placeholder="请输入验证码">
            <p>获取验证码</p>
        </div>
        <div class="lince">
            <p>
                <i></i><span>未注册手机验证后自动注册,我已阅读并同意</span>
                <a href="">《国美平台服务协议》</a>
                <a href="">《国美平台隐私政策》</a>
                <a href="">《美付宝服务协议》</a>
            </p>
        </div>

        <div class="denglu">
            登录
        </div>

        <div class="other">
            <h2>账号密码登录</h2>
            <h2>新用户注册</h2>
        </div>

    </div>

    <div class="other-box">
        <p>其他登录方式，请关注第三方的用户隐私协议</p>
        <div class="other-footer">
            <ul>
                <li><a href=""><img src="../images/QQ.png" alt=""> </a></li>
                <li><a href=""><img src="../images/zfb.png" alt=""> </a></li>
                <li><a href=""><img src="../images/weibo.png" alt=""></a> </li>
                <li><a href=""><img src="../images/mdhy.png" alt=""> </a> </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .section {
            width: 100%;
            padding: 0 8%;
        }

        .bgi {
            width: 100%;
            height: 132px;
            background-image: url(../images/zc-01.png);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
        }

        .phone {
            width: 100%;
            height: 46px;
            border-bottom: 1px solid #ecedee;
        }

        .phone input {
            width: 100%;
            height: 100%;
            border: none;
            font-size: 17px;
            color: #ceced4;
        }

        .phone input::-webkit-input-placeholder {
            color: #acacac;
        }

        .special {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            margin-top: 11px;
        }

        .special p {
            width: 100px;
            margin-top: 16px;
            font-size: 15px;
            color: #d7ecf8;
        }

        .lince {
            width: 100%;
            margin-top: 13px;
        }

        .lince p {
            line-height: 1.7;
        }

        .lince p i {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 1px solid #dddee0;
            border-radius: 30%;
            margin-right: 2px;
        }

        .lince p span {
            color: #919599;
            font-size: 12px;
        }

        .lince p a {
            color: #78beeb;
            text-decoration: none;
            font-size: 12px;
        }

        .denglu {
            width: 100%;
            text-align: center;
            height: 55px;
            line-height: 55px;
            margin: 11px 0px;
            background-color: #ff83b0;
            border-radius: 30px;
            color: rgba(255, 255, 255, 0.5);
            font-size: 20px;
        }

        .other {

            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }

        .other h2 {
            font-size: 15px;
            color: #5A6066;
            font-weight: normal;
        }

        .other-box {
            width: 100%;
            padding: 20px;
            position: fixed;
            bottom: 0;
            left: 0;
            text-align: center;
        }

        .other-box p {
            position: relative;
            top: 10px;
            color: #c8c7c8;
            font-size: 13px;
        }

        .other-box ul {
            display: flex;
            justify-content: space-between;
        }

        .other-box ul li {
            width: 25%;
            padding: 23px;
            list-style: none;
        }

        .other-box ul li img {
            width: 100%;
            margin: 0 15px 0px 0px;
        }
</style>