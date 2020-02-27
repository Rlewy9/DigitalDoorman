<template>
  <div id="slidingChoice">
    <div class="content">
      <div class="option1" @click="changeType(0)" :style="type==0?'color: #fff;background: #5E92FF':''">{{option1}}</div>
      <div class="option2" @click="changeType(1)" :style="type==1?'color: #fff;background: #5E92FF':''">{{option2}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    option1: String,
    option2: String
  },
  data(){
      return{
          type: 0
      }
  },
  methods: {
      changeType(type){
          this.type = type
          this.$emit('type',this.type)
      }
  }
};
</script>

<style lang='scss' scoped>
#slidingChoice {
  width: 3.21rem;
  height: 0.41rem;
  margin: 0.1rem auto;
  .content {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 1);
    border: 0.01rem solid rgba(94, 146, 255, 1);
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    .option1,
    .option2 {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.17rem;
      font-family: PingFang SC;
      font-weight: 500;
      color: #4C5C8D;
      border-radius: .2rem;
    }
    .slideBlock{
        width: 50%;
        height: 100%;
        background: #5E92FF;
        
    }
  }
}
</style>