<style lang="less">
.switch {
  margin-right: @unit;
  font-size: @asize-size-switch;
}
</style>

<template>
  <component class="switch" :is="`menu-${app.minify ? 'unfold' : 'fold'}-outlined`" @click="change" />
</template>

<script>
export default {
  name: 'vs-switch',

  methods: {
    change() {
      this.$store.dispatch('UPDATE_MINIFY', !this.app.minify);
    },
  },
};
</script>
