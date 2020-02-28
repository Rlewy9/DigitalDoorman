<template>
  <div id="content">
    <div class="noneMes" v-if='userType==0?false:true'>
      <div class="icon">
        <img
          :src="userType==1?require('../assets/img/messageList/pop_1.png'):require('../assets/img/messageList/pop_2.png')"
          alt="无消息"
        />
      </div>
      <div class="desc"></div>
    </div>
  </div>
</template>


<script>
export default {
    created(){
        
    },
  mounted() {
    console.log("a");
  }
};
</script>

<style lang="scss" scoped>
</style>