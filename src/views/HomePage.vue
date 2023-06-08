
<template> 
<div class="home">
<img class="logo_home_page" :src="image" />
<div class ="hp_title_text"> 
<p> 
  O.W Skylt & Design är ett blabla bla
</p>
<div class="hp_title_text_child"> 
  <p> Kolla in mina tidigare </p>
  <RouterLink to="/projekt"> 
  <p class="link">&nbsp projekt </p> 
</RouterLink> 
  <p>&nbsp eller </p>
  <RouterLink to="/kontakt"> 
  <p class="link">&nbsp kontakta mig </p>
</RouterLink>
</div> </div>
</div>

<galleri></galleri>

</template>

<script setup> 
import image from "../assets/logo.png";

</script>


<script>
import Galleri from "../components/Galleri.vue";
export default {
name: 'HomePage',
components: {
  'galleri': Galleri,
  },
 
};

</script>

<style>

.home{
  margin-top: 2rem;
    width:100%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden; 
}

.logo_home_page{
  width: 20%;
  border-radius: 100%;
  
  animation: flyInFromLeft 1s ease-in-out;
}

@keyframes flyInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.hp_title_text{
  width: 70%;
  font-size: 2rem;
animation: flyInFromRight 1s ease-in-out;
}

.hp_title_text_child
{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
}

@keyframes flyInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.home p{
    margin: 0.5rem -0.25em 0.5rem 0rem
}
.link{
  color: #8F530C;
  transition:  color 0.4s, font-size 0.4s;
  text-decoration: none;
}

a:-webkit-any-link{
  text-decoration: none;
}

.link:hover{
  font-size: 2.1rem;
  color: #70420a;
}

</style>


