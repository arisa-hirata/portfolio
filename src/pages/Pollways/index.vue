<template>
  <section class="container">
    <Header2/>
    <h2>Pollways</h2>

    <div class="content">
      <div class="box">
        <img src="/img/Filter_Pollways.jpg" alt="Pollways" class="main_img">
      </div>
      <div class="box">
        <div class="detail_container">
          <p>
            <b>Role:</b> Lead Developer
          </p>
          <p>
            <b>Client:</b> BCIT Term3
          </p>
          <p>
            <b>Timeline:</b> September - December 2018
          </p>
          <p>
            <b>Skills:</b> React Native / Redux / Firebase
          </p>

          <div>
            <h3>
              What is
              <span style="color: #5db68c; text-align:center">Pollways</span>?
            </h3>
            <p
              style="margin-top:-15px; width:90%;"
            >The application will allow users to post arguments which other users can agree, disagree, or comment on. It is a polling and debate app that helps to resolve debates between other users. It is an application for the person who always has to be right.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="btn_container">
      <a href="https://testflight.apple.com/join/CF5m6t5H">
        <div class="btn">Play</div>
      </a>
      <a href="https://github.com/arisa-hirata/pollways">
        <div class="btn">Github</div>
      </a>
    </div>

    <div class="tutorial_container">
      <h3>How to Play Pollways?</h3>
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

<style scoped>
.container {
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  width: 90%;
  max-width: 1200px;
  color: #575754;
}

h2 {
  margin-top: 10%;
  font-size: 3em;
}

.content {
  display: flex;
  flex-direction: row;
}

.box {
  width: 50%;
}

.main_img {
  width: 90%;
  min-width: 300px;
}

.detail_container {
  background-color: #f4f4f4;
  width: 90%;
  text-align: left;
  padding-top: 1%;
  padding-left: 10%;
  padding-bottom: 2%;
  line-height: 1.5em;
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
  padding-top: 6px;
  font-size: 1.2em;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
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
