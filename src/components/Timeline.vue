<script setup>
defineProps({
    data: Array,
    title: String
})
</script>

<template>
    <div class="title reveal">{{title}}</div>
    <div class="timeline">
        <div v-for="x in data" class="wrapper-item reveal">
            <div class="section-year">
                <p class="year-end">{{ x.yearEnd }}</p>
                <p class="year-start">{{ x.yearStart }}</p>
            </div>
            <section class="timeline-item">
                <div class="item">
                    <div class="logo" :style="{ backgroundImage: `url(${x.image})`}"></div>
                    <span class="dot-start reveal-pop"></span>
                    <span class="dot-end reveal-pop"></span>
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
     position: relative;
     left: 5em;
    margin: 5em auto;
    text-align: left;
    width: 100%;
    max-width: 550px;
}
.logo {
    width: 4em;
    height: 4em;
    border-radius: 4em;
    position: absolute;
    left: -12em;
    top: 2em;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.2s;
    background-color: var(--background-shade-secondary);
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
    padding-bottom: 2em;
}
.description-item {
    height: 2em;
    overflow: hidden;
    transition: all 0.2s;
}
.wrapper-item:hover .description-item {
    height: 6em;
}
.wrapper-item:hover .logo {
    top: 4em;
}
.timeline .wrapper-item .section-year {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
}
.year-start, .year-end {
    padding: 15px;
    font-weight: 800;
    font-size: 18px;
}
.timeline .dot-start {
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    left: -10px;
    top: 21px;
    outline: 2px solid color-mix(in srgb, var(--primary), var(--background-lighter-primary) 80%);
    background: color-mix(in srgb, var(--primary), var(--background-lighter-primary) 20%);
}
.timeline .dot-end {
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    left: -10px;
    bottom: 21px;
    outline: 2px solid color-mix(in srgb, var(--primary), var(--background-lighter-primary) 80%);
    background: color-mix(in srgb, var(--primary), var(--background-lighter-primary) 20%);
}
.timeline-item {
    border-left: 5px solid color-mix(in srgb, var(--primary), var(--background-lighter-primary) 80%);
    padding: 20px 0 20px 25px;
    position: relative;
}

@media screen and (max-width: 700px) {
    .description-item {
        display: none;
    }
    .timeline {
        left: 0;
    }
    .logo {
        display: none;
    }
}

</style>