<template>
<div class="min-h-full w-full bg-pattern bg-fixed bg-center">
  <div class="h-screen w-full flex justify-center items-center">
  <div class="h-1/2 w-5/6 bg-opacity-80 rounded-xl border-2 p-5 border-violet-500 bg-gray-900 flex  items-center justify-center flex-col">
    <div class="h-1/2 flex justify-center items-center">
      <span class="text-white text-3xl">El juego de mesa donde putadas y risas estan aseguradas</span>
    </div>
    <div class=" w-1/2 h-1/2 flex items-center justify-around ">
      <button class="p-5 rounded hover:bg-yellow-500 transition-all duration-500 border-2 text-white border-white">JUGAR AHORA</button>
      <button class="p-5 rounded hover:bg-yellow-500 transition-all duration-500 border-2 text-white border-white">INSTRUCCIONES</button>
    </div>
    </div>
    </div>
</div>
  <div class="h-1/2 w-full bg-gray-900 flex items-center justify-center text-white font-black">
    <div class="w-1/4 h-full flex items-center justify-center flex-col group hover:bg-gray-100 hover:text-gray-900">
      <span class="text-gray-900 text-3xl transition-all duration-500 my-12">Usuarios</span>
        <fa icon="users" class="text-6xl group-hover:text-violet-500 group-hover:text-9xl transition-all duration-300"  /> 
        <span class="text-4xl my-12">21</span>
    </div>
    <div class="w-1/4 h-full flex items-center justify-center flex-col group hover:bg-gray-100 hover:text-gray-900  hover:border-yellow-500">
      <span class="text-gray-900 text-3xl my-12">Mapas</span>
      <fa icon="archway" class="text-6xl group-hover:text-violet-500 group-hover:text-9xl transition-all duration-300" /> 
      <span class="text-4xl my-12">3</span>
    </div>
    <div class="w-1/4 h-full flex items-center justify-center flex-col group hover:bg-gray-100 hover:text-gray-900">
      <span class=" text-3xl text-gray-900 my-12">Recaudo</span>
      <fa icon="piggy-bank" class="text-6xl group-hover:text-violet-500 group-hover:text-9xl transition-all duration-300" />
      <span class="text-4xl my-12">3</span>
    </div>
    <div class="w-1/4 h-full flex items-center justify-center flex-col group hover:bg-gray-100 hover:text-gray-900">
      <span  class="text-gray-900 text-3xl my-12 ">Sponsors</span>
      <fa icon="hand-holding-dollar" class="text-6xl  group-hover:text-violet-500 group-hover:text-9xl transition-all duration-300" /> 
      <span class="text-4xl my-12">3</span>
    </div>
    
  </div>
  <div class="min-h-full w-full bg-wallpaper-ficha2 bg-no-repeat bg-cover bg-fixed bg-center">

  </div>
  <div class="h-1/2 w-full bg-gray-800 flex items-center justify-center ">
    <fa icon="users" class="text-5xl text-violet-500  hover:text-yellow-500 transition-colors duration-700 cursor-pointer" /> 
    <fa icon="archway" class="text-5xl text-violet-500  hover:text-yellow-500 transition-colors duration-700 cursor-pointer" /> 
    <fa icon="piggy-bank" class="text-5xl text-violet-500  hover:text-yellow-500 transition-colors duration-700 cursor-pointer" /> 
    <fa icon="hand-holding-dollar" class="text-5xl text-violet-500  hover:text-yellow-500 transition-colors duration-700 cursor-pointer" /> 
  </div>
  <div class="min-h-full w-full bg-wallpaper-cartoon bg-no-repeat bg-cover bg-fixed bg-center"></div>
</template>

<script>
export default {
  name: 'HomeView',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  src="../assets/tailwind.css">
</style>
