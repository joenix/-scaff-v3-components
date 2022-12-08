<template>
  <vs-flex wrap="wrap" :justify="justify" :align="align" class="grid">
    <template v-for="(item, key) in source">
      <div class="grid--item" v-if="$slots[key]" :style="`width: ${(100 / span).toFixed(8)}%`">
        <slot :name="key" :data="item" :key="key" />
      </div>
    </template>
  </vs-flex>
</template>

<script>
export default {
  name: `vs-grid`,

  props: {
    source: {
      type: [Object],
      default: {},
    },

    span: {
      type: [String, Number],
      default: 4,
    },

    justify: {
      type: [String],
      default: 'normal',
    },

    align: {
      type: [String],
      default: 'normal',
    },
  },
};
</script>
