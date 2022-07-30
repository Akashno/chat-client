<template>
  <div class="w-screen ">
    <NavBar/>
    <hr />
    <div class="grid grid-cols-12  text-left ">
      <ChannelList/>
      <ChatSection :socket="socket"/>
      <Members :socket="socket"/> 
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
      chats: [],
    };
  },
  created() {
    this.joinRoom();
    this.socket.on("message", (msg) => {
      this.chats.push(msg);
    });
  },

  methods: {
    joinRoom() {
      debugger
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
