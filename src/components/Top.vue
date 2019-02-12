<template>
  <section id="home">
    <div id="bg">
      <div class="title">
        <h1>Hello I'm Arisa Hirata.</h1>
        <h1>I'm a Front-end Developer & UI/UX Designer.</h1>
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
  background-color: #fbf7c6;
  /* background: linear-gradient(-45deg, #bfd8d2, #fedcd2, #bfd8d2, #dcb239);
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite; */
}

/* @-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
} */

.title {
  text-align: center;
  margin-top: 300px;
  color: #df744a;
  font-weight: 100;
  font-size: 2vw;
}

.btn {
  margin-top: 3%;
  font-size: 1.7vw;
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  color: #5db68c;
  border: solid 2px #5db68c;
  border-radius: 10px;
  transition: 0.4s;
  cursor: pointer;
}

.btn:hover {
  background: #5db68c;
  color: white;
}
</style>
