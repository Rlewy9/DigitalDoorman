<template>
  <div id="window">
    <div id="back" v-show="this.$route.name=='Home'?false:true" @click="goBack">
      <img class="img" src="../assets/img/window/back.png" alt />
    </div>
    <p>MyEID数字门卫</p>
    <div id="option" @click="show = true">···</div>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block">
          <div class="change" @click="showChangeOp">
            <div class="icon">
              <img class="img" src="../assets/img/window/change.png" alt />
            </div>
            <div class="text">切换用户</div>
          </div>
          <div class="out" @click="goOut">
            <div class="icon">
              <img class="img" src="../assets/img/window/out.png" alt />
            </div>
            <div class="text">退出</div>
          </div>
        </div>
      </div>
    </van-overlay>
    <van-overlay :show="optionShow" @click="optionShow = false">
      <div class="optionCon" @click.stop>
        <div class="title">
          <p>选择要使用的身份</p>
        </div>
        <div class="option" @click="chooseUserType(0)">
          <div class="icon"></div>
          <div class="text">个人</div>
        </div>
        <div class="option" @click="chooseUserType(1)">
          <div class="icon" style="background: rgb(82,94,118)"></div>
          <div class="text">门卫</div>
        </div>
        <div class="option" @click="chooseUserType(2)">
          <div class="icon" style="background: #B21F11"></div>
          <div class="text">主管</div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      optionShow: false,
      back: false
    };
  },
  created() {
    
  },
  methods: {
    showChangeOp() {
      this.show = false;
      this.optionShow = true;
    },
    chooseUserType(userType) {
      this.optionShow = false;
      console.log(window.localStorage.getItem('userType'))
      // this.$router.push({ path: "/", query: { userType } });
    },
    goBack() {
      this.$router.go(-1);
    },
    goOut() {
      window.opener = null;
      window.open("", self);
      window.close();
    }
  }
};
</script>

<style lang="scss" scoped>
$border-color: #ddd;
.img {
  width: 100%;
  height: 100%;
}
#window {
  width: 100vw;
  height: 0.44rem;
  background: #fff;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.01rem solid $border-color;
  z-index: 1000;
  p {
    font-size: 0.19rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(76, 92, 141, 1);
  }
  #option {
    width: 0.3rem;
    height: 0.2rem;
    position: absolute;
    right: 0.1rem;
  }
  #back {
    width: 0.18rem;
    position: absolute;
    left: 0.1rem;
  }
  .wrapper {
    width: 1.16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0.83rem;
    background: #fff;
    position: fixed;
    top: 0.35rem;
    right: 0.13rem;
    border: 0 solid rgba(204, 204, 208, 1);
    border-radius: 0.03rem;
    .block {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .change,
      .out {
        height: 0.38rem;
        width: 100%;
        display: flex;
        justify-content: left;
        align-items: center;
        .icon {
          width: 0.15rem;
          margin: 0 0.09rem 0 0.14rem;
        }
        .text {
          font-size: 0.15rem;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(76, 92, 141, 1);
        }
      }
    }
  }
  .optionCon {
    width: 1.99rem;
    height: 1.46rem;
    background: #fff;
    position: absolute;
    top: 30%;
    left: 0.88rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.06rem;
    .title {
      width: 100%;
      height: 0.3rem;
      border-bottom: 1px solid #ccccd0;
      background: #F5F5F5;
      border-top-left-radius: 0.06rem;
      border-top-right-radius: 0.06rem;
      color: rgba(163, 169, 182, 1);
      display: flex;
      align-items: center;
      p {
        margin-left: 0.13rem;
        font-size: 0.14rem;
        font-family: PingFang SC;
        font-weight: 500;
      }
    }
    .option {
      width: 1.83rem;
      height: 0.38rem;
      display: flex;
      justify-content: left;
      align-items: center;
      margin: 0 auto;
      border-bottom: .01rem solid #CCCCD0;
      .icon{
        width: 0.1rem;
        height: 0.1rem;
        background: #5E93FF;
        border-radius: 50%;
        margin: 0 0.12rem;
      }
      .text {
        font-size: 0.15rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(76, 92, 141, 1);
      }
    }
  }
}
</style>