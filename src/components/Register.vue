<template>
    <div>
        <div class="section">
            <div class="close" @click="btnback('page')">
                <img src="../images/close.png" alt />
            </div>
            <div class="bgi"></div>
            <div class="phone">
                <input type="text" placeholder="请输入手机号" v-model="accout"/>
            </div>
            <div class="phone special">
                <input type="text" placeholder="请输入验证码" v-model="pass"/>
                <p>获取验证码</p>
            </div>
            <div class="lince">
                <p>
                    <input type="checkbox" />
                    <span>未注册手机验证后自动注册,我已阅读并同意</span>
                    <a href>《国美平台服务协议》</a>
                    <a href>《国美平台隐私政策》</a>
                    <a href>《美付宝服务协议》</a>
                </p>
            </div>

            <div class="denglu" @click="denglu">登录</div>

            <div class="other">
                <h2>账号密码登录</h2>
                <h2>新用户注册</h2>
            </div>
        </div>

        <div class="other-box">
            <p>其他登录方式，请关注第三方的用户隐私协议</p>
            <div class="other-footer">
                <ul>
                    <li>
                        <a href="https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&pt_3rd_aid=210974&daid=383&pt_skey_valid=0&style=35&s_url=http%3A%2F%2Fconnect.qq.com&refer_cgi=authorize&which=&client_id=210974&redirect_uri=http://m.gome.com.cn/three_login_end.html&response_type=code&state=2fbb8e43c5b6478cab9a4814fbc6deb2&display=mobile">
                            <img src="../images/QQ.png" alt />
                        </a>
                    </li>
                    <li>
                        <a href ="https://auth.alipay.com/login/express.htm?goto=https%3A%2F%2Fmemberexprod.alipay.com%3A443%2Fauthorize%2FuserAuthQuickLoginAction.htm%3Fe_i_i_d%3D28e12a782902c5720604e42f62fecceb">
                            <img src="../images/zfb.png" alt />
                        </a>
                    </li>
                    <li>
                        <a href ="https://passport.weibo.cn/signin/login?entry=openapi&r=https%3A%2F%2Fapi.weibo.com%2Foauth2%2Fauthorize%3Fclient_id%3D3846583098%26response_type%3Dcode%26redirect_uri%3Dhttp%3A%2F%2Fm.gome.com.cn%2Fthree_login_end.html%26display%3Dmobile">
                            <img src="../images/weibo.png" alt />
                        </a>
                    </li>
                    <li>
                        <a href ="https://login.m.gome.com.cn/membership_card.html">
                            <img src="../images/mdhy.png" alt />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            accout: "",
            pass: "",
        };
    },
    methods: {
        btnback(a) {
            this.$router.push({
                path: "/",
            });
        },
        denglu() {
            if (this.accout == "" && this.pass == "") {
                alert("请输入账号密码");
            } else if (this.accout == "13016798381" && this.pass == "123456") {
                this.$router.push({
                    path: "/login",
                });
            } else {
                alert("账号");
            }
        },
    },
};
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
    color:#333;
    outline: none;
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

/* .lince p i {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 1px solid #dddee0;
            border-radius: 30%;
            margin-right: 2px;
        } */

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
    color: #5a6066;
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
.close img {
    width: 30px;
    height: 30px;
}
.close {
    position: absolute;
    top: 10px;
    left: 10px;
}
</style>