<script setup>
  import projects from '../assets/projects.json'
  const openWindow = (url) => window.open(url)
</script>

<template>
    <div class="container">
        <div class="item reveal" v-for="(p, index) in projects" :id="index" @click="openWindow(p.github)">
            <div class="content">
              <div class="name">{{ p.title }}</div>
              <div class="description">{{ p.description }}</div>
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            </div>
            <div class="image" :style="{ backgroundImage: `url(${p.image})` }" />
        </div>
    </div>
    <div class="github-info-text reveal">See all my projects on <a href="https://github.com/cazdev" target="_blank">Github</a></div>
</template>

<style scoped>
.container {
  column-width: 20em;
  margin: 0 10em;
}
.github-info-text {
  width: 100%;
  text-align: center;
  margin: 3em 0;
  font-size: 1.3em;
}
.github-info-text a {
  color: var(--text-color);
  text-decoration: underline;
}
.name {
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 0.5em;
}
.description {
  font-size: 1.1em;
  font-weight: 500;
  margin-bottom: 1em;
}
svg {
  width: 2em;
  position: absolute;
  bottom: 10%;
  margin: auto;
  left: 0;
  right: 0;
}
.item {
  padding: 2em 1em;
}
.image, .item {
  border-radius: 2em;
  background-size: cover;
  background-position: center;
  display: inline-block;
  height: 24em;
  width: 100%;
  transition: all 0.2s;
  cursor: pointer;
  opacity: 0.9;
}
.content:hover + .image, .image:hover {
  opacity: 0.06;
}
.item .content, .item svg {
  opacity: 0;
  transition: all 0.2s;
}
.item:hover .content, .item:hover svg {
  opacity: 1;
}
.content {
  cursor: pointer;
  position: absolute;
  z-index: 2;
  font-weight: 700;
  text-align: center;
  position: absolute;
  padding: 4em;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
}
.item:nth-child(2n), .item:nth-child(2n) .image {
    height: 30em;
}
.item:nth-child(3n), .item:nth-child(3n) .image {
  height: 28em;
}
.item:nth-child(4n), .item:nth-child(4n) .image {
  height: 26em;
}
@media screen and (max-width: 700px) {
  .container {
    margin: 0;
  }
  .image, .item {
  height: 20em !important;
}
.item {
    padding: 1em 0.5em;
}
}
</style>