<template>
    <div id="sidenav-bg" class="fixed w-full h-full bg-opacity-60 bg-black z-50 transition-all duration-500">
      <div id="sidenav" class=" h-full w-full lg:w-1/3  bg-gray-900  shadow-lg shadow-gray-900  transition-all duration-500">
            
          <div class="h-full">
            <div class="flex w-full p-5 h-1/6 items-start justify-start"> 
            <fa icon="xmark" class="text-5xl text-white  hover:text-yellow-500 transition-colors duration-700" @click="closeMenu()"/> 
            </div>
          <div class="h-4/6 w-full flex flex-col items-center justify-start p-5">
            
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
           <div class=" w-full  h-1/6 mt-8 " v-if="false">
            <div class="flex flex-col gap-3 items-center justify-center h-2/4 text-gray-200 text-2xl ">
              <button class="px-5 py-5 bg-zinc-500 mx-2 rounded hover:bg-violet-500 hover:text-black transition-all duration-500  border-2 border-transparent hover:border-white">Sign up</button>
              <button class="px-5 py-5 text-black bg-zinc-400 mx-2 rounded  hover:bg-yellow-500 hover:text-white transition-all duration-500 border-2 border-transparent hover:border-white">Sign in</button>
            </div>
            
          </div>
          <div class="w-full  h-1/6  mt-8" v-if="true">
            <div class="flex flex-col gap-3 items-center justify-center h-2/4 text-gray-200 text-2xl ">
              <span class="font-light text-violet-500">Welcome back,</span> <span class="font-semibold text-yellow-500">user123</span>
            </div>
            
          </div>
          
       </div>
        
      </div>
    </div>
</template>

<script>
export default {
  name: 'SideNav',
  props: {
    sidenavOpen:Boolean
  },data(){
    
    return {
    }
  },
  methods:{
    closeMenu(){
        this.$emit('closeMenu');
        console.log("Adiosss");
        const menu = document.getElementById('sidenav');
        menu.classList.replace('w-full','w-0');
        menu.classList.replace('lg:w-1/3','lg:w-0');
        setTimeout(()=>{
          menu.classList.add('hidden')
        },250);
        setTimeout(()=>{
          const bg = document.getElementById('sidenav-bg');
          bg.classList.add('hidden')
        },300);
    },
    open(){
      const menu = document.getElementById('sidenav');
      //w-full lg:w-1/3 
      menu.classList.replace('w-0','w-full');
      menu.classList.replace('lg:w-0','lg:w-1/3');
      const bg = document.getElementById('sidenav-bg');
      bg.classList.remove('hidden')
    }
  },watch:{
    sidenavOpen: function(newValue,oldValue){
      console.log("holla");
      console.log('Prop changed: ', newValue, ' | was: ', oldValue)
      
      if(newValue!=false){
        this.open();
      }
    }
   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  src="../assets/tailwind.css">
</style>