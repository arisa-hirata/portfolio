<template>
  <header id="top-head" class="header">
    <div class="inner">
      <div id="mobile-head">
        <nuxt-link to="/">
          <img src="/img/logo.png" class="logo">
        </nuxt-link>
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

    <!-- Hamburger -->
    <div class="burger_menu">
      <a href="#" class="burger_logo">
        <img src="/img/logo.png" style="width:40px;">
      </a>
      <input id="burger" type="checkbox">
      
      <label for="burger">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <nav>
        <ul>
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
  z-index: 900;
}
</style>



<style scoped>
a {
  text-decoration: none;
}

.inner {
  display: block;
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
  width: 70px;
  height: 70px;
  position: absolute;
  top: 7px;
  left: 80px;
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

.burger_menu {
  display: none;
}

@media screen and (max-width: 834px) and (orientation: portrait) {
  .header {
    height: 50px;
  }

  .burger_menu {
    display: block;
  }

  .inner {
    display: none;
  }
}

@media screen and (max-width: 480px) and (orientation: portrait) {
  #global-nav ul li a {
    font-size: 0.5em;
  }
}
</style>
