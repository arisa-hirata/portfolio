<template>
  <section class="project">
    <Header2/>

    <div class="gray">
      <div class="white"></div>

      <div class="project_container gray_top">
        <div class="title_container">
          <h2 class="content_title">Baby Animal Farm</h2>
          <hr class="yellow_border">
        </div>

        <div class="project_content">
          <div class="box firstL_content">
            <img
              src="/img/BabyAnimalFarm/BabyAnimalFarm.png"
              alt="Baby Animal Farm"
              class="main_img"
            >
          </div>
          <div class="box firstR_content">
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
      </div>
    </div>

    <div class="project_content whiteBg">
      <div class="projectDeskL secondL_content">
        <h3 class="project_subtitle">
          <span class="under">What is
            <br>Baby Animal Farm?
          </span>
        </h3>
      </div>
      <div class="projectDeskR secondR_content">
        <div class="para">
          <div>
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

    <div class="project_content yellowBG">
      <div class="box_container">
        <div class="box">
          <img
            src="/img/BabyAnimalFarm/convo.png"
            alt="convo"
            class="main_img"
            style="box-shadow: 8px 10px 0px #ee815c;"
          >
          <p class="capture" style="text-align:center;">Conversation Scene</p>
        </div>
        <div class="box">
          <img
            src="/img/BabyAnimalFarm/quiz.png"
            alt="quiz"
            class="main_img"
            style="box-shadow: 8px 10px 0px #ee815c;"
          >
          <p class="capture" style="text-align:center;">Quiz Scene</p>
        </div>
      </div>
    </div>

    <div class="project_content whiteBg">
      <div class="projectDeskL-2">
        <div class="para">
          <p>
            Baby Animal Farm was the combined final project for 2 courses in my second term at BCIT.
            As the lead developer for the project, I was responsible for coding the majority of the interactive childrens’ ebook's functionality. Along the way, I realized that to create a more intuitive user interface for children, after usability test, I had to design several UI elements and interactive functions.
          </p>
        </div>
      </div>
      <div class="projectDeskR-2">
        <h3 class="project_subtitle">
          <span class="under">CHALLENGES</span>
        </h3>
      </div>
    </div>

    <div class="greenBg">
      <h3 class="project_subtitle" style="margin-top:10%;padding-top:5%;color: #fff;">PROCESS</h3>
      <hr class="border_short" style="border: 2px solid #fdd23e;">
      <div
        class="project_content"
        style="width:90%;max-width:1200px; margin-right:auto;margin-left:auto;"
      >
        <div class="box">
          <img
            src="/img/BabyAnimalFarm/Logo&Color.png"
            alt="BabyAnimalFarm"
            class="main_img Yshadow"
            style="max-width: 400px"
          >
          <p class="capture" style="text-align:center;">Logo & Color Pallete</p>
          <img
            src="/img/BabyAnimalFarm/logo_process.png"
            alt="Pollways"
            class="main_img Yshadow"
            style="max-width: 450px"
          >
          <p class="capture" style="text-align:center;">Logo Design Process</p>
        </div>
        <div class="box">
          <img
            src="/img/BabyAnimalFarm/OriginalDesign.png"
            alt="taskmodel"
            class="main_img Yshadow"
          >
          <p class="capture" style="text-align:center;">Original Character Designs</p>
          <img
            src="/img/BabyAnimalFarm/Persona.png"
            alt="taskmodel"
            class="main_img Yshadow"
            style="max-width: 400px;"
          >
          <p class="capture" style="text-align:center;">User Persona</p>
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
</style>
