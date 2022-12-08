<style lang="less">
.land {
  & {
    height: 100%;
  }

  &:after {
    clear: both;
  }

  &-ware,
  &-main {
  }

  &-ware {
    height: 100%;
    float: left;
  }

  &-main {
    overflow: hidden;
  }
}
</style>

<template>
  <div class="land">
    <div class="land-ware" :style="{ minWidth: `${+space}px` }">
      <slot name="ware" />
    </div>

    <div class="land-main" :style="{ marginLeft: `${+space + +gap}px` }">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'vs-land',

  props: {
    space: {
      type: [Number, String],
      default: 200,
    },

    gap: {
      type: [Number, String],
      default: 0,
    },
  },
};
</script>
