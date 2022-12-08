<template>
  <div class="query" />
</template>

<script>
export default {
  name: 'bs-query',

  props: {
    source: {
      type: [Object],
      default: {},
    },

    sync: {
      type: [Array],
      default: [],
    },
  },

  watch: {
    source: {
      handler(value) {
        if (!this.ripe) {
          this.ripe = (Object.assign(value, this.$route.query), true);
        }
        this.$router.replace({ query: this.catcher(value) }).finally(() => (this.respondToRouteChanges = true));
      },

      deep: true,
      immediate: true,
    },
  },

  methods: {
    catcher(origin, target = {}) {
      this.sync.forEach(key => {
        if (origin[key] !== undefined) {
          target[key] = origin[key];
        }
      });

      return target;
    },
  },
};
</script>
