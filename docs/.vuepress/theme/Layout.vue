// .vuepress/theme/Layout.vue
<template>
  <Layout>
    <footer slot="page-bottom">
      <p class="mb10">会社概要 | インプレスグループサイト | インプレスグループTop</p>
      <p>Copyright&copy;2002-2018 Yama-Kei Publishers co.,Ltd. All rights.</p>
    </footer>
  </Layout>
</template>

<script>
import Layout from '@default-theme/Layout.vue'

export default {
  components: {
    Layout,
  }
}
</script>

<style lang="stylus">
@import 'styles/config.styl'
</style>
