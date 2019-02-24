<template>
  <section class="project_container">
    <Header2/>
    <h2 class="project_title">Pollways</h2>
    <div class="border-container">
      <div class="border1">
        <hr class="title_border">
      </div>
      <div class="border2">
        <hr class="title_border2">
      </div>
    </div>

    <div class="project_content">
      <div class="box firstL_content">
        <img src="/img/Filter_Pollways.png" alt="Pollways" class="main_img">
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

    <div class="project_content">
      <div class="box secondL_content">
        <img src="/img/Pollways/Logo&Color.png" alt="Pollways" class="main_img">
        <p style="text-align:center; margin-top:5%;">Logo & Color Pallete</p>
      </div>
      <div class="box secondR_content">
        <div class="para">
          <h3 class="project_subtitle">
            What is
            <span style="color: #5db68c; text-align:center">Pollways</span>?
          </h3>
          <hr class="project_border">
          <div class="desc">
            <p>The application will allow users to post arguments which other users can agree, disagree, or comment on. It is a polling and debate app that helps to resolve debates between other users. It is an application for the person who always has to be right.</p>
            <p>With a team of four, my role in Pollways was a Lead Developer. As a lead developer of the project, I was responsible for taking the mockups from the design team, and developing the UI/UX in React Native and Redux. I also worked with the other developer in implementing firebase. At the end of the term, we presented the project to our peers and a panel of industry representatives, and we competed with the other 9 teams throughh voting by industries and other grades, and our app was chosen as the second best app in this year.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="project_content">
      <div class="box thirdL_content" v-scroll="handleScrollL">
        <img src="/img/Pollways/photo.jpg" alt="Member" class="main_img">
        <p style="text-align:center; margin-top:5%;">Pollways Members</p>
        <p></p>
      </div>
      <div class="box thirdR_content" v-scroll="handleScrollR">
        <div class="para">
          <h3 class="project_subtitle" style="margin-top: 0;">
            <span style="color: #5db68c;">C</span>HALLENGES
          </h3>
          <hr class="project_border">
          <p>This project was the biggest and the most challenging project in my BCIT days. All of the technologies, such as ReactNative, Redux, and firebase were completely new for me. And as a lead developer, I needed to direct other teammates, as well as struggle with the new technology. Basically, my efforts and skills were equivalent to the app quality, which means I took on great responsibility alone. I was under so much pressure every day, and I became discouraged many times. However, I have never stopped working hard, and I have been keeping my best, until the last moment.</p>
        </div>
      </div>
    </div>

    <h3 class="project_subtitle" style="margin-top:10%;">
      <span style="color: #5db68c;">P</span>ROCESS
    </h3>
    <hr class="project_border">
    <div class="project_content">
      <div class="box">
        <img src="/img/Pollways/persona.png" alt="Pollways" class="main_img">
        <p style="text-align:center; margin-top:5%;">Personas & Task Model</p>
      </div>
      <div class="box">
        <img src="/img/Pollways/wireframe.png" alt="Pollways" class="main_img">
        <p style="text-align:center; margin-top:5%;">Wireframes</p>
        <img
          src="/img/Pollways/mockups.png"
          alt="Pollways"
          class="main_img"
          style="margin-top:15%;"
        >
        <p style="text-align:center; margin-top:5%;">Mockups</p>
      </div>
    </div>

    <div class="tutorial_container">
      <h3 class="project_subtitle">
        How to Play
        <span style="color: #5db68c;">Pollways</span>?
      </h3>
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
p {
  text-align: left;
}
</style>
