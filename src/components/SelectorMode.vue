<template>
  <div class="flex flex-row bg-pink-500 w-full h-full py-32">
    <div class="w-1/2 bg-green-500 bg-saFuture bg-no-repeat bg-cover rounded-t-full border-8 shadow-inner shadow-gray-900 border-yellow-500 mx-10 ">
    </div>
    <div class="w-full mx-auto bg-blue-500 rounded">
      <div class=" top-1/2 gap-2 justify-center items-center h-full m-5 grid grid-cols-3 grid-rows-3 overflow-y-scroll text-center">
        <div class="bg-cyberpunk bg-cover bg-no-repeat h-full bg-center cursor-pointer transition-all duration-500 rounded-lg group border-4 border-yellow-500">
          <div class="bg-zinc-400 bg-cover h-0 opacity-60 transition-all duration-500 group-hover:h-full flex items-center justify-center">
            <img src="../assets/icons/skull.png" class="opacity-0 group-hover:opacity-100 transition-all duration-500" alt="">
          </div>
        </div>
        <div class="bg-western bg-cover bg-no-repeat h-full bg-center cursor-pointer transition-all duration-500 rounded-lg group border-4 border-yellow-500">
          <div class="bg-zinc-400 bg-cover h-0 opacity-60 transition-all duration-500 group-hover:h-full flex items-center justify-center">
            <img src="../assets/icons/revolver.png" class="opacity-0 group-hover:opacity-100 transition-all duration-500"  alt="">
          </div>
          </div>
        <div class="bg-christmas bg-cover bg-no-repeat h-full bg-center cursor-pointer transition-all duration-500 rounded-lg group border-4 border-yellow-500">
          <div class="bg-zinc-400 bg-cover h-0 opacity-60 transition-all duration-500 group-hover:h-full flex items-center justify-center">
            <img src="../assets/icons/candy.png" class="opacity-0 group-hover:opacity-100 transition-all duration-500"  alt="">
          </div>
        </div>
        <div>
          s4
        </div>
        <div>
          s5
        </div>
        <div>
          s6
        </div>
        <div>
          s6
        </div>
        <div>
          s6
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectorMode',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  src="../assets/tailwind.css">
</style>
