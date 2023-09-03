<script setup>
defineProps({
    image: String,
    text: String,
    link: String,
    icon: String
})
</script>

<template>
  <a class="neobutton-container" :href="link" target="_blank"> 
    <div class="neobutton"> 
      <slot class="inner-slot"></slot>
    </div>
    <div class="text-below">{{text}}</div>
  </a>
</template>

<style scoped>
a.neobutton-container {
  padding: 2.2em;
  margin-bottom: 2em;
  transition: all 0.2s;
  width: 30vmin;
  height: 30vmin;
  background: unset;
  color: unset;
  text-decoration: none;
}
.neobutton-container:hover {
  cursor: pointer;
  transform: scale(1.2);
}
.neobutton {
  border-radius: 50%;
  background: color-mix(in srgb,var(--background-color-transparent),#757575 10%);
}
.neobutton-container .text-below {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 0.5em;
}
.neobutton {
  padding: 2.5em;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
@media screen and (max-width: 700px) {
  .neobutton-container .text-below {
    font-size: 1.2rem;
  }
  .neobutton {
    padding: 1.5em;
  }
  a.neobutton-container {
    padding: 1em;
    width: 15vmax;
    height: 15vmax;
  }
}
</style>