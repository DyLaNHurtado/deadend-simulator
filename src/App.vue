<template>
<div class=" bg-zinc-900 h-screen" >
  <header class="py-5 text-3xl flex items-center justify-between px-5 text-zinc-200 absolute w-full transition-all duration-500 bg-gray-900">
    <fa icon="bars" class=""/>
    <span>DeadEnd Simulator</span>
  </header>
  <div class=" w-full h-full bg-pattern">
    <div class="fixed w-full h-full bg-opacity-80 bg-black z-50">
      <div class=" h-full w-full lg:w-1/3 bg-gray-900  shadow-lg shadow-gray-900 border-violet-500 border-r-2">
        
        <div class="h-full w-full">
            <fa icon="xmark" class="  text-5xl text-white  m-10 hover:text-yellow-500 transition-colors duration-700"/>
          
          <div class="h-3/4 w-full flex flex-col items-center justify-center p-5">
            <div class="w-full flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-row justify-center items-center">
              <div class=" border-2 w-1/2 p-10 m-8 border-violet-500  flex flex-col hover:border-yellow-500 items-center justify-center group transition-colors duration-500  cursor-pointer active:bg-gray-700 active:duration-100">
          <fa icon="house-chimney" class=" text-3xl  text-violet-500  group-hover:text-yellow-500 transition-colors duration-700"/>
          <div class="flex items-center justify-center text-violet-500 group-hover:text-yellow-500 transition-colors duration-700">
            <span>Home</span>
          </div>
          </div>
          <div class="border-2 w-1/2 m-8 p-10 border-violet-500 flex flex-col hover:border-yellow-500 items-center justify-center group transition-colors duration-500 cursor-pointer active:bg-gray-700 active:duration-100">
          <fa icon="book" class=" text-3xl  text-violet-500  group-hover:text-yellow-500 transition-colors duration-700"/>
          <div class="flex items-center justify-center text-violet-500 group-hover:text-yellow-500 transition-colors duration-700">
            <span>Instrucciones</span>
          </div>
          </div>
            </div>
          
          <div class=" border-2  w-1/2 m-8 p-10 border-violet-500 flex flex-col hover:border-yellow-500 items-center justify-center group transition-colors duration-500 cursor-pointer active:bg-gray-700 active:duration-100">
          <fa icon="play" class=" text-3xl  text-violet-500 group-hover:text-yellow-500 transition-colors duration-700"/>
          <div class="flex items-center justify-center text-violet-500 group-hover:text-yellow-500 transition-colors duration-700">
            <span>Play</span>
          </div>
          </div>
          <div class=" border-2 w-1/2 m-8 p-10 border-violet-500 flex flex-col hover:border-yellow-500 items-center justify-center group transition-colors duration-500 cursor-pointer active:bg-gray-700 active:duration-100">
          <fa icon="id-card" class=" text-3xl  text-violet-500 group-hover:text-yellow-500 transition-colors duration-700"/>
          <div class="flex items-center justify-center text-violet-500 group-hover:text-yellow-500 transition-colors duration-700">
            <span>Perfil</span>
          </div>
          </div>
          </div>
           <div class="h-1/4 w-full  ">
            <div class="flex flex-col gap-3 items-center justify-center h-2/4 text-gray-200 text-2xl ">
              <span class="font-light text-violet-500">asd,</span> <span class="font-semibold text-yellow-500">user123</span>
            </div>
            
          </div>
          <div class="h-1/4 w-full  ">
            <div class="flex flex-col gap-3 items-center justify-center h-2/4 text-gray-200 text-2xl ">
              <span class="font-light text-violet-500">Welcome back,</span> <span class="font-semibold text-yellow-500">user123</span>
            </div>
            
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
