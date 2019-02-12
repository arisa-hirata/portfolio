<template>
  <header id="top-head" class="header">
    <div class="inner">
      <div id="mobile-head">
        <a href>
          <img src class="logo">
        </a>
        <div id="nav-toggle">
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <nav id="global-nav">
        <ul class="navigation_bar">
          <li>
            <nuxt-link to="/#home">&nbsp;&nbsp;Home&nbsp;&nbsp;</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/#about">&nbsp;&nbsp;About&nbsp;&nbsp;</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/#project">&nbsp;&nbsp;Projects&nbsp;&nbsp;</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/#contact">&nbsp;&nbsp;Contact&nbsp;&nbsp;</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>


<style>
header {
  z-index: 999;
}
</style>



<style scoped>
a {
  text-decoration: none;
}

.header {
  height: 80px;
  width: 100%;
  background-color: #575754;
  position: fixed;
  top: 0;
  left: 0;
}

.logo {
  width: 15%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
}

.navigation_bar {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.navigation_bar li {
  float: left;
}

.navigation_bar li a {
  display: inline-block;
  text-align: center;
  padding: 35px 15px;
  text-decoration: none;
  font-size: 1em;
  color: white;
  font-family: "Oxygen", sans-serif;
  font-weight: 100;
}

#global-nav ul {
  position: absolute;
  right: 5%;
  top: -5px;
}

#global-nav ul li :after {
  position: relative;
  content: "";
  display: block;
  width: 100%;
  height: 7px;
  bottom: -50px;
  -webkit-transition: all 0.3s ease;
}
#global-nav ul li :hover:after {
  background: #fbf7c6;
  bottom: -24px;
}
#global-nav ul li :hover {
  color: #5db68c;
}

@media screen and (max-width: 480px) and (orientation: portrait) {
  #global-nav ul li a {
    font-size: 0.5em;
  }
}
</style>
