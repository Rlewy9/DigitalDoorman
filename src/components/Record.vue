<template>
  <div class="record">
    <!-- 出入记录 -->
    <div class="content" v-if="recordType==0?true:false">
      <div class="contentItem" v-for="(item,index) in infoList" :key="index">
        <div class="key">{{item.key}}:</div>
        <div class="value">{{item.value}}</div>
      </div>
    </div>

    <!-- 通行证记录 -->
    <div
      class="content v2"
      :style="bgcType==1?'background:#D6D6D6;':''"
      v-if="recordType==1?true:false"
    >
      <div class="icon" v-if="passRecordType==0?false:true">
        <img :src="passRecordType==1?require('../assets/img/passRecords/used.png'):require('../assets/img/passRecords/expired.png')" alt />
      </div>
      <div class="contentItem">
        <div class="key">访客姓名:</div>
        <div class="value">{{info.name}}</div>
      </div>
      <div class="contentItem">
        <div class="key">访客手机号:</div>
        <div class="value">{{info.tel}}</div>
      </div>
      <div class="contentItem">
        <div class="key">被访者姓名:</div>
        <div class="value">{{info.name1}}</div>
      </div>
      <div class="contentItem">
        <div class="key">被访者手机号:</div>
        <div class="value">{{info.tel1}}</div>
      </div>
      <div class="contentItem">
        <div class="key">访问地址:</div>
        <div class="value">{{info.address}}</div>
      </div>
      <div class="contentItem">
        <div class="key">访问有效期:</div>
        <div class="value">{{info.validity}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    infoList: Array,
    recordType: Number,
    info: Object,
    bgcType: Number,
    passRecordType: Number
  }
};
</script>


<style lang="scss" scoped>
.record {
  width: 3.22rem;
  //   height: 1.69rem;

  margin: 0.1rem auto 0;
  .content {
    padding: 0.1rem 0.2rem;
    border: 0 solid rgba(204, 204, 208, 1);
    border-radius: 0.06rem;
    background: #fff;
    .contentItem {
      display: flex;
      justify-content: center;
      margin: 0.1rem 0;
      font-size: 0.15rem;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(135, 141, 158, 1);
      .key {
        display: flex;
        justify-content: left;
        width: 27%;
      }
      .value {
        display: flex;
        justify-content: left;
        width: 73%;
      }
    }
  }
  .v2 {
    position: relative;
    .contentItem {
      justify-content: left;
      .key {
        width: auto;
        text-align: left;
        margin-right: 0.12rem;
      }
      .value {
        width: auto;
      }
    }
    .icon{
      width: .62rem;
      height: .47rem;
      position: absolute;
      top: .1rem;
      right: .1rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>