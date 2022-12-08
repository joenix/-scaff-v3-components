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
    <vs-aside space="220" header-space="60" :logo="app.meta.logo" :title="app.meta.title" :sub-title="app.meta.subTitle">
      <!-- Navigator -->
      <vs-navigator :routes="$router.options.routes" />
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
        <router-view v-slot="{ Component }">
          <transition name="main" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </vs-main>
    </vs-flex>
  </vs-flex>
</template>

<script>
export default {
  props: {
    certification: {
      type: [Boolean],
      default: true,
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
