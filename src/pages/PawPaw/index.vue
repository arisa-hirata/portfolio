<template>
  <section class="project">
    <Header2/>

    <div class="gray">
      <div class="white"></div>

      <div class="project_container gray_top">
        <div class="title_container" data-aos="zoom-in-up" data-aos-easing="ease">
          <h2 class="content_title">PawPaw</h2>
          <hr class="yellow_border">
        </div>

        <div class="project_content">
          <div class="box" data-aos="fade-right" data-aos-easing="ease" data-aos-delay="500">
            <img src="/img/PawPaw/PawPaw.png" alt="PawPaw" class="main_img">
          </div>
          <div class="box" data-aos="fade-left" data-aos-easing="ease" data-aos-delay="500">
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
                  <p>Full Stack Developer / UI&UX Designer</p>
                  <p>Personal Project</p>
                  <p>September 2019 - Present</p>
                  <p>React Hooks / Firebase / GraphQL / Jest / Illustrator / Photoshop</p>
                </div>
              </div>
              <div class="btn_container">
                <a href="https://pawpaw-clothing.herokuapp.com" target="_blank">
                  <div class="project_btn">Website</div>
                </a>
                <a href="https://github.com/arisa-hirata/pawpaw" target="_blank">
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
        <h3 class="project_subtitle">
          <span class="under">What is PawPaw</span>
        </h3>
      </div>
      <div class="projectDeskR" data-aos="fade-left" data-aos-easing="ease">
        <div class="para">
          <div>
            <p>
              This is a fictional e-commerce website for the person who wants to give nice clothes for your family members having paws🐶🐱 This app is developed by React.js. Although this is still under constructing, it will be migrated to React Hooks, and utilized GraphQL. Also improving website performance, it will be tested by Jest.
              <br>
              <br>
              <i>***In PawPaw, you can check out, but this is a fictional website, so in the payment process, please use test credit card number which is given in this website.</i>
            </p>
          </div>
        </div>
      </div>
    </div>

    <hr class="border" data-aos="zoom-in-up" data-aos-easing="ease">
    <img
      src="/img/PawPaw/PawPawLogo.svg"
      alt="PawPaw Logo"
      class="pawpaw_logo"
      data-aos="zoom-in-up"
      data-aos-easing="ease"
    >
    <hr class="border" data-aos="zoom-in-up" data-aos-easing="ease">

    <div class="projectDeskR-2 resp" data-aos="fade-left" data-aos-easing="ease">
      <h3 class="project_subtitle">
        <span class="under">CHALLENGES</span>
      </h3>
    </div>

    <div class="project_content whiteBg">
      <div class="projectDeskL-2" data-aos="fade-right" data-aos-easing="ease">
        <div class="para">
          <p>This project's purpose is improving the web site performances to create a next-level app as well as learning new technologies. Also, I've been keeping in my mind "clean code" when I develop this app.</p>
        </div>
      </div>
      <div class="projectDeskR-2 web" data-aos="fade-left" data-aos-easing="ease">
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
.border {
  width: 80%;
  border: 4px solid #fdd23e;
}
.pawpaw_logo {
  max-width: 600px;
  margin: 30px auto;
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
  .resp {
    margin-bottom: -70px;
  }
}
</style>
