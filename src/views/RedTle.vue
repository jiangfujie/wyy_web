<template>
  <div class="red-tle">
    <ul class="tle">
      <li><router-link :class="{active:shuxing=='tuijian'}" to="/discover">推荐</router-link></li>
      <li><router-link :class="{active:shuxing=='top'}" to="/discover/toplist/biaosheng">排行</router-link></li>
      <li><router-link :class="{active:shuxing=='gedan'}" to="">歌单</router-link></li>
      <li><router-link :class="{active:shuxing=='diantai'}" to="">主播电台</router-link></li>
      <li><router-link :class="{active:shuxing=='geshou'}" to="">歌手</router-link></li>
      <li><router-link :class="{active:shuxing=='newmuisc'}" to="">新碟上架</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
props:["shuxing"]
}
</script>

<style>
 .red-tle{
    width: 100%;
    height: 40px;
    background: #c20c0c;
  }
  .red-tle>.tle{
    width: 600px;
    height: 100%;
    margin:auto;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
   .red-tle>.tle>li{
    display: inline-block;
    height: 100%;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .red-tle>.tle>li>a{
    display: inline-block;
    font-size: 14px;
    color: #fff;
    padding: 3px 14px;
    text-decoration: none;
    border-radius: 15px;
  }
  .red-tle>.tle>li>a.active{
    background: #9b0909;
  }
  .red-tle>.tle>li:hover>a{
    padding: 3px 14px;
    background: #9b0909;
    border-radius: 15px;
  }

</style>