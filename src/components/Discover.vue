<template>
  <div class="">
    <div class="banner">
      <RedTle shuxing="tuijian"/>
      <!-- 轮播图 -->
      <Carousel/>
    </div>
    <!-- 主体 -->
    <div class="discover">
      <!-- 左侧 -->
      <div class="dis-left">
        <!-- 热门推荐 -->
        <div class="dis-left-rementj">
          <!-- title -->
          <table></table>
          <div class="remen-title">
            <div class="remen-tle-left">
              <img :src="require('../../public/images/discover/yuan.png')" alt="">
              <div style="font-size:20px;">热门推荐</div>
              <div class="huayu">
                <div><a href="javascript:;">华语</a></div>
                <div><a href="javascript:;">流行</a></div>
                <div><a href="javascript:;">摇滚</a></div>
                <div><a href="javascript:;">民谣</a></div>
                <div><a href="javascript:;">电子</a></div>
              </div>
            </div>
            <div class="remen-tle-right">
              <a href="javascript">更多</a>
              <img :src="require('../../public/images/discover/more.png')" alt="">
            </div>
          </div>
          <!-- 热门推荐 -->
          <div class="remenlist">
            <div class="remenitem" v-for="(item,i) of remenList" :key="i">
              <div class="tupianquyu">
                <img :src="$store.state.url+item.reimg" alt="">
                <!-- 遮罩层 -->
                <div class="zhezhao">
                  <div class="bofangcount">
                    <img :src="require('../../public/images/discover/erji.png')" alt="">
                    <div style="color:#ccc;font-size:12px;">{{item.recount}}</div>
                  </div>
                  <img :src="require('../../public/images/discover/bofang.png')" alt="">
                </div>
              </div>
              <!-- 音乐标题 -->
              <a href="javascript:;">{{item.retitle}}</a>
            </div>
          </div>
          <!-- 新碟上架 -->
          <div class="newmusic">
            <!-- title -->
            <div class="nm-tle">
              <div class="nm-tle-left">
                <img :src="require('../../public/images/discover/yuan.png')" alt="">
                <div style="font-size:20px;">新碟上架</div>
              </div>
              <div class="nm-tle-right">
                <a href="javascript:;">更多</a>
                <img :src="require('../../public/images/discover/more.png')" alt="">
              </div>
            </div>
            <!-- img -->
            <div class="kuang">
              <div @click="moveTo(-1)">
                <img :src="require('../../public/images/discover/left.png')" alt="">
              </div>
              <div class="content">
                <ul :style="{width:118*15+'px',marginLeft:-590*timer+'px'}" :class="{active:ac}">
                  <li v-for="(item,i) of newmusic" :key="i">
                    <div class="img" style="position:relative;">
                      <img :src="$store.state.url+item.newimg" alt="">
                      <img :src="require('../../public/images/discover/bofang.png')" alt="">
                    </div>
                    <a>{{item.newtitle}}</a>
                    <a>{{item.newman}}</a>
                  </li>
                  <!-- 数据没回来之前暂时先不显示 -->
                  <template v-if="newmusic.length>0">
                    <li>
                      <div>
                        <img :src="$store.state.url+newmusic[0].newimg" alt="">
                      </div>
                      <a>{{newmusic[0].newtitle}}</a>
                      <a>{{newmusic[0].newman}}</a>
                    </li>
                    <li>
                      <div>
                      <img :src="$store.state.url+newmusic[1].newimg" alt=""></div>
                      <a>{{newmusic[1].newtitle}}</a>
                      <a>{{newmusic[1].newman}}</a>
                    </li>
                    <li>
                      <div>
                      <img :src="$store.state.url+newmusic[2].newimg" alt=""></div>
                      <a>{{newmusic[2].newtitle}}</a>
                      <a>{{newmusic[2].newman}}</a>
                    </li>
                    <li>
                      <div>
                      <img :src="$store.state.url+newmusic[3].newimg" alt=""></div>
                      <a>{{newmusic[3].newtitle}}</a>
                      <a>{{newmusic[3].newman}}</a>
                    </li>
                    <li>
                      <div>
                      <img :src="$store.state.url+newmusic[4].newimg" alt=""></div>
                      <a>{{newmusic[4].newtitle}}</a>
                      <a>{{newmusic[4].newman}}</a>
                    </li>
                  </template>
                </ul>
              </div>
              <div @click="moveTo(1)">
                <img src="../../public/images/discover/right.png" alt="">
              </div>
            </div>
          </div>
          <!-- 榜单 -->
          <div class="newmusic">
            <div class="nm-tle">
              <div class="nm-tle-left">
                <img :src="require('../../public/images/discover/yuan.png')" alt="">
                <div style="font-size:20px;">榜单</div>
              </div>
              <div class="nm-tle-right">
                <a href="javascript:;">更多</a>
                <img :src="require('../../public/images/discover/more.png')" alt="">
              </div>
            </div>
            <!-- 榜单主体 -->
            <div class="bangdan">
              <div class="list1" v-for="(item,i) of bangdan" :key="i">
                <div>
                  <!-- 左侧中图 -->
                  <img style="width:80px;" :src="$store.state.url+item.list[0].bdimg" alt="">
                  <div>
                    <!-- 云音乐飙升榜 -->
                    <div>
                      <router-link :to="'/discover/toplist/'+item.mclass" style="font-size:13px;margin-top:5px;color:#000;font-weight:bold;">{{item.title}}</router-link>
                    </div>
                    <div style="margin-top:5px;display:flex;">
                      <img :src="require('../../public/images/discover/bofang1.png')" alt="">
                      <img :src="require('../../public/images/discover/tianjia.png')" alt="">
                    </div>
                  </div>
                </div>
                <ul>
                  <li v-for="(item,i) of item.list" :key="i">
                    <div>
                      <div style="margin-left:5px; font-size:16px;">{{i+1}}</div>
                      <div>
                        <a href="javascript:;" style="margin-left:5px; font-size:12px;color:#333;">{{item.bmusicname}}</a>
                      </div>
                    </div>
                    <div>
                      <img :src="require('../../public/images/discover/sanjiao.png')" alt="">
                      <img :src="require('../../public/images/discover/tj.png')" alt="">
                      <img :src="require('../../public/images/discover/sc.png')" alt="">
                    </div>
                  <li>
                    <a href="javascript:;" style="width:100%;text-align:right;color:#555;font-size:12px;">查看更多></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="dis-right">
        <!-- login -->
        <div class="login-text">
          <!-- 未登录 -->
          <template v-if="!$store.state.userInfo">
            <div class="text">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
            <div class="user" @click="userLogin">用户登录</div>
          </template>
          <!-- 已登录 -->
          <div class="loginok" v-else>
            <div class="img">
              <img :src="$store.state.url+$store.state.userInfo.avatar" alt="">
            </div>
            <div class="right-text">
              <a class="name">{{$store.state.userInfo.uname}}</a>
              <div class="btn">签到</div>
            </div>
          </div>
        </div>
        <!-- 入住歌手 -->
        <div class="join-music">
          <div class="title">
            <h4>入驻歌手</h4>
            <a href="javascript:;">查看全部></a>
          </div>
          <div class="join-item" v-for="(item,i) of joinList" :key="i">
            <img :src="$store.state.url+item.jimg" alt="" style="height:55px;">
            <div class="music-man">
              <h4>{{item.jname}}</h4>
              <div>{{item.jmiaosu}}</div>
            </div>
          </div>
          <h6 class="shenqing">申请成为网易音乐人</h6>
        </div>
        <!-- 热门主播 -->
        <div class="hotman">
          <h4>热门主播</h4>
          <div class="hotman-item" v-for="(item,i) of zhubo" :key="i">
            <img :src="$store.state.url+item.himg" alt="">
            <div class="item-tle">
              <div class="subtle">
                <a href="javascript:;" style="color:#000;font-size:12px;">{{item.hname}}</a>
                <img style="width:13px" src="../../public/images/discover/v.png" alt="">
              </div>
              <p style="color:#888;font-size:10px;">{{item.hmiaosu}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  
</template>

<script>
import Carousel from '../views/Carousel';
import RedTle from '../views/RedTle'
export default {
  data(){
    return {
      newmusic:[],
      c:15,
      timer:0,
      ac:true,
      click:true,
      remenList:[],
      bangdan:{},
      joinList:[],
      zhubo:[]
    }
  },
  methods:{
    moveTo(t){
      if(this.click){
        this.click=false;
        if(t==1&&this.timer==1){
          this.timer+=1;
          setTimeout(()=>{
            this.ac=false;
            setTimeout(()=>{
              this.timer=0;
              setTimeout(()=>{
                this.ac=true;
                setTimeout(()=>{
                  this.click=true;
                },300)
              },30)
            },30)
          },500)
        }else if(t==-1&&this.timer==0){
          this.ac=false;
          setTimeout(()=>{
            this.timer=2;
            setTimeout(()=>{
              this.ac=true;
              setTimeout(()=>{
                this.timer+=t;
                setTimeout(()=>{
                  this.click=true
                },1000)
              },30)
            },50)
          },10)
        }else if(this.timer>=0&&this.timer<2){
          this.timer+=t;
          setTimeout(()=>{
            this.click=true
          },1000)
        }
      }
    },
    // 获取热门主播
    hotman(){
      this.$axios.get('/discover/hotman')
      .then(res=>{
        this.zhubo=res.data;
      })
    },
    // 获取已加入的音乐名单
    loadjoin(){
      this.$axios.get('/discover/joinman')
      .then(res=>{
        this.joinList=res.data
      })
    },
    // 加载热门推荐列表数据
    loadremen(){
      this.$axios.get('/discover/rementuijian')
      .then(res=>{
        this.remenList=res.data;
      }).catch(e=>console.log(e));
    },
    // 页面创建完成加载新歌推荐列表数据
    loadnew(){
      this.$axios.get('/discover/newmusic')
      .then(res=>{
        this.newmusic=res.data;
      }).catch(e=>console.log(e))
    },
    // 获取榜单飙升榜
    loadBiaosheng(){
      this.$axios.get('/discover/bangdan')
      .then(res=>{
        this.bangdan=res.data
      })
    },
    // 用户登录
    userLogin(){
      this.$store.commit('setShow',false)
    }
  },
  components:{Carousel,RedTle},
  created(){
    this.loadremen();
    this.loadnew();
    this.loadBiaosheng();
    this.loadjoin();
    this.hotman();
  }
}
</script>

<style>
  a{
    text-decoration: none;
  }
  a:hover{
    text-decoration: underline;
  }
  img{
    cursor: pointer;
  }
  .banner{
    border-bottom: 1px solid #d3d3d3;
  }
  .discover{
    width: 935px;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    margin: auto;
    background: #fff;
    display: flex;
  }
  .discover>.dis-right{
    width: 235px;
  }
  .discover>.dis-right>.hotman{
    padding: 20px;
  }
  .discover>.dis-right>.hotman>h4{
    border-bottom: 1px solid #d3d3d3;
    font-size: 14px;
    color: #333;
    padding: 5px;
  }
  .discover>.dis-right>.hotman>.hotman-item{
    display: flex;
    align-items: center;
    margin: 10px 0;
    height: 40px;
  }
  .discover>.dis-right>.hotman>.hotman-item>.item-tle{
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 120px;
  }
  .discover>.dis-right>.hotman>.hotman-item>.item-tle>p{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
  }
  .discover>.dis-right>.hotman>.hotman-item>.item-tle>.subtle{
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
  }
  .discover>.dis-right>.login-text{
    width: 100%;
    background: #efefef;
    padding: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #d3d3d3;
  }
  .discover>.dis-right>.login-text>.text{
    color: #555;
    font-size: 12px;
    line-height: 20px;
  }
  .discover>.dis-right>.login-text>.user{
    width: 90px;
    height: 27px;
    border-radius: 4px;
    margin: 10px auto;
    text-align: center;
    line-height: 27px;
    color: #eee;
    background: #c20c0c;
    font-size: 13px;
    opacity: .8;
  }
  .discover>.dis-right>.login-text>.loginok{
    width: 100%;
    display: flex;
    align-items: center;
    background: #eee;
  }
  .discover>.dis-right>.login-text>.loginok>.img{
    padding: 2px;
    border: 0.5px solid #888;
  }
  .discover>.dis-right>.login-text>.loginok>.img>img{
    width: 80px;
    height: 80px;
  }
  .discover>.dis-right>.login-text>.loginok>.right-text{
    flex: 1;
    margin-left: 10px;
    display: flex;
    height: 90px;
    flex-direction: column;
    justify-content: space-between;
  }
  .discover>.dis-right>.login-text>.loginok>.right-text>.name{
    font-size: 18px;
    font-weight: bold;
  }
  .discover>.dis-right>.login-text>.loginok>.right-text>.btn{
    width: 100%;
    height: 30px;
    border-radius: 3px;
    background: #3282ce;
    text-align: center;
    line-height: 30px;
    color: #eee;
    opacity: 0.9;
  }
  .discover>.dis-right>.login-text>.loginok>.right-text>.btn:hover{
    opacity: 1;
  }
  .discover>.dis-right>.login-text>.user:hover{
    opacity: 1;
    cursor: pointer;
  }
  .discover>.dis-right>.join-music{
    padding: 20px;
    width: 100%;
  }
  .discover>.dis-right>.join-music>.title{
    display: flex;
    justify-content: space-between;
    padding: 5px;
    align-items: flex-end;
    border-bottom: 1px solid #aaa;
  }
  .discover>.dis-right>.join-music>.title>h4{
    font-size: 14px;
    color: #333;
  }
  .discover>.dis-right>.join-music>.title>a{
    color: #333;
    font-size: 12px;
  }
  .discover>.dis-right>.join-music>.shenqing{
    width: 100%;
    height: 30px;
    font-size: 12px;
    color: #333;
    line-height: 30px;
    text-align: center;
    border: 1px solid #d3d3d3;
    border-radius: 4px;
    cursor: pointer;
    background: #f5f5f5;
  }
  .discover>.dis-right>.join-music>.shenqing:hover{
    background: #fff;
  }
  .discover>.dis-right>.join-music>.join-item{
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  .discover>.dis-right>.join-music>.join-item>.music-man{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 55px;
    padding-left: 10px;
    padding-right: 20px;
    border: 1px solid #d3d3d3;
    flex: 1;
    border-left: 0;
    background: #fafafa;
  }
  .discover>.dis-right>.join-music>.join-item>.music-man:hover{
    background: #eee;
    cursor: pointer;
  }
  .discover>.dis-right>.join-music>.join-item>.music-man>h4{
    color: #111;
    font-size: 13px;
  }
  .discover>.dis-right>.join-music>.join-item>.music-man>div:last-child{
    color: #666;
    font-size: 10px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .discover>.dis-left{
    width: 700px;
    border-right: 1px solid #d3d3d3;
  }
  .discover>.dis-left>.dis-left-rementj{
    width: 100%;
    margin-bottom: 15px;
  }
  .discover>.dis-left>.dis-left-rementj:last-child{
    margin-bottom: 0;
  }
  .discover>.dis-left>.dis-left-rementj>.remen-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    padding-bottom: 5px;
    border-bottom: 2px solid #c20c0c;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic{
    width: 100%;
    padding: 20px;
  }
  .discover>.dis-left>.dis-left-rementj>.remen-title>.remen-tle-left{
    display: flex;
    align-items: flex-end;
  }
  .discover>.dis-left>.dis-left-rementj>.remen-title>.remen-tle-left>.huayu{
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  .discover>.dis-left>.dis-left-rementj>.remen-title>.remen-tle-left>.huayu>div{
    padding-left: 10px;
    padding-right: 10px;
    height: 14px;
    line-height: 12px;
  }
  .discover>.dis-left>.dis-left-rementj>.remen-title>.remen-tle-left>.huayu>div:not(:first-child){
    border-left: 1px solid #888;
  }
  .discover>.dis-left>.dis-left-rementj>.remen-title>.remen-tle-left>.huayu a{
    color: #888;
    text-decoration: none;
    font-size: 12px;
  }
  .discover>.dis-left>.dis-left-rementj>.remen-title>.remen-tle-left>.huayu a:hover{
    text-decoration: underline;
  }
  .discover>.dis-left>.dis-left-rementj>.remen-title>.remen-tle-right{
    display: flex;
    align-items: center;
  }
  .discover>.dis-left>.dis-left-rementj>.remen-title>.remen-tle-right>a{
    text-decoration: none;
    font-size: 12px;
    color: #666;
  }
  .discover>.dis-left>.dis-left-rementj>.remen-title>.remen-tle-right>a:hover{
    text-decoration: underline;
  }
  .discover>.dis-left>.dis-left-rementj>.remenlist{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .discover>.dis-left>.dis-left-rementj>.remenlist>.remenitem{
    padding:20px;
    display: flex;
    width: 25%;
    flex-direction: column;
    align-items: flex-start;
  }
  .discover>.dis-left>.dis-left-rementj>.remenlist>.remenitem>.tupianquyu{
    position: relative;
    cursor: pointer;
    overflow: hidden;
    width: 100%;
    height: 140px;
  }
  .discover>.dis-left>.dis-left-rementj>.remenlist>.remenitem>.tupianquyu>.zhezhao{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    left: 0;
    bottom: -25px;
    height: 25px;
    overflow: hidden;
    transition: all .2s linear;
  }
  .discover>.dis-left>.dis-left-rementj>.remenlist>.remenitem>.tupianquyu:hover>.zhezhao{

    bottom: 0;
  }
  .discover>.dis-left>.dis-left-rementj>.remenlist>.remenitem>.tupianquyu>.zhezhao>img{
    width:20px;
    opacity:0.5;
  }
  .discover>.dis-left>.dis-left-rementj>.remenlist>.remenitem>.tupianquyu>.zhezhao>img:hover{
    opacity: 1;
  }
  .discover>.dis-left>.dis-left-rementj>.remenlist>.remenitem>.tupianquyu>.zhezhao>.bofangcount{
    display: flex;
    align-items: center;
  }
  .discover>.dis-left>.dis-left-rementj>.remenlist>.remenitem>a{
    text-decoration: none;
    color: #222;
    font-size: 14px;
    margin-top: 10px;
  }
  .discover>.dis-left>.dis-left-rementj>.remenlist>.remenitem>a:hover{
    text-decoration: underline;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.nm-tle{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
    border-bottom: 2px solid #c20c0c;
    padding-bottom: 5px;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.nm-tle>.nm-tle-left{
    display: flex;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.nm-tle>.nm-tle-right{
    display: flex;
    font-size: 12px;
    align-items: center;
    color: #666;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.nm-tle>.nm-tle-right>a{
    text-decoration: none;
    color: #888;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.nm-tle>.nm-tle-right>a:hover{
    text-decoration: underline;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.kuang{
    width: 100%;
    border: 1px solid #aaa;
    background: #eee;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.kuang>div:first-child>img{
    margin-right: 10px;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.kuang>div:last-child>img{
    margin-left: 10px;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.kuang>div.content>ul{
    list-style: none;
    display: flex;
    align-items: center;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.kuang>div.content>ul.active{
    transition: all .4s linear;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.kuang>.content{
    width: 590px;
    overflow: hidden;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.kuang>.content>ul>li{
    width: 118px;
    display: inline-block;
    padding: 10px;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.kuang>.content>ul>li>a:nth-child(2){
    width: 100%;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
    color: #666;
    margin-top: 5px;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.kuang>.content>ul>li>a:last-child{
    width: 100%;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 10px;
    color: #666;
    margin-top: 5px;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.kuang>.content>ul>li>img{
    width: 100%;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.kuang>.content>ul>li>img{
    width: 100%;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.kuang>.content>ul>li>.img>img:last-child{
    position: absolute;
    right:10px;
    bottom: 10px;
    opacity: 0;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.kuang>.content>ul>li>.img:hover>img:last-child{
    opacity: 1;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.bangdan{
    width: 100%;
    background: #eee;
    border: 1px solid #aaa;
    display: flex;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.bangdan>.list1{
    width: 33.333%;
    border-right: 1px solid #aaa;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.bangdan>.list1:last-child{
    border: 0;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.bangdan>.list1>div{
    width: 100%;
    display: flex;
    padding: 20px 0 10px 20px;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.bangdan>.list1>div>div{
    margin-left: 5px;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.bangdan>.list1>div>div>div:last-child>img{
    opacity: 0.5;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.bangdan>.list1>div>div>div:last-child>img:hover{
    opacity: 1;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.bangdan>.list1>ul{
    list-style: none;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.bangdan>.list1>ul>li{
    display: flex;
    padding: 5px 10px 5px 20px;
    justify-content: space-between;
    align-items: center;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.bangdan>.list1>ul>li:hover>div:last-child{
    opacity: 1;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.bangdan>.list1>ul>li>div{
    display: flex;
    align-items: center;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.bangdan>.list1>ul>li>div>div:first-child{
    width: 20px;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.bangdan>.list1>ul>li>div>div:last-child{
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.bangdan>.list1>ul>li:hover>div>div:last-child{
    width: 80px;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.bangdan>.list1>ul>li>div:last-child{
    opacity: 0;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.bangdan>.list1>ul>li>div>img{
    opacity: 0.5;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.bangdan>.list1>ul>li>div>img:hover{
    opacity: 1;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.bangdan>.list1>ul>li:nth-child(-n+3)>div:first-child>div:first-child{
    color: #c20c0c;
  }
  .discover>.dis-left>.dis-left-rementj>.newmusic>.bangdan>.list1>ul>li:nth-child(odd){
    background: #dfdfdf;
  }
</style>