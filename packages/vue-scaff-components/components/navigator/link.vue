<style lang="less" scoped>
.navigator--link {
  transition: all @duration;
  position: relative;

  display: block;
  color: @aside-color-font;

  &:after {
    content: '';
    background-color: @aside-color-bar;
    transition: all @duration;

    width: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    position: absolute;
  }

  &:hover {
    color: @aside-color-active;
  }

  &--icon {
    margin-right: (@atom / 2);
    display: inline-block;
    width: @unit;
  }

  &--text {
    z-index: 1;
    position: relative;
  }

  &.minify {
    padding: @atom 0 !important;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .navigator--link--icon,
    .navigator--link--text {
      line-height: @aside-minify-line;
    }

    .navigator--link--icon {
      span {
        display: flex;
        justify-content: center;

        // text-align: center;
        font-size: @aside-minify-icon;
      }
    }
    .navigator--link--text {
      // line-height: @aside-minify-line;
    }
  }

  &.active {
    color: @aside-color-background;

    &:after {
      width: 100%;
    }
  }
}
</style>

<template>
  <!-- Route Link -->
  <router-link class="navigator--link" :class="{ minify, active }" v-if="route.name || route.path" :to="{ ...route }" :style="{ ...css }">
    <span class="navigator--link--icon"><component :is="route.meta.icon" /></span>
    <span class="navigator--link--text">{{ route.meta.title }}</span>
  </router-link>

  <!-- No Link -->
  <a href="javascript:void(0);" class="navigator--link" :class="{ minify, active }" v-else :style="{ ...css }">
    <span class="navigator--link--icon"><component :is="route.meta.icon" /></span>
    <span class="navigator--link--text">{{ route.meta.title }}</span>
  </a>
</template>

<script>
export default {
  name: 'vs-navigator-link',

  props: {
    route: {
      type: [Object],
      default: {},
    },

    minify: {
      type: [Boolean],
      default: false,
    },

    height: {
      type: [String, Number],
      default: 40,
    },

    indent: {
      type: [String, Number],
      default: 16,
    },
  },

  computed: {
    active() {
      return this.$route.name === this.route.name;
    },

    css() {
      return {
        paddingLeft: `${this.indent}px`,
        lineHeight: `${this.height}px`,
      };
    },
  },
};
</script>
