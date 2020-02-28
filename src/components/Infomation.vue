<template>
  <div id="content">
    <div class="infoCard" :style="type==1?'background:#E9E9E9':''">
      <div class="icon" :style="type==1?'background:#535E75':''">
        <p :style="type==1?'color:#fff':''">{{info.icon}}</p>
      </div>
      <div class="info">
        <div class="name">
          <div class="key">姓名:</div>
          <div class="value">{{info.name}}</div>
        </div>
        <div class="id" v-if="idFlag">
          <div class="key">身份证号:</div>
          <div class="value">{{info.id}}</div>
        </div>
        <div class="tel">
          <div class="key">手机号:</div>
          <div class="value">{{info.tel}}</div>
        </div>
        <div class="address" v-if="addressFlag">
          <div class="key">住址:</div>
          <div class="value">{{info.address}}</div>
        </div>
        <div class="userType" v-if="userTypeFlag">
          <div class="key">角色:</div>
          <div class="value">{{info.userType}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    idFlag: Boolean,
    addressFlag: Boolean,
    userTypeFlag: Boolean,
    type: Number
  },
  data() {
    return {
      info: {
        icon: "JL",
        name: "刘正宵",
        id: "11022319950214281X",
        tel: "18516974698",
        address: "北京市通州区中仓小区1111111",
        userType: "业主"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
#content {
  width: 3.75rem;
  position: absolute;
  top: 0.8rem;
  .infoCard {
    width: 3.22rem;
    box-shadow: 0 0.01rem 0.04rem 0 rgba(233, 233, 234, 0.83);
    border: 0.01rem solid rgba(204, 204, 208, 1);
    border-radius: 0.06rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.1rem auto;
    padding: 0.13rem 0;
    background: #f2f7ff;
    .icon {
      width: 0.52rem;
      height: 0.52rem;
      background: #5e92ff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.18rem;
      font-family: PingFang SC;
      font-weight: 500;
    }
    .info {
      width: 2.3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .name,
      .id,
      .tel,
      .address,
      .userType {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 0.15rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: #878d9e;
        margin: 0.045rem 0;
        .key {
          width: 30%;
          text-align: right;
        }
        .value {
          width: 65%;
          text-align: left;
        }
      }
    }
  }
}
</style>