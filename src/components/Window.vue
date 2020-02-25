<template>
  <div id="window">
    <p>这是window</p>
    <div id="option">···</div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
$border-color: #ddd;
#window {
  width: 100vw;
  height: 0.44rem;
  background: #fff;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.01rem solid $border-color;
  p {
    font-size: 0.19rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(76, 92, 141, 1);
  }
  #option {
    width: 0.3rem;
    height: 0.2rem;
    position: absolute;
    right: 0.1rem;
  }
}
</style>