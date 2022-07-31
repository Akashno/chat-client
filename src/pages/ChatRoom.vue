<template>
  <div class="w-screen max-w-1/2 mx-auto">
    <NavBar :socket="socket"/>
    <hr />
    <div class="grid grid-cols-12  text-left ">
      <LeftSection class="col-span-2 px-4  border-r-2 py-4 hidden md:block" />
      <MiddleSection :socket="socket"  :class="$store.getters.isRightSection ? 'col-span-8':'col-span-12 md:col-span-10'" />
      <RightSection v-show="$store.getters.isRightSection" :socket="socket"  class="md:col-span-2 col-span-4" /> 
    </div>
  </div>

</template>

<script>
import io from "socket.io-client";
import NavBar from '../components/Navbar.vue'
import RightSection from '../components/RightSection.vue'
import MiddleSection from '../components/MiddleSection.vue'
import LeftSection from '../components/LeftSection.vue'
export default {
    components:{
     NavBar,
     RightSection,
     MiddleSection,
     LeftSection
    },
    created(){
      this.setSocket()
    },
  data() {
    return {
      socket:null,
      room:null,
      username:null,
    };
  },
  methods:{
    setSocket(){

      debugger
      let isNew = this.$route.params.isNew
      let deviceId = null
      if(isNew)  deviceId = this.getDeviceId()
      else  deviceId = localStorage.getItem('deviceId') || this.getDeviceId()
      this.socket =  io("http://localhost:3000",{ query: { token:deviceId } })
    },
    getDeviceId(){
      const deviceId = Math.floor(Math.random() * 1000000000);
      localStorage.setItem('deviceId',deviceId)
      return deviceId
    }
  }
};
</script>

<style></style>
