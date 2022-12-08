<style lang="less">
.app {
  overflow: hidden;

  width: 100vw;
  height: 100vh;
}
</style>

<template>
  <vs-flex class="app">
    <!-- Aside -->
    <vs-aside :space="space" header-space="60" :logo="app.meta.logo" :title="app.meta.title" :sub-title="app.meta.subTitle">
      <!-- Toper -->
      <slot name="toper" />

      <!-- Customer -->
      <slot name="navigator" :routes="routers" v-if="$slots.navigator" />

      <!-- Navigator -->
      <vs-navigator :routes="routers" v-else />
    </vs-aside>

    <!-- Container -->
    <vs-flex flex="1" direction="col">
      <!-- Header -->
      <vs-header space="60">
        <vs-flex align="center">
          <!-- Switch -->
          <vs-switch />

          <!-- Crumbs -->
          <vs-crumb :routes="$route.matched" />
        </vs-flex>

        <!-- Avatar -->
        <div slot="right">
          <!-- Avatar -->
          <vs-avatar size="48" :src="app.meta.avatar" />
        </div>
      </vs-header>

      <!-- Main -->
      <vs-main offset="60">
        <slot />
      </vs-main>
    </vs-flex>
  </vs-flex>
</template>

<script>
export default {
  name: 'vs-layout',

  props: {
    space: {
      type: [String, Number],
      default: 220,
    },

    certification: {
      type: [Boolean],
      default: true,
    },
  },

  computed: {
    routers() {
      return this.$router.options.routes.filter(({ hidden }) => hidden !== true).sort((a, b) => a.meta.index - b.meta.index);
    },
  },

  beforeMount() {
    if (this.certification && !this.app.token) {
      this.$router.replace({ name: 'login' });
    }
  },

  async created() {
    await this.$store.dispatch('AUTH_LOGIN', { username: 'test1', password: '123456' });
  },
};
</script>
