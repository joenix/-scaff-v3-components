<style lang="less">
.navigator--group {
  &--title,
  &--container {
    transition: all @duration;
  }

  &--title {
  }

  &--container {
    transition-delay: @fast;
    overflow: hidden;

    &,
    &.minify {
      opacity: 0;
      max-height: 0;
    }

    &.open {
      opacity: 1;
      max-height: 100vh;

      &.minify {
        opacity: 0;
        max-height: 0;
      }
    }
  }

  &.minify {
    position: relative;

    .navigator--group--title {
      &.active {
        background-color: @aside-minify-highlight;

        .navigator--link {
          color: @aside-color-active !important;
        }
      }
    }

    .navigator--group--container {
      width: @aside-space;
      height: 100vh;

      max-width: 0;
      max-height: none;

      top: 0;
      bottom: 0;
      left: @aside-space-minify;
      z-index: 1;
      position: fixed;
      background-color: @aside-minify-highlight;
      box-shadow: 1px 0 @atom rgba(0, 0, 0, 0.075);
    }

    &:hover {
      .navigator--group--container {
        opacity: 1;
        max-width: @aside-space;
      }
    }
  }
}
</style>

<template>
  <div class="navigator--group" :class="{ minify }">
    <vs-flex align="center" class="navigator--group--title" :class="{ active }">
      <vs-flex-item>
        <vs-navigator-link :route="route" :minify="minify" />
      </vs-flex-item>

      <vs-arrow v-if="!minify" :touch="40" v-model:open="open" />
    </vs-flex>

    <div class="navigator--group--container" :class="{ open, minify }" v-if="route.children">
      <slot :children="route.children" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'vs-navigator-group',

  props: {
    route: {
      type: [Object],
      default: {},
    },

    minify: {
      type: [Boolean],
      default: false,
    },
  },

  computed: {
    active() {
      let has = false;
      this.$util.recursive([this.route], route => {
        if (this.$route.name === route.name) {
          has = true;
        }
      });
      return has;
    },
  },

  data() {
    return {
      open: true,
    };
  },
};
</script>
