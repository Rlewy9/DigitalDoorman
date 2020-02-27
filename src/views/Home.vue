<template>
  <div class="home" :style="bg">
    <span>祈愿平安 共同战“疫”</span>
    <!-- 个人用户 -->
    <div class="modules" v-if="userType==0?true:false">
      <home-modules
        v-for="(item,index) in modulesList"
        :key="index"
        :num="item.num"
        :icon="item.icon"
        :desc="item.desc"
        :navigate="item.navigate"
      ></home-modules>
    </div>
    <!-- 门卫用户 -->
    <div class="modules" v-if="userType==1?true:false">
      <home-modules
        v-for="(item,index) in modulesList"
        :key="index"
        :num="item.num"
        :icon="item.icon"
        :desc="item.desc"
        :navigate="item.navigate"
      ></home-modules>
    </div>
    <!-- 主管用户 -->
    <div class="modules" v-if="userType==2?true:false">
      <home-modules
        v-for="(item,index) in modulesList"
        :key="index"
        :num="item.num"
        :icon="item.icon"
        :desc="item.desc"
        :navigate="item.navigate"
      ></home-modules>
    </div>
  </div>
</template>

<script>
import HomeModules from "../components/HomeModules";
import home_modulesList from "../assets/js/home_modulesList";
export default {
  name: "Home",
  components: {
    HomeModules
  },
  watch: {
    $route(to, from) {
      this.$router.go(0);
    }
  },
  data() {
    return {
      modulesList: [], //功能列表
      userType: 0, //用户类型  0个人  1门卫  2主管
      bg: {
        backgroundImage: ""
      }
    };
  },
  created() {
    if (this.$route.query.userType) {
      this.userType = this.$route.query.userType;
    }
    //取跳转链接参数 判断用户身份
    this.modulesList = home_modulesList.List[this.userType];
    this.bg.backgroundImage =
      "url(" + require("../assets/img/home/bg" + this.userType + ".png") + ")";
  },
  methods: {}
};
</script>


<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  .modules {
    width: 3.22rem;
    margin: 0 auto;
    padding-top: 1rem;
  }
  .img {
    width: 100%;
    height: 100%;
  }
  span {
    display: block;
    position: absolute;
    top: 1.1rem;
    left: 0.29rem;
    font-size: 0.22rem;
    font-family: Lantinghei SC;
    font-weight: 800;
    color: #fff;
  }
}
</style>