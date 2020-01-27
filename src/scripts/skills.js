import Vue from "vue";


const skill = {
  template: '#skill',
  props: ['skill'],
  methods: {
    drawColorCircle() {
      const circle = this.$refs["progress-circle"];
      const dashArray = parseInt(getComputedStyle(circle).strokeDasharray);
      const dashOffset = dashArray - dashArray * this.skill.percent / 100;
      circle.style.strokeDashoffset = dashOffset;
      
    }
  },
  mounted() {
    this.drawColorCircle()
  }
};

const skillsRow = {
  template: '#skills-row',
  components: {
    skill
  },
  props: ["skillsGroup"]
};


new Vue({
  el: "#skills-components",
  data() {
    return {
      skillsGroups: [],
    }
  },
  template: "#skills",
  components: {
    skillsRow
  },
  created() {
    const data = require("../data/skills.json");
    this.skillsGroups = data;
  }
})


