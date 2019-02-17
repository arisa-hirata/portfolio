<template>
  <section id="project" class="container">
    <div class="content">
      <h2 class="title">
        <span style="font-weight: 700;font-size: 1.3em;">PROJECTS</span>
      </h2>
      <!-- <hr class="title_border"> -->
      <div class="border-container">
        <div class="border1">
          <hr class="title_border">
        </div>
        <div class="border2">
          <hr class="title_border2">
        </div>
      </div>
    </div>

    <div id="app">
      <div class="title-container">
        <div class="filters">
          <span
            class="filter"
            v-bind:class="{ active: currentFilter === 'ALL' }"
            v-on:click="setFilter('ALL')"
          >ALL</span>
          <span
            class="filter"
            v-bind:class="{ active: currentFilter === 'Developlent' }"
            v-on:click="setFilter('Developlent')"
          >DEVELOPMENT</span>
          <span
            class="filter"
            v-bind:class="{ active: currentFilter === 'UI/UX Design' }"
            v-on:click="setFilter('UI/UX Design')"
          >UI/UX DESIGN</span>
          <span
            class="filter"
            v-bind:class="{ active: currentFilter === 'Graphic Design' }"
            v-on:click="setFilter('Graphic Design')"
          >GRAPHIC DESIGN</span>
        </div>
      </div>

      <transition-group class="projects" name="projects">
        <div
          class="project"
          v-if="project.categories.includes(currentFilter) || currentFilter === 'ALL'"
          v-bind:key="project.title"
          v-for="project in projects"
        >
          <nuxt-link :to="project.link" style="text-decoration: none;">
            <div class="project-image-wrapper">
              <img class="project-image" v-bind:src="project.image">
              <div class="gradient-overlay"></div>
              <div class="circle">
                <span class="project-title">{{project.title}}</span>
              </div>
              <div class="skill">{{project.skill}}</div>
              <div class="coming_soon">{{project.comingsoon}}</div>
            </div>
          </nuxt-link>
        </div>
      </transition-group>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      currentFilter: "ALL",
      projects: [
        {
          title: "Pollways",
          image: "/img/Filter_Pollways.jpg",
          categories: ["Developlent"],
          skill: "ReactNative + Firebase",
          link: "/Pollways",
          comingsoon: ""
        },
        {
          title: "Baby Animal Farm",
          image: "/img/Filter_BabyAnimalFarm.jpg",
          categories: ["Developlent", "UI/UX Design", "Graphic Design"],
          skill: "Pure JavaScript",
          link: "/BabyAnimalFarm",
          comingsoon: ""
        },
        {
          title: "Easter Ecard",
          image: "/img/Filter_EasterEcard.jpg",
          categories: ["Developlent", "UI/UX Design", "Graphic Design"],
          skill: "Pure Javascript",
          link: "/Ecard",
          comingsoon: ""
        },
        {
          title: "NiceCream Factory",
          image: "/img/Filter_NiceCream.jpg",
          categories: ["Developlent", "UI/UX Design", "Graphic Design"],
          skill: "HTML + CSS + jQuery",
          link: "/NiceCreamFactory",
          comingsoon: ""
        },
        {
          title: "JAJA",
          image: "/img/Filter_JAJA.jpg",
          categories: ["Developlent"],
          skill: "Vue + Firebase",
          link: "/",
          comingsoon: "COMING SOON!"
        },
        {
          title: "Infographic",
          image: "/img/Infographic.png",
          categories: ["Graphic Design"],
          skill: "Illustrator",
          link: "/",
          comingsoon: "COMING SOON!"
        }
      ]
    };
  },
  methods: {
    setFilter: function(filter) {
      this.currentFilter = filter;
    }
  }
};
</script>



<style scoped>
.container {
  width: 100vw;
  height: 100%;
}

.content {
  width: 90%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
}

.title {
  padding-top: 8%;
  margin-top: 0;
  letter-spacing: 0.1em;
  text-align: left;
}

.border1 {
  background-color: aqua;
  width: 20%;
}

.border2 {
  background-color: #5db68c;
  width: 80%;
}

.title_border {
  border: 6px solid #fbf7c6;
  margin-left: auto;
  margin-right: auto;
  margin-top: -20px;
}

.title_border2 {
  border: 2px solid #e5e6e5;
  margin-top: -16px;
}

.border-container {
  display: flex;
  width: 100%;
}
/* filter */

#id {
  max-width: 1200px;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 30pt;
  font-weight: normal;
}

.project-title {
  font-size: 16pt;
}

.filters {
  margin: 5% 0 2% 0;
}

.filter {
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.35s;
  letter-spacing: 0.1em;
  font-size: 1em;
  margin: 10px;
}

.filter.active {
  box-shadow: 0px 1px 3px 0px #00000026;
  background-color: #5db68c;
  color: white;
}

.filter:hover {
  background: lightgray;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
}

.projects-enter {
  transform: scale(0.5) translatey(-80px);
  opacity: 0;
}

.projects-leave-to {
  transform: translatey(30px);
  opacity: 0;
}

.projects-leave-active {
  position: absolute;
  z-index: -1;
}

.circle {
  text-align: center;
  position: absolute;
  bottom: -50px;
  left: 30%;
  width: 160px;
  height: 100px;
  border-radius: 80px / 50px;
  display: flex;
  /* box-shadow: 0px -4px 3px 0px #494d3257; */
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #5db68c;
  font-weight: bold;
  z-index: 0;
  /* 	box-shadow:0px -3px 3px #484848a6; */
}

.skill {
  color: #575754;
  z-index: 999;
  margin-top: 30px;
  font-size: 1.1em;
  font-weight: lighter;
  position: absolute;
  top: 310px;
  left: 0;
  right: 0;
  margin: auto;
}

.coming_soon {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  margin: auto;
  font-weight: bold;
  color: #df744a;
  font-size: 2em;
  transform: rotate(-10deg);
  -moz-transform: rotate(-10deg);
  -webkit-transform: rotate(-10deg);
  text-shadow: 1px 2px 7px rgba(0, 0, 0, 0.7);
}

.project {
  transition: all 0.35s ease-in-out;
  margin: 10px;
  box-shadow: 0px 2px 8px lightgrey;
  border-radius: 3px;
  width: 400%;
  max-width: 400px;
  min-width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: pink; */
}

.project:hover {
  -webkit-transform: translateY(-10px);
  -ms-transform: translateY(-10px);
  transform: translateY(-10px);
  transition: 0.3s;
  box-shadow: 0px 12px 8px lightgrey;
}

.project:active {
  -webkit-transform: translateY(0px);
  -ms-transform: translateY(0px);
  transform: translateY(0px);
  transition: 0.1s;
  box-shadow: 0px 2px 8px lightgrey;
}

.project-image-wrapper {
  position: relative;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  opacity: 0.09;
  background: linear-gradient(
      to bottom,
      rgba(0, 210, 247, 0.65) 0%,
      rgba(0, 210, 247, 0.64) 1%,
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(
      to top,
      rgba(247, 0, 156, 0.65) 0%,
      rgba(247, 0, 156, 0.64) 1%,
      rgba(0, 0, 0, 0) 100%
    );
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.project-image {
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

@media screen and (max-width: 834px) and (orientation: portrait) {
  .filter {
    font-size: 1em;
    margin: 0;
  }
}

@media screen and (max-width: 480px) and (orientation: portrait) {
  .filter {
    font-size: 3vw;
    margin: 0;
    padding: 10px 5px;
  }
}
</style>
