<template>
  <div
    class="col-span-8 text-left  pt-4 border-r-2 chatScreen flex flex-col justify-between"
  >
    <div>
      <div class="flex justify-between items-start mx-4">
        <p class=" font-bold"># Welcome</p>
        <div class="flex items-center space-x-3">
          <span
            class="w-2.5 h-2.5 bg-green-400 ring-1 ring-green-600 border-white dark:border-gray-800 rounded-full"
          ></span>
          <p class="mb-0 text-xs">430 members</p>
        </div>
      </div>

      <hr class="mt-2 my-6 mx-0" />
      <div class="chatSection "  >
      <div v-for="(chat,index) in chats" :key="index" class="mb-8 mx-4 chat-messages"  >
      <div class="flex  gap-2  " >
        <span class="col-span-1">
        <img
          class="w-6 h-6 rounded-full "
          :src="chat.avatar"
          alt=""
        />
        </span>
        <span class="col-span-11 w-full">
            <div class="flex justify-between ">
            <p class="text-sm">{{chat.username}}</p>
            <p class="text-xs text-gray-600">{{chat.time}}</p>
            </div>
            <p class="text-gray-500 text-xs text-sm">{{chat.text}}</p>
        </span>
      </div>
      </div>
      <div ref="chat" class="h-14" > </div>

      </div>
    </div>
    <div class="my-4 py-1 flex border-1">
      <input
        type="text"
        autofocus
        placeholder="Type your message"
        class="w-full h-8 px-4 mr-4"
        @keypress.enter="sendMessage()"
        v-model="message"
      />
      <button @click="sendMessage()" class="px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          class="bi bi-send"
          viewBox="0 0 16 16"
        >
          <path
            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
          />
        </svg>
      </button>
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
      message: "",
      chats: [ ],
    };
  },
  mounted() {
    this.socket.on("message", (message) => {
        this.chats.push(message)
      this.$refs['chat'].scrollIntoView({behavior: "smooth", block: "end",inline:"end"});
    });
  },
  methods: {
    sendMessage() {
      this.socket.emit("chatMessage", this.message);
      this.message = ''
      this.$refs['chat'].scrollIntoView({behavior: "smooth", block: "end",inline:"end"});
    },
  },
};
</script>

<style>
.chatScreen {
  height: calc(100vh - 65px);
}

.chatSection{
  height: calc(100vh - 200px);
  overflow-y:scroll ;
}
textarea:focus,
input:focus {
  outline: none;
}
   ::-webkit-scrollbar
    {
      width: 2px;  /* for vertical scrollbars */
      height: 12px; /* for horizontal scrollbars */
    }
    
    ::-webkit-scrollbar-track
    {
      background: rgba(0, 0, 0, 0.1);
    }
    
    ::-webkit-scrollbar-thumb
    {
      background: rgba(0, 0, 0, 0.5);
    }
</style>
