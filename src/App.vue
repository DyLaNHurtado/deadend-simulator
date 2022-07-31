<template>
<div class=" bg-zinc-900 h-screen" >
  <header class=" text-3xl flex items-center justify-between px-5 text-zinc-200 absolute w-full transition-all duration-500 bg-white bg-opacity-20">
    <fa icon="bars" title="Menu" class="hover:text-yellow-500 text-violet-500 cursor-pointer transition-colors duration-700" @click="openMenu()"/>
    <div v-if="true" class="py-4">
      <button class="p-2 rounded  hover:bg-yellow-500 transition-all duration-500  border-2 border-white">Register</button>
      <button class="p-2 ml-4 rounded bg-violet-500 hover:bg-yellow-500 hover:text-white transition-all duration-500 border-2 border-transparent">Sign In</button>
    </div>
    <div v-if="false" class="flex items-center justify-center text-gray-200 text-2xl px-5 my-5 group border-2 border-transparent transition-all duration-500 cursor-pointer">
        <img src="./assets/logo.png" class="rounded-lg border-4 border-violet-500 group-hover:border-yellow-500 bg-gray-900 object-center h-12 w-12 transition-colors duration-500" alt="">
        <span class="font-semibold mx-4 text-gray-200 group-hover:text-yellow-500 transition-colors duration-500 select-none">user123</span>
      </div>
  </header>
    <SideNav @closeMenu="closeMenu()"  :sidenavOpen="Boolean(isSideNavOpen)"  />
    <HomeView/>
  <a href="https://github.com/DyLaNHurtado" target="_blank">
  <footer class="text-center bg-zinc-700 text-zinc-200 fixed bottom-0 w-full text-lg hover:text-xl py-2 hover:py-5 hover:bg-gray-900 bg-opacity-60 hover:opacity-80 transition-all duration-500">
    <span>Made with 💛 by DyLaNHurtado </span>
  </footer></a>
</div>
</template>

<script>
import HomeView from './components/HomeView.vue'
import SideNav from './components/SideNav.vue'
export default {
  name: 'App',
  components: {
    HomeView,
    SideNav,
},
data(){
  return{
    isSideNavOpen:Boolean
  }
},methods:{
  openMenu(){
    console.log(this.isSideNavOpen);
    this.isSideNavOpen=true;
    console.log("Hola buenas");
  },
  closeMenu(){
    this.isSideNavOpen=false;
    console.log("Se mamo");
  }
}
}
</script>

<style src="./assets/tailwind.css">

</style>
