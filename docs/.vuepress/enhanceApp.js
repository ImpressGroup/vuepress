import haha from './public/js/site.js';
export default ({ isServer, Vue }) => {
  console.log("restart");
  Vue.use(haha);

  if (!isServer) {
    // Register jQuery
    window.$ = window.jQuery = require('jquery');
    // Register your jQuery plugin
    //require('owl.carousel')
    //require('owl.carousel/dist/assets/owl.carousel.min.css')
    // /require('owl.carousel/dist/assets/owl.theme.default.min.css')
  }
}