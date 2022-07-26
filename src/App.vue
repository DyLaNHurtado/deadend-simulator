<template>
<div class=" bg-zinc-900 h-screen" >
  <header class="py-5 text-3xl flex items-center justify-between px-5 text-zinc-200 absolute w-full transition-all duration-500 bg-gray-900">
    <fa icon="bars" class=""/>
    <span>DeadEnd Simulator</span>
    <div class="flex flex-row items-center justify-between ">
      <button class="px-5 py-5 bg-zinc-500 mx-2 rounded hover:bg-violet-500 hover:text-black transition-all duration-500  border-2 border-transparent hover:border-white">Sign up</button>
      <button class="px-5 py-5 text-black bg-zinc-400 mx-2 rounded  hover:bg-yellow-500 hover:text-white transition-all duration-500 border-2 border-transparent hover:border-white">Sign in</button>
    </div>
  </header>
  <div class=" w-full h-full bg-pattern">
    <div class="fixed w-full h-full bg-opacity-80 bg-black z-50">
      <div class=" h-full w-full md:w-1/3 bg-gray-900 p-5 shadow-lg shadow-gray-900">
        <div class="h-1/6 w-full">
        <fa icon="xmark" class=" text-3xl text-white"/>

        </div>
        <div class="h-5/6 w-full">
          <div class="h-3/4 w-full">
            <div class="w-full flex flex-row md:flex-col lg:flex-col xl:flex-col 2xl:flex-row">
              <div class=" border-2  border-violet-500 shadow-md shadow-violet-500 hover:shadow-yellow-500 flex flex-col hover:border-yellow-500 items-center justify-center group transition-all duration-500">
          <fa icon="house-chimney" class=" text-3xl  text-violet-500  group-hover:text-yellow-500 transition-colors duration-700"/>
          <div class="flex items-center justify-center text-violet-500 group-hover:text-yellow-500 transition-colors duration-700">
            <span>Home</span>
          </div>
          </div>
          <div class=" border-2 p-24 w-1/2 border-violet-500 flex flex-col hover:border-yellow-500 items-center justify-center group transition-colors duration-500">
          <fa icon="book" class=" text-3xl  text-violet-500  group-hover:text-yellow-500 transition-colors duration-700"/>
          <div class="flex items-center justify-center text-violet-500 group-hover:text-yellow-500 transition-colors duration-700">
            <span>Instrucciones</span>
          </div>
          </div>
            </div>
          
          <div class=" border-2  border-violet-500 flex flex-col hover:border-yellow-500 items-center justify-center group transition-colors duration-500">
          <fa icon="play" class=" text-3xl  text-violet-500 group-hover:text-yellow-500 transition-colors duration-700"/>
          <div class="flex items-center justify-center text-violet-500 group-hover:text-yellow-500 transition-colors duration-700">
            <span>Play</span>
          </div>
          </div>
          <div class=" border-2 border-violet-500 flex flex-col hover:border-yellow-500 items-center justify-center group transition-colors duration-500">
          <fa icon="id-card" class=" text-3xl  text-violet-500 group-hover:text-yellow-500 transition-colors duration-700"/>
          <div class="flex items-center justify-center text-violet-500 group-hover:text-yellow-500 transition-colors duration-700">
            <span>Perfil</span>
          </div>
          </div>
          </div>
          <div class="h-1/4 w-full">
            <fa icon="play" class=" text-3xl "/>

          <fa icon="id-card" class=" text-3xl "/>
          </div>
          
        </div>
        
      </div>
    </div>
    <ProfileView/>
  </div>
  <a href="https://github.com/DyLaNHurtado" target="_blank">
  <footer class="text-center bg-zinc-700 text-zinc-200 fixed bottom-0 w-full text-lg hover:text-xl py-2 hover:py-5 hover:bg-gray-900  transition-all duration-500">
    <span>Made with 💛 by DyLaNHurtado </span>
  </footer></a>
</div>
</template>

<script>
import ProfileView from './components/ProfileView.vue'
export default {
  name: 'App',
  components: {
    ProfileView,
}
}
</script>

<style src="./assets/tailwind.css">

</style>
