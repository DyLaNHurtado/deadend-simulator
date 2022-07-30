<template>
    <div id="sidenav-bg" class="fixed w-full h-full bg-opacity-60 bg-black z-50 transition-opacity duration-500">
      <div id="sidenav" class=" h-full w-0 lg:w-0 hidden bg-gray-900  shadow-lg shadow-gray-900  transition-all ease-in-out duration-500 ">
            
          <div class="h-full">
            <div class="flex w-full p-5 h-30 items-start justify-start"> 
            <fa icon="xmark" class="text-5xl text-violet-500  hover:text-yellow-500 transition-colors duration-700 cursor-pointer" @click="closeMenu()"/> 
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
       </div>
        
      </div>
    </div>
</template>

<script>

export default {
  name: 'SideNav',
  props: {
    sidenavOpen:{
      type:Boolean,
      require:true,
      default:false,
    }
  },data(){
    
    return {
    }
  },
  mounted(){
    this.closeMenu();
  },
  methods:{
    closeMenu(){
        console.log("Adiosss");
        const menu = document.getElementById('sidenav');
        const bg = document.getElementById('sidenav-bg');
        menu.classList.replace('w-full','w-0');
        menu.classList.replace('lg:w-1/3','lg:w-0');
        setTimeout(()=>{menu.classList.add('hidden')},200);
        setTimeout(()=>{bg.classList.add('hidden')},300);
        this.$emit('closeMenu');

    },
    open(){
      console.log("Si");
      const menu = document.getElementById('sidenav');
      const bg = document.getElementById('sidenav-bg');
      bg.classList.remove('hidden');
      menu.classList.remove('hidden');
      setTimeout(()=>{
        menu.classList.replace('w-0','w-full');
        menu.classList.replace('lg:w-0','lg:w-1/3');
      },50);

      
    }
  },watch:{
    sidenavOpen: function(newValue){
      if(newValue==true){this.open();}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  src="../assets/tailwind.css">
</style>