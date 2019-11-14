<template>
  <section class="project">
    <Header2/>

    <div class="gray">
      <div class="white"></div>

      <div class="project_container gray_top">
        <div class="title_container" data-aos="zoom-in-up" data-aos-easing="ease">
          <h2 class="content_title">Pokédex</h2>
          <hr class="yellow_border">
        </div>

        <div class="project_content">
          <div class="box" data-aos="fade-right" data-aos-easing="ease" data-aos-delay="500">
            <img src="/img/Pokedex/pokedex.png" alt="Ecard" class="main_img">
          </div>
          <div class="box" data-aos="fade-left" data-aos-easing="ease" data-aos-delay="500">
            <div class="detail_container">
              <div class="details">
                <div class="details_left">
                  <p>
                    <b>ROLE:</b>
                  </p>
                  <p>
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
                  <p>Web Developer / UI & UX Designer</p>
                  <p>Personal Project</p>
                  <p>November 2019</p>
                  <p>React / PokéAPI / Bootstrap</p>
                </div>
              </div>
              <div class="btn_container">
                <a href="https://react-pokedex-v1.netlify.com/" target="_blank">
                  <div class="project_btn">Play</div>
                </a>
                <a href="https://github.com/arisa-hirata/pokedex" target="_blank">
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
          <span class="under">What is Pokédex?</span>
        </h3>
      </div>
      <div class="projectDeskR secondR_content" data-aos="fade-left" data-aos-easing="ease">
        <div class="para">
          <div>
            <p>Ash, the hero of the "Pokémon" animated series, has finally become a Pokémon Master after 22 years. So you can be a Pokémon master like Ash unless you never give up to be a Pokémon Master. This is a Pokédex developed by React. Now you can start your adventure as a Pokémon Trainer with this app!</p>
            <p>The purpose of creating this app is handling huge API data with React. PokéAPI includes so much information, such as each Pokémon name and status... Handling huge API data is one of the important skill for developers, that's why I decided to create this app. Also, I eager to be a Pokémon master some day.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="tutorial_container yellowBG">
      <h3
        class="project_subtitle"
        style="color:#fff;"
        data-aos="zoom-in-up"
        data-aos-easing="ease"
      >Pokédex DEMO</h3>
      <hr
        class="border_short"
        style="border: 2px solid #ee815c;"
        data-aos="zoom-in-up"
        data-aos-easing="ease"
      >
      <img
        class="tutorial"
        src="/img/Pokedex/poke_demo.gif"
        width="560"
        alt="GIF"
        border="0"
        align="center"
        hspace="10"
        vspace="10"
        data-aos="flip-up"
        data-aos-easing="ease"
      >
    </div>

    <div class="projectDeskR-2 resp" data-aos="fade-left" data-aos-easing="ease">
      <h3 class="project_subtitle bottom_space">
        <span class="under">CHALLENGES</span>
      </h3>
    </div>

    <div class="project_content whiteBg" data-aos="fade-right" data-aos-easing="ease">
      <div class="projectDeskL-2">
        <div class="para">
          <p>This Pokédex is under construction. Search function by each Pokémon name, filter system by each Pokémon type and generations are going to be added! The final version is coming soon!</p>
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
.yellowBG {
  padding-top: 5%;
}
.line_space {
  margin-top: 44px;
}
.tutorial {
  border: 13px solid #14a79c;
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
  .line_space {
    margin-top: 70.5px;
  }
  .bottom_space {
    margin-bottom: -80px;
  }
}
</style>
