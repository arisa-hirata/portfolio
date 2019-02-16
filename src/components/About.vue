<template>
  <section id="about" class="container">
    <div class="content">
      <h2 class="title">ABOUT</h2>

      <div class="border-container">
        <div class="border1">
          <hr class="title_border">
        </div>
        <div class="border2">
          <hr class="title_border2">
        </div>
      </div>

      <div class="about_container">
        <div class="img_container">
          <img src="/img/Profile.jpg" alt="Profile" class="profile_img">
        </div>

        <div class="desc">
          <h3>
            Hello, I am
            <span style="color: #5db68c;">Arisa</span>.
          </h3>
          <p>I am a Front-end Developer & UI/UX Designer based in Vancouver. I was born and raised in Japan and moved to Vancouver in 2017.</p>
          <p>I am passionate about converting issues and elevate to user-friendly interfaces to the next level. Also, I am actively seeking out to learn new technologies and current industry trends and improvements. This insatiable ambition gives me the advantage of staying ahead of the other competitors.</p>

          <p>When I'm not working on coding or desgn, I enjoy eating a lot, sleeping well, dreaming to travel all over the world, addicted anime & manga, and watching baby emperor penguins' video and photos.</p>
        </div>
      </div>

      <h3 class="skills">What I Use</h3>
      <div class="skills_container">
        <div>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>JavaScript</p>
          <p>jQuery</p>
        </div>
        <div>
          <p>React.js</p>
          <p>Redux</p>
          <p>Vue.js</p>
          <p>Nuxt.js</p>
        </div>
        <div>
          <p>Firebase</p>
          <p>Node.js</p>
          <p>WordPress</p>
          <p>Bootstrap</p>
        </div>
        <div>
          <p>PHP</p>
          <p>MySQL</p>
          <p>Illustrator</p>
          <p>Photoshop</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>



<style scoped>
.container {
  width: 100vw;
  height: 100%;
  background-color: #f4f4f4;
}

.content {
  width: 90%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
}

.title {
  font-size: 3.5em;
  font-weight: 700;
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
  margin-top: -30px;
}

.title_border2 {
  border: 2px solid #e5e6e5;
  margin-top: -26px;
}

.border-container {
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  /* background-color: pink; */
}

.about_container {
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1%;
}

.img_container {
  /* background-color: aquamarine; */
  min-width: 300px;
  text-align: left;
}

.profile_img {
  width: 90%;
  margin-top: 10%;
  border-radius: 3px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
}

.desc {
  text-align: left;
  line-height: 1.5em;
  /* background-color: khaki; */
}

.desc h3 {
  font-size: 2em;
}

.desc p {
  font-size: 1.1em;
  font-weight: lighter;
}

.skills {
  font-size: 1.8em;
  color: #5db68c;
}

.skills_container {
  width: 80%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  line-height: 0.8em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 8px lightgrey;
  padding: 10px 0;
  margin-bottom: 70px;
}

.skills_container div {
  width: 20%;
  min-width: 140px;
}

@media screen and (max-width: 834px) and (orientation: portrait) {
  .container {
    height: 100%;
  }
  .about_container {
    display: flex;
    flex-direction: column;
  }

  .img_container {
    text-align: center;
  }

  .skills_container {
    margin-bottom: 70px;
  }
}

@media screen and (max-width: 480px) and (orientation: portrait) {
  .container {
  }
}
</style>
