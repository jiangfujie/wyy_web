<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './views/Header';
import Footer from './views/Footer';
export default {
  components:{
    Header,Footer
  }
}
</script>
<style>
#app{
  padding: 0;margin: 0;box-sizing: border-box;
}
a{
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
ul{
  list-style: none;
}
</style>
