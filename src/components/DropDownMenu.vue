<template>
    <nav @mouseenter="active = true" @mouseleave="active = false">
    <div :class="['drop-down-menu-wrapper', {'drop-down-menu-wrapper-active': active}]" >
    
    <div class="title_div">    Projekt
        <font-awesome-icon class="nav-bar-icon" icon="fa-solid fa-chevron-down"/>

    </div>

    <transition name="slide">
        <div class="drop-down-menu-options" v-if="active">
        <router-link class="drop-down-menu-option" to="/batskyltar">
            <span v-on:click="active = false">Båtskyltar</span>
            </router-link>
        <div class="line_wrapper"><div class="line"> </div> </div>
            <router-link class="drop-down-menu-option" to="/vagskyltar">
            <span v-on:click="active = false">Vägskyltar</span>
        </router-link> 
        <div class="line_wrapper"><div class="line"> </div> </div>
        <router-link class="drop-down-menu-option" to="/hobby">
            <span v-on:click="active = false">Hobby projekt</span>
        </router-link>
    </div>
</transition>
    </div>
    </nav>
    </template>
    
    <style>
    .nav-bar-icon {
    font-size: 1.5rem;

    margin: 0.3rem 0.5rem 0.5rem 0.5rem
}


    .drop-down-menu-wrapper {
    color: #f1f1f1;
    position:relative;
    height: 3.1rem;
    background-color: #316A85;
    }
    
    .title_div{
        width: 9rem;
        height: 100%;
        font-size: 1.1rem;
    padding: 0em 1em 0em 1em;
        display:flex;
    justify-content: center;
    align-items: center;
    
    transition:  background-color 0.4s;
    }
    

    .title_div:hover{

        background-color: #1D5672;
    }

    .drop-down-menu-options {
        position:absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: #316A85;
        width: 100%;
        height: 9rem;
        right: 0;
        top: 3rem;
        border-radius: 1px;
        overflow: hidden;
        transform-origin: top;
        transition: transform .5s ease-in-out;
    }

    .slide-enter, 
    .slide-leave-to{
  transform: scaleY(0);
}

.slide-enter-active {
  animation: slide-in .5s ease-out forwards;
}

@keyframes slide-in {
  from { 
    transform: translateY(-20px);   
}
to {
  transform: translateY(0);
}
}

    
    .drop-down-menu-option {
        height: 100%;
        display: flex;
        align-items: center;
        color: white;
        text-decoration: none;
        font-weight: 300;
        padding-left: 0.7rem;
    }
    
    
    .drop-down-menu-option:hover {
        background-color: #1D5672;
    }

    .line_wrapper{
        width: 100%;
        display: flex;
    justify-content: center;
    }
    .line{
        border-top: 1px solid #f1f1f1;
        width: 90%;
    }
    </style>
      
      
    <script>  
    
    export default {
        name: 'DropDownMenu',
        data() {
        return { active: false } },
       
    }
    </script>