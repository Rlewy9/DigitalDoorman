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
#content{
  padding-top: .45rem;
}
</style>


