<template>
  <div class="px-4 pt-4 text-left dark:text-white dark:bg-rightBg">

    <p class="font-bold ">Users</p>
    <div class="content pt-4">
      <div v-for="(user, index) in users" :key="index" class="mb-4">
        <div class="flex items-center gap-2">
          <div class="relative">
            <img class="w-7 h-6 rounded-full" :src="user.avatar" altuser />
            <span
              class="bottom-0 left-4 absolute w-1.5 h-1.5 rounded-full"
              :class="
                user.isActive
                  ? 'bg-green-400 ring-1 ring-green-600'
                  : 'bg-gray-500 ring-1 ring-gray-700'
              "
            ></span>
          </div>
          <span class="col-span-11 w-full">
            <div class="flex flex-col">
              <span class="text-sm">{{ user.username }}</span>

              <span v-if="!user.isActive" class="text-x text-gray-600 dark:text-gray-400">
                {{ getLastSeen(user.updatedAt) }}
              </span>
              <span v-else class="text-x dark:text-gray-400 text-gray-600"> Online </span>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
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
  methods: {
    getLastSeen(lastSeenDate) {
      let lastSeen = "";
      lastSeen = moment().diff(lastSeenDate, "days");
      if (lastSeen) return lastSeen + " days ago";
      lastSeen = moment().diff(lastSeenDate, "day");
      if (lastSeen) return lastSeen + " day ago";
      lastSeen = moment().diff(lastSeenDate, "hours");
      if (lastSeen) return lastSeen + " hours ago";
      lastSeen = moment().diff(lastSeenDate, "minutes");
      if (lastSeen) return lastSeen + " minutes ago";
      return " a moment ago";
    },
  },
  mounted() {
    this.socket.on("roomusers", (res) => {
      this.users = res.users;
    });
  },
};
</script>

<style scoped>
.content {
  height: calc(100vh - 100px);
  overflow-y: auto;
  mask-image: linear-gradient(to top, transparent, black),
    linear-gradient(to left, transparent 17px, black 17px);
  mask-size: 100% 20000px;
  mask-position: left bottom;
  -webkit-mask-image: linear-gradient(to top, transparent, black),
    linear-gradient(to left, transparent 17px, black 17px);
  -webkit-mask-size: 100% 20000px;
  -webkit-mask-position: left bottom;
  transition: mask-position 0.3s, -webkit-mask-position 0.3s;
}

::-webkit-scrollbar {
  width: 5px; /* for vertical scrollbars */
  height: 12px; /* for horizontal scrollbars */
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar:hover {
  width: 5px;
  border: 10;
}
.content:hover {
  -webkit-mask-position: left top;
}
</style>
