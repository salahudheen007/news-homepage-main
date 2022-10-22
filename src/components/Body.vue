<template>
    <main class="container p-0">
        <div class="row">
            <div class="col-lg-8"><MainContent/></div>
            <div class="col-lg-4"><SideContent/></div>
        </div>
        
    </main>
</template>

<script setup>
import MainContent from '../components/Main.vue';
import SideContent from '../components/Side.vue'
</script>

<style lang="scss" scoped>

</style>