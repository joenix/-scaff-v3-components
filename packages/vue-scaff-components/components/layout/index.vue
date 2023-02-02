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
    <vs-aside :space="space" toper-space="60" :logo="app.meta.logo" :title="app.meta.title" :sub-title="app.meta.subTitle">
      <!-- Chief -->
      <slot name="chief" v-if="$slots.chief" />

      <!-- Custom Navigator -->
      <slot name="navigator" :routes="routers" v-if="$slots.navigator" />

      <!-- Navigator -->
      <vs-navigator :routes="routers" v-else />

      <!-- Footer -->
      <slot name="footer" v-if="$slots.footer" />
    </vs-aside>

    <!-- Container -->
    <vs-flex flex="1" direction="col">
      <!-- Header -->
      <vs-header space="60">
        <!-- Custom Header -->
        <slot name="header" :routes="$route.matched" v-if="$slots.header" />

        <!-- Header -->
        <vs-flex align="center" v-else>
          <!-- Switch -->
          <vs-switch />

          <!-- Crumbs -->
          <vs-crumb :routes="$route.matched" />
        </vs-flex>

        <!-- Avatar -->
        <div slot="right">
          <!-- Custom Avatar -->
          <slot v-if="$slots.avatar" />

          <!-- Avatar -->
          <a-dropdown v-else>
            <vs-avatar size="48" :src="app.meta.avatar" />

            <template #overlay> 1 </template>
          </a-dropdown>
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
      // location.href = location.origin + '/#/login';
      // location.reload();

      // A Bug
      this.$router.push({ name: 'login', replace: true });
    }
  },
};
</script>
