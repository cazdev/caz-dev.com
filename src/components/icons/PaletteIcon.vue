<script setup>
  const randomHsl = () => 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
let randomPrimary = randomHsl();
let randomSecondary = randomHsl();
const r = document.querySelector(':root');
r.style.setProperty('--pallet-button-primary', randomPrimary);
r.style.setProperty('--pallet-button-secondary', randomSecondary);
const randomTheme = () => {
  r.style.setProperty('--primary', randomPrimary);
  r.style.setProperty('--secondary', randomSecondary);
  randomPrimary = randomHsl();
  randomSecondary = randomHsl();
  r.style.setProperty('--pallet-button-primary', randomPrimary);
  r.style.setProperty('--pallet-button-secondary', randomSecondary);
}

</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" @click="randomTheme">
        <linearGradient id="gradient-1">
            <stop class="main-stop" offset="0%" />
            <stop class="alt-stop" offset="100%" />
        </linearGradient>
        <path fill="url(#gradient-1)" d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
    </svg>
</template>

<style scoped>
svg {
    height: 1.9em;
    width: 1.9em;
    position: absolute;
    top: 2em;
    right: 6em;
    cursor: pointer;
    transition: all .2s;
}
svg:hover {
    transform: scale(1.2);
}
.main-stop {
  stop-color: var(--pallet-button-primary);
}
.alt-stop {
  stop-color: var(--pallet-button-secondary);
}
@media screen and (max-width: 700px) {
    svg {
        width: 1.8em;
        height: 1.8em;
    }
}
</style>