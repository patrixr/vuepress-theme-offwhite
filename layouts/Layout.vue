<template>
  <div class="theme-container vuepress-theme-offwhite">
    <header class="header">
      <router-link
        to="/"
        :title="$description"
        class="site-name"
      >
        {{ $site.title }}
      </router-link>
      <div
        v-if="subtitle"
        class="site-subtitle"
      >
        {{ subtitle }}
      </div>
      <div style="clear: both" />
      <nav-bar />
    </header>
    <home-page v-if="isHome" />
    <post-page v-else />
    <footer-bar />
  </div>
</template>

<script>
import HomePage from "../components/Home";
import PostPage from "../components/Post";
import FooterBar from '../components/FooterBar';
import NavBar from '../components/NavBar';

export default {
  components: {
    HomePage,
    PostPage,
    FooterBar,
    NavBar,
  },
  computed: {
    isHome() {
      return this.$page.path === '/';
    },
    subtitle() {
      return this.$themeConfig.subtitle || '';
    },
  }
};
</script>
