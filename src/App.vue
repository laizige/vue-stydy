<template>
  <div id="app">
    <NavView></NavView>
    <!-- <HomeView></HomeView> -->
    <router-view/>
    <FooterView></FooterView>
  </div>
</template>

<script>
import NavView from './components/Nav'
import HomeView from './components/Home'
import FooterView from './components/Footer'
export default {
    name: 'App',
    components:{
      NavView,
      HomeView,
      FooterView
    },
    mounted(){
      this.slider();
    },
    methods:{
      slider(){
        console.log("页面加载完成");
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul li{list-style: none;}
</style>
