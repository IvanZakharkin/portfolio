import Vue from "vue";
import Flickity from 'vue-flickity';



new Vue({
  el: '#reviews-component',
  template: "#reviews-list",

  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        initialIndex: 2,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        groupCells: true,
        selectedAttraction: 0.02,
      },
      reviews: [],
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    },

    makeRequireImage(data) {
      const requreImage = data.map(item => {
        const path = require(`../images/content/${item.avatar}`);
        item.avatar = path;
        return {...item, avatar: path};
      })
    }
  },

  created() {
    const data = require("../data/reviews.json");
    this.makeRequireImage(data);
    this.reviews = data;
  },
})