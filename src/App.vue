<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link :to="{name:'Home'}">Home</router-link>
    <router-link to="/HelloWorld">Hello World </router-link>
    <router-link to="/CustComp">Customer </router-link>

    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
