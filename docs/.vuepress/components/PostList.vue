// PostList.vue
<template>
  <div class="category-list">
    <div v-for="post in posts" class="content-box">
      <div class="box-img">
        <a v-bind:href="post.path"><img v-bind:src="'/images/' + post.frontmatter.topimg" /></a>
      </div>
      <div class="box-txt">      
        <h2>{{post.title}}</h2>
        <p>{{post.frontmatter.description}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import '../public/js/category.js';
export default {
  computed: {
    posts() {
      return this.$site.pages
        //表示travel目录下的所有post
        .filter(post => post.path.startsWith('/travel'))
        //日期按照降序排列
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
    }
  }

}
</script>
