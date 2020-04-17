<template>
  <div class="main" @mouseenter="stop()" @mouseleave="move()">
    <div>
      <!-- 左箭头 -->
      <div @click="jiantou(-1)"><img :src="require('../../public/images/carousel/left.png')" alt=""></div>
      <!-- 轮播图视口 -->
      <div class="carousel" v-if="carouselList.length>0">
        <ul class="carousel-list" :class="{active:ac}" :style="{marginLeft:page*-700+'px',width:carouselList.length*700+'px'}">
          <li v-for="(item,i) of carouselList" :key="i"><a href="javascript:;">
            <img :src="$store.state.url+item.cimg" alt="">
          </a></li>
          <li><a href="javascript:;">
            <img :src="$store.state.url+carouselList[0].cimg" alt="">
          </a></li>
        </ul>
        <ul class="zhishi">
          <li :class="{active:i==page||i==carouselList.length}" v-for="(item,i) of carouselList" :key="i" @click="moveTo(i)"></li>
        </ul>
      </div>
      <div class="kehuduan">
        <img :src="require('../../public/images/header/xiazai.png')" alt="">
        <img :src="require('../../public/images/header/kehuduan.png')" alt="">
        <h6>PC 安卓 iPhone WP iPad Mac 六大客户端</h6>
      </div>
      <!-- 右箭头 -->
      <div @click="jiantou(+1)"><img :src="require('../../public/images/carousel/right.png')" alt=""></div>
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      page:0,
      ac:true,
      timer:null,
      click:true,
      carouselList:[]
    }
  },
  methods:{
    stop(){
      clearInterval(this.timer)
    },
    move(){
      this.timer=setInterval(()=>{
        this.page++;
        if(this.page==8){
          setTimeout(()=>{
            this.ac=false
            this.page=0;
            setTimeout(()=>{
              this.ac=true;
              setTimeout(()=>{
                this.click=true
              },1000)
            },10)
          },500)
        }
      },3000)
    },
    moveTo(i){
      if(this.click){
        this.page=i;
        this.ac=false;
        setTimeout(()=>{
          this.ac=true;
          setTimeout(()=>{
            this.click=true
          },1000)
        },10)
      }
    },
    jiantou(i){
      if(this.click){
        this.click=false
        if(i==-1&&this.page==0){
          this.ac=false;
          setTimeout(()=>{
            this.page=8
            setTimeout(()=>{
              this.ac=true
              this.page-=1;
              setTimeout(()=>{
                this.click=true
              },1000)
            },50)
          },50)
        }else if(i==1&&this.page==7){
          this.page+=i;
          setTimeout(()=>{
            this.ac=false;
            setTimeout(()=>{
              this.page=0;
              setTimeout(()=>{
                this.ac=true;
                setTimeout(()=>{
                  this.click=true;
                  setTimeout(()=>{
                    this.click=true
                  },1000)
                },1000)
              },30)
            },30)
          },500);
        }else{
          this.page+=i;
          setTimeout(()=>{
            this.click=true
          },1000)
        }
      }
    }
  },
  created(){
    this.move();
    this.$axios.get('/discover/carousel')
    .then(res=>{
      this.carouselList=res.data;
    }).catch(e=>console.log(e))
  }
}
</script>

<style>
  .main{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main>div{
    display: flex;
    align-items: center;
    height:270px;
  }
  .main>div>.carousel{
    overflow: hidden;
    margin: auto;
    position: relative;
    width: 700px;
  }
  .main>div>.carousel>.carousel-list{
    list-style: none;
    display: flex;
  }
  .main>div>.carousel>ul.active{
    transition: all .5s linear;
  }
  .main>div>.carousel>.carousel-list>li>a>img{
    width: 700px;
  }
  .main>div>.carousel>.zhishi{
    list-style: none;
    display: flex;
    width: 240px;
    justify-content: space-around;
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -120px;
  }
  .main>div>.carousel>.zhishi>li{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
  }
  .main>div>.carousel>.zhishi>li.active{
    background: #c20c0c;
  }
  .main>div>div>img{
    width: 35px;
    border-radius: 5px;
  }
  .main>div>div:first-child{
    margin-right: 30px;
    opacity: 0.3;
  }
  .main>div>div:last-child{
    margin-left: 30px;
    opacity: 0.3;
  }
  .main>div>div:first-child:hover,.main>div>div:last-child:hover{
    opacity: 1;
  }
  .main>div>.kehuduan{
    position: relative;
    height: 100%;
  }
  .main>div>.kehuduan>img:nth-child(2){
    position: absolute;
    width: 199px;
    height: 53px;
    top: 176px;
    left: 18px;
    opacity: 0;
  }
  .main>div>.kehuduan>img:nth-child(2):hover{
    opacity: 1;
    cursor: pointer;
  }
  .main>div>.kehuduan>img:first-child{
    width: 235px;
    height: 100%;
  }
  .main>div>.kehuduan>h6{
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
    color: #aaa;
  }
</style>