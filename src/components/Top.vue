<template>
  <section id="home">
    <div id="bg">
      <div class="title">
        <h2 class="hello">Hello! I am</h2>

        <div class="myName_container">
          <img src="/img/titleLogo.svg" alt="LOGO" class="titleLogo">
          <div class="name_container">
            <h1 class="primary">risa Hirata</h1>
          </div>
        </div>

        <h1 class="secondly">Front-End Developer & UI/UX Designer</h1>
        <!-- <div class="btn">View my work</div> -->
        <a href="#" v-scroll-to="'#about'" class="btn">View my work</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100vw;
  height: 100vh;
  z-index: 999;
}

#bg {
  /* background-image: url("~assets/img/IconicWorld.jpg"); */
  width: 90vw;
  height: 90vh;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  background-color: #fdd23e;
}

.title {
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  line-height: 0.1em;
  width: 100%;
  height: 30%;
  /* background-color: pink; */
  /* font-size: 2vw; */
}

.hello {
  letter-spacing: 0.1em;
  font-size: 2em;
}

.myName_container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  color: white;
}

.titleLogo {
  width: 7%;
  margin-right: 10px;
  margin-top: auto;
  margin-bottom: auto;
}

.primary {
  font-size: 4.8em;
  font-weight: 900;
  letter-spacing: 0.2em;
  animation: primary 2s forwards;
  opacity: 0;
  position: relative;
  margin-right: auto;
  margin-left: auto;
}

@keyframes primary {
  0% {
    opacity: 0;
    top: -500px;
  }
  100% {
    opacity: 1;
    top: 0;
  }
}

.secondly {
  font-size: 1.8em;
  margin-left: 5%;
  letter-spacing: 0.1em;
  animation: secondly 2s forwards;
  opacity: 0;
  position: relative;
  animation-delay: 0.4s;
}

@keyframes secondly {
  0% {
    opacity: 0;
    top: -100px;
  }
  50% {
    opacity: 0;
    top: -50px;
  }
  100% {
    opacity: 1;
    top: 0;
  }
}

.btn {
  margin-top: 3%;
  font-size: 1.7vw;
  display: inline-block;
  padding: 1.3em 1em;
  text-decoration: none;
  color: #fff;
  border: solid 2px #14a79c;
  background: #14a79c;
  border-radius: 10px;
  transition: 0.4s;
  cursor: pointer;
  text-align: center;
  position: relative;
  animation: btn 2s forwards;
  opacity: 0;
  animation-delay: 1.7s;
}

@keyframes btn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.btn:hover {
  background: #0b6d6a;
  border: solid 2px #0b6d6a;
  color: white;
}

@media screen and (max-width: 834px) and (orientation: portrait) {
  .primary {
    font-size: 7vw;
    letter-spacing: 0.1em;
    text-align: center;
  }

  .secondly {
    font-size: 3vw;
    letter-spacing: 0.2em;
    text-align: center;
  }
}

@media screen and (max-width: 480px) and (orientation: portrait) {
  .btn {
    margin-top: 10%;
    font-size: 1em;
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    color: white;
    border: solid 2px white;
    border-radius: 10px;
    transition: 0.4s;
    cursor: pointer;
    text-align: center;
  }
}
</style>
