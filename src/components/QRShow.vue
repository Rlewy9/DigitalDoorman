<template>
  <div id="content">
    <div class="QRCon_inOrOut" v-if="type=='inOrOut'?true:false">
      <FormH1 style="margin-left:.18rem;" :title="title" :desc="desc"></FormH1>
      <div class="QR">
        <img :src="QRSrc" alt="二维码" />
      </div>
      <div class="desc">
        <p>凭此码通行</p>
        <p>请主动出示，配合检查</p>
      </div>
    </div>

    <div class="QRCon_userInfo" v-if="type=='userInfo'?true:false">
      <FormH1 style="margin-left:.18rem;" :title="title1" :desc="desc1"></FormH1>
      <div class="QR">
        <img :src="QRSrc" alt="二维码" />
      </div>
      <div class="desc">
        <p>凭此码可邀请访客</p>
      </div>
    </div>
  </div>
</template>

<script>
import FormH1 from "../components/FormH1";
import { formatDate } from "../assets/js/date";
export default {
  props: {
    type: String,
    QRSrc: String
  },
  components: {
    FormH1
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  },
  data() {
    return {
      title: "通行证",  //mock1
      desc: `更新于: ${formatDate(new Date(), "yyyy-MM-dd hh:mm")}`, //mock1
      title1: '单位码', //mock2
      desc1: `所属单位a小区`
    };
  }
};
</script>


<style lang="scss" scoped>
#content {
  width: 3.22rem;
  height: 2.77rem;
  background: #fff;
  border: 1px solid rgba(204, 204, 208, 1);
  border-radius: 0.06rem;
  position: absolute;
  top: 2.6rem;
  left: 0.26rem;
  .QR {
    width: 1.4rem;
    height: 1.4rem;
    position: absolute;
    top: 0.85rem;
    left: 0.9rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .desc {
    width: 100%;
    height: 0.3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 2.35rem;
    p {
      font-size: 0.13rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #a3a9b6;
    }
  }
}
</style>