<template>
  <div id="app">
    <window></window>
    <div id="content">
      <van-notice-bar text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容" left-icon="volume-o" />
      <router-view />
    </div>
  </div>
</template>

<script>
import window from "./components/Window";
export default {
  provide() {
    return {
      routerReload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  components: {
    window
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => (this.isRouterAlive = true));
    }
  }
};
</script>

<style lang="scss" scoped>
html,
body {
  width: 100%;
  height: 100%;
}
#content {
  padding-top: 0.4rem;
  width: 100%;
  height: 100%;
  min-height: 6.22rem;
  background: #f5f5f5;
}
</style>


