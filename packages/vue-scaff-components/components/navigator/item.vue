<style lang="less" scoped>
.navigator--item {
  //   padding-left: @unit;
}
</style>

<template>
  <div class="navigator--item">
    <template v-for="(sub, index) in group">
      <!-- Single Link -->
      <vs-navigator-link :route="sub" :indent="level * 16" />
      <!-- Sub Recursion -->
      <vs-navigator-item v-if="sub.children" :group="sub.children" :level="level + 1" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'vs-navigator-item',

  props: {
    group: {
      type: [Array],
      default: [],
    },
    level: {
      type: [String, Number],
      default: 1,
    },
  },
};
</script>
