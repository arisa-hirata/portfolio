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
                  <p>June 2019 - Present</p>
                  <p>React Hooks / AWS / GraphQL</p>
                </div>
              </div>
              <div class="btn_container">
                <a href>
                  <div class="project_btn" v-on:click="visitLink">Website</div>
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
            <p>PawPaw is a simple Q&A platform about pets. Users can ask about their pets and get answers from other users. This app is developed by React hooks, AWS and GraphQL.</p>
          </div>
        </div>
      </div>
    </div>

    <hr class="border" data-aos="zoom-in-up" data-aos-easing="ease">

    <div class="projectDeskR-2 resp" data-aos="fade-left" data-aos-easing="ease">
      <h3 class="project_subtitle">
        <span class="under">CHALLENGES</span>
      </h3>
    </div>

    <div class="project_content whiteBg">
      <div class="projectDeskL-2" data-aos="fade-right" data-aos-easing="ease">
        <div class="para">
          <p>PawPaw is my personal project collaborating with another developer. For this app, the latest technologies, such as React Hooks, AWS, and GraphQL are used and I am struggling to understand those. Especially AWS and GraphQL are quite challnging and I need more deeply understanding about those. I'm spending a lot of time to acquire those.</p>
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
  },
  methods: {
    visitLink: function() {
      alert(
        "Thank you for interested in PawPaw! PawPaw is still under construction. It'll be launched soon!"
      );
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
.border {
  width: 300px;
  border: 4px solid #fdd23e;
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
