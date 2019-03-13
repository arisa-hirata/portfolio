<template>
  <section class="project">
    <Header2/>

    <div class="gray">
      <div class="white"></div>

      <div class="project_container gray_top">
        <div class="title_container">
          <h2 class="content_title">Easter Ecard</h2>
          <hr class="yellow_border">
        </div>

        <div class="project_content">
          <div class="box">
            <img src="/img/Ecard/EasterEcard.png" alt="Ecard" class="main_img">
          </div>
          <div class="box">
            <div class="detail_container">
              <div class="details">
                <div class="details_left">
                  <p>
                    <b>ROLE:</b>
                  </p>

                  <p class="line_space web"></p>
                  <p class="line_space resp"></p>
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
                  <p>Front-End Developer / UI & UX Designer / Graphic Designer</p>
                  <p>BCIT Term2</p>
                  <p>February 2018</p>
                  <p>HTML5 / CSS3 / JavaScript /SVG Animation / Adobe Illustrator</p>
                </div>
              </div>

              <div class="btn_container">
                <a href="https://arisa-hirata.github.io/ecard/">
                  <div class="project_btn">Play</div>
                </a>
                <a href="https://github.com/arisa-hirata/ecard">
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
          <span class="under">What is Easter Ecard?</span>
        </h3>
      </div>
      <div class="projectDeskR secondR_content">
        <div class="para">
          <div>
            <p>This is an interactive e-card for Easter. There are 10 eggs, some hidden others more obvious. When you find an egg, you can learn a fun fact about Easter. When you find all 10 eggs Easter bunnies celebrate by dancing.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="project_content yellowBG">
      <div class="box">
        <img
          src="/img/Ecard/1ststage.png"
          alt="convo"
          class="main_img"
          style="box-shadow: 8px 10px 0px #ee815c;"
        >
        <p class="capture" style="text-align:center;">1st Stage Answers</p>
      </div>
      <div class="box">
        <img
          src="/img/Ecard/2ndstage.png"
          alt="quiz"
          class="main_img"
          style="box-shadow: 8px 10px 0px #ee815c;"
        >
        <p class="capture" style="text-align:center;">2nd Stage Answers</p>
      </div>
    </div>

    <div class="projectDeskR-2 resp" v-scroll="handleScrollR">
      <h3 class="project_subtitle bottom_space">
        <span class="under">CHALLENGES</span>
      </h3>
    </div>

    <div class="project_content whiteBg">
      <div class="projectDeskL-2">
        <div class="para">
          <p>This e-card was a midterm project for one of my classes at BCIT. We were required to implement 10 facts about a holiday of our choosing. These facts were to be hidden throughout the application, with the user having to interact with the application in order to discover them.</p>
        </div>
      </div>
      <div class="projectDeskR-2 web">
        <h3 class="project_subtitle">
          <span class="under">CHALLENGES</span>
        </h3>
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
  }
};
</script>


<style scoped>
.title_container {
  width: 400px;
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
.yellowBG {
  padding-top: 5%;
}
.line_space {
  margin-top: 44px;
}

@media screen and (max-width: 834px) and (orientation: portrait) {
  .title_container {
    width: 250px;
  }
  .project_content {
    margin-top: 100px;
  }
  .detail_container {
    margin-top: 50px;
  }
  .line_space {
    margin-top: 70.5px;
  }
  .bottom_space {
    margin-bottom: -80px;
  }
}
</style>
