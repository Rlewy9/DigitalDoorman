<template>
  <div class="record">
    <div class="content">
      <div class="contentItem" v-for='(item,index) in infoList' :key='index'>
        <div class="key">{{item.key}}:</div>
        <div class="value">{{item.value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        infoList: Array
    }
};
</script>


<style lang="scss" scoped>
.record {
  width: 3.22rem;
//   height: 1.69rem;
  border: 0px solid rgba(204, 204, 208, 1);
  border-radius: 0.06rem;
  background: #fff;
  margin: 0.1rem auto 0;
  .content {
    padding: 0.1rem 0.2rem;
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
}
</style>