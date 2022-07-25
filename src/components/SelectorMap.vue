<template>
  <div class="flex flex-row bg-slate-700 bg-opacity-80 w-full h-full pt-40 pb-20">
    <div class="w-1/2 bg-saCowboy bg-no-repeat bg-cover rounded-t-full border-8 shadow-inner shadow-gray-900 border-yellow-500 my-5 mx-10 ">
    </div>
    <div class="w-full rounded-lg mx-10 my-5">
      <div class="h-full w-full flex flex-col p-5">
        <span class="w-full text-center mb-8 mt-4 font-bold text-4xl text-gray-100">Choose a map: </span>
      <div class=" top-1/2 gap-2 justify-center items-center h-1/2  grid grid-cols-3 grid-rows-1 overflow-y-scroll text-center">
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
        </div>
        <div class="w-full h-1/2 flex flex-col items-center justify-center">
        <span class=" w-full h-1/2 p-4 bg-gray-100 m-3 flex items-center justify-center rounded-tl-3xl rounded-br-3xl border-4 border-gray-500 text-2xl font-thin select-none">JUedsgkdfosdfgjdfkhgsdjfhgjksdhfgjshdgkshkdfgjhkdfjg</span>
        <button class="w-full h-1/2 text-center bg-zinc-400 hover:bg-yellow-500 text-3xl border-4 border-transparent hover:border-gray-900 focus:shadow-inner shadow-black transtion-all duration-500 active:bg-yellow-200">Select</button>
      </div>
      
      </div>
      

    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectorMap',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  src="../assets/tailwind.css">
</style>
