<template>
    <div class="container mt-4">
        <div class="row">
            <picture>
                <source media="(max-width:400px)" :srcset="MobileImage">
                <source media="(min-width:401px)" :srcset="DesktopImage">
                <img :src="DesktopImage" alt="webImage" style='height: 100%; width: 100%; object-fit: contain;'>
            </picture>
        </div>
        <div class="row ">
            <div class="col-lg pt-4">
                <h1>The Bright Future of Web 3.0?</h1>
            </div>
            <div class="col-lg pt-4">
                <p>We dive into the next evolution of the web that claims to put the power of the platforms back into
                    the hands of the people. But is it really fulfilling its promise? </p>
                <button class="btn px-4 py-2 mt-3">READ MORE</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import MobileImage from '../assets/images/image-web-3-mobile.jpg'
import DesktopImage from '../assets/images/image-web-3-desktop.jpg'
</script>

<style  scoped>
h1 {
    font-weight: 800;
    font-size: 2.5rem;
}
p{
    color: var(--Dark-grayish-blue);
    font-weight: 500;
}
.btn{
    background-color: var(--Soft-red);
    color: var(--Off-white);
    letter-spacing: 4px;
    font-weight: 500;
    border-radius: 0;
}
.btn:hover{
    background-color: var(--Very-dark-blue);
    color: var(--Off-white);
}

@media only screen and (min-width: 401px) {
  h1 {
    padding-right: 3rem;
    font-size: 2.8rem;
  }
}
</style>