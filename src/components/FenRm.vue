<template>
    <div id="app">
        <div class="bside">
            <div class="class-right">
                <div class="jd">
                    <p>大家电</p>
                    <ul>
                        <li>
                            <a href>
                                <img src="../images/classes-01.png" alt />
                            </a>
                            <span>平板电视</span>
                        </li>
                        <li>
                            <a href>
                                <img src="../images/classes-02.png" alt />
                            </a>
                            <span>冰箱</span>
                        </li>
                        <li>
                            <a href>
                                <img src="../images/classes-03.png" alt />
                            </a>
                            <span>壁柜式空调</span>
                        </li>
                    </ul>
                </div>
                <div class="jd">
                    <p>数码通讯</p>
                    <ul>
                        <li>
                            <a href>
                                <img src="../images/classes-04.png" alt />
                            </a>
                            <span>手机</span>
                        </li>
                        <li>
                            <a href>
                                <img src="../images/classes-05.png" alt />
                            </a>
                            <span>笔记本电脑</span>
                        </li>
                        <li>
                            <a href>
                                <img src="../images/classes-06.png" alt />
                            </a>
                            <span>单反相机</span>
                        </li>
                    </ul>
                </div>
                <div class="jd">
                    <p>厨卫生活</p>
                    <ul>
                        <li>
                            <a href>
                                <img src="../images/classes-07.png" alt />
                            </a>
                            <span>电风扇</span>
                        </li>
                        <li>
                            <a href>
                                <img src="../images/classes-08.png" alt />
                            </a>
                            <span>空气净化器</span>
                        </li>
                        <li>
                            <a href>
                                <img src="../images/classes-09.png" alt />
                            </a>
                            <span>微波炉</span>
                        </li>
                    </ul>
                </div>
                <div class="jd">
                    <p>日用百货</p>
                    <ul>
                        <li>
                            <a href>
                                <img src="../images/classes-11.png" alt />
                            </a>
                            <span>品牌纸尿裤</span>
                        </li>
                        <li>
                            <a href>
                                <img src="../images/classes-12.png" alt />
                            </a>
                            <span>床品件套</span>
                        </li>
                    </ul>
                </div>
                <div class="jd">
                    <p>热门品牌</p>
                    <ul>
                        <li>
                            <a href>
                                <img src="../images/classes-13.png" alt />
                            </a>
                        </li>
                        <li>
                            <a href>
                                <img src="../images/classes-14.png" alt />
                            </a>
                        </li>
                        <li>
                            <a href>
                                <img src="../images/classes-15.png" alt />
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href>
                                <img src="../images/classes-16.png" alt />
                            </a>
                        </li>
                        <li>
                            <a href>
                                <img src="../images/classes-17.png" alt />
                            </a>
                        </li>
                        <li>
                            <a href>
                                <img src="../images/classes-18.png" alt />
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href>
                                <img src="../images/classes-19.png" alt />
                            </a>
                        </li>
                        <li>
                            <a href>
                                <img src="../images/classes-20.png" alt />
                            </a>
                        </li>
                        <li>
                            <a href>
                                <img src="../images/classes-21.png" alt />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bside {
    flex: 1;
    overflow: auto;
}
.jd {
    width: 100%;
}
.jd span{
    font-size: 7px;
    color: #666;
}
.jd > p {
    color: #999999;
    font-size: 7px;
    margin-left: 5px;
    margin-top: 5px;
}
.jd ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
}

.jd ul li {
  background-color: #f8f8f8;
    width: 30%;
    text-align: center;
    margin: 5px;
    padding: 5px;
    flex-shrink: 0;
}

.jd ul li img {
    width: 100%;
}
</style>