<template>
  <div class="flex-item" :style="{ ...css }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'vs-flex-item',

  props: {
    flex: {
      type: [String, Number],
      default: 1,
    },
  },

  computed: {
    css() {
      return {
        flex: `${this.flex}`,
      };
    },
  },
};
</script>
