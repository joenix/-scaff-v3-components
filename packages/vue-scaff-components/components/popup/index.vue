<style lang="less">
.popup {
  &.inline {
    display: inline;
  }
}
</style>

<template>
  <div class="popup" :class="{ inline }">
    <span @click="open">
      <slot v-if="$slots.trigger" name="trigger" />
      <a-button v-else type="primary">{{ label }}</a-button>
    </span>

    <a-modal v-model:visible="view" :title="title" :cancel-text="cancelText" :ok-text="successText" @ok="success">
      <template #footer v-if="noControl" />
      <slot />
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'vs-popup',

  props: {
    visible: {
      type: [Boolean],
      default: false,
    },

    inline: {
      type: [Boolean],
      default: false,
    },

    label: {
      type: [String],
      default: 'Open',
    },

    title: {
      type: [String],
      default: 'Popup',
    },

    noControl: {
      type: [Boolean],
      default: false,
    },

    successText: {
      type: [String],
      default: 'OK',
    },

    cancelText: {
      type: [String],
      default: 'Cancel',
    },
  },

  data() {
    return {
      view: this.visible,
    };
  },

  watch: {
    visible(value) {
      if (value !== this.view) {
        this.view = value;
      }
    },
    view(value) {
      this.$emit('update:visible', value);
    },
  },

  methods: {
    open() {
      // Emit Event
      this.$emit('ready');

      // Open Popup
      this.view = true;
    },

    success() {
      this.$emit('submit');
    },
  },
};
</script>
