<template>
  <div class="h1">
    <div class="content">
      <p>{{title}}</p>
      <p>{{desc}}</p>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    title: String,
    desc: String
  }
};
</script>

<style lang="scss" scoped>
.h1 {
  width: 100%;
  .content {
    margin: 0.21rem 0;
    height: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    :nth-child(1) {
      font-size: 0.17rem;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(76, 92, 141, 1);
    }
    :nth-child(2) {
      font-size: 0.14rem;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(194, 196, 200, 1);
    }
  }
}
</style>