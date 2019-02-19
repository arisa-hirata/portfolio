<template>
  <section class="container">
    <h2 class="title">Baby Animal Farm</h2>
    <div class="border-container">
      <div class="border1">
        <hr class="title_border">
      </div>
      <div class="border2">
        <hr class="title_border2">
      </div>
    </div>

    <div class="content">
      <div class="box">
        <img src="/img/Filter_BabyAnimalFarm.png" alt="Pollways" class="main_img">
      </div>
      <div class="box">
        <div class="detail_container">
          <div class="details">
            <p>
              <b>Role:</b> Lead Developer / UI&UX Designer / Character Designer
            </p>
            <p>
              <b>Client:</b> BCIT Term2
            </p>
            <p>
              <b>Timeline:</b> March - May 2018
            </p>
            <p>
              <b>Skills:</b> HTML5 / CSS3 / JavaScript /SVG Animation / Adobe Illustrator
            </p>

            <div class="btn_container">
              <a href="http://babyanimalfarm.arisahirata.ca/arisa/top/top.html">
                <div class="btn">Play</div>
              </a>
              <a href="https://github.com/arisa-hirata/baby_animal_farm">
                <div class="btn">Github</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="box">
        <img src="/img/BabyAnimalFarm/convo.png" alt="BabyAnimalFarm" class="main_img">
        <p style="text-align:center; margin-top:5%;">Conversation Scene</p>
      </div>
      <div class="box">
        <div class="para">
          <div>
            <h3>
              What is
              <span style="color: #5db68c; text-align:center">Baby Animal Farm</span>?
            </h3>
            <hr>

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

    <div class="content">
      <div class="box">
        <img src="/img/BabyAnimalFarm/quiz.png" alt="BabyAnimalFarm" class="main_img">
        <p style="text-align:center; margin-top:5%;">Quiz Scene</p>
      </div>
      <div class="box">
        <div class="para">
          <div>
            <h3>
              <span style="color: #5db68c;">C</span>HALLENGES
            </h3>
            <hr>

            <p>
              Baby Animal Farm was the combined final project for 2 courses in my second term at BCIT.
              As the lead developer for the project, I was responsible for coding the majority of the interactive childrens’ ebook's functionality. Along the way, I realized that to create a more intuitive user interface for children, after usability test, I had to design several UI elements and interactive functions.
            </p>
          </div>
        </div>
      </div>
    </div>

    <h3 style="margin-top:10%;">
      <span style="color: #5db68c;">P</span>ROCESS
    </h3>
    <hr>
    <div class="content">
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

    <footer class="footer">
      <p class="copyright">
        &copy; Copyright 2019
        <span style="color:#fbf7c6;">Arisa Hirata</span>
      </p>
    </footer>
  </section>
</template>

<style scoped>
.container {
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  width: 90%;
  max-width: 1200px;
  color: #575754;
}

.title {
  font-size: 3.5em;
  font-weight: 700;
  padding-top: 10%;
  margin-top: 0;
  letter-spacing: 0.1em;
  text-align: left;
}

.border1 {
  background-color: aqua;
  width: 20%;
}

.border2 {
  background-color: #5db68c;
  width: 80%;
}

.title_border {
  border: 6px solid #fbf7c6;
  margin-top: -30px;
}

.title_border2 {
  border: 2px solid #e5e6e5;
  margin-top: -26px;
}

hr {
  border: 2px solid #e5e6e5;
  margin-top: -20px;
}

.border-container {
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.content {
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  justify-content: space-around;
}

.box {
  width: 50%;
}

.desc {
  margin-top: 0;
}

.main_img {
  width: 90%;
  min-width: 300px;
}

h3 {
  font-size: 2em;
  /* margin-top: 0; */
}

p {
  text-align: left;
}

.detail_container {
  background-color: #f4f4f4;
  width: 90%;
  height: 100%;
  padding-top: 1%;
  line-height: 1.5em;
}

.details {
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

.para {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.btn_container {
  margin-top: 5%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  display: flex;
  justify-content: center;
}

.btn_container a {
  margin: 5px;
  text-decoration: none;
}

.btn {
  background-color: #fbf7c6;
  color: #575754;
  border-radius: 7px;
  width: 100px;
  height: 37px;
  padding-top: 10px;
  font-size: 1.2em;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
}

.btn:hover {
  background-color: #5db68c;
  color: white;
}

.tutorial_container {
  margin-top: 70px;
  margin-bottom: 70px;
}

.tutorial_container h3 {
  font-size: 1.5em;
}

.footer {
  height: 50px;
  background-color: #575754;
  color: white;
  width: 100vw;
  margin-top: 0px;
  margin-left: 0;
  position: absolute;
  left: 0;
}

.copyright {
  padding-top: 5px;
  font-weight: lighter;
  font-size: 0.8em;
}

@media screen and (max-width: 834px) and (orientation: portrait) {
  .content {
    display: flex;
    flex-direction: column;
  }

  .box {
    width: 100%;
  }

  .tutorial {
    width: 90%;
  }
}

@media screen and (max-width: 480px) and (orientation: portrait) {
}
</style>
