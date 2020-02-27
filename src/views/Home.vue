<template>
  <div class="home">
    <!-- 个人用户 -->
    <div class="modules" v-if='userType==0?true:false'>
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
    <div class="modules" v-if='userType==1?true:false'>
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
    <div class="modules" v-if='userType==2?true:false'>
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
import home_modulesList from '../assets/js/home_modulesList'
export default {
  name: "Home",
  components: {
    HomeModules
  },
  data(){
    return{
      modulesList: [],//功能列表
      userType: ''//用户类型  0个人  1门卫  2主管
    }
  },
  created() {
    //取跳转链接参数 判断用户身份
    this.userType = 1

    //
    this.modulesList = home_modulesList.personalList.modulesList
  }
};
</script>


<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background: rgba(245, 245, 245, 1);
  .modules {
    width: 3.22rem;
    margin: 0 auto;
  }
}
</style>