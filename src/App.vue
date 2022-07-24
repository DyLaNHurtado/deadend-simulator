<template>
<div class=" bg-zinc-900 h-screen" >
  <header class="py-5 text-3xl flex items-center justify-between px-5 text-zinc-200 absolute w-full transition-all duration-500 bg-gray-900">
    <span>DeadEnd Simulator</span>
    <div class="flex flex-row items-center justify-between ">
      <button class="px-5 py-5 bg-zinc-500 mx-2 rounded hover:bg-red-500 hover:text-black transition-all duration-500  border-2 border-transparent hover:border-white">Sign up</button>
      <button class="px-5 py-5 text-black bg-zinc-400 mx-2 rounded  hover:bg-yellow-500 hover:text-white transition-all duration-500 border-2 border-transparent hover:border-white">Sign in</button>
    </div>
  </header>
  <div class="bg-black w-full h-full">
    <SelectorMode/>
  </div>
  <a href="https://github.com/DyLaNHurtado" target="_blank">
  <footer class="text-center bg-zinc-700 text-zinc-200 absolute bottom-0 w-full text-lg hover:text-xl py-2 hover:py-5 hover:bg-gray-900  transition-all duration-500">
    <span>Made with 💛 by DyLaNHurtado </span>
  </footer></a>
</div>
</template>

<script>
import SelectorMode from './components/SelectorMode.vue'
export default {
  name: 'App',
  components: {
    SelectorMode,
}
}
</script>

<style src="./assets/tailwind.css">

</style>
