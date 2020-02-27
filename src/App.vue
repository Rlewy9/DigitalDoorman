<template>
  <div id="app">
    <window></window>
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import window from './components/Window'
export default {
  components: {
    window
  }
}
</script>

<style lang="scss" scoped>
html,body{
  width: 100%;
  height: 100%;
}
#content{
  padding-top: .45rem;
  width: 100%;
  height: 100%;
  min-height: 6.22rem;
  background: #f5f5f5;
}
</style>


