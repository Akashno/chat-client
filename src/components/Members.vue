<template>
  <div class="px-4 pt-4 col-span-2 text-left">
    <p>Members</p>
    <div v-for="(member, index) in members" :key="index" class="mt-4">
      <div class="flex gap-2">
        <span class="col-span-1">
          <img
            class="w-7 h-6 rounded-full"
            :src="member.avatar"
            alt=""
          />
        </span>
        <span class="col-span-11 w-full">
          <div class="flex justify-between">
            <p class="text-sm">{{ member.username }}</p>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      this.members = users;
    });
  },
};
</script>

<style></style>
