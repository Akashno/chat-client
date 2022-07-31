<template>
  <div class="px-4 pt-4 text-left">
    <div class="">
      <div class="">
        <p class="font-bold">Users</p>


      </div>
      <div v-for="(user, index) in users" :key="index" class="mt-4">
        <div class="flex gap-1">
          <div class="relative">
            <img class="w-7 h-6 rounded-full" :src="user.avatar" altuser />
            <span
              class="bottom-0 left-4 absolute w-1.5 h-1.5 rounded-full"
              :class="
                user.isActive
                  ? 'bg-green-400 ring-1 ring-green-600'
                  : 'bg-gray-500 ring-gray-700'
              "
            ></span>
          </div>
          <span class="col-span-11 w-full">
            <div class="">
              <p class="text-sm">{{ user.username }}</p>
            </div>
          </span>
        </div>
      </div>
    </div>
    <LeftSection class="my-4 md:hidden " :socket="socket" />
  </div>
</template>

<script>
import LeftSection from "./LeftSection.vue";
export default {
  components: {
    LeftSection,
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
      this.users = res.users;
    });
  },
};
</script>

<style></style>
