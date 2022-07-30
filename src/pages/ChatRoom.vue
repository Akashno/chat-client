<template>
  <div class="w-screen max-w-1/2 mx-auto">
    <NavBar/>
    <hr />
    <div class="grid grid-cols-12  text-left ">
      <ChannelList class="col-span-2 px-4  border-r-2 py-4 hidden md:block" />
      <ChatSection :socket="socket" class="col-span-8"/>
      <Members :socket="socket"  class="col-span-2"/> 
    </div>
  </div>

</template>

<script>
import io from "socket.io-client";
import NavBar from '../components/Navbar.vue'
import Members from '../components/Members.vue'
import ChatSection from '../components/ChatSection.vue'
import ChannelList from '../components/ChannelList.vue'
export default {
    components:{
     NavBar,
     Members,
     ChatSection,
     ChannelList
    },
  data() {
    return {
      socket: io("http://localhost:3000"),
    };
  },
  created() {
    this.joinRoom();
  },

  methods: {
    joinRoom() {
      let username = this.$route.params.username || localStorage.getItem('username')
      let room = this.$route.params.room || localStorage.getItem('room')
      if(!username || username === 'null' || room === 'null') this.$router.go(-1)
      localStorage.setItem('username',username)
      localStorage.setItem('room',room)
      this.socket.emit("joinRoom", { username, room });
    },
  },
};
</script>

<style></style>
