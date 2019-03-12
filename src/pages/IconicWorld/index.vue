<template>
  <section class="project">
    <Header2/>
    <div class="gray">
      <div class="white"></div>

      <div class="project_container gray_top">
        <div class="title_container">
          <h2 class="content_title">My Iconic World</h2>
          <hr class="yellow_border">
        </div>

        <div class="project_content" style="margin-bottom:3%">
          <div class="box firstL_content">
            <img src="/img/Iconic/iconicWorld.jpg" alt="Pollways" class="main_img">
          </div>
          <div class="box firstR_content" style="margin-top:5%;">
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
                    <b>TOOLS:</b>
                  </p>
                </div>
                <div class="details_right">
                  <p>Graphic Designer</p>
                  <p>BCIT Term2</p>
                  <p>1 week in February 2018</p>
                  <p>Adobe Illustorator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="project_content whiteBg">
      <div class="projectDeskL secondL_content">
        <h3 class="project_subtitle">
          <span class="under">BACKGROUND</span>
        </h3>
      </div>
      <div class="projectDeskR secondR_content">
        <div class="para">
          <div class="desc">
            <p>
              This pink whale swimming in the sea is me. LIfe is not easy, as a voyage, we face a lot of problems like big waves and storm, but sometimes we can see indescribable beautiful sceneries, such as a sky full of stars. My life is similar to voyages. I have been facing a lot of challenges, at the same time, I have been experienced wonderful things. However, the exciting and funny ideas and happy mind are always in my head! Like a theme park.
              The top of a penguin stamp is an admission ticket to enter my world.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="tutorial_container greenBg" style="margin-top:0;">
      <h3 class="project_subtitle" style="color:#fff;">PROCESS</h3>
      <hr class="border_short" style="border: 2px solid #fdd23e;">
      <img
        class="tutorial"
        src="/img/Iconic/iconic.gif"
        width="560"
        alt="GIF"
        border="0"
        align="center"
        hspace="10"
        vspace="10"
      >
    </div>

    <div class="whiteBg" style="width:90% max-width:1200px;">
      <h3 class="project_subtitle">
        <span class="under">FINAL PRODUCT</span>
      </h3>

      <img src="/img/Iconic/iconicWorld.jpg" alt="penguin" style="width:100%; max-width:900px">
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
.tutorial {
  /* box-shadow: 7px 7px 0px #14a79c; */
  border: 13px solid #fdd23e;
}
</style>
