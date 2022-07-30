<template>
  <div
    class=" text-left  pt-4 border-r-2 chatScreen flex flex-col justify-between"
  >
    <div>
      <div class="flex justify-between items-center mx-4">
        <p class=" font-bold"># Welcome to {{}}</p>
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
      <button @click="sendMessage()" type="button" class="mx-4 text-blue-700 border border-blue-700 hover:bg-blue-400 hover:text-white  focus:outline-none  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center  dark:text-blue-500 dark:hover:text-white">
  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Icon description</span>
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
    let element = this.$refs['chat']
    if(!element) return 
    element.scrollIntoView({behavior: "smooth", block: "end",inline:"end"});
    });
  },
  methods: {
    sendMessage() {
      if(!this.message) return
      this.socket.emit("chatMessage", this.message);
      this.message = ''
      this.$refs['chat'].scrollIntoView({behavior: "smooth", block: "end",inline:"end"});
    },
  },
};
</script>

<style scoped>
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
