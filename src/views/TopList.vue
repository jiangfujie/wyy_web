<template>
  <div class="maintoplist">
    <RedTle shuxing="top"/>
    <div class="list">
      <div class="blank"></div>
      <div class="toplist" v-if="musicList.length>0">
        <!-- 云音乐特色榜单 -->
        <div>云音乐特色榜</div>
        <div class="tesebangdan">
          <div class="biaosheng" :class="{active:l=='biaosheng'}" @click="loadmusic('biaosheng')">
            <img src="../../public/images/toplist/biaoshen.jpg" alt="">
            <div class="right-text">
              <div class="right-top-text">
                云音乐飙升榜
              </div>
              <div class="right-bottom-text">每天更新</div>
            </div>
          </div>
          <div class="biaosheng" :class="{active:l=='newmusic'}" @click="loadmusic('newmusic')">
            <img src="../../public/images/toplist/xinge.jpg" alt="">
            <div class="right-text">
              <div class="right-top-text">
                云音乐新歌榜
              </div>
              <div class="right-bottom-text">每天更新</div>
            </div>
          </div>
          <div class="biaosheng" :class="{active:l=='yuanchuang'}" @click="loadmusic('yuanchuang')">
            <img src="../../public/images/toplist/yuanchuang.jpg" alt="">
            <div class="right-text">
              <div class="right-top-text">
                网易原创歌曲榜
              </div>
              <div class="right-bottom-text">每周四更新</div>
            </div>
          </div>
        </div>
        <!-- 全球媒体榜单 -->
        <div>全球媒体榜</div>
        <div class="tesebangdan">
          <div class="biaosheng" v-for="(item,i) of quanqiu" :key="i">
            <img :src="$store.state.url+item.timg" alt="">
            <div class="right-text">
              <div class="right-top-text">
                {{item.ttitle}}
              </div>
              <div class="right-bottom-text">{{item.status}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="hotlist">
        <div class="right-top-title">
          <div class="bgimg">
            <img :src="$store.state.url+titlehead.bdimg" alt="">
          </div>
          <div class="right-title-list">
            <div>
              {{titlehead.bdname}}
            </div>
            <div>
              <img src="" alt="">
              最近更新:{{titlehead.bdtime}} (每周四更新)
            </div>
            <div class="right-bottom">
              <div>
                <img :src="require('../../public/images/toplist/list/tianjia.png')" alt="">
                <div>(82443)</div>
              </div>
              <div>
                <img :src="require('../../public/images/toplist/list/zhuanfa.png')" alt="">
                <div>(53451)</div>
              </div>
              <div>
                <img :src="require('../../public/images/toplist/list/xiazai.png')" alt="">
                <div>(32445)</div>
              </div>
              <div>
                <img :src="require('../../public/images/toplist/list/xinxi.png')" alt="">
                <div>(72642)</div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-bottom-title">
          <!-- 歌曲列表200首歌播放：6286957568次 -->
          <div class="music-title">
            <div class="music-list">
              <div>歌曲列表</div>
              <div>{{musicList.length}}首歌</div>
            </div>
            <div class="music-count">
              <div>播放:</div>
              <div>34243</div>
              <div>次</div>
            </div>
          </div>
          <!-- 标题时长歌手 -->
          <div class="nav-title">
            <!-- 标题 -->
            <div class="nav-title-item">
              <div></div>
              <div>标题</div>
              <div>时长</div>
              <div>歌手</div>
            </div>
            <!-- 歌曲列表 -->
            <div class="music-items" v-if="musicList.length>0">
              <!-- 每一列表 -->
              <ul class="music-item" v-for="(item,i) of musicList" :key="i">
                <li>
                  <div>{{i+1}}</div>
                  <img :src="require('../../public/images/toplist/musiclist/new.png')" alt="">
                </li>
                <li>
                  <img :src="$store.state.url+item.bmusicimg" alt="" style="margin-right:10px" v-if="item.bmusicimg">
                  <div>
                    <img :src="require('../../public/images/toplist/musiclist/sanjiao.png')" alt="" style="margin-right:5px">
                    <div><a href="javascript:;">{{item.bmusicname}}</a></div>
                  </div>
                </li>
                <li>
                  <div>{{item.bmusictime}}</div>
                  <div>
                    <img :src="require('../../public/images/toplist/musiclist/tj.png')" alt="">
                    <img :src="require('../../public/images/toplist/musiclist/sc.png')" alt="">
                    <img :src="require('../../public/images/toplist/musiclist/fx.png')" alt="">
                    <img :src="require('../../public/images/toplist/musiclist/xz.png')" alt="">
                  </div>
                </li>
                <li><a href="javascript:;">{{item.bmusicman}}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RedTle from '../views/RedTle'
export default {
  data(){
    return {
      // 全球榜单列表
      quanqiu:[],
      // 歌曲列表
      musicList:[],
      // 当前榜单名
      l:'',
      // 标题头部信息
      titlehead:[]
    }
  },
  methods:{
    // 根据传进来的类名请求数据
    loadMore(lm){
      this.$axios.get('/discover/list?lei='+lm)
      .then(res=>{
        this.musicList=res.data.data;
        this.titlehead=res.data.head[0];
      })
    },
    // 获取榜单歌曲列表
    loadmusic(lm){
      this.loadMore(lm);
      this.l=lm
    },
    // 获取全球歌曲列表
    loadquanqiu(){
      this.$axios.get('/discover/quan')
      .then(res=>{
        this.quanqiu=res.data;
      })
    }
  },
  components:{
    RedTle
  },
  created(){
    this.loadMore(this.lei)
    this.l=this.lei;
    this.loadquanqiu();
  },
  props:['lei']
}
</script>

<style>
  .maintoplist>.list{
    display: flex;
    width: 100%;
  }
  .maintoplist>div>.blank{
    width: 13%;
    height: 100%;
  }
  .maintoplist>div>.toplist{
    width: 20%;
    min-width: 260px;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    height: 100%;
  }
  .maintoplist>.list>.toplist>div:nth-child(odd){
    width: 100%;
    height: 60px;
    padding: 30px 10px 10px 10px;
    font-size: 16px;
    color: #000;
  }

  .maintoplist>.list>.toplist>.tesebangdan{
    width: 100%;
    font-size: 15px;
    color: #000;
  }
  .maintoplist>.list>.toplist>.tesebangdan>.biaosheng{
    display: flex;
    padding: 10px 0 10px 20px;
  }
  .maintoplist>.list>.toplist>.tesebangdan>.biaosheng:hover{
    background: #eee;
    cursor: pointer;
  }
  .maintoplist>.list>.toplist>.tesebangdan>.active{
    background: #eee;
    cursor: pointer;
  }
  .maintoplist>.list>.toplist>.tesebangdan>.biaosheng>img{
    width: 40px;
    border-radius: 4px;
  }
  .maintoplist>.list>.toplist>.tesebangdan>.biaosheng>.right-text{
    margin-left: 10px;
  }
  .maintoplist>.list>.toplist>.tesebangdan>.biaosheng>.right-text>.right-top-text{
    font-size: 14px;
  }
  .maintoplist>.list>.toplist>.tesebangdan>.biaosheng>.right-text>.right-bottom-text{
    color: #999;
    margin-top: 5px;
    font-size: 13px;
  }
  .maintoplist>div>.hotlist{
    width: 50%;
    min-width: 700px;
    border-right: 1px solid #d3d3d3;
    height: 100%;
  }
  .maintoplist>div>.hotlist>.right-top-title{
    width: 100%;
    padding: 40px;
    display: flex;
  }
  .maintoplist>div>.hotlist>.right-top-title>.bgimg{
    width: 160px;
    height:160px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  .maintoplist>div>.hotlist>.right-top-title>.bgimg>img{
    width: 150px;
  }
  .maintoplist>div>.hotlist>.right-top-title>.right-title-list{
    margin-left: 30px;
  }
  .maintoplist>div>.hotlist>.right-top-title>.right-title-list>div{
    margin-top: 20px;
  }
  .maintoplist>div>.hotlist>.right-top-title>.right-title-list>.right-bottom{
    display: flex;
  }
  .maintoplist>div>.hotlist>.right-top-title>.right-title-list>.right-bottom>div{
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-shadow: 0 2px 2px #ccc;
    font-size: 14px;
    margin-right: 10px;
    background: #eee;
  }
  .maintoplist>div>.hotlist>.right-top-title>.right-title-list>.right-bottom>div>img{
    width: 30px;
  }
  .maintoplist>div>.hotlist>.right-top-title>.right-title-list>.right-bottom>div:hover{
    cursor: pointer;
    background: #fff;
  }
  .maintoplist>div>.hotlist>.right-bottom-title{
    padding: 0 40px 40px 40px;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>.music-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8px;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>.music-title>.music-list{
    display: flex;
    align-items: center;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>.music-title>.music-list>div:first-child{
    font-size: 25px;
    color: #444;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>.music-title>.music-list>div:last-child{
    margin-left: 10px;
    font-size: 15px;
    color: #888;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>.music-title>.music-count{
    display: flex;
    justify-content: center;
    font-size: 15px;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>.music-title>.music-count>div:first-child{
    color: #888;
    margin-right: 5px;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>.music-title>.music-count>div:nth-child(2){
    color: #c20c0c;
    margin-right: 5px;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>.nav-title{
    border: 1px solid #d3d3d3;
    border-top: 2px solid #c20c0c;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>.nav-title>.nav-title-item{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #d3d3d3;
    box-shadow: 0 1px 2px #ccc;
    color: #888;
    font-size: 13px;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>.nav-title>.nav-title-item>div:not(:first-child){
    border-left: 1px solid #ccc;
    padding: 10px;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>.nav-title>.nav-title-item>div:first-child,
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item>li:first-child{
    min-width: 90px;
    width: 13%;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>.nav-title>.nav-title-item>div:nth-child(2),
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item>li:nth-child(2){
    min-width: 260px;
    width: 43%;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>.nav-title>.nav-title-item>div:nth-child(3),
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item>li:nth-child(3){
    min-width: 120px;
    width: 18%;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>.nav-title>.nav-title-item>div:nth-child(4),
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item>li:nth-child(4){
    width: 26%;
    min-width: 90px;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items{
    width: 100%;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item{
    display: flex;
    list-style: none;
    align-items: center;
    width: 100%;
    color: #888;
    font-size: 13px;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item:nth-child(n+4){
    height: 40px;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item>li:last-child{
    width: 120px;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item a{
    text-decoration: none;
    color: #666;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item a:hover{
    text-decoration: underline;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item>li{
    display: inline-block;
    display: flex;
    align-items: center;
    padding: 10px;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item>li:first-child{
    justify-content: space-around;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item>li:nth-child(2)>img{
    width: 40px;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item>li:nth-child(2)>div>img{
    opacity: 0.5;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item>li:nth-child(2)>div>img:hover{
    opacity: 1;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item>li:nth-child(2)>div{
    display: flex;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item:nth-child(odd){
    background: #eee;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item:hover>li:nth-child(3)>div{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item:hover>li:nth-child(3)>div:last-child{
    display: block;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item:hover>li:nth-child(3)>div:first-child{
    display: none;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item>li:nth-child(3)>div:last-child{
    display: none;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item>li:nth-child(3)>div:last-child>img{
    opacity: 0.5;
  }
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item>li:nth-child(3)>div:last-child>img:first-child:hover,
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item>li:nth-child(3)>div:last-child>img:nth-child(2):hover,
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item>li:nth-child(3)>div:last-child>img:nth-child(3):hover,
  .maintoplist>div>.hotlist>.right-bottom-title>div.nav-title>div.music-items>ul.music-item>li:nth-child(3)>div:last-child>img:last-child:hover{
    opacity: 1;
  }
</style>