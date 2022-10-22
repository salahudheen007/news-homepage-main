<template>
    <header>
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid px-0">
                <a class="navbar-brand " href="#">
                    <img :src="logo" alt="Logo" width="40" height="30">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <img :src="menu" alt="Menu" width="45" height="20">
                </button>
                <div class="offcanvas offcanvas-end py-3 ps-3" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                        <button type="button" class="btn" data-bs-dismiss="offcanvas" aria-label="Close">
                            <img :src="menuClose" alt="Close Menu" >
                        </button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 ">
                            <li class="nav-item px-3">
                                <a class="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="#New">New</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="#">Popular</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="#">Trending</a>
                            </li>
                            <li class="nav-item ps-3">
                                <a class="nav-link" href="#">Categories</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import logo from '../assets/images/logo.svg'
import menu from '../assets/images/icon-menu.svg'
import menuClose from '../assets/images/icon-menu-close.svg'
</script>

<style scoped>
.navbar-toggler{
    border:  none ;
}
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
    outline: none;
    box-shadow: none;
}
.nav-link{
    color: var(--Dark-grayish-blue);
    font-family: var(--my-font-family);
    font-weight: 700;
}.nav-link:hover{
    color:var(--Soft-orange);
}
</style>