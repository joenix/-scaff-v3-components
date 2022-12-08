<style lang="less" scoped>
.navigator--menu {
}
</style>

<template>
  <div class="navigator--menu">
    <vs-navigator-item :group="group" />
  </div>
</template>

<script>
export default {
  name: 'vs-navigator-menu',

  props: {
    group: {
      type: [Array],
      default: [],
    },
  },
};
</script>
