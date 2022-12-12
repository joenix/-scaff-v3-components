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

  &.reverse {
    .land-ware {
      float: right;
    }
  }
}
</style>

<template>
  <div class="land" :class="{ reverse }">
    <div class="land-ware" :style="{ minWidth: `${+space}px` }">
      <slot name="ware" />
    </div>

    <div class="land-main" :style="{ [reverse ? 'marginRight' : 'marginLeft']: `${+space + +gap}px` }">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'vs-land',

  props: {
    reverse: {
      type: [Boolean],
      default: false,
    },

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
