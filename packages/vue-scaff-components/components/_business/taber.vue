<style lang="less">
.taber-leave-active,
.taber-enter-active {
  transition: all @slow;
}

.taber-enter-active {
  transition-delay: @slow;
}

.taber-enter-from {
  height: 0;
  overflow: hidden;

  opacity: 0;
  transform: translateX(-@unit);
}
.taber-enter-to {
  opacity: 1;
}

.taber-leave-from {
  opacity: 1;
}
.taber-leave-to {
  height: 0;
  overflow: hidden;

  opacity: 0;
  transform: translateX(@unit);
}

.taber {
  position: relative;

  &--container {
    // position: absolute;
  }
}
</style>

<template>
  <div class="taber">
    <a-tabs v-model:active-key="key" @change="value => $emit('update:active', value)">
      <a-tab-pane v-for="(data, key) in options" :key="key" :tab="data.title" :forceRender="true" />
    </a-tabs>

    <template v-for="(data, key) in options">
      <transition name="taber" mode="out-in">
        <template v-if="key === active">
          <div class="taber--container">
            <slot :name="key" :data="data" />
          </div>
        </template>
      </transition>
    </template>
  </div>
</template>

<script>
export default {
  name: 'bs-taber',

  props: {
    options: {
      type: [Object],
      default: {},
    },
    active: {
      type: [String, Number],
      default: -1,
    },
  },

  data() {
    return {
      key: this.active,
    };
  },
};
</script>
