// .vuepress/theme/Layout.vue
<template>
  <Layout>
    
    <footer slot="page-bottom">
      <p class="size40 text-center mb20">SUBSCRIBE</p>
      <p class="size18 text-center mb40">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
      <div class="m-center">
        <div class="share-icon"><img src="/images/wecahat.png" /></div>
        <div class="share-icon"><img src="/images/weibo.png" /></div>
      </div>
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
