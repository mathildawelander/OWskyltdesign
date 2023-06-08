<template>
    <div class="footer">
        
        <div class="line_wrapper"><div class="line" id="line_footer"> </div> </div>
        <div class="footer_parent"> 
            
            <div class="hover_facebook"> 
            <a href="https://www.facebook.com/profile.php?id=100089324841047" target="_blank">
            <img class="icon_footer" :src="fb" /></a>
            </div>

            
            <div class="hover_mail"> 
            <a href="mailto:o.w.skyltdesign@gmail.com">
                <img class="icon_footer" :src="envelope" /></a>
            </div>

        </div>
        </div>
</template>


<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
console.log(router)

</script>

  
<script>  
import fb from "../assets/facebook.svg"

import envelope from "../assets/envelope-regular.svg"
export default {
    name: 'Footer',
    components: {
}
}

</script>

<style>

#line_footer{
    
    border-top: 1px solid #895D51;
}
.footer {    
    height: 6rem;
    bottom: 0;
    width: 100%;
    margin-top: 2rem;
}

.footer_parent{
    display: flex;
    
    flex-direction: row;
    align-content: stretch;
    justify-content: center;
    align-items: center;
    margin: 0px 10px 0px 10px;
    height: 100%;
}

.icon_footer{
    height: 3rem;
    fill: #000;
    margin: 0px 10px 0px 10px;
  transition:  height 0.4s;
}


.hover_facebook .icon_footer:hover{
    height: 4rem;
}

.hover_mail .icon_footer:hover{
    height: 4rem;
}

</style>
  