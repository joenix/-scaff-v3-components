<template>
  <div class="query" />
</template>

<script>
import { cloneDeep, forEach } from 'lodash';

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
      handler(json) {
        if (!this.ripe) {
          this.ripe = Object.assign(json, this.$route.query);
        }

        this.$router.replace({ query: this.catcher(json) }).finally(() => (this.respondToRouteChanges = true));
      },

      deep: true,
      immediate: true,
    },
  },

  methods: {
    // Encode: { array } => { string }
    encode(value) {
      return value.join(',');
    },

    // Decode: { string } => { array }
    decode(value) {
      return /\w{1,}\,/.test(value) ? value.split(',') : value;
    },

    // Catcher Cloner
    catcher(origin, cloner = {}) {
      // No Sync as All
      this.sync.length ? this.sync.forEach((item, key) => (cloner[key] = origin[key])) : (cloner = origin);

      // Usage as Cloner
      return cloneDeep(cloner);
    },
  },
};
</script>
