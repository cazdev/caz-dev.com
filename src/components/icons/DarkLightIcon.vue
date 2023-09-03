<script setup>
import { onMounted } from 'vue'
const toggleDarkMode = () => {
    const r = document.querySelector(':root');
    if (window.localStorage.getItem('dark-mode') === 'true') {
        window.localStorage.setItem('dark-mode', 'false')
        r.style.setProperty('--background-primary', 'var(--background-light-primary)');
        r.style.setProperty('--background-secondary', 'var(--background-light-secondary)');
        r.style.setProperty('--background-shade-primary', 'var(--background-lighter-primary)');
        r.style.setProperty('--background-shade-secondary', 'var(--background-lighter-secondary)');
        r.style.setProperty('--background-color', 'var(--white)');
        r.style.setProperty('--background-color-transparent', 'var(--white-transparent)');
        r.style.setProperty('--color-text', 'var(--text-light)');
    } else {
        window.localStorage.setItem('dark-mode', 'true')
        r.style.setProperty('--background-primary', 'var(--background-dark-primary)');
        r.style.setProperty('--background-secondary', 'var(--background-dark-secondary)');
        r.style.setProperty('--background-shade-primary', 'var(--background-darker-primary)');
        r.style.setProperty('--background-shade-secondary', 'var(--background-darker-secondary)');
        r.style.setProperty('--background-color', 'var(--black)');
        r.style.setProperty('--background-color-transparent', 'var(--black-transparent)');
        r.style.setProperty('--color-text', 'var(--text-dark)');
    }
}
const setDarkMode = () => {
    const r = document.querySelector(':root');
    if (window.localStorage.getItem('dark-mode') === 'false') {
        r.style.setProperty('--background-primary', 'var(--background-light-primary)');
        r.style.setProperty('--background-secondary', 'var(--background-light-secondary)');
        r.style.setProperty('--background-shade-primary', 'var(--background-lighter-primary)');
        r.style.setProperty('--background-shade-secondary', 'var(--background-lighter-secondary)');
        r.style.setProperty('--background-color-transparent', 'var(--white-transparent)');
        r.style.setProperty('--color-text', 'var(--text-light)');
    } else {
        r.style.setProperty('--background-primary', 'var(--background-dark-primary)');
        r.style.setProperty('--background-secondary', 'var(--background-dark-secondary)');
        r.style.setProperty('--background-shade-primary', 'var(--background-darker-primary)');
        r.style.setProperty('--background-shade-secondary', 'var(--background-darker-secondary)');
        r.style.setProperty('--background-color', 'var(--black)');
        r.style.setProperty('--background-color-transparent', 'var(--black-transparent)');
        r.style.setProperty('--color-text', 'var(--text-dark)');
    }
}

onMounted(() => {
    setDarkMode(false);
});
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" @click="toggleDarkMode">
        <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z">
        </path>
    </svg>
</template>

<style scoped>
svg {
    height: 2em;
    width: 2em;
    position: absolute;
    top: 2em;
    right: 2em;
    cursor: pointer;
    transition: all .2s;
    fill: var(--color-text);
}
svg:hover {
    transform: scale(1.2);
}
@media screen and (max-width: 700px) {
    svg {
        width: 1.8em;
        height: 1.8em;
    }
}
</style>