<template>
  <section class="project_container">
    <Header2/>
    <h2 class="project_title">Baby Animal Farm</h2>
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
        <img src="/img/Filter_BabyAnimalFarm.png" alt="Pollways" class="main_img">
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
              <p>Lead Developer / UI&UX Designer / Character Designer</p>
              <p>BCIT Term2</p>
              <p>March - May 2018</p>
              <p>HTML5 / CSS3 / JavaScript /SVG Animation / Adobe Illustrator</p>
            </div>
          </div>
          <div class="btn_container">
            <a href="https://arisa-hirata.github.io/babyanimalfarm/top/top.html">
              <div class="project_btn">Play</div>
            </a>
            <a href="https://github.com/arisa-hirata/baby_animal_farm">
              <div class="project_btn">Github</div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="project_content">
      <div class="box">
        <img src="/img/BabyAnimalFarm/convo.png" alt="BabyAnimalFarm" class="main_img">
        <p style="text-align:center; margin-top:5%;">Conversation Scene</p>
      </div>
      <div class="box">
        <div class="para">
          <div>
            <h3 class="project_subtitle">
              What is
              <span style="color: #5db68c; text-align:center">Baby Animal Farm</span>?
            </h3>
            <hr class="project_border">

            <p>
              This web application is a childrens’ e-book for ages 7 - 10.
              The story is three baby animals who have a different purpose visit a “Baby Animal Farm“. Through conversations with farm animals each of the three babies learn about different kind of animals' interesting facts. The setting is in animal farm, and the user
              will choose they player character and get to go around the farm, talking and learning about
              other animals. Later on when they all meet the animals and learn about the facts, users get
              quizzed on what they’ve learned.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="project_content">
      <div class="box">
        <img src="/img/BabyAnimalFarm/quiz.png" alt="BabyAnimalFarm" class="main_img">
        <p style="text-align:center; margin-top:5%;">Quiz Scene</p>
      </div>
      <div class="box">
        <div class="para">
          <div>
            <h3 class="project_subtitle">
              <span style="color: #5db68c;">C</span>HALLENGES
            </h3>
            <hr class="project_border">

            <p>
              Baby Animal Farm was the combined final project for 2 courses in my second term at BCIT.
              As the lead developer for the project, I was responsible for coding the majority of the interactive childrens’ ebook's functionality. Along the way, I realized that to create a more intuitive user interface for children, after usability test, I had to design several UI elements and interactive functions.
            </p>
          </div>
        </div>
      </div>
    </div>

    <h3 class="project_subtitle" style="margin-top:10%;">
      <span style="color: #5db68c;">P</span>ROCESS
    </h3>
    <hr class="project_border">
    <div class="project_content">
      <div class="box">
        <img
          src="/img/BabyAnimalFarm/Logo&Color.png"
          alt="BabyAnimalFarm"
          class="main_img"
          style="width:50%;"
        >
        <p style="text-align:center; margin-top:5%;">Logo & Color Pallete</p>
        <img
          src="/img/BabyAnimalFarm/logo_process.png"
          alt="BabyAnimalFarm"
          class="main_img"
          style="width:80%;margin-top: 10%;"
        >
        <p style="text-align:center; margin-top:5%;">Logo Design Process</p>
      </div>
      <div class="box">
        <img src="/img/BabyAnimalFarm/originalDesign.png" alt="BabyAnimalFarm" class="main_img">
        <p style="text-align:center; margin-top:5%;">Original Character Designs</p>
        <img
          src="/img/BabyAnimalFarm/Persona.png"
          alt="BabyAnimalFarm"
          class="main_img"
          style="width:60%;box-shadow: 5px 2px 10px rgba(100, 100, 100, 0.3);"
        >
        <p style="text-align:center; margin-top:5%;">User Persona</p>
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
