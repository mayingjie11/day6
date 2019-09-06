<template>
  <div id="app">
    <main class="main"> <router-view/></main>
    <footer class="footer">
        <router-link to="/home" tag="span">首页</router-link>
        <router-link to="/my" tag='span'>我的</router-link>
    </footer>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  outline: none;
  appearance: none;
  user-select: none;
  box-sizing: border-box;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
#app{
  display: flex;
  flex-direction: column;
}
.main{
  flex: 1;
  overflow: auto;
}
.footer{
  width: 100%;
  height: 44px;
  border-top: 1px solid #cccccc;
  display: flex;
}
span{
  flex: 1;
  text-align: center;
  line-height: 50px;
}
</style>
