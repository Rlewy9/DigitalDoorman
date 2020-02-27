<template>
  <div class="content">
    <input type="text" placeholder="请输入您的手机号" maxlength="11" minlength=""/>
    <div class="verifyCode">
      <input type="text" placeholder="请输入验证码" style="border: none;" maxlength="6"/>
      <div class="separated"></div>
      <div class="sendCode">手机校验码</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  border-bottom: 0.01rem solid #eff2fd;
  input {
    width: 100%;
    height: 0.3rem;
    border-bottom: 0.01rem solid #eff2fd;
    font-size: 0.15rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(135, 141, 158, 1);
    margin-bottom: 0.05rem;
  }
  input::-webkit-input-placeholder {
    color: rgba(212, 213, 215, 1);
    font-size: 0.15rem;
  }
  .verifyCode {
    width: 100%;
    height: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input{
        width: 2.29rem;
    }
    .separated {
      height: 0.2rem;
      border-right: 0.01rem solid #eff2fd;
    }
    .sendCode {
      width: 0.95rem;
      height: 100%;
      font-size: 0.15rem;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(98, 140, 228, 1);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>