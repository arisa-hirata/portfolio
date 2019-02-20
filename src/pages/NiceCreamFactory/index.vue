<template>
  <section class="container">
    <Header2/>

    <h2>NiceCream Factory</h2>

    <div class="content">
      <div class="box">
        <img src="/img/Filter_NiceCream.jpg" alt="NiceCream" class="main_img">
      </div>
      <div class="box">
        <div class="detail_container">
          <p>
            <b>Role:</b> Front-End Developer / UI & UX Designer / Graphic Designer
          </p>
          <p>
            <b>Client:</b> BCIT Term1
          </p>
          <p>
            <b>Timeline:</b> November - December 2017
          </p>
          <p>
            <b>Skills:</b> HTML5 / CSS3 / JavaScript /jQuery / Adobe Illustrator / Photoshop
          </p>

          <div>
            <h3>
              What is
              <span style="color: #5db68c; text-align:center">NiceCream Factory</span>?
            </h3>
            <p style="margin-top:-15px; width:90%;">
              This is a website for an ice cream shop “Nice Cream Factory“.
              The website is developed with HTML, CSS and jQuery.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="btn_container">
      <a href="http://nicecreamfactory.arisahirata.ca/arisahirata/html/">
        <div class="btn">Play</div>
      </a>
      <a href="https://github.com/arisa-hirata/nicecreamfactory">
        <div class="btn">Github</div>
      </a>
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

.footer {
  height: 50px;
  background-color: #575754;
  color: white;
  width: 100vw;
  margin-top: 70px;
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
  .container {
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .box {
    width: 100%;
  }
}

@media screen and (max-width: 480px) and (orientation: portrait) {
  .container {
  }
}
</style>
