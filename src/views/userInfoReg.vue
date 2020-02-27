<template>
  <div class="userInfoReg">
    <div class="infoCon">
      <FormH1 :title="FormH1[0].title" :desc="FormH1[0].desc"></FormH1>
      <div class="infoItem" style="margin-top: 0.46rem;">
        <div class="key">* 姓名</div>
        <div class="value">sss</div>
      </div>
      <div class="infoItem">
        <div class="key">* 身份证号</div>
        <div class="value">123123434321231</div>
      </div>
      <div class="infoItem">
        <div class="key" style="margin-bottom: 0;">* 手机号</div>
        <TelVerify></TelVerify>
      </div>
      <div class="infoItem">
        <div class="key" style="margin-bottom: 0;">* 住宅信息</div>
        <input type="text" placeholder="请填写您的真实住址" />
        <!-- <van-field v-model="value" placeholder="请填写您的真实住址" /> -->
      </div>
      <button class="btn">提交保存</button>
    </div>
  </div>
</template>

<script>
import FormH1 from "../components/FormH1";
import TelVerify from "../components/TelVerify";
export default {
  components: {
    FormH1,
    TelVerify
  },
  data() {
    return {
      FormH1: [
        {
          title: "请填写您的信息",
          desc: "所有信息仅用于登记使用，绝不对外提供"
        }
      ],
      value: ""
    };
  }
};
</script>


<style lang="scss" scoped>
.userInfoReg {
  background: #fff;
  width: 3.75rem;
  .infoCon {
    width: 3.27rem;
    margin: 0 auto;
    .infoItem {
      margin-top: 0.23rem;
      //   height: 0.48rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .key {
        height: 0.16rem;
        font-size: 0.15rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(76, 92, 141, 1);
        margin-bottom: 0.17rem;
      }
      .value {
        height: 0.15rem;
        font-size: 0.15rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(135, 141, 158, 1);
      }
      input {
        width: 100%;
        height: 0.3rem;
        border-bottom: 0.01rem solid #eff2fd;
        font-size: 0.15rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(135, 141, 158, 1);
      }
      input::-webkit-input-placeholder {
        color: rgba(212, 213, 215, 1);
        font-size: 0.15rem;
      }
    }
    .btn {
      width: 3rem;
      height: 0.41rem;
      margin: 0.27rem 0.13rem;
      background: rgba(94, 146, 255, 1);
      border-radius: 0.2rem;
      font-size: 0.17rem;
      font-family: PingFang SC;
      font-weight: 500;
      color: #fff;
    }
  }
}
</style>


