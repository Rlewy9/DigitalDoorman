<template>
  <div id="content">
    <!-- 模块数量1 -->
    <div id="module1" v-if="num==1?true:false" @click="todo(navigate[0])">
      <div class="con">
        <div class="desc">{{desc[0]}}</div>
        <div class="icon">
          <img class="img" :src="icon[0]" :alt="desc[0]" />
        </div>
      </div>
    </div>

    <!-- 模块数量2 -->
    <div id="module2" v-if="num==1?false:true">
      <div id="sec" @click="todo(navigate[0])">
        <div class="con">
          <div class="icon">
            <img class="img" :src="icon[0]" :alt="desc[0]" />
          </div>
          <div class="desc">{{desc[0]}}</div>
        </div>
      </div>
      <div id="sec" @click="todo(navigate[1])">
        <div class="con">
          <div class="icon">
            <img class="img" :src="icon[1]" :alt="desc[1]" />
          </div>
          <div class="desc">{{desc[1]}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: Number,
    icon: Array,
    desc: Array,
    navigate: Array
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    todo(src) {
      console.log(src);
    }
  }
};
</script>


<style lang="scss" scoped>
.img {
  width: 100%;
  height: 100%;
}
.desc {
  font-size: 0.15rem;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(76, 92, 141, 1);
}
.icon {
  width: 0.51rem;
  height: 0.51rem;
}
#module1 {
  width: 100%;
  height: 1.21rem;
  box-shadow: 0 0.01rem 0.04rem 0 rgba(233, 233, 234, 0.83);
  border-radius: 0.06rem;
  margin-bottom: 0.07rem;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .con {
    width: 73%;
    height: 0.51rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
#module2 {
  width: 100%;
  height: 1.21rem;
  margin-bottom: 0.07rem;
  display: flex;
  justify-content: space-between;
  #sec {
    width: 1.57rem;
    height: 100%;
    background: #fff;
    box-shadow: 0 0.01rem 0.04rem 0 rgba(233, 233, 234, 0.83);
    border-radius: 0.06rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .con {
      width: 75%;
      height: 75%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  }
}
</style>