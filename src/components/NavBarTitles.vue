<template>
    <div class="Wrapper_Nav_Bar" @click="OnClickFunction">
        <p> {{Text_Title}} </p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        
    Text_Title: String,
      OnClickFunction: {
        type: Function,
        required: true
      }
    }
  };
  </script>
  
  <style>
.Wrapper_Nav_Bar{
    color: #f1f1f1;
    height: 3.1rem;
    width: 7rem;
    border-radius: 1px;
    border:None;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0em 1em 0em 1em;
    margin: 0em 1em 0em 1em;
    transition:  background-color 0.7s;
}

.Wrapper_Nav_Bar:hover{
    background-color: #1D5672;
}

</style>