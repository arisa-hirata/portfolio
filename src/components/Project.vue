<template>
  <section id="project" class="container">
    <hr class="orange_border">
    <div class="content">
      <div class="title_container">
        <h2 class="content_title">Projects</h2>
        <hr class="yellow_border">
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

      <div class="projects_container">
        <transition-group class="projects" name="projects" v-scroll="handleScroll3">
          <div
            class="project"
            v-if="project.categories.includes(currentFilter) || currentFilter === 'ALL'"
            v-bind:key="project.title"
            v-for="project in projects"
          >
            <nuxt-link :to="project.link" style="text-decoration: none;">
              <div class="project-image-wrapper">
                <img class="project-image" v-bind:src="project.image">
                
                <span class="project-title">{{project.title}}</span>

                <div class="skill">{{project.skill}}</div>
                <div class="coming_soon">{{project.comingsoon}}</div>
              </div>
            </nuxt-link>
          </div>
        </transition-group>
      </div>
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
          image: "/img/Filter_Pollways.png",
          categories: ["Developlent"],
          skill: "ReactNative + Firebase",
          link: "/Pollways",
          comingsoon: ""
        },
        {
          title: "Baby Animal Farm",
          image: "/img/Filter_BabyAnimalFarm.png",
          categories: ["Developlent", "UI/UX Design", "Graphic Design"],
          skill: "Pure JavaScript",
          link: "/BabyAnimalFarm",
          comingsoon: ""
        },
        {
          title: "Easter Ecard",
          image: "/img/Filter_EasterEcard.png",
          categories: ["Developlent", "UI/UX Design", "Graphic Design"],
          skill: "Pure Javascript",
          link: "/Ecard",
          comingsoon: ""
        },
        {
          title: "NiceCream Factory",
          image: "/img/Filter_NiceCream.png",
          categories: ["Developlent", "UI/UX Design", "Graphic Design"],
          skill: "HTML + CSS + jQuery",
          link: "/NiceCreamFactory",
          comingsoon: ""
        },
        {
          title: "JAJA",
          image: "/img/Filter_JAJA.png",
          categories: ["Developlent"],
          skill: "Vue + Firebase",
          link: "/",
          comingsoon: ""
        },
        {
          title: "Hot Spring Seekers",
          image: "/img/Filter_HotSpring.png",
          categories: ["Developlent", "UI/UX Design"],
          skill: "WordPress",
          link: "/",
          comingsoon: ""
        },
        {
          title: "Infographic",
          image: "/img/Infographic.png",
          categories: ["Graphic Design"],
          skill: "Illustrator",
          link: "/",
          comingsoon: ""
        },
        {
          title: "My Iconic World",
          image: "/img/Filter_iconicWorld.png",
          categories: ["Graphic Design"],
          skill: "Illustrator",
          link: "/",
          comingsoon: ""
        },
        {
          title: "Chimaira Poster",
          image: "/img/Filter_shoepaca.png",
          categories: ["Graphic Design"],
          skill: "Photoshop",
          link: "/",
          comingsoon: ""
        },
        {
          title: "Galaxy Kirby Cafe",
          image: "/img/KirbyCafe.png",
          categories: ["Graphic Design"],
          skill: "Photoshop",
          link: "/",
          comingsoon: ""
        }
      ]
    };
  },
  methods: {
    setFilter: function(filter) {
      this.currentFilter = filter;
    },
    handleScroll: function(evt, el) {
      if (window.scrollY > 1000) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(100px, 0px, 0)"
        );
      }
      // return window.scrollY > 100;
    },
    handleScroll_border: function(evt, el) {
      if (window.scrollY > 1000) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(1000px, 0px, 0); width:100%"
        );
      }
      // return window.scrollY > 100;
    },
    handleScroll3: function(evt, el) {
      if (window.scrollY > 1000) {
        el.setAttribute("style", "opacity: 1; translate3d(0px, -100px, 0);");
      }
      // return window.scrollY > 100;
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
  font-size: 1.1em;
  margin: 10px;
}

.filter.active {
  box-shadow: 0px 1px 3px 0px #00000026;
  background-color: #fdd23e;
  color: white;
}

.filter:hover {
  background: #dbdbdb;
}

.projects_container {
  background-color: #f2f2f3;
  padding: 5% 0;
  margin-top: 10px;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  opacity: 0;
  transition: 1.5s all ease-in-out;
  transition-delay: 0.7s;
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
.project-title {
  color: #14a79c;
  font-weight: 700;
  font-size: 1.7em;
  letter-spacing: 0.03em;
}

.skill {
  color: #575754;
  z-index: 900;
  margin-top: 30px;
  font-size: 1.2em;
  position: absolute;
  top: 300px;
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
  margin: 20px 30px;
  box-shadow: 0px 2px 8px #dbdbdb;
  border-radius: 3px;
  width: 350px;
  max-width: 400px;
  min-width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: #fff;
}

.project:hover {
  -webkit-transform: translateY(-10px);
  -ms-transform: translateY(-10px);
  transform: translateY(-10px);
  transition: 0.3s;
  box-shadow: 0px 12px 8px #dbdbdb;
  opacity: 1;
}

.project:active {
  -webkit-transform: translateY(0px);
  -ms-transform: translateY(0px);
  transform: translateY(0px);
  transition: 0.1s;
  box-shadow: 0px 2px 8px #dbdbdb;
}

.project-image-wrapper {
  position: relative;
}

.project-image {
  width: 100%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom: 4px solid #ee815c;
  margin-bottom: 15px;
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
