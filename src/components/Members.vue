<template>
  <div class="px-4 pt-4  text-left ">
    <ChannelList class="mb-4 md:hidden h-1/3" :socket="socket" />
    <div class="" >
    <p class="font-bold">Members</p>
    <div v-for="(member, index) in members" :key="index" class="mt-4">
      <div class="flex gap-1">
          <img
            class="w-7 h-6 rounded-full"
            :src="member.avatar"
            alt=""
          />
        <span class="col-span-11 w-full">
          <div class="flex justify-between">
            <p class="text-sm">{{ member.username }}</p>
          </div>
        </span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import ChannelList from '../components/ChannelList.vue'
export default {
components:{
 ChannelList
    },
  props: {
    socket: {
      type: Object,
    },
  },
  data() {
    return {
      members: [],
    };
  },
  created() {
    this.socket.on("roomusers", ({users}) => {
      this.members.push(users);
      this.members.push(users);
      this.members.push(users);
      this.members.push(users);
      this.members.push(users);
      this.members.push(users);
      this.members.push(users);
      this.members.push(users);
      this.members.push(users);
      this.members.push(users);
      this.members.push(users);
      this.members.push(users);
      this.members.push(users);
      this.members.push(users);
      this.members.push(users);
      this.members.push(users);
      this.members.push(users);
      this.members.push(users);
    });
  },
};
</script>

<style></style>
