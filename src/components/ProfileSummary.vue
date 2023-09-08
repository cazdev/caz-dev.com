<script setup>
import { name, location, company, role } from '@/constants'
</script>

<template>
    <div class="profile-summary reveal">
        <div class="title">Hi, I am {{ name }} <span class="wave">👋</span></div>
        <div class="description">I'm a <span class="bold">{{ role }}</span> with 5 years of experience located in <span class="bold">{{location}}</span> and currently employed at <span class="bold">{{company}}</span>. I'm passionate about creating scalable, clean code and enjoy collaborating with diverse teams.</div>
    </div>
  </template>

<style scoped>
.profile-summary {
    font-size: 1.5em;
    text-align: center;
    margin: 5em 0;
}
.profile-summary .title {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 0.5em;
}
.profile-summary .description {
    font-size: 1.2em;
    margin-bottom: 1em;
}
.wave {
  animation-name: wave-animation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
}
</style>