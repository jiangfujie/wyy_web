<template>
  <div class="hd-bg">
    <!-- logo -->
    <a href="javascript:;" class="logo">
      <img :src="require('../../public/images/header/logo.png')" alt="">
    </a>
    <!-- 导航 -->
    <ul class="hd-title" @click="active">
      <li class="active">发现音乐
        <div class="hot">HOT</div>
        <img class="sanjiao active" :src="require('../../public/images/header/sanjiao.png')" alt="">
      </li>
      <li>我的音乐
        <div class="hot">HOT</div>
        <img class="sanjiao" :src="require('../../public/images/header/sanjiao.png')" alt="">
      </li>
      <li>朋友
        <div class="hot">HOT</div>
        <img class="sanjiao" :src="require('../../public/images/header/sanjiao.png')" alt="">
      </li>
      <li>商城
        <div class="hot">HOT</div>
        <img class="sanjiao" :src="require('../../public/images/header/sanjiao.png')" alt="">
      </li>
      <li>音乐人
        <div class="hot">HOT</div>
        <img class="sanjiao" :src="require('../../public/images/header/sanjiao.png')" alt="">
      </li>
      <li>下载客户端
        <div class="hot active">HOT</div>
        <img class="sanjiao" :src="require('../../public/images/header/sanjiao.png')" alt="">
      </li>
    </ul>
    <!-- 搜索框 -->
    <div class="input">
      <input type="text" placeholder="音乐/视频/电台/用户">
      <img :src="require('../../public/images/header/sousuo.png')" alt="">
    </div>
    <!-- 右 -->
    <div class="right">
      <div class="chuang">
        创作者中心
      </div>
      <a href="javascript:;" @click="login(false)" v-if="!$store.state.userInfo">登录</a>
      <div class="loginok" v-else>
        <img class="avatar" :src="$store.state.url+$store.state.userInfo.avatar" alt="">
        <div class="list">
          <img style="margin:0 0 -6px 75px;" src="../../public/images/header/mesanjiao.png" alt="">
          <ul>
            <li>
              <img src="../../public/images/header/me.png" alt="">
              <span>我的主页</span>
              <span></span>
            </li>
            <li>
              <img src="../../public/images/header/msg.png" alt="">
              <span>我的消息</span>
              <span></span>
            </li>
            <li>
              <img src="../../public/images/header/dengji.png" alt="">
              <span>我的等级</span>
              <span></span>
            </li>
            <li>
              <img src="../../public/images/header/huiyuan.png" alt="">
              <span>VIP会员</span>
              <span></span>
            </li>
            <li>
              <img src="../../public/images/header/shezhi.png" alt="">
              <span>个人设置</span>
              <span></span>
            </li>
            <li>
              <img src="../../public/images/header/shimin.png" alt="">
              <span>实名认证</span>
              <span></span>
            </li>
            <li @click="logOut()">
              <img src="../../public/images/header/tuichu.png" alt="">
              <span>退出</span>
              <span></span>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
    <!-- login -->
    <Login :class="{'login-show':show}" @login="login"/>
  </div>
</template>

<script>
import Login from './Login.vue'
export default {
  data(){
    return {
      sanjiao:true
    }
  },
  methods:{
    active(e){
      var elem=e.target.parentNode.childNodes;
      for(var item of elem){
        item.className='';
        item.children[1].className='sanjiao';
      }
      if(e.target.tagName=='LI'){
        e.target.className='active';
        e.target.children[1].className='sanjiao active';
      }
    },
    login(show){
      this.$store.commit('setShow',show);
    },
    logOut(){
      this.$store.commit('setUserInfo','');
      sessionStorage.removeItem('userInfo');
    }
  },
  computed:{
    show(){
      return this.$store.state.show
    }
  },
  components:{
    Login
  },
  created(){
    var userInfo=JSON.parse(sessionStorage.getItem('userInfo'));
    this.$store.commit('setUserInfo',userInfo);
  }
}
</script>

<style>

  .hd-bg>.hd-title>li>div.hot{
    display: none;
  }
  .hd-bg>.hd-title>li>div.active{
    width: 25px;
    height: 10px;
    background: #c31010;
    color: #fff;
    font-size: 5px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 16px;
    right: -12px;
    border-radius: 5px;
  }
  .hd-bg>.hd-title>li:hover{
    background: #000;
  }
  .hd-bg>.hd-title>li.active{
    background: #000;
  }
  .hd-bg>.hd-title>li{
    display: inline-block;
    height: 100%;
    padding: 0 18px;
    line-height: 70px;
    color: #fff;
    font-size: 14px;
    position: relative;
  }
  .hd-bg>.hd-title{
    list-style: none;
    display: flex;
    height: 100%;
    min-width: 500px;
    align-items: center;
    margin-right: 10px;
  }
  .hd-bg>.logo{
    display: inline-block;
    width: 157px;
    height: 100%;
    margin-right: 30px;
    display: flex;
    align-items: center;
  }
  .hd-bg>.hd-title>li>img.sanjiao{
    display: none;
  }
  .hd-bg>.hd-title>li>img.active{
    display: block;
    width: 10px;
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -5px;
  }
  .hd-bg{
    background: #242424;
    min-width: 1100px;
    height: 70px;
    border-bottom: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hd-bg>.login-show{
    display: none;
  }
  .hd-bg>.login{
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    background: rgba(0, 0, 0, .5);
    width: 100%;
  }
  .hd-bg>.input{
    width: 158px;
    height: 32px;
    position: relative;
    margin-right: 10px;
  }
  .hd-bg>.input>input{
    border: 0;
    border-radius: 16px;
    height: 28px;
    outline: none;
    padding-left: 25px;
    font-size: 11px;
    line-height: 28px;
    color: #777;
  }
  .hd-bg>.input>img{
    width: 16px;
    position: absolute;
    top: 7px;
    left: 5px;
  }
  .hd-bg>.right{
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .hd-bg>.right>div.chuang{
    width: 130px;
    height: 28px;
    border: 1px solid #666;
    border-radius: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #ccc;
  }
  .hd-bg>.right>.chuang:hover{
    border-color: #ccc;
    color: #eee;
  }
  .hd-bg>.right>a{
    display: block;
    font-size: 12px;
    color: #777;
    text-decoration: none;
    margin-left: 10px;
    z-index: 100;
  }
  .hd-bg>.right>a:hover{
    text-decoration: underline;
    color: #999;
  }
  .hd-bg>.right>.loginok>.avatar{
    width: 35px;
    border-radius: 50%;
    margin-left: 20px;
  }
  .hd-bg>.right>.loginok{
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
  }
  .hd-bg>.right>.loginok:hover>.list{
    display: block;
  }
  .hd-bg>.right>.loginok>.list{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 30px;
    left: -43px;
    width: 170px;
    display: none;
    z-index: 100;
  }
  .hd-bg>.right>.loginok>.list>ul{
    width: 100%;
    border: 0.5px solid #000;
    background: #2b2b2b;
    border-radius: 4px;
  }
  .hd-bg>.right>.loginok>.list>ul>li{
    display: flex;
    align-items: center;
    padding: 5px 0;
    padding-left: 20px;
  }
  .hd-bg>.right>.loginok>.list>ul>li>span{
    margin-left: 10px;
    color: #aaa;
    font-size: 12px;
  }
  .hd-bg>.right>.loginok>.list>ul>li:hover{
    background: #333;
    cursor: pointer;
  }
  .hd-bg>.right>.loginok>.list>ul>li:nth-child(5),.hd-bg>.right>.loginok>.list>ul>li:last-child{
    border-top: 0.5px solid #000;
  }
</style>