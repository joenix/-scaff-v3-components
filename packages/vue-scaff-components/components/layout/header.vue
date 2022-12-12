<style lang="less" scoped>
.header {
  padding: 0 @unit;
  border-bottom: 1px solid @shallow;
  background-color: @white;
}
</style>

<template>
  <vs-flex class="header" align="center" justify="between" :height="space">
    <slot />
    <div class="header--right" v-if="$slots.right">
      <slot name="right" />
    </div>
  </vs-flex>
</template>

<script>
export default {
  name: `vs-header`,

  props: {
    space: {
      type: [String, Number],
      default: 60,
    },
  },

  computed: {
    css() {
      return {
        height: `${this.space}px`,
      };
    },
  },
};
</script>
