<template>
    <div>
        <div class="description">
            <div class="description-con">
                <div class="description-con-title">
                    <p>主体</p>
                </div>
                <div class="description-con-body">
                    <div class="description-con-con">
                        <p class="con-body-item">
                            <span class="con-body-item-left">品牌</span>
                            <span class="con-body-right">苹果(APPLE)</span>
                        </p>
                        <p class="con-body-item">
                            <span class="con-body-item-left">型号</span>
                            <span class="con-body-right">iPhone 12</span>
                        </p>
                        <p class="con-body-item">
                            <span class="con-body-item-left">颜色</span>
                            <span class="con-body-right">蓝色</span>
                        </p>
                        <p class="con-body-item">
                            <span class="con-body-item-left">上市时间</span>
                            <span class="con-body-right">2020</span>
                        </p>
                        <p class="con-body-item">
                            <span class="con-body-item-left">上市月份</span>
                            <span class="con-body-right">10</span>
                        </p>
                        <p class="con-body-item">
                            <span class="con-body-item-left">入网许可证编号</span>
                            <span class="con-body-right">以官网信息为准</span>
                        </p>
                    </div>
                </div>
                <div class="description-con-title">
                    <p>基本信息</p>
                </div>
                 <div class="description-con-body">
                    <div class="description-con-con">
                        <p class="con-body-item">
                            <span class="con-body-item-left">机身尺寸</span>
                            <span class="con-body-right">146.7 *71.5 *7.4</span>
                        </p>
                        <p class="con-body-item">
                            <span class="con-body-item-left">机身重量</span>
                            <span class="con-body-right">162g</span>
                        </p>
                    </div>
                </div>
                 <div class="description-con-title">
                    <p>操作系统</p>
                </div>
                  
                 <div class="description-con-body">
                    <div class="description-con-con">
                        <p class="con-body-item">
                            <span class="con-body-item-left">操作系统</span>
                            <span class="con-body-right">iOS</span>
                        </p>
                    </div>
                </div>
                 <div class="description-con-title">
                     
                    <p>主芯片</p>
                </div>
                 <div class="description-con-body">
                    <div class="description-con-con">
                    </div>
                </div>
                 <div class="description-con-title">
                    <p>网络</p>
                </div>
                <div class="description-con-body">
                    <div class="description-con-con">
                        <p class="con-body-item">
                            <span class="con-body-item-left">双卡机类型</span>
                            <span class="con-body-right">双卡双待</span>
                        </p>
                        <p class="con-body-item">
                            <span class="con-body-item-left">SIM卡类型</span>
                            <span class="con-body-right">双卡 (nano‑SIM 卡)</span>
                        </p>
                    </div>
                </div>
                 <div class="description-con-title">
                    <p>存储</p>
                </div>
                <div class="description-con-body">
                    <div class="description-con-con">
                        <p class="con-body-item">
                            <span class="con-body-item-left">机身内存</span>
                            <span class="con-body-right">128G</span>
                        </p>
                        <p class="con-body-item">
                            <span class="con-body-item-left">运行内存</span>
                            <span class="con-body-right">已官网信息为准</span>
                        </p>
                    </div>
                </div>
                 <div class="description-con-title">
                    <p>摄像功能</p>
                </div>
                <div class="description-con-body">
                    <div class="description-con-con">
                        <p class="con-body-item">
                            <span class="con-body-item-left">后置摄像头</span>
                            <span class="con-body-right">双摄：1200 万像素超广角及广角</span>
                        </p>
                        <p class="con-body-item">
                            <span class="con-body-item-left">后置摄像头数量</span>
                            <span class="con-body-right">2</span>
                        </p>
                        <p class="con-body-item">
                            <span class="con-body-item-left">自动对焦</span>
                            <span class="con-body-right">支持</span>
                        </p>
                    </div>
                </div>
                <div class="description-con-title">
                    <p>电池信息</p>
                </div>
                 <div class="description-con-body">
                    <div class="description-con-con">
                    </div>
                </div>
                <div class="description-con-title">
                    <p>数据接口</p>
                </div>
                
                 <div class="description-con-body">
                    <div class="description-con-con">
                    </div>
                </div>
                <div class="description-con-title">
                    <p>手机特性</p>
                </div>
                 <div class="description-con-body">
                    <div class="description-con-con">
                    </div>
                </div>
                <div class="description-con-title">
                    <p>其他</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.description {
    width: 100%;
    padding: 2% 0;
    display: flex;
    flex-direction: column;
    background-color: #fff;
}
.description-con {
    width: 100%;
    font-size: 14px;
    color: #919599;
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
.description-con-con{
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
        