<template>
    <div class="device" @click="show()">
      <div class="Name">{{ name }}</div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, Prop } from 'vue';
  
  const props = defineProps({
  name: String,
});

  
  function show(){
    alert(props.name)
  }
  </script>
  
  <style scoped lang="scss">
  .device {
    width: 170px;
    height: 190px;
    //border: 1px solid red;
    margin-top: 5px;
    margin-left: 5px;
    border-radius: 10px;
    position: relative;
    z-index: 2;
  }
  
  .Name {
    margin-left: 30px;
    margin-top: 15px;
    font-size: 20px;
    position: absolute;
    z-index: 3;
    color: black;
  }
  </style>
  