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
    overflow: hidden;
    transition: all @duration;
  }

  &-ware {
    height: 100%;
    float: left;
  }

  &-main {
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
    <div class="land-ware" :style="{ width: `${room}px` }">
      <slot name="ware" />
    </div>

    <div class="land-main" :style="{ [reverse ? 'marginRight' : 'marginLeft']: `${room + +gap}px` }">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'vs-land',

  props: {
    visible: {
      type: [Boolean],
      default: true,
    },

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

  computed: {
    room() {
      return this.visible ? +this.space : 0;
    },
  },
};
</script>
