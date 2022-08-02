<template>
  <div class="w-screen max-w-1/2 mx-auto min-h-screen">
    <NavBar :socket="socket"/>
    <hr class="dark:border-chatBg"/>
    <div class="grid grid-cols-12  text-left ">
      <LeftSection  v-show="$store.getters.isLeftSection" class="col-span-2 px-4  border-r-2 dark:border-chat  hidden md:block" />
      <MiddleSection :socket="socket"   :class="setGridSpan()"/>
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
import {baseUrl} from "../config.js"
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
    setGridSpan(){
      const {isRightSection,isLeftSection} =  this.$store.getters
      if(isRightSection && isLeftSection){
        return 'col-span-8'
      }
      else if(isRightSection || isLeftSection){
        return 'md:col-span-10 col-span-12'
      }else{
        return 'col-span-12'
      }

    },
    setSocket(){
      let isNew = this.$route.params.isNew
      let deviceId = null
      if(isNew)  deviceId = this.getDeviceId()
      else  deviceId = localStorage.getItem('deviceId') || this.getDeviceId()
      this.socket =  io(baseUrl,{ query: { token:deviceId } })
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
