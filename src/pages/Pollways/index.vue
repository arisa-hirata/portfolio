<template>
  <section class="container">
    <Header2/>
    <h2 class="title">Pollways</h2>
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
        <img src="/img/Filter_Pollways.png" alt="Pollways" class="main_img">
      </div>
      <div class="box">
        <div class="detail_container">
          <div class="details">
            <p>
              <b>ROLE:</b> Lead Developer
            </p>
            <p>
              <b>CLIENT:</b> BCIT Term3
            </p>
            <p>
              <b>TIMELINE:</b> September - December 2018
            </p>
            <p>
              <b>SKILLS:</b> React Native / Redux / Firebase
            </p>

            <div class="btn_container">
              <a href="https://testflight.apple.com/join/CF5m6t5H">
                <div class="btn">Testflight</div>
              </a>
              <a href="https://github.com/arisa-hirata/pollways">
                <div class="btn">Github</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="box">
        <img src="/img/Pollways/Logo&Color.png" alt="Pollways" class="main_img">
        <p style="text-align:center; margin-top:5%;">Logo & Color Pallete</p>
      </div>
      <div class="box">
        <div class="para">
          <h3>
            What is
            <span style="color: #5db68c; text-align:center">Pollways</span>?
          </h3>
          <hr>
          <div class="desc">
            <p>The application will allow users to post arguments which other users can agree, disagree, or comment on. It is a polling and debate app that helps to resolve debates between other users. It is an application for the person who always has to be right.</p>
            <p>With a team of four, my role in Pollways was a Lead Developer. As a lead developer of the project, I was responsible for taking the mockups from the design team, and developing the UI/UX in React Native and Redux. I also worked with the other developer in implementing firebase. At the end of the term, we presented the project to our peers and a panel of industry representatives, and we competed with the other 9 teams throughh voting by industries and other grades, and our app was chosen as the second best app in this year.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="box">
        <img src="/img/Pollways/codingImg.png" alt="Coding" class="main_img">
      </div>
      <div class="box">
        <div class="para">
          <h3 style="margin-top: 0;">
            <span style="color: #5db68c;">C</span>HALLENGES
          </h3>
          <hr>
          <p>This project was the biggest and the most challenging project in my BCIT days. All of the technologies, such as ReactNative, Redux, and firebase were completely new for me. And as a lead developer, I needed to direct other teammates, as well as struggle with the new technology. Basically, my efforts and skills were equivalent to the app quality, which means I took on great responsibility alone. I was under so much pressure every day, and I became discouraged many times. However, I have never stopped working hard, and I have been keeping my best, until the last moment.</p>
        </div>
      </div>
    </div>

    <h3 style="margin-top:10%;">
      <span style="color: #5db68c;">P</span>ROCESS
    </h3>
    <hr>
    <div class="content">
      <div class="box">
        <img src="/img/Pollways/persona.png" alt="Pollways" class="main_img">
        <p style="text-align:center; margin-top:5%;">Personas & Task Model</p>
      </div>
      <div class="box">
        <img src="/img/Pollways/wireframe.png" alt="Pollways" class="main_img">
        <p style="text-align:center; margin-top:5%;">Wireframes</p>
        <img
          src="/img/Pollways/mockups.png"
          alt="Pollways"
          class="main_img"
          style="margin-top:15%;"
        >
        <p style="text-align:center; margin-top:5%;">Mockups</p>
      </div>
    </div>

    <div class="tutorial_container">
      <h3>
        How to Play
        <span style="color: #5db68c;">Pollways</span>?
      </h3>
      <iframe
        class="tutorial"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/_oVEmJMrzpk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <footer class="footer">
      <p class="copyright">
        &copy; Copyright 2019
        <span style="color:#fbf7c6;">Arisa Hirata</span>
      </p>
    </footer>
  </section>
</template>

<script>
import Header2 from "@/components/Header2";

export default {
  components: {
    Header2
  }
};
</script>


<style scoped>
/* .heaer2 {
  display: block;
} */

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
  margin-left: auto;
  margin-right: auto;
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
  margin-top: 10%;
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

  .detail_container {
    height: 400px;
  }

  .tutorial {
    width: 90%;
  }
}

@media screen and (max-width: 480px) and (orientation: portrait) {
}
</style>
