<template>
  <div class="home">
    <div class="modules">
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
export default {
  name: "Home",
  components: {
    HomeModules
  },
  data(){
    return{
      modulesList:[
        {
          num: 1,
          icon: [require('../assets/img/passage.png')],
          desc: ['访客通行'],
          navigate:['1']
        },
        {
          num: 1,
          icon: [require('../assets/img/passage.png')],
          desc: ['出入记录'],
          navigate:['2']
        },
        {
          num: 2,
          icon: [require('../assets/img/passage.png'),require('../assets/img/passage.png')],
          desc: ['到访预约','通行证'],
          navigate:['3','4']
        },
        {
          num: 2,
          icon: [require('../assets/img/passage.png'),require('../assets/img/passage.png')],
          desc: ['个人信息','消息通知'],
          navigate:['5','6']
        }
      ]
    }
  },
  created() {}
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