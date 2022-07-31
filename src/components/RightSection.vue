<template>
  <div class="px-4 pt-4  text-left ">
    <LeftSection class="mb-4 md:hidden " :socket="socket" />
    <div class="" >
    <p class="font-bold">Users</p>
    <div v-for="(user, index) in users" :key="index" class="mt-4">
      <div class="flex gap-1">
          <img
            class="w-7 h-6 rounded-full"
            :src="user.avatar"
            altuser
          />
        <span class="col-span-11 w-full">
          <div class="flex justify-between">
            <p class="text-sm">{{ user.username }}</p>
            <span
            :class="user.isActive ? 'bg-green-400 ring-1 ring-green-600':'bg-gray-500 ring-gray-700'"
            class="w-2.5 h-2.5  border-white dark:border-gray-800 rounded-full"
          ></span>
          </div>
        </span>
         

      </div>
    </div>
    </div>
  </div>
</template>

<script>
import LeftSection from './LeftSection.vue'
export default {
components:{
 LeftSection
    },
  props: {
    socket: {
      type: Object,
    },
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.socket.on("roomusers", (res) => {
        this.users = res.users
    });
  },
};
</script>

<style></style>
