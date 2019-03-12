<template>
  <section class="project">
    <Header2/>
    <div class="gray">
      <div class="white"></div>

      <div class="project_container gray_top">
        <div class="title_container">
          <h2 class="content_title">Pollways</h2>
          <hr class="yellow_border">
        </div>

        <div class="project_content" style="margin-bottom:3%">
          <div class="box firstL_content">
            <img
              src="/img/Pollways/pollways2.png"
              alt="Pollways"
              class="main_img"
              style="margin-top:-30px"
            >
          </div>
          <div class="box firstR_content">
            <div class="detail_container">
              <div class="details">
                <div class="details_left">
                  <p>
                    <b>ROLE:</b>
                  </p>
                  <p>
                    <b>CLIENT:</b>
                  </p>
                  <p>
                    <b>TIMELINE:</b>
                  </p>
                  <p>
                    <b>SKILLS:</b>
                  </p>
                </div>
                <div class="details_right">
                  <p>Lead Developer</p>
                  <p>BCIT Term3</p>
                  <p>September - December 2018</p>
                  <p>React Native / Redux / Firebase</p>
                </div>
              </div>

              <div class="btn_container">
                <a href="https://testflight.apple.com/join/CF5m6t5H">
                  <div class="project_btn">Testflight</div>
                </a>
                <a href="https://github.com/arisa-hirata/pollways">
                  <div class="project_btn">Github</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="project_content whiteBg">
      <div class="projectDeskL secondL_content">
        <h3 class="project_subtitle">
          <span class="under">What is Pollways?</span>
        </h3>
      </div>
      <div class="projectDeskR secondR_content">
        <div class="para">
          <div class="desc">
            <p>The application will allow users to post arguments which other users can agree, disagree, or comment on. It is a polling and debate app that helps to resolve debates between other users. It is an application for the person who always has to be right.</p>
            <p>With a team of four, my role in Pollways was a Lead Developer. As a lead developer of the project, I was responsible for taking the mockups from the design team, and developing the UI/UX in React Native and Redux. I also worked with the other developer in implementing firebase. At the end of the term, we presented the project to our peers and a panel of industry representatives, and we competed with the other 9 teams throughh voting by industries and other grades, and our app was chosen as the second best app in this year.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="tutorial_container yellowBG">
      <h3 class="project_subtitle" style="color:#fff;">How to Play Pollways?</h3>
      <hr class="border_short" style="border: 2px solid #ee815c;">
      <iframe
        class="tutorial"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/_oVEmJMrzpk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <div class="project_content whiteBg">
      <div class="projectDeskL-2 thirdL_content" v-scroll="handleScrollL">
        <div class="para">
          <p>This project was the biggest and the most challenging project in my BCIT days. All of the technologies, such as ReactNative, Redux, and firebase were completely new for me. And as a lead developer, I needed to direct other teammates, as well as struggle with the new technology. Basically, my efforts and skills were equivalent to the app quality, which means I took on great responsibility alone. I was under so much pressure every day, and I became discouraged many times. However, I have never stopped working hard, and I have been keeping my best, until the last moment.</p>
        </div>
      </div>
      <div class="projectDeskR-2 thirdR_content" v-scroll="handleScrollR">
        <h3 class="project_subtitle">
          <span class="under">CHALLENGES</span>
        </h3>
      </div>
    </div>

    <div class="greenBg">
      <h3 class="project_subtitle" style="margin-top:10%;padding-top:5%;color: #fff;">PROCESS</h3>
      <hr class="border_short" style="border: 2px solid #fdd23e;">
      <div
        class="project_content"
        style="width:90%;max-width:1200px; margin-right:auto;margin-left:auto;"
      >
        <div class="box">
          <img
            src="/img/Pollways/persona.png"
            alt="Pollways"
            class="main_img Yshadow"
            style="max-width: 450px"
          >
          <p class="capture" style="text-align:center;">User Persona</p>
          <img
            src="/img/Pollways/taskmodel.png"
            alt="taskmodel"
            class="main_img Yshadow"
            style="max-width: 470px"
          >
          <p class="capture" style="text-align:center;">Task Model</p>
        </div>
        <div class="box">
          <img
            src="/img/Pollways/wireframe.png"
            alt="Pollways"
            class="main_img Yshadow"
            style="max-width: 500px"
          >
          <p class="capture" style="text-align:center;">Wireframes</p>
          <img
            src="/img/Pollways/mockups.png"
            alt="Pollways"
            class="main_img Yshadow"
            style="max-width: 500px"
          >
          <p class="capture" style="text-align:center;">Mockups</p>
        </div>
      </div>
    </div>

    <Footer/>
  </section>
</template>

<script>
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";

export default {
  components: {
    Header2,
    Footer
  },
  methods: {
    handleScrollL: function(evt, el) {
      if (window.scrollY > 400) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(800px, 0, 0)"
        );
      }
      // return window.scrollY > 100;
    },
    handleScrollR: function(evt, el) {
      if (window.scrollY > 400) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(-800px, 0, 0)"
        );
      }
      // return window.scrollY > 100;
    },
    handleScrollL2: function(evt, el) {
      if (window.scrollY > 400) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(800px, 0, 0)"
        );
      }
      // return window.scrollY > 100;
    },
    handleScrollR2: function(evt, el) {
      if (window.scrollY > 400) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(-800px, 0, 0)"
        );
      }
      // return window.scrollY > 100;
    }
  }
};
</script>


<style scoped>
.title_container {
  width: 300px;
  position: absolute;
  top: 100px;
  right: 0;
  left: 0;
  margin: 0 auto;
  padding: 0px 40px;
  min-width: 120px;
  max-width: 100%;
  background: #14a79c;
  border-radius: 2px;
}
p {
  text-align: left;
}
.tutorial {
  /* box-shadow: 7px 7px 0px #14a79c; */
  border: 13px solid #14a79c;
}
</style>
