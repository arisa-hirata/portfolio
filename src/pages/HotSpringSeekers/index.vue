<template>
  <section class="project">
    <Header2/>
    <div class="gray">
      <div class="white"></div>
      <div class="project_container gray_top">
        <div class="title_container" data-aos="zoom-in-up" data-aos-easing="ease">
          <h2 class="content_title">Hot Spring Seekers</h2>
          <hr class="yellow_border">
        </div>
        <div class="project_content">
          <div class="box" data-aos="fade-right" data-aos-easing="ease" data-aos-delay="500">
            <img src="/img/HotSpring/HotSpring.png" alt="HotSpring" class="main_img">
          </div>
          <div class="box" data-aos="fade-left" data-aos-easing="ease" data-aos-delay="500">
            <div class="detail_container">
              <div class="details">
                <div class="details_left">
                  <p>
                    <b>Role:</b>
                  </p>
                  <p class="line_space1 resp">
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
                  <p>Front-end Developer / UI&UX Designer</p>
                  <p>BCIT Term2</p>
                  <p>February – May 2018</p>
                  <p>Wordpress / PHP / Adobe Illustrator</p>
                </div>
              </div>
              <div class="btn_container">
                <a href="https://hotspringseekers.arisahirata.ca">
                  <div class="project_btn">Website</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="project_content whiteBg">
      <div class="projectDeskL">
        <h3 class="project_subtitle" data-aos="fade-right" data-aos-easing="ease">
          <span class="under">
            What is
            <br>Hot Spring Seekers?
          </span>
        </h3>
      </div>
      <div class="projectDeskR" data-aos="fade-left" data-aos-easing="ease">
        <div class="para">
          <div>
            <p>This website is about hot spring information developer by wordpress. The website has both information about world hot springs and Japanese hot springs. In terms of world hot springs, it is described recommended world hot springs. When it comes to Japanese hot springs, this information is not only about places, but also hot springs’ effect on health. Also, it is explained about Japanese hot springs’ culture.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="greenBg">
      <h3
        class="project_subtitle"
        style="margin-top:10%;padding-top:5%;color: #fff;"
        data-aos="zoom-in-up"
        data-aos-easing="ease"
      >PROCESS</h3>
      <hr
        class="border_short"
        style="border: 2px solid #fdd23e;"
        data-aos="zoom-in-up"
        data-aos-easing="ease"
      >
      <div
        class="project_content"
        style="width:90%;max-width:1200px; margin-right:auto;margin-left:auto;"
      >
        <div class="box">
          <img
            src="/img/HotSpring/Persona.png"
            alt="BabyAnimalFarm"
            class="main_img Yshadow"
            style="max-width: 600px"
            data-aos="flip-left"
            data-aos-easing="ease"
          >
          <p class="capture" style="text-align:center;">User Persona</p>
          <img
            src="/img/HotSpring/TaskModel.png"
            alt="Pollways"
            class="main_img Yshadow"
            style="max-width: 600px"
            data-aos="flip-left"
            data-aos-easing="ease"
          >
          <p class="capture" style="text-align:center;">Task Model</p>
        </div>
        <div class="box">
          <img
            src="/img/HotSpring/Sitemap.png"
            alt="taskmodel"
            class="main_img Yshadow"
            style="max-width: 400px"
            data-aos="flip-left"
            data-aos-easing="ease"
          >
          <p class="capture" style="text-align:center;">Sitemap</p>
          <img
            src="/img/HotSpring/StyleTile.png"
            alt="taskmodel"
            class="main_img Yshadow"
            style="max-width: 450px;"
            data-aos="flip-left"
            data-aos-easing="ease"
          >
          <p class="capture" style="text-align:center;">Style Tile</p>
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
  }
};
</script>

<style scoped>
.title_container {
  width: 450px;
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
@media screen and (max-width: 834px) and (orientation: portrait) {
  .title_container {
    width: 300px;
  }
  .project_content {
    margin-top: 100px;
  }
  .detail_container {
    margin-top: 50px;
    margin-bottom: 30px;
    padding-bottom: 0px;
  }
  .line_space1 {
    margin-top: 45px;
  }
  .btn_container {
    margin-top: 10px;
  }
  .bottom_space {
    margin-top: 80px;
    margin-bottom: -80px;
  }
}
</style>
