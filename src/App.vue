<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {};
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html, 
body,
#app
{
    height: 100%;
    width: 100%;
}
#app{
    display: flex;
    flex-direction: column;
    justify-content:space-between;
}
a{
    text-decoration: none;
}
.middle-auto{
    overflow: auto;
}
i{
   font-style: normal; 
}
li{
    list-style: none;
}
</style>
