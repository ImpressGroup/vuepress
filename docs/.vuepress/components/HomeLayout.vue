<template>
  <div class="page">
    <div class="slideshow">
      <div class="slides slides--images">
        <div class="slide slide--current">
          <div class="slide__img" style="background-image: url(/images/1.jpg)"></div>
        </div>
        <div class="slide">
          <div class="slide__img" style="background-image: url(/images/2.jpg)"></div>
        </div>
        <div class="slide">
          <div class="slide__img" style="background-image: url(/images/3.jpg)"></div>
        </div>
        <div class="slide">
          <div class="slide__img" style="background-image: url(/images/4.jpg)"></div>
        </div>
      </div>
      <div class="slides slides--titles">
        <div class="slide slide--current">
          <h2 class="slide__title">#wonder</h2>
        </div>
        <div class="slide">
          <h2 class="slide__title">#gigantic</h2>
        </div>
        <div class="slide">
          <h2 class="slide__title">#serenity</h2>
        </div>
        <div class="slide">
          <h2 class="slide__title">#summer</h2>
        </div>
      </div>
      <nav class="slidenav">
        <button class="slidenav__item slidenav__item--prev">Previous</button>
        <span>/</span>
        <button class="slidenav__item slidenav__item--next">Next</button>
      </nav>
    </div>
    <div class="top-list">
    <div v-for="post in posts" class="top-box">
      <div class="box-img">
        <a v-bind:href="post.path"><img v-bind:src="'/images/' + post.frontmatter.topimg" /></a>
      </div>
      <div class="box-txt">      
        <h2>{{post.title}}</h2>
        <p>{{post.frontmatter.description}}</p>
      </div>
    </div>
  </div>
    <Content />
  </div>
</template>


<script>
import '../public/js/site.js';
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
<style lang="stylus">
@import '../theme/styles/base.css'
@import '../theme/styles/top.styl'
</style>