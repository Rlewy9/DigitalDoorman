<template>
  <div id="content">
    <Infomation :idFlag="true" :addressFlag="true" :userTypeFlag="false" :type="1"></Infomation>
    <QRShow :type="type" :QRSrc='QRSrc'></QRShow>
  </div>
</template>

<script>
import Infomation from "../components/Infomation";
import QRShow from "../components/QRShow";
export default {
  components: {
    Infomation,
    QRShow
  },
  data() {
    return {
      type: "inOrOut",
      QRSrc: require('../assets/img/passphrase/QRPassphrase.png')
    };
  },
  mounted() {
    console.log(this.$route.query.a);
  }
};
</script>

<style lang="scss" scoped>
#content {
  margin-top: 0rem;
}
</style>