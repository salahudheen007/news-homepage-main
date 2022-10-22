<template>
    <div class="row">
        <Item v-for="item in items" :key="item.id" :item="item" class="col-lg-4"/>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
import Item from './Item.vue';
const store=useStore();
const items=computed(()=>store.state.itemList)
</script>

<style  scoped>

</style>