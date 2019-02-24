<template>
  <section class="project_container">
    <Header2/>

    <h2 class="project_title">Easter Ecard</h2>
    <div class="border-container">
      <div class="border1">
        <hr class="title_border">
      </div>
      <div class="border2">
        <hr class="title_border2">
      </div>
    </div>

    <div class="project_content">
      <div class="box">
        <img src="/img/Filter_EasterEcard.png" alt="Ecard" class="main_img">
      </div>
      <div class="box">
        <div class="detail_container">
          <div class="details">
            <div class="details_left">
              <p>
                <b>ROLE:</b>
              </p>

              <p style="margin-top: 44px;">
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

    <div class="project_content">
      <div class="box">
        <img src="/img/Ecard/1ststage.png" alt="Ecard" class="main_img">
        <p style="text-align:center; margin-top:5%;">1st stage answers</p>
      </div>
      <div class="box">
        <div class="para">
          <h3 class="project_subtitle">
            What is
            <span style="color: #5db68c; text-align:center">Easter Ecard</span>?
          </h3>
          <hr class="project_border">
          <div class="desc">
            <p>This is an interactive e-card for Easter. There are 10 eggs, some hidden others more obvious. When you find an egg, you can learn a fun fact about Easter. When you find all 10 eggs Easter bunnies celebrate by dancing.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="project_content">
      <div class="box">
        <img src="/img/Ecard/2ndstage.png" alt="Ecard" class="main_img">
        <p style="text-align:center; margin-top:5%;">2nd stage answers</p>
      </div>
      <div class="box">
        <div class="para">
          <h3 class="project_subtitle" style="margin-top: 0;">
            <span style="color: #5db68c;">C</span>HALLENGES
          </h3>
          <hr class="project_border">
          <p>The e-card was a midterm project for one of my classes at BCIT. We were required to implement 10 facts about a holiday of our choosing. These facts were to be hidden throughout the application, with the user having to interact with the application in order to discover them.</p>
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
p {
  text-align: left;
}
</style>
