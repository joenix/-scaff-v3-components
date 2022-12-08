<style lang="less" scoped>
.navigator {
  padding: @atom 0;
}
</style>

<template>
  <div class="navigator">
    <vs-navigator-group v-for="(group, index) in routes" :route="group" :minify="app.minify">
      <template v-slot="{ children }">
        <vs-navigator-menu :group="children" />
      </template>
    </vs-navigator-group>
  </div>
</template>

<script>
/**
 * One Route Properties
 * ========== ========== ==========
 * @param name { String }
 * @param path { String }
 * @param redirect { Route }
 * @param meta { Object }
 *   @param title { String }
 *   @param icon { Antv Icon }
 * @param children { Array => Route }
 * ========== ========== ==========
 */
export default {
  name: 'vs-navigator',

  props: {
    routes: {
      type: [Array],
      default: [],
    },
  },
};
</script>
