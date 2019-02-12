<template>
  <div>
    <div id="all">
      <div class="view view-first">
        <img src="~assets/img/Filter_Pollways.jpg">
        <div class="mask">
          <h2>Pollways</h2>
          <p>A cool description of some sort between these tags. I am so cool and awesomely awesome.</p>
          <a href="#" class="info">Read More</a>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
body {
  background: radial-gradient(
      ellipse at bottom left,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    linear-gradient(to bottom, rgba(57, 173, 219, 0.25), rgba(42, 60, 87, 0.4)),
    linear-gradient(135deg, #670d10, #092756);
}

h1 {
  color: white;
  padding-left: 10px;
}

#hover {
  color: rgba(188, 175, 204, 0.9);
}

h2#testimonials {
  color: #fffae3;
}

div#all {
  width: 100%;
  height: 100%;
}

/* generic css */

.view {
  margin: 10px;
  float: left;
  border: 10px solid #fff;
  overflow: hidden;
  position: relative;
  text-align: center;
  box-shadow: 1px 1px 2px #e6e6e6;
  cursor: default;
}

.view .mask,
.view .content {
  width: 400px;
  height: 270px;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
}

.view img {
  display: block;
  position: relative;
}

.view h2 {
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  position: relative;
  font-size: 17px;
  font-family: Raleway, serif;
  padding: 10px;
  /*background: rgba(0, 0, 0, 0.8);*/
  margin: 20px 0 0 0;
}

.view p {
  font-family: Merriweather, serif;
  font-style: italic;
  font-size: 14px;
  position: relative;
  color: #fff;
  padding: 0px 20px 0px;
  text-align: center;
}

.view a.info {
  display: inline-block;
  text-decoration: none;
  padding: 7px 14px;
  background: #000;
  color: #fff;
  font-family: Raleway, serif;
  text-transform: uppercase;
  box-shadow: 0 0 1px #000;
}

.view a.info:hover {
  box-shadow: 0 0 5px #000;
}

/*1*/

.view-first img {
  /*1*/
  transition: all 0.2s linear;
  width: 400px;
  height: 270px;
}

.view-first .mask {
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.4s ease-in-out;
}

.view-first h2 {
  transform: translateY(-100px);
  opacity: 0;
  font-family: Raleway, serif;
  transition: all 0.2s ease-in-out;
}

.view-first p {
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.2s linear;
}

.view-first a.info {
  opacity: 0;
  transition: all 0.2s ease-in-out;
}

/* */

.view-first:hover img {
  transform: scale(1.1);
}

.view-first:hover .mask {
  opacity: 1;
}

.view-first:hover h2,
.view-first:hover p,
.view-first:hover a.info {
  opacity: 1;
  transform: translateY(0px);
}

.view-first:hover p {
  transition-delay: 0.1s;
}

.view-first:hover a.info {
  transition-delay: 0.2s;
}
</style>
