<script setup>
import { ref, onMounted } from 'vue'
import { company, role, name, email, resume } from '@/constants'
import contact from '@/assets/contact.png'
import portfolio from '@/assets/portfolio.png'
import profile from '@/assets/profile.png'
import resumeIcon from '@/assets/resume.png'
import NeoButton from '@/components/NeoButton.vue'
import SocialIcons from './components/SocialIcons.vue'
import FooterInfo from './components/FooterInfo.vue'
import Summary from './components/ProfileSummary.vue'
import CircleBackground from './components/CircleBackground.vue'
import MountainBackground from './components/MountainBackground.vue'
import SuitcaseIcon from './components/icons/SuitcaseIcon.vue'
import ProfileIcon from './components/icons/ProfileIcon.vue'
import ResumeIcon from './components/icons/ResumeIcon.vue'
import ContactIcon from './components/icons/ContactIcon.vue'
import PaletteIcon from './components/icons/PaletteIcon.vue'
import DarkLightIcon from './components/icons/DarkLightIcon.vue'
import Timeline from './components/Timeline.vue'
import Projects from './components/Projects.vue'

import experience from './assets/experience.json'
import qualifications from './assets/qualifications.json'

const neo1 = ref(null)
const neo2 = ref(null)
const neo3 = ref(null)
const neo4 = ref(null)
const neoButtons = [neo1, neo2, neo3, neo4]

const reveal = () => {
  var reveals = document.querySelectorAll(".reveal, .reveal-pop");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

const profileElement = ref(null)
const projectsElement = ref(null)
const scrollToProfile = () => profileElement.value.scrollIntoView({ behavior: "smooth" });
const scrollToExperience = () => projectsElement.value.scrollIntoView({ behavior: "smooth" });

onMounted(() => {
  window.addEventListener("scroll", reveal);
  // To check the scroll position on page load
  reveal();
  setTimeout(() => {
  neoButtons.forEach((el, i) => {
    setTimeout(() => {
      el.value.$el.style.transform = 'scale(1.2)';
      setTimeout(() => (el.value.$el.style.transform = ''), 150);
    }, 150*i);
  });
}, 200)
})
</script>

<template>

<div class="top-icon-menu">
  <PaletteIcon />
  <DarkLightIcon />
</div>
  
  <CircleBackground v-if="true" />
  <MountainBackground v-if="true"/>

  <header class="reveal">
    <div class="name">
      {{ name }}
    </div>
    <div class="tagline">
      {{ role }} at <span class="underline">{{ company }}</span>
    </div>
  </header>

  <SocialIcons />

  <div class="neobuttons-container">
    <NeoButton ref="neo1" :image="profile" text="About Me" @click="scrollToProfile">
      <ProfileIcon />
    </NeoButton>
    <NeoButton ref="neo2" :image="portfolio" text="Projects" @click="scrollToExperience">
      <SuitcaseIcon />
    </NeoButton>
    <NeoButton ref="neo3" :image="resumeIcon" text="Resume" :link="resume">
      <ResumeIcon />
    </NeoButton>
    <NeoButton ref="neo4" :image="contact" text="Contact" :link="`mailto: ${email}?subject=Contact%20from%20caz-dev.com`">
      <ContactIcon />
    </NeoButton>
  </div>

  <FooterInfo />

  <div class="profile-container" ref="profileElement">
    <Summary />
    <div>
      <Timeline title="Experience" :data="experience" />
      <Timeline title="Qualifications" :data="qualifications" />
    </div>
  </div>

  <div class="projects-container" ref="projectsElement">
    <div class="title reveal">Projects</div>
    <Projects />
  </div>


</template>

<style scoped>
.top-icon-menu {
  display: flex;
  justify-content: flex-end;
}
.top-icon-menu svg {
  margin: 0 0.75em;
}
.profile-container {
  margin: 0 auto;
  max-width: 800px;
  padding: 0 1rem;
}
header {
  text-align: center;
}
.name {
  font-size: 5rem;
  font-weight: bold;
}
.tagline {
  font-size: 2.5rem;
}
.neobuttons-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
@media screen and (max-width: 700px) {
  .name {
    font-size: 3.3rem;
    margin-top: 1em;
  }
  .tagline {
    font-size: 1.7rem;
  }
}
</style>
