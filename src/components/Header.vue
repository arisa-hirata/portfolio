<template>
  <header id="top-head" class="header">
    <div class="inner">
      <div id="mobile-head">
        <a href="#" v-scroll-to="'#home'">
          <img src="/img/logo.png" class="logo">
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
            <a href="#" v-scroll-to="'#home'">&nbsp;&nbsp;Home&nbsp;&nbsp;</a>
          </li>
          <li>
            <a href="#" v-scroll-to="'#about'">&nbsp;&nbsp;About&nbsp;&nbsp;</a>
          </li>
          <li>
            <a href="#" v-scroll-to="'#project'">&nbsp;&nbsp;Projects&nbsp;&nbsp;</a>
          </li>
          <li>
            <a href="#" v-scroll-to="'#contact'">&nbsp;&nbsp;Contact&nbsp;&nbsp;</a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Hamburger -->
    <div class="burger_menu">
      <nav role="navigation">
        <a href="#" v-scroll-to="'#home'">
          <img src="/img/logo.png" class="logo">
        </a>
        <div id="menuToggle">
          <input type="checkbox">
          
          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <li>
              <a href="#" v-scroll-to="'#home'">&nbsp;&nbsp;Home&nbsp;&nbsp;</a>
            </li>
            <li>
              <a href="#" v-scroll-to="'#about'">&nbsp;&nbsp;About&nbsp;&nbsp;</a>
            </li>
            <li>
              <a href="#" v-scroll-to="'#project'">&nbsp;&nbsp;Projects&nbsp;&nbsp;</a>
            </li>
            <li>
              <a href="#" v-scroll-to="'#contact'">&nbsp;&nbsp;Contact&nbsp;&nbsp;</a>
            </li>
          </ul>
        </div>
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
  .logo {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 7px;
    left: 50px;
  }
  .navigation_bar li a {
    padding: 20px 15px;
  }
  #global-nav ul li :after {
    height: 3px;
  }
  #global-nav ul li :hover:after {
    background: #fbf7c6;
    bottom: -12px;
  }
}

@media screen and (max-width: 480px) and (orientation: portrait) {
  #global-nav ul li a {
    font-size: 0.5em;
  }
  .burger_menu {
    display: block;
  }

  .inner {
    display: none;
  }

  a {
    text-decoration: none;
    transition: color 0.3s ease;
    color: #575754;
  }

  a:hover {
    color: #5db68c;
  }

  .logo {
    left: 30px;
  }

  #menuToggle {
    display: block;
    position: fixed;
    top: 15px;
    right: 30px;

    z-index: 999;

    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0;
    z-index: 2;

    -webkit-touch-callout: none;
  }

  #menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: #cdcdcd;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  #menu {
    position: absolute;
    width: 100px;
    height: 100vh;
    margin: -50px 0 0 -115px;
    padding: 40px;
    padding-top: 55px;
    border-radius: 3px;

    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;

    transform-origin: 0% 0%;
    transform: translate(150%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  #menu li {
    padding: 10px 0;
    font-size: 1em;
  }

  #menuToggle input:checked ~ ul {
    transform: none;
  }
}
</style>
