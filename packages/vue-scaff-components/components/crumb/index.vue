<style lang="less" scoped>
.crumb {
  em {
    font-style: normal;
    padding: 0 @atom;
  }

  em,
  a {
    color: #a2a3a4;
  }

  a {
    &:hover,
    &:active {
      color: @primary;
    }
  }
}
</style>

<template>
  <div class="crumb">
    <template v-for="({ meta, path }, index) in routes">
      <em v-if="index">{{ separator }}</em>
      <span v-if="index === routes.length - 1">{{ meta.title }}</span>
      <router-link v-else :to="{ path }">{{ meta.title }}</router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'vs-crumb',

  props: {
    routes: {
      type: [Array],
      default: [],
    },

    separator: {
      type: [String],
      default: '>',
    },
  },
};
</script>
