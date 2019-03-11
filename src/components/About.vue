<template>
  <section id="about" class="container">
    <hr class="orange_border">

    <div class="content">
      <div class="title_container">
        <h2 class="content_title">About Me</h2>
        <hr class="yellow_border">
      </div>

      <div class="about_container" v-scroll="handleScroll2">
        <div class="img_container">
          <img src="/img/Profile.jpg" alt="Profile" class="profile_img">
        </div>

        <div class="vertical_line"></div>

        <div class="desc">
          <h3>
            Hello, I am
            <span style="color: #14a79c;">Arisa</span>.
          </h3>
          <p>I am a Front-end Developer & UI/UX Designer based in Vancouver. I was born and raised in Japan and moved to Vancouver in 2017.</p>
          <p>I am passionate about converting issues and elevating to user-friendly interfaces to the next level. Also, I am actively seeking out to learn new technologies and current industry trends and improvements. This insatiable ambition gives me the advantage of staying ahead of the other competitors.</p>

          <p>When I'm not working on coding or design, I enjoy eating a lot, sleeping well, dreaming to travel all over the world. Also, I am addicted to anime & manga, and watching baby emperor penguin video and photos.</p>
        </div>
      </div>

      <div class="orange_marker"></div>
      <h3 class="skills" v-scroll="handleScroll2">What I Use</h3>
      <div class="skills_container" v-scroll="handleScroll2">
        <img src="/img/icons/html.svg" class="skill_icons" alt="html">
        <img src="/img/icons/css.svg" class="skill_icons" alt="css3">
        <img src="/img/icons/js.svg" class="skill_icons" alt="js">
        <img src="/img/icons/jquery.svg" class="skill_icons" alt="jquery">
        <img src="/img/icons/react.svg" class="skill_icons" alt="react">
        <img src="/img/icons/redux.svg" class="skill_icons" alt="redux">
        <img src="/img/icons/vue.svg" class="skill_icons" alt="vue">
        <img src="/img/icons/nuxt.svg" class="skill_icons" alt="nuxt">
        <img src="/img/icons/firebase.svg" class="skill_icons" alt="firebase">
        <img src="/img/icons/node.svg" class="skill_icons" alt="node">
        <img src="/img/icons/git.svg" class="skill_icons" alt="git">
        <img src="/img/icons/wordpress.svg" class="skill_icons" alt="wordpress">
        <img src="/img/icons/php.svg" class="skill_icons" alt="php">
        <img src="/img/icons/mysql.svg" class="skill_icons" alt="mysql">
        <img src="/img/icons/ai.svg" class="skill_icons" alt="ai">
        <img src="/img/icons/ps.svg" class="skill_icons" alt="ps">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    handleScroll: function(evt, el) {
      console.log(window.scrollY);
      if (window.scrollY > 100) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(100px, 0px, 0)"
        );
      }
      // return window.scrollY > 100;
    },
    handleScroll_border: function(evt, el) {
      console.log(window.scrollY);
      if (window.scrollY > 50) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(1000px, 0px, 0); width:100%"
        );
      }
      // return window.scrollY > 100;
    },

    handleScroll2: function(evt, el) {
      console.log(window.scrollY);
      if (window.scrollY > 50) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, -100px, 0);"
        );
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
  background-color: #f2f2f3;
}

.content {
  width: 90%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
}

.about_container {
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 120px;
  opacity: 0;
  transition: 1s all cubic-bezier(0.39, 0.575, 0.565, 1);
  transition-delay: 0.7s;
}

.img_container {
  min-width: 300px;
}

.profile_img {
  width: 250px;
  margin-top: 13%;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
  box-shadow: 5px 8px 0px #fdd23e;
}

.vertical_line {
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 50px;
  margin-left: 30px;
  width: 1px;
  height: 300px;
  background-color: #dbdbdb;
  display: block;
}

.desc {
  margin-right: auto;
  margin-left: auto;
  text-align: left;
  line-height: 1.5em;
  width: 70%;
}

.desc h3 {
  font-size: 2em;
}

.desc p {
  font-size: 1.1em;
}

.skills {
  font-size: 2em;
  letter-spacing: 0.1em;
  opacity: 0;
  transition: 1s all cubic-bezier(0.39, 0.575, 0.565, 1);
  transition-delay: 1.2s;
}

.orange_marker {
  position: relative;
  top: -30px;
  display: inline-block;
  width: 180px;
  height: 7px;
  background: #ee815c;
}

.orange_marker:before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -10px;
  border: 10px solid transparent;
  border-top: 15px solid #ee815c;
}

.skills_container {
  border-top: 8px solid #fdd23e;
  width: 80%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  line-height: 0.8em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px #dbdbdb;
  padding: 10px 0;
  margin-bottom: 70px;
  opacity: 0;
  transition: 1s all cubic-bezier(0.39, 0.575, 0.565, 1);
  transition-delay: 1.5s;
}

.skills_container div {
  width: 20%;
  min-width: 140px;
}

.skills_container div p {
  line-height: 1em;
}

.skill_icons {
  width: 70px;
  height: 70px;
  margin: 20px;
}

@media screen and (max-width: 834px) and (orientation: portrait) {
  .container {
    height: 100%;
  }
  .about_container {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }

  .img_container {
    text-align: center;
  }

  .skills_container {
    margin-bottom: 70px;
  }

  .vertical_line {
    display: none;
  }
}

@media screen and (max-width: 480px) and (orientation: portrait) {
  .container {
  }
}
</style>
