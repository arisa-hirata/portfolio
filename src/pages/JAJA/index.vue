<template>
  <section class="project">
    <Header2/>

    <div class="gray">
      <div class="white"></div>

      <div class="project_container gray_top">
        <div class="title_container">
          <h2 class="content_title">JAJA</h2>
          <hr class="yellow_border">
        </div>

        <div class="project_content">
          <div class="box firstL_content">
            <img src="/img/JAJA/JAJA.png" alt="JAJA" class="main_img">
          </div>
          <div class="box firstR_content">
            <div class="detail_container">
              <div class="details">
                <div class="details_left">
                  <p>
                    <b>Role:</b>
                  </p>
                  <p>
                    <b>Client:</b>
                  </p>
                  <p>
                    <b>Timeline:</b>
                  </p>
                  <p>
                    <b>Skills:</b>
                  </p>
                </div>
                <div class="details_right">
                  <p>Lead Developer</p>
                  <p>BCIT Term4</p>
                  <p>January - March 2019</p>
                  <p>Vue.js / Vuex / Firebase</p>
                </div>
              </div>
              <div class="btn_container">
                <a href="https://jajastudio.netlify.com/">
                  <div class="project_btn">Website</div>
                </a>
                <a href="https://github.com/arisa-hirata/jaja">
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
          <span class="under">What is JAJA?</span>
        </h3>
      </div>
      <div class="projectDeskR secondR_content">
        <div class="para">
          <div>
            <p>Jaja is an e-commerce type of business that would be selling artists’ graphic designed phone cases, tote bags, and cardholders using our website. We are aiming at latest trends to gather attention from our target audiences which would be students ages 19 - 27 who are in touch with the latest trends. Our business will be different compared to other similar business because we will be using our own website in which we have total control of, this means we will be selling exclusively while analyzing the market using Google Analytics.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="tutorial_container yellowBG">
      <h3 class="project_subtitle" style="color:#fff;">JAJA Promotion Video</h3>
      <hr class="border_short" style="border: 2px solid #ee815c;">
      <iframe
        class="tutorial"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/RLVc8aOtlsM"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <div class="projectDeskR-2">
      <h3 class="project_subtitle resp bottom_space">
        <span class="under">CHALLENGES</span>
      </h3>
    </div>

    <div class="project_content whiteBg">
      <div class="projectDeskL-2">
        <div class="para">
          <p>JAJA was the last major project done during my time at BCIT that required our group to create a full-stack web application. We used Vue, Vuex, and Firebase to build the application, and launched it using Firebase hosting. As of now, the app is still under development.</p>
        </div>
      </div>
      <div class="projectDeskR-2">
        <h3 class="project_subtitle web">
          <span class="under">CHALLENGES</span>
        </h3>
      </div>
    </div>

    <!-- <div class="greenBg">
      <h3 class="project_subtitle" style="margin-top:10%;padding-top:5%;color: #fff;">PROCESS</h3>
      <hr class="border_short" style="border: 2px solid #fdd23e;">
      <div
        class="project_content"
        style="width:90%;max-width:1200px; margin-right:auto;margin-left:auto;"
      >
        <div class="box">
          <img
            src="/img/BabyAnimalFarm/Logo&Color.png"
            alt="BabyAnimalFarm"
            class="main_img Yshadow"
            style="max-width: 400px"
          >
          <p class="capture" style="text-align:center;">Logo & Color Pallete</p>
          <img
            src="/img/BabyAnimalFarm/logo_process.png"
            alt="Pollways"
            class="main_img Yshadow"
            style="max-width: 450px"
          >
          <p class="capture" style="text-align:center;">Logo Design Process</p>
        </div>
        <div class="box">
          <img
            src="/img/BabyAnimalFarm/OriginalDesign.png"
            alt="taskmodel"
            class="main_img Yshadow"
          >
          <p class="capture" style="text-align:center;">Original Character Designs</p>
          <img
            src="/img/BabyAnimalFarm/Persona.png"
            alt="taskmodel"
            class="main_img Yshadow"
            style="max-width: 400px;"
          >
          <p class="capture" style="text-align:center;">User Persona</p>
        </div>
      </div>
    </div>-->
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
    handleClick() {
      alert("Coming Soon!");
    }
  }
};
</script>

<style scoped>
.title_container {
  width: 200px;
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
  border: 13px solid #14a79c;
}

@media screen and (max-width: 834px) and (orientation: portrait) {
  .title_container {
    width: 150px;
  }
  .project_content {
    margin-top: 100px;
  }
  .detail_container {
    margin-top: 50px;
    margin-bottom: 30px;
    padding-bottom: 0px;
  }
  .line_space {
    margin-top: 70.5px;
  }
  .btn_container {
    margin-top: 40px;
  }
  .bottom_space {
    margin-top: 80px;
    margin-bottom: -80px;
  }
}
</style>
