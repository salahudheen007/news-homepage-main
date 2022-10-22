<template>
    <div class="card mt-5" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-4">
                <img :src="item.image" class="img-fluid" alt="...">
            </div>
            <div class="col-8">
                <div class="card-body py-0 pe-0">
                    <h1 class="card-id">{{'0'+item.id}}</h1>
                    <h6 class="card-subtitle py-3">{{item.title}}</h6>
                    <p class="card-text">{{item.text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  item: Object})
</script>

<style scoped>
.card{
    border: none;
    border-radius: 0;
    font-family: var(--my-font-family);
}
h1{
    font-weight: 700;
    font-size: 2rem;
    color: var(--Grayish-blue);
}
h6{
    color: var(--Very-dark-blue) ;
    font-weight: 800;
    font-size: 1.1rem;
}
.card-subtitle:hover{
    color: var(--Soft-red);
    cursor: pointer;
}

</style>