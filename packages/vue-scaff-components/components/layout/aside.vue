<style lang="less" scoped>
.aside {
  transition: all @duration;

  color: @aside-color-active;
  background-color: @aside-color-background;
  width: @aside-space;

  &--header {
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
    height: calc(100vh - @aside-space-header);
  }

  &.minify {
    width: @aside-space-minify !important;

    .aside--header--content {
      display: none;
    }
  }
}
</style>

<template>
  <vs-flex class="aside" :class="{ minify: app.minify }" direction="col" :width="space">
    <vs-flex class="aside--header" :height="headerSpace" v-if="$slots.header || logo || title">
      <slot name="header" v-if="$slots.header" />
      <template v-else>
        <div class="aside--header--logo" v-if="logo">
          <img :src="logo" />
        </div>
        <vs-flex class="aside--header--content" flex="1" direction="col" justify="center" v-if="title || subTitle">
          <div class="aside--header--title">{{ title }}</div>
          <div class="aside--header--subTitle">{{ subTitle }}</div>
        </vs-flex>
      </template>
    </vs-flex>
    <div class="aside--container">
      <slot />
    </div>
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

    headerSpace: {
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
