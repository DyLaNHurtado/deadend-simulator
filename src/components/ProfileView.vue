<template>
<div class="flex flex-col items-start pt-28 justify-center px-10 h-5/6 ">
  <div class="flex flex-col items-center justify-center h-full w-full">
    <div class="w-full h-full flex flex-col items-center justify-start">
      <img src="../assets/logo.png" class="rounded-lg border-4 border-violet-500 h-64 w-64 bg-gray-900 object-center" alt=""/> 
      <span class="text-yellow-500 font-bold text-5xl text-center w-full my-8">User123</span>
      <ScrollArrow class="absolute bottom-44"/>
      <div class="w-full flex flex-row text-center items-center justify-evenly p-10">
      <div class="flex flex-col items-center justify-center">
        <span class="border-2 w-full  border-yellow-500 rounded-t-3xl text-gray-200 bg-gray-900 p-4 text-xl font-bold">Partidas jugadas:</span>
        <div class="w-full h-full bg-gray-300 rounded-b-full border-yellow-500 border-t-0 border-4 p-4 text-2xl font-semibold">2</div>
      </div>
      <div class="flex flex-col items-center justify-center  mx-2">
        <span class="border-2 w-full  border-yellow-500 rounded-t-3xl text-gray-200 bg-gray-900 p-4 text-xl font-bold">Partidas ganadas:</span>
        <div class="w-full h-full bg-gray-300 rounded-b-full border-yellow-500 border-t-0 border-4 p-4 text-2xl font-semibold">1</div>
      </div>
      </div>
    </div>
  </div>
</div>
<div class="h-full">
  <div class="w-full h-full flex flex-col text-center items-center justify-start border-white border-t-4 bg-gradient-to-l from-violet-500 to-yellow-300">
    <span class="text-violet-500 font-bold text-4xl text-center w-1/2 my-3 border-4 border-violet-500 p-4 bg-gray-900 rounded-3xl z-10 ">Logros</span>
    <div class="h-full w-full lg:w-5/6 bg-gray-600 -translate-y-14 border-4 rounded-3xl border-violet-500 pt-20">
      <div class="grid grid-cols-3 gap-6 h-5/6 overflow-y-scroll overflow-x-hidden">
        <span>ds</span>
        <span>ds</span>
        <span>ds</span>
        <span>ds</span>
        <span>ds</span>
        <span>ds</span>
        <span>ds</span>
        <span>ds</span>
        <span>ds</span>
        <span>ds</span>
        <span>ds</span>
        <span>ds</span>
        <span>ds</span>
      </div>
      <div class="flex flex-col items-center justify-center h-1/6 bg-gray-900 border-t-2 border-t-yellow-500  pt-2 rounded-b-3xl text-gray-200 w-full bg-opacity-80">
        <span>Progreso:</span>
        <div class="w-full h-full flex flex-row">
          <span class="w-1/2 font-semibold text-2xl text-yellow-500">12/48</span>
                  <button class="w-1/3 h-1/2 rounded-full mt-3 text-black bg-zinc-400  hover:bg-yellow-500 hover:text-white transition-all duration-500 border-2 border-transparent hover:border-white ">Ver todos</button>
          <span class="w-1/2 font-semibold text-2xl text-yellow-500">37%</span>
        </div>


      </div>
    </div>
  </div>
    </div>

</template>

<script>
import ScrollArrow from './ScrollArrow.vue';
export default {
    name: "ProfileView",
    props: {},
    components: { ScrollArrow }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  src="../assets/tailwind.css">
</style>
