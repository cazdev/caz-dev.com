<script setup>
import experience from '../assets/experience.json'
</script>

<template>
    <div class="timeline">
        <div v-for="x in experience" class="wrapper-item reveal">
            <div class="section-year">
                <p class="year">{{ x.year }}</p>
            </div>
            <section class="timeline-item">
                <div class="item">
                    <span class="dot"></span>
                    <h3 class="date-item">{{ x.title }}</h3>
                    <h4 class="title-item">{{ x.subtitle }}</h4>
                    <p class="description-item">
                        {{ x.description }}
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>
.timeline {
    margin: 5em auto;
}
.timeline-item .title-item {
    margin: 0;
    padding: 5px 0;
    font-size: 15px;
    font-weight: 600;
}
.timeline-item .date-item {
    margin: 0;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2px;
}
.timeline .wrapper-item {
    display: grid;
    grid-template-columns: 100px 1fr;
    margin-bottom: 2em;
}
.timeline .wrapper-item .section-year .year {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding: 15px;
    font-weight: 800;
    font-size: 18px;
}
.timeline .dot {
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    left: -10px;
    top: 24px;
    outline: 2px solid var(--background-lighter-primary);
    background: color-mix(in srgb, var(--primary), var(--background-lighter-primary) 20%);
}
.timeline-item {
    border-left: 5px solid var(--background-lighter-primary);
    padding: 20px 0 20px 15px;
    position: relative;
}
.timeline {
    text-align: left;
    width: 100%;
    max-width: 600px;
}
</style>