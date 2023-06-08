<template>
    <div class="button_div">
   <Button class="close"> Kontakta mig</Button>
</div>
  </template>
  
  <script>
  
export default {
  name: 'ButtonContact',
  methods: {
        onClick() {
          this.$emit('customClick');
        }
  }
}


  </script>

  <style>
.button_wrapper {
        display: flex;
        position:relative;
        border-radius: 4px;
        border: 4px solid #FFD4A3;
        color: #FFD4A3;
        font-size: 1.3rem;
        height: 3rem;
        width: 10rem;
        justify-content: center;
        align-items: center;

    }
    
    
    .button_wrapper:hover {
        background-color: #1D5672;
        cursor: pointer;
    }


 

@-webkit-keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--hover);
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--hover);
  }
}
.close:hover,
.close:focus {
  box-shadow: inset -5em 0 0 0 var(--hover), inset 5em 0 0 0 var(--hover);
}


.close {
  --color: #FFD4A3;
  --hover: #FFD4A3;
}

button {
  color: var(--color);
  transition: 0.5s;
}
button:hover, button:focus {
  border-color: var(--hover);
  color: #fff;

  height: 3.3rem;
width: 12.3rem;
box-shadow: rgba(17, 12, 46, 0.15) 0px 8px 10px 0px;
}


button {
  background: none;
  border: 2px solid #FFD4A3;
  
  color: #FFD4A3;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
    position:relative;
    border-radius: 4px;
        font-size: 1.4rem;
        height: 3.1rem;
        width: 12rem;

}

.button_div{
    height: 3.5rem;
width: 12.3rem;

justify-content: center;
        align-items: center;
        
  display: flex;
}

</style>


