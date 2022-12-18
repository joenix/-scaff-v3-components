<style lang="less" scoped>
.flex {
  display: flex;
}
</style>

<template>
  <div class="flex" :style="{ ...css }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'vs-flex',

  props: {
    direction: {
      type: [String],
      default: 'row',
    },

    justify: {
      type: [String],
      default: 'normal',
    },

    align: {
      type: [String],
      default: 'normal',
    },

    wrap: {
      type: [String],
      default: 'nowrap',
    },

    flex: {
      type: [String, Number],
      default: 'none',
    },

    gap: {
      type: [String, Number],
      default: 0,
    },

    width: {
      type: [String, Number],
      default: 'auto',
    },

    height: {
      type: [String, Number],
      default: 'auto',
    },
  },

  data() {
    return {
      dict: {
        row: 'row',
        col: 'column',

        start: 'flex-start',
        end: 'flex-end',

        around: 'space-around',
        between: 'space-between',

        center: 'center',
        normal: 'normal',
      },
    };
  },

  computed: {
    css() {
      return {
        'flex-direction': `${this.dict[this.direction]}`,
        'justify-content': `${this.dict[this.justify]}`,
        'align-items': `${this.dict[this.align]}`,
        'flex-wrap': `${this.wrap}`,
        flex: `${this.flex}`,
        width: /^\d+$/.test(this.width) ? `${this.width}px` : this.width,
        height: /^\d+$/.test(this.height) ? `${this.height}px` : this.height,
        gap: `${this.gap}px`,
      };
    },
  },
};
</script>
