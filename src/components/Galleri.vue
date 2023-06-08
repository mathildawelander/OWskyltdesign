<template>
    <div class="galleri">
        <h1> Galleri </h1>
        <p>Se alla blabla här</p>

        <div class="galleri_child">
        <img class="galleri_img" :src="vera"/> 
        <img class="galleri_img" :src="stall"/>    
        </div>
        </div>
</template>


<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
console.log(router)

</script>

  
<script>  
import vera from "../assets/vera.jpg"

import stall from "../assets/stall.jpg"
export default {
    name: 'galleri',
    components: {
}
}

</script>

<style>


.galleri {    
    background-color: #316A85;
    color: #fff;
    width: 100%;
    margin-top: 2rem;
    
    margin-bottom: 2rem;
    padding-top: 5px;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.galleri h1{
    font-weight: 400;
    margin: 5px 0px 10px 0px;
}

.galleri p{
    margin: 5px 0px 10px 0px;
}

.galleri_child{
    display: flex;
    
    flex-direction: row;
    align-content: stretch;
    justify-content: space-evenly;
    align-items: center;
    margin: 0px 10px 0px 10px;
    height: 100%;
    min-width: 55%;
    max-width: 80%;

}

.galleri_img{
    max-height: 15rem;
}

</style>
  