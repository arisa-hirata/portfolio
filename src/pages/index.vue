<template>
  <div>
    <Top/>

    <Header/>
    <!-- <Project/> -->
    <About/>
    <Project/>
    <Contact/>
    <nuxt/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import About from "@/components/About";
import Top from "@/components/Top";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

export default {
  components: {
    Header,
    About,
    Top,
    Project,
    Contact
  }
};
</script>

<style>
</style>
