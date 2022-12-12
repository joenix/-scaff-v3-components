<style lang="less" scoped>
.aside {
  transition: all @duration;

  color: @aside-color-font;
  background-color: @aside-color-background;
  width: @aside-space;

  &--toper {
    overflow: hidden;

    background-color: @aside-color-deep;
    padding: @atom;

    &--logo {
      margin-right: @atom;

      img {
        max-height: 100%;
        background-color: @white;
        border-radius: 100px;
      }
    }

    &--content {
    }

    &--title {
      font-size: @aside-size-title;
      font-weight: 700;
    }

    &--subTitle {
      font-size: @aside-size-subTitle;
      font-weight: 300;
    }
  }

  &--container {
    overflow-y: auto;
    height: calc(100vh - @aside-space-toper) !important;
  }

  &.minify {
    width: @aside-space-minify !important;

    .aside--toper--content {
      display: none;
    }
  }
}
</style>

<template>
  <vs-flex class="aside" :class="{ minify: app.minify }" direction="col" :width="space">
    <vs-flex class="aside--toper" :height="toperSpace" v-if="$slots.toper || logo || title">
      <slot name="toper" v-if="$slots.toper" />
      <template v-else>
        <div class="aside--toper--logo" v-if="logo">
          <img :src="logo" />
        </div>
        <vs-flex class="aside--toper--content" flex="1" direction="col" justify="center" v-if="title || subTitle">
          <div class="aside--toper--title">{{ title }}</div>
          <div class="aside--toper--subTitle">{{ subTitle }}</div>
        </vs-flex>
      </template>
    </vs-flex>
    <vs-flex direction="col" class="aside--container">
      <slot />
    </vs-flex>
  </vs-flex>
</template>

<script>
export default {
  name: `vs-aside`,

  props: {
    space: {
      type: [String, Number],
      default: 200,
    },

    toperSpace: {
      type: [String, Number],
      default: 60,
    },

    logo: {
      type: [String],
      default: '',
    },

    title: {
      type: [String],
      default: '',
    },

    subTitle: {
      type: [String],
      default: '',
    },
  },
};
</script>
