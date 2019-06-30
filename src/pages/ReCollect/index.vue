<template>
  <section class="project">
    <Header2/>

    <div class="gray">
      <div class="white"></div>

      <div class="project_container gray_top">
        <div class="title_container" data-aos="zoom-in-up" data-aos-easing="ease">
          <h2 class="content_title">VUI Development</h2>
          <hr class="yellow_border">
        </div>

        <div class="project_content">
          <div class="box" data-aos="fade-right" data-aos-easing="ease" data-aos-delay="500">
            <img
              src="/img/ReCollect/alexa&googlehome.png"
              alt="Alexa & Google Home"
              class="main_img"
            >
          </div>
          <div class="box" data-aos="fade-left" data-aos-easing="ease" data-aos-delay="500">
            <div class="detail_container">
              <div class="details">
                <div class="details_left">
                  <p>
                    <b>Role:</b>
                  </p>
                  <p>
                    <b>Company:</b>
                  </p>
                  <p>
                    <b>Timeline:</b>
                  </p>
                  <p>
                    <b>Skills:</b>
                  </p>
                </div>
                <div class="details_right">
                  <p>Software Developer</p>
                  <p>ReCollect Systems Inc.</p>
                  <p>March - May 2019</p>
                  <p>AWS Lambda / Node.js / Google Cloud Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="project_content whiteBg">
      <div class="projectDeskL" data-aos="fade-right" data-aos-easing="ease">
        <h3 class="project_subtitle">
          <span class="under">Work Descriptions</span>
        </h3>
      </div>
      <div class="projectDeskR" data-aos="fade-left" data-aos-easing="ease">
        <div class="para">
          <div>
            <p>I worked at ReCollect Systems Inc. to develop features for Amazon Alexa and Google Home products, which integrate with the REST APIs. Recently, they shift their version to Alexa SDK v2 from v1 and gaction-sdk v2 from v1, so I tried to migrate to both v2 versions. Also, Tested exists Alexa functions used Mocha & Chai and I learned the importance of Tdd and CI for projects.</p>
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
          <p>This project was the first time working at the company as a developer. Although I learned a lot of things at my school, the “real job” was totally different from school projects. Always I kept in my mind “clear and clean code” because in the company, usually, employees need to integrate their code with other peers. In addition, it was my first-time remote work. Remote work is sometimes quite hard to effectively communicate with other peers. However, I always kept in my mind “the most important thing for developers is communication”, so I positively contacted other co-workers to share current circumstances and know each other.</p>
        </div>
      </div>
      <div class="projectDeskR-2 web" data-aos="fade-left" data-aos-easing="ease">
        <h3 class="project_subtitle">
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
      >Some Alexa Skills</h3>
      <hr
        class="border_short"
        style="border: 2px solid #fdd23e;"
        data-aos="zoom-in-up"
        data-aos-easing="ease"
      >
      <div class="skills_container" data-aos="fade-up" data-aos-easing="ease">
        <figure data-aos="flip-left" data-aos-easing="ease">
          <img src="/img/ReCollect/vancollect.png" class="skill_icons" alt="VanCollect">
          <figcaption>VanCollect Waste Wizard</figcaption>
        </figure>
        <figure data-aos="flip-left" data-aos-easing="ease" data-aos-delay="50">
          <img src="/img/ReCollect/williamsburg.png" class="skill_icons" alt="css3">
          <figcaption>Williamsburg Waste Wizard</figcaption>
        </figure>
        <figure data-aos="flip-left" data-aos-easing="ease" data-aos-delay="150">
          <img src="/img/ReCollect/st.peters.png" class="skill_icons" alt="js">
          <figcaption>St. Peters Waste Wizard</figcaption>
        </figure>
        <figure data-aos="flip-left" data-aos-easing="ease" data-aos-delay="200">
          <img src="/img/ReCollect/rrrasoc.png" class="skill_icons" alt="jquery">
          <figcaption>RRRASOC Recycling Directory</figcaption>
        </figure>
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
.border {
  width: 300px;
  border: 4px solid #fdd23e;
}
.skills_container {
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  line-height: 0.8em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 0;
  padding-bottom: 7%;
}
.skill_icons {
  margin: 20px;
}
.main_img {
  max-width: 400px;
}
figcaption {
  color: #ffffff;
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
