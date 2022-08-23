<template>
  <footer class="footer">
    © {{ thisYear }}
    <span
      v-for="(link, name) in links"
      :key="name"
    >
      <a :href="link">
        {{ name }}
      </a>
    </span>
  </footer>
</template>

<script>
export default {
  computed: {
    thisYear() {
      return new Date().getFullYear();
    },
    links() {
      return this.$themeConfig.footerLinks || {};
    },
  }
}
</script>
