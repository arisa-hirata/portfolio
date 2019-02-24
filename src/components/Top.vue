<template>
  <section id="home">
    <div id="bg">
      <div class="title">
        <h1 class="primary">
          Hello, I'm
          <span style="color: #fbf7c6;font-weight:500;">Arisa Hirata</span>.
        </h1>
        <h1 class="secondly">Front-End Developer & UI/UX Designer.</h1>
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
  width: 100vw;
  height: 100vh;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #575754;
}

.title {
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  color: white;
  line-height: 2em;
  text-shadow: 1px 2px 10px rgba(50, 50, 50, 0.7);
  width: 100%;
  height: 30%;
  /* background-color: pink; */
  /* font-size: 2vw; */
}

.primary {
  font-size: 4em;
  margin-left: 5%;
  text-align: left;
  font-weight: lighter;
  letter-spacing: 0.1em;
  animation: primary 2s forwards;
  opacity: 0;
  position: relative;
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
  font-size: 2em;
  margin-left: 5%;
  text-align: left;
  font-weight: lighter;
  letter-spacing: 0.2em;
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
  padding: 0.5em 1em;
  text-decoration: none;
  color: white;
  border: solid 2px white;
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
  background: #5db68c;
  border: solid 2px #5db68c;
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
