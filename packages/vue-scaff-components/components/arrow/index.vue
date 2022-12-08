<style lang="less" scoped>
// Arrow
.arrow {
  @line: 6px;

  @distance: (@line / 4);
  @offset: (@line / 2.4);
  @rotate: 45deg;

  color: @aside-color-font;

  position: relative;
  text-align: center;

  cursor: pointer;

  &:before,
  &:after {
    content: '';

    top: calc(50% - (@distance / 2));
    position: absolute;
    transition: all @duration;
    background-color: @aside-color-font;

    width: @line;
    height: @distance;
    border-radius: 2px;
  }

  &:before {
    transform: rotate(@rotate) translate(@offset);
  }
  &:after {
    transform: rotate(-@rotate) translate(-@offset);
  }

  &:hover {
    &:before,
    &:after {
      background-color: @aside-color-active;
    }
  }

  &.open {
    &:before {
      transform: rotate(-@rotate) translate(@offset);
    }
    &:after {
      transform: rotate(@rotate) translate(-@offset);
    }
  }
}
</style>

<template>
  <i class="arrow" :class="{ open }" :style="{ ...css }" @click="helper" />
</template>

<script>
export default {
  name: 'vs-arrow',

  props: {
    open: {
      type: [Boolean],
      default: false,
    },

    touch: {
      type: [String, Number],
      default: 32,
    },
  },

  computed: {
    css() {
      return {
        width: `${this.touch}px`,
        height: `${this.touch}px`,
      };
    },
  },

  methods: {
    helper() {
      this.$emit('update:open', !this.open);
    },
  },
};
</script>
