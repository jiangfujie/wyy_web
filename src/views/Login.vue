<template>
  <div class="login" @mousewheel.prevent>
    <div class="login-mv" v-if="xianshi">
      <div class="login-title">
        <div>登录</div>
        <img @click="chaLogin" src="../../public/images/header/cha.png" alt="">
      </div>
      <!-- body -->
      <div class="login-body">
        <!-- 左侧 -->
        <div class="login-left">
          <img src="../../public/images/header/platform.png" alt="">
          <button class="login-phone" @click="loginPhone()">手机号登录</button>
          <button class="login-reg" @click="register()">注册</button>
          <div class="login-check">
             <input v-model="tongyi" type="checkbox" name="" id="ok"><label for="ok">同意</label>
             <a href="javascript:;">《服务条款》</a>
             <a href="javascript:;">《隐私政策》</a>
             <a href="javascript:;">《儿童隐私政策》</a>
          </div>
        </div>
        <!-- 右侧 -->
        <div class="login-right">
          <div>
            <img src="../../public/images/header/weixin.png" alt="">
            <a href="javascript:;">微信登录</a>
          </div>
          <div>
            <img src="../../public/images/header/qq.png" alt="">
            <a href="javascript:;">QQ登录</a>
          </div>
          <div>
            <img src="../../public/images/header/sina.png" alt="">
            <a href="javascript:;">微博登录</a>
          </div>
          <div>
            <img src="../../public/images/header/wangyi.png" alt="">
            <a href="javascript:;">网易邮箱账号登录</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 登录 -->
    <div class="log-in" v-if="login">
      <!-- 头 -->
      <div class="log-title-phone">
        <div>手机号登录</div>
        <img @click="chaLogin" src="../../public/images/header/cha.png" alt="">
      </div>
      <div class="log-body">
        <div class="log-ipt">
          <!-- 手机号和密码输入框 -->
          <input type="text" v-model="phone" @input="regPhone" placeholder="请输入手机号">
          <input type="text" v-model="upwd" @input="regupwd" placeholder="请输入密码">
          <div class="error" :class="{show:errmsg}">
            <!-- 格式是否正确提示框 -->
            <div class="error">
              <img src="../../public/images/header/err.png" alt="">
              <div style="margin-left:8px;">{{msglogin}}</div>
            </div>
          </div>
          <div class="zidong">
            <label for="zidong"><input type="checkbox" name="" id="zidong">自动登录</label>
            <a href="javascript:;" style="color:#888;">忘记密码?</a>
          </div>
          <button @click="denglu">登录</button>
        </div>
      </div>
      <div class="other">
        <a href="javascript:;" @click="other"> &lt;其他登录方式</a>
        <a href="javascript:;" style="color:#888;" @click="register()"> 没有账号?免费注册></a>
      </div>
    </div>
    <!-- 注册 -->
    <div class="register" v-if="reg">
      <!-- 标题 -->
      <div class="log-title-phone">
        <div>手机号注册</div>
        <img @click="chaLogin" src="../../public/images/header/cha.png" alt="">
      </div>
      <div class="reg-body">
        <div class="reg-item">
          <p>手机号:</p>
          <input type="text" v-model="zucePhone" @input="registerPhone" placeholder="请输入手机号">
          <p>密码:</p>
          <input type="text" v-model="zuceUpwd" @input="registerUpwd" placeholder="请输入密码">
          <!-- 格式提示区域 -->
          <div class="zucemsgphone">
            <img :src="imgphone1" alt="">
            <div :class="{errcolor:errcolor1}">{{phonemsg}}</div>
          </div>
          <div class="reg-msg">
            <div>
              <img :src="upwdkongge" alt="">
              <div :class="{errcolor:errcolor2}">密码不能包含空格</div>
            </div>
            <div>
              <img src="../../public/images/header/ok.png" alt="">
              <div>包含字母、数字、符号中至少两种</div>
            </div>
            <div>
              <img :src="zuceLength" alt="">
              <div :class="{errcolor:errcolor4}">密码长度为6-16位</div>
            </div>
          </div>
          <div class="next" @click="registerUserInfo">注册</div>
        </div>
      </div>
      <div class="fanhui">
        <a href="javascript:;" @click="fanhui">&lt;返回登录</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
        xianshi:true,
        login:false,
        reg:false,
        msglogin:'',
        errmsg:false,
        phone:'13512345678',
        upwd:'123456',
        zucePhone:'',
        zuceUpwd:'',
        phonemsg:'请输入正确手机号',
        imgphone1:require('../../public/images/header/ok.png'),
        upwdkongge:require('../../public/images/header/ok.png'),
        zuceLength:require('../../public/images/header/ok.png'),
        tongyi:false,
        errcolor1:false,
        errcolor2:false,
        errcolor4:false
      }
  },
  methods:{
    // 注册用户账号
    registerUserInfo(){
      if(this.registerPhone() && this.registerUpwd()){
        this.$axios.post('/user/register',{phone:this.zucePhone,upwd:this.zuceUpwd})
        .then(res=>{
          if(res.data.code==200){
            alert('登录成功')
            // 登陆成功返回界面
            this.chaLogin();
            // 将用户登录凭证保存
            this.$store.commit('setUserInfo',res.data.userInfo);
            // 将用户对象转为json字符串存进sessionstorage中,用的时候转一下在取出来
            sessionStorage.setItem('userInfo',JSON.stringify(res.data.userInfo));
          }
        })
        .catch(e=>console.log(e))
      }else{
        alert('信息填写错误');
      }
    },
    phoneExests(){
      return this.$axios.get('/user/check_phone?phone='+this.zucePhone)
    },
    // promise待解决,有bug
    registerPhone(){
      let reg=/^[1][3-9]\d{9}$/;
      if(reg.test(this.zucePhone)){
        this.phoneExests().then(res=>{
          if(res.data.code==200){
            this.imgphone1=require('../../public/images/header/ok.png');
            this.errcolor1=false;
            this.phonemsg='手机号格式正确';
          }else{
            this.imgphone1=require('../../public/images/header/err.png');
            this.errcolor1=true;
            this.phonemsg='手机号已被占用';
            return false
          }
        })
        return true
      }else{
        this.imgphone1=require('../../public/images/header/err.png');
        this.errcolor1=true;
        this.phonemsg='请输入正确手机号';
        return false
      }
    },
    // 验证注册密码格式是否输入正确
    registerUpwd(){
      let reg=/\d{6,}/;
      if(reg.test(this.zuceUpwd)){
        this.zuceLength=require('../../public/images/header/ok.png');
        this.errcolor4=false;
        if(this.zuceUpwd.indexOf(' ')==-1){
          this.upwdkongge=require('../../public/images/header/ok.png');
          this.errcolor2=false;
          return true
        }else{
          this.upwdkongge=require('../../public/images/header/err.png');
          this.errcolor2=true;
          return false
        }
      }else{
        this.zuceLength=require('../../public/images/header/err.png');
        this.errcolor4=true;
        return false
      }
    },
    // 登录按钮
    denglu(){
      // 判断手机号格式和密码格式是否正确,rug正确都会返回true
      if(this.regPhone()&&this.regupwd()){
        this.$axios.post('/user/login',{phone:this.phone,upwd:this.upwd})
        .then(res=>{
          if(res.data.code==200){
            this.chaLogin();
            sessionStorage.setItem('userInfo',JSON.stringify(res.data.userInfo));
            this.$store.commit('setUserInfo',res.data.userInfo);
          }
        }).catch(e=>{console.log(e)})
      }
    },
    // 验证用户登录密码格式是否输入正确
    regupwd(){
      let reg2=/^[\da-zA-Z]{6,12}/;
      if(reg2.test(this.upwd)){
        this.errmsg=false;
        this.errmsg='';
        return true;
      }else{
        this.errmsg=true;
        this.msglogin='密码为6~12位数字与字母组成';
        return false;
      }
    },
    // 验证用户登录手机号格式是否输入正确
    regPhone(){
      let reg1=/^[1][3-9]\d{9}$/;
      if(reg1.test(this.phone)){
        this.errmsg=false;
        this.errmsg='';
        return true;
      }else{
        this.errmsg=true;
        this.msglogin='请输入正确手机号码';
        return false;
      }
    },
    fanhui(){
      this.xianshi=true;
      this.login=false;
      this.reg=false;
    },
    // 隐藏登录框
    chaLogin(){
      this.$emit('login',true);
      this.xianshi=true;
      this.login=false;
      this.reg=false;
    },
    // 如果用户未勾选同意协议
    loginPhone(){
      if(!this.tongyi){
        alert('请勾选同意');
        return
      }
      this.xianshi=false;
      this.login=true;
      this.reg=false;
    },
    other(){
      this.xianshi=true;
      this.login=false;
      this.reg=false;
    },
    register(){
      if(!this.tongyi){
        alert('请勾选同意');
        return
      }
      this.xianshi=false;
      this.login=false;
      this.reg=true;
    }
  }
}
</script>

<style>
  .login{
    width: 100%;
    background: #000;
    position: relative;
    top: 0;
    left: 0;
  }
  .login>.login-mv,.login>.log-in,.login>.register{
    width: 500px;
    border-radius: 5px;
    position: absolute;
    background: #fff;
    top: 50%;
    left: 50%;
    margin-left: -250px;
    margin-top: -200px;
  }
  .login>.register>.reg-body{
    width: 45%;
    margin: 0 auto;
  }
  .login>.register>.reg-body>.reg-item{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .login>.register>.reg-body>.reg-item>input{
    width: 100%;
    height: 30px;
    outline: none;
    border: 0.5px solid #888;
    border-radius: 3px;
    padding: 5px;
    columns: #555;
  }
  .login>.register>.reg-body>.reg-item .errcolor{
    color: #c20c0c;
  }
  .login>.register>.reg-body>.reg-item>p{
    width: 100%;
    color: #888;
    font-size: 13px;
    margin-bottom: 5px;
  }
  .login>.register>.reg-body>.reg-item>.reg-msg{
    z-index: 10;
  }
  .login>.register>.reg-body>.reg-item>.reg-msg>div,.login>.register>.reg-body>.reg-item>.zucemsgphone{
    display: flex;
    margin-bottom: 5px;
    align-items: center;
    color: #888;
    font-size: 12px;
  }
  .login>.register>.reg-body>.reg-item>.next{
    width: 100%;
    height: 30px;
    border: 0.5px solid #888;
    border-radius: 3px;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    background: #eee;
  }
  .login>.register>.reg-body>.reg-item>.next:hover{
    background: #fff;
    cursor: pointer;
  }
  .login>.register>.fanhui{
    border-top: 1px solid #888;
    width: 100%;
    padding-left: 10px;
    line-height: 35px;
  }
  .login>.register>.reg-body>.reg-item>.zucemsgphone{
    display: flex;
  }
  .login>.register>.fanhui>a{
    font-size: 12px;
  }
  /* login-title */
  .login>.log-in>.log-title-phone,.login>.login-mv>.login-title,.login>.register>.log-title-phone{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #2d2d2d;
    padding: 10px;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .login>.log-in>.log-body{
    width: 100%;
    padding:30px;
  }
  .login>.log-in>.log-body>.log-ipt{
    width: 55%;
    margin: auto;
  }
  .login>.log-in>.log-body>.log-ipt>input{
    padding: 5px;
    padding-left: 10px;
    width: 100%;
    height: 30px;
    border: 1px solid #aaa;
    border-radius: 4px;
    outline: none;
    margin-bottom: 10px;
  }
  .login>.log-in>.log-body>.log-ipt>div.zidong{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #888;
  }
  .login>.log-in>.other{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    padding: 15px;
    border-top: 1px solid #888;
  }
  .login>.log-in>.log-body>.log-ipt>.error{
    display: none;
  }
  .login>.log-in>.log-body>.log-ipt>.show{
    display: block;
  }
  .login>.log-in>.log-body>.log-ipt>.error>.error{
    width: 100%;
    margin-bottom: 10px;
    color: #c20c0c;
    display: flex;
    align-items: center;
    font-size: 13px;
  }
  .login>.login-mv>.login-body{
    width: 100%;
    padding: 30px;
    background: #fff;
    display: flex;
  }
  .login>.login-mv>.login-body>.login-right{
    border-left: 1px dotted #ccc;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    padding-left: 20px;
    height: 180px;
    justify-content: space-between;
  }
  .login>.login-mv>.login-body>.login-right>div{
    display: flex;
    align-items: center;
  }
    .login>.login-mv>.login-body>.login-right>div>a{
      color: #333;
      font-size: 12px;
      margin-left: 10px;
    }
  .login>.login-mv>.login-body>.login-left{
    display: flex;
    width: 55%;
    flex-direction: column;
    align-items: center;
  }
  .login>.login-mv>.login-body>.login-left>img{
    width: 100%;
  }
  .login>.login-mv>.login-body>.login-left>.login-phone,
  .login>.login-mv>.login-body>.login-left>.login-reg,.login>.log-in>.log-body>.log-ipt>button{
    width: 100%;
    height: 30px;
    border-radius: 3px;
    color: #eee;
    font-size: 13px;
    text-align: center;
    line-height: 30px;
    background: #2c7dca;
    opacity: 0.9;
    margin-top: 20px;
    border: 0;
    outline: none;
  }
  .login>.login-mv>.login-body>.login-left>.login-phone:hover{
    opacity: 1;
  }
  .login>.login-mv>.login-body>.login-left>.login-reg{
    background: #fff;
    color: #333;
    border: 1px solid #d3d3d3;
    background: #eee;
  }
  .login>.login-mv>.login-body>.login-left>.login-reg:hover{
    background: #fff;
  }
  .login>.login-mv>.login-body>.login-left>.login-check{
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 10px;
    justify-content: space-between;
    margin-top: 30px;
  }
  .login>.login-mv>.login-body>.login-left>.login-check>a,.login>.log-in>.other>a:first-child,.login>.register>.fanhui>a{
    color: #507DAF;
  }
</style>