<template>
  <section class="project">
    <Header2/>
    <div class="gray">
      <div class="white"></div>

      <div class="project_container gray_top">
        <div class="title_container" data-aos="zoom-in-up" data-aos-easing="ease">
          <h2 class="content_title">Galaxy Kirby Cafe</h2>
          <hr class="yellow_border">
        </div>

        <div class="project_content" style="margin-bottom:3%">
          <div class="box" data-aos="fade-right" data-aos-easing="ease" data-aos-delay="500">
            <img src="/img/Kirby/kirby.png" alt="kirby" class="main_img" style="width:50%;">
          </div>
          <div
            class="box"
            style="margin-top:5%;"
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-delay="500"
          >
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
                  <p>BCIT Term3</p>
                  <p>3 weeks in November 2018</p>
                  <p>Adobe Photoshop & Illustrator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="project_content whiteBg">
      <div class="projectDeskL" data-aos="fade-right" data-aos-easing="ease">
        <h3 class="project_subtitle resp_space">
          <span class="under">BACKGROUND</span>
        </h3>
      </div>
      <div class="projectDeskR" data-aos="fade-left" data-aos-easing="ease">
        <div class="para">
          <div class="desc">
            <p>This is an advertising poster for a fictional concept cafe, named “Galaxy Kirby Cafe” which is owned by Chef Kirby and his friends. Kirby cooks and serves food with Warp Star which can fly quickly even in the space. However, he usually eats everything before he serves for customers because he loves to eat so much!</p>
          </div>
        </div>
      </div>
    </div>

    <div class="tutorial_container greenBg" style="margin-top:0;">
      <h3
        class="project_subtitle"
        style="color:#fff;"
        data-aos="zoom-in-up"
        data-aos-easing="ease"
      >PROCESS</h3>
      <hr
        class="border_short"
        style="border: 2px solid #fdd23e;"
        data-aos="zoom-in-up"
        data-aos-easing="ease"
      >
      <img
        class="tutorial"
        src="/img/Kirby/kirby.gif"
        width="450"
        alt="GIF"
        border="0"
        align="center"
        hspace="10"
        vspace="10"
        data-aos="flip-up"
        data-aos-easing="ease"
      >
    </div>

    <div class="whiteBg" style="width:90% max-width:1200px;">
      <h3 class="project_subtitle" data-aos="fade-down-right" data-aos-easing="ease">
        <span class="under">FINAL PRODUCT</span>
      </h3>

      <img
        src="/img/Kirby/kirbyL.png"
        alt="penguin"
        style="width:100%; max-width:600px"
        data-aos="fade-down-left"
        data-aos-easing="ease"
      >
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
@media screen and (max-width: 834px) and (orientation: portrait) {
  .title_container {
    width: 200px;
  }
  .project_content {
    margin-top: 100px;
  }
  .detail_container {
    margin-top: 50px;
    margin-bottom: 30px;
    height: 250px;
  }
  .tutorial {
    width: 85%;
  }
  .resp_space {
    margin-top: -30px;
  }
}
</style>
