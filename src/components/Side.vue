<template>
    <div class="card mt-3 px-2" id="new">
        <div class="card-body">
            <h1 class="card-title mb-3 mt-3">New</h1>
            <h4 class="card-subtitle my-3">Hydrogen VS Electric Cars</h4>
            <p class="card-text mb-4">Will hydrogen-fueled cars ever catch up to EVs?</p>
            <hr>
            <h4 class="card-subtitle my-3">The Downsides of AI Artistry</h4>
            <p class="card-text mb-4">What are the possible adverse effects of on-demand AI image generation?</p>
            <hr>
            <h4 class="card-subtitle my-3">Is VC Funding Drying Up?</h4>
            <p class="card-text mb-4">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.card {
    background-color: var(--Very-dark-blue);
    border-radius: 0;
    font-family: var(--my-font-family);
}

h1 {
    color: var(--Soft-orange);
    font-weight: 800;
}

.card-subtitle {
    color: white;
    font-weight: 700;
}

p {
    color: var(--Grayish-blue);
}

hr {
    color: var(--Grayish-blue);
    height: 2px;
    background-color: var(--Grayish-blue);
}
h4:hover{
    color: var(--Soft-orange);
    cursor: pointer;
}
</style>