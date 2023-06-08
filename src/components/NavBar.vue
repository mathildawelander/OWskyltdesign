<template>
    <div class="nav-bar">
        
    <div class="nav_bar_parent">
    <img class="logo_navbar" @click="handleClickToHome" :src="image" />

    <div class="nav_bar_right">

    <dropdownmenu> </dropdownmenu>
    <navbartitles Text_Title="Tillverkningen" :OnClickFunction=handleClickToTillverkning />
    <navbartitles Text_Title="Om mig" :OnClickFunction=handleClickToAbout />
    <buttoncontact></buttoncontact>

    </div>
    </div></div>
</template>


<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
console.log(router)
const handleClickToHome =() => {
    router.push('/');
}
const handleClickToProject =() => {
    router.push('/h');
}
const handleClickToTillverkning =() => {
    router.push('/tillverkning');
}
</script>

  
<script>  
import image from "../assets/logo.png"
import DropDownMenu from "./DropDownMenu.vue"
import NavBarTitles from "./NavBarTitles.vue"
import ButtonContact from "./ButtonContact.vue";

export default {
    name: 'NavBar',
    components: {
        'dropdownmenu': DropDownMenu,
        'navbartitles' : NavBarTitles,
        'buttoncontact': ButtonContact
}
}

</script>

<style>
.nav-bar {
    background-color: #316A85;
    
    height: 6rem;
    position:absolute;
    top: 0;
    width: 100%;
}

.nav_bar_parent{
    display: flex;
    
    flex-direction: row;
    align-content: stretch;
    justify-content: space-between;
    align-items: center;
    margin: 0px 10px 0px 10px;
    height: 100%;
}

.nav-bar-text {
    margin-left: 1rem;
    color: #00897B;
    font-size: 3.5rem;
}

.logo_navbar{
    height: 5rem;
    width: auto;
    border-radius: 100%;
}


.nav_bar_right{
display: flex;
align-items: center;
}

</style>
  