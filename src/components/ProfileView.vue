<template>
  <div class="flex flex-col lg:flex-row items-start pt-40 justify-center bg-slate-700 bg-opacity-80 h-full border-2 border-y-0 border-violet-500 mx-20">
    <div class="rounded-lg border-4 border-white h-96 w-96 bg-pink-500 object-center object-contain">
      <img src="../assets/logo.png" class="rounded-lg" alt=""/>
    </div>
    <div class="w-1/2 grid grid-cols-2 grid-rows-2 p-5 text-center gap-5">
      <span class="text-yellow-500 font-bold text-5xl">User123</span>
      <span>Stats for nerds:</span>
      <span>Partidas ganadas</span>
      <span>Partidas jugadas</span>
      <span>Logros:</span>
      <span>Ver todos</span>
      <span>Completados(23% 18/43)</span>
      <span>User123</span>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  src="../assets/tailwind.css">
</style>
