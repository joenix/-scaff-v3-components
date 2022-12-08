<style lang="less" scoped>
.avatar {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

<template>
  <div class="avatar" :style="{ ...css }" />
</template>

<script>
export default {
  name: 'vs-avatar',

  props: {
    size: {
      type: [String, Number],
      default: 32,
    },

    src: {
      type: [String],
      default: '',
    },
  },

  computed: {
    css() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
        borderRadius: `${this.size}px`,
        backgroundImage: `url(${this.src})`,
      };
    },
  },
};
</script>
