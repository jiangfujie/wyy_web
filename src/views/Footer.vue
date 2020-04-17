<template>
  <div class="ft">
    <audio src="../assets/music.mp3" autoplay controls>啊大蘇打的是</audio>
    <div class="left">
      <ul>
        <li>
          <a href="javascript:;">服务条款</a>
        </li>
        <li>
          <a href="javascript:;">隐私政策</a>
        </li>
        <li>
          <a href="javascript:;">儿童隐私政策</a>
        </li>
        <li>
          <a href="javascript:;">版权投诉指引</a>
        </li>
        <li>
          <a href="javascript:;">意见反馈</a>
        </li>
      </ul>
      <div>
        网易公司版权所有©1997-2020杭州乐读科技有限公司运营：
        <a href="javascript:;">浙网文[2018]3506-263号</a>
      </div>
      <div>
        违法和不良信息举报电话：0571-89853516 举报邮箱：
        <a href="javascript:;"> ncm5990@163.com</a>
      </div>
      <div>
        粤B2-20090191-18
        <a href="javascript:;">工业和信息化部备案管理系统网站</a> 
      </div>
    </div>
    <!-- right -->
    <div class="right">
      <a>
        <img :src="require('../../public/images/footer/renzheng.png')" alt="">
        <h5>用户认证</h5>
      </a>
      <a>
        <img :src="require('../../public/images/footer/music.png')" alt="">
        <h5>独立音乐人</h5>
      </a>
      <a>
        <img :src="require('../../public/images/footer/shang.png')" alt="">
        <h5>赞赏</h5>
      </a>
      <a>
        <img :src="require('../../public/images/footer/shipinjiangli.png')" alt="">
        <h5>视频奖励</h5>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .ft{
    width: 100%;
    height: 230px;
    display: flex;
    border-top: 1px solid #d3d3d3;
    padding: 0 20px;
    padding-left: 40px;
    font-size: 14px;
    color: #666;
    align-items: center;
  }
  .ft>.left{
    padding: 10px;
    margin-top: -20px;
  }
  .ft>.left>ul{
    list-style: none;
    display: flex;
  }
  .ft>.left>ul>li{
    display: inline-block;
    padding: -3px;
    padding-right: 10px;
    padding-left: 10px;
    border-right: 1px solid #d3d3d3;
    height: 12px;
    line-height: 10px;
  }
  .ft>.left>ul>li:first-child{
    padding-left: 0;
  }
  .ft>.left>ul>li>a{
    text-decoration: none;
    color: #999;
  }
  .ft>.left>ul>li>a:hover{
    text-decoration: underline;
  }
  .ft>.left>div{
    margin-top: 10px;
  }
  .ft>.left>div>a{
    text-decoration: none;
    color: #666;
  }
  .ft>.left>div>a:hover{
    text-decoration: underline;
  }
  .ft>.right{
    display: flex;
    z-index: 10;
    display: flex;
    text-align: center;
    width: 380px;
    justify-content: space-around;
    margin-top: -20px;
  }
  .ft>.right>a{
    cursor: pointer;
    color: #666;
  }
  .ft>.right>a>img{
    width: 45px;
  }
</style>