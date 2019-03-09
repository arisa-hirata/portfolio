<template>
  <section class="project_container">
    <Header2/>
    <h2 class="project_title">NiceCream Factory</h2>
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
        <img src="/img/Filter_NiceCream.png" alt="NiceCream" class="main_img">
      </div>
      <div class="box">
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

    <div class="project_content">
      <div class="box">
        <img
          src="/img/NiceCream/Logo&Color.png"
          alt="Logo&Color"
          class="main_img"
          style="width:80%;"
        >
        <p style="text-align:center; margin-top:5%;">Logo & Color Pallete</p>
      </div>
      <div class="box">
        <div class="para">
          <div>
            <h3 class="project_subtitle">
              What is
              <span style="color: #5db68c; text-align:center">NiceCream Factory</span>?
            </h3>
            <hr class="project_border">

            <p>
              This is a website for an fictional rolled ice cream shop “Nice Cream Factory“.
              The website is developed with HTML, CSS and jQuery.
            </p>
          </div>
        </div>
        <div class="para">
          <div>
            <h3 class="project_subtitle">
              <span style="color: #5db68c;">C</span>HALLENGES
            </h3>
            <hr class="project_border">

            <p>This project was a biggest project in my first term at BCIT. The requirements for the project spanned the entire design and development process, including UX research, UI design, and development. We were required to create the branding and style guide for a fictional business, and then create a website. In this project, I was the only person made a responsive website.</p>
          </div>
        </div>
      </div>
    </div>

    <h3 class="project_subtitle" style="margin-top:10%;">
      <span style="color: #5db68c;">P</span>ROCESS
    </h3>
    <hr class="project_border">
    <div class="project_content2">
      <img src="/img/NiceCream/wireframes.png" alt="wireframe" style="width:80%">
      <p style="text-align:center; margin-top:10px;">Wireframes</p>
    </div>
    <div class="project_content2">
      <img src="/img/NiceCream/design_process.png" alt="wireframe" style="width:70%">
      <p style="text-align:center; margin-top:10px;">Logo Design Process</p>
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
