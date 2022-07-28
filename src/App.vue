<template>
<div class=" bg-zinc-900 h-screen" >
  <header class="py-5 text-3xl flex items-center justify-between px-5 text-zinc-200 absolute w-full transition-all duration-500 bg-gray-900">
    <fa icon="bars" class="" @click="openMenu()" :sidenavOpen="isSideNavOpen" />
    <span>DeadEnd Simulator</span>
  </header>
  <div class=" w-full h-full bg-pattern">
    
    <SideNav @closeMenu="closeMenu()"/>
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
import SideNav from './components/SideNav.vue'
export default {
  name: 'App',
  components: {
    ProfileView,
    SideNav,
},data(){
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
