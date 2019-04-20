<template>
  <section class="project">
    <Header2/>

    <div class="gray">
      <div class="white"></div>

      <div class="project_container gray_top">
        <div class="title_container" data-aos="zoom-in-up" data-aos-easing="ease">
          <h2 class="content_title">NiceCream Factory</h2>
          <hr class="yellow_border">
        </div>

        <div class="project_content">
          <div class="box" data-aos="fade-right" data-aos-easing="ease" data-aos-delay="500">
            <img src="/img/NiceCream/NiceCream.png" alt="NiceCream" class="main_img">
          </div>
          <div class="box" data-aos="fade-left" data-aos-easing="ease" data-aos-delay="500">
            <div class="detail_container">
              <div class="details">
                <div class="details_left">
                  <p>
                    <b>Role:</b>
                  </p>
                  <p style="margin-top: 44px;">
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
                  <p>Front-End Developer / UI & UX Designer / Graphic Designer</p>
                  <p>BCIT Term1</p>
                  <p>November - December 2017</p>
                  <p>HTML5 / CSS3 / JavaScript /jQuery / Adobe Illustrator / Photoshop</p>
                </div>
              </div>
              <div class="btn_container">
                <a href="http://nicecreamfactory.arisahirata.ca/arisahirata/html/">
                  <div class="project_btn">Website</div>
                </a>
                <a href="https://github.com/arisa-hirata/nicecreamfactory">
                  <div class="project_btn">Github</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="project_content whiteBg">
      <div class="projectDeskL" data-aos="fade-right" data-aos-easing="ease">
        <h3 class="project_subtitle" style="margin-top: 0;">
          <span class="under">
            What is
            <br>NiceCream Factory?
          </span>
        </h3>
      </div>
      <div class="projectDeskR" data-aos="fade-left" data-aos-easing="ease">
        <div class="para">
          <div>
            <p>
              This is a website for an fictional rolled ice cream shop “Nice Cream Factory“.
              <br>The website is developed with HTML, CSS and jQuery.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="projectDeskR-2 resp" data-aos="fade-left" data-aos-easing="ease">
      <h3 class="project_subtitle bottom_space">
        <span class="under">CHALLENGES</span>
      </h3>
    </div>

    <div class="project_content whiteBg">
      <div class="projectDeskL-2" data-aos="fade-right" data-aos-easing="ease">
        <div class="para">
          <p>This project was a biggest project in my first term at BCIT. The requirements for the project spanned the entire design and development process, including UX research, UI design, and development. We were required to create the branding and style guide for a fictional business, and then create a website. In this project, I was the only person made a responsive website.</p>
        </div>
      </div>
      <div class="projectDeskR-2" data-aos="fade-left" data-aos-easing="ease">
        <h3 class="project_subtitle web">
          <span class="under">CHALLENGES</span>
        </h3>
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
      <div style="padding-bottom: 3%;">
        <img
          src="/img/NiceCream/wireframes.png"
          alt="BabyAnimalFarm"
          class="main_img Yshadow"
          style="max-width:900px;"
          data-aos="flip-down"
          data-aos-easing="ease"
        >
        <p class="capture" style="text-align:center;">Wireframes</p>
        <img
          src="/img/NiceCream/design_process.png"
          alt="Pollways"
          class="main_img Yshadow"
          style="max-width:900px;"
          data-aos="flip-down"
          data-aos-easing="ease"
        >
        <p class="capture" style="text-align:center;">Logo Design Process</p>
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
  width: 500px;
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
    width: 250px;
  }
  .project_content {
    margin-top: 100px;
  }
  .detail_container {
    margin-top: 50px;
    margin-bottom: 30px;
    padding-bottom: 15%;
  }

  .line_space {
    margin-top: 70.5px;
  }
  .bottom_space {
    margin-top: 80px;
    margin-bottom: -80px;
  }
}
</style>
