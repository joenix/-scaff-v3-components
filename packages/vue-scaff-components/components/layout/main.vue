<style lang="less" scoped>
main {
  position: relative;
  background-color: @main-color-background;
  overflow: auto;
}
</style>

<template>
  <main direction="col" :style="{ height }">
    <slot />
  </main>
</template>

<script>
export default {
  name: `vs-main`,

  props: {
    offset: {
      type: [String, Number],
      default() {
        return 60;
      },
    },
  },

  computed: {
    height() {
      return `calc(100vh - ${this.offset}px)`;
    },
  },
};
</script>
