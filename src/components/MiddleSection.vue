<template>
  <div
    class="text-left pt-4 border-r-2 dark:border-chat chatScreen flex flex-col justify-between dark:bg-chatBg"
  >
    <div>
      <div class="mx-4 flex justify-between items-center">
        <p class="font-bold dark:text-white"># Welcome</p>
        <div class="flex space-x-2">
          <svg
            class="cursor-pointer"
            title="view users"
            @click="$store.dispatch('toggleRightSection')"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="#808080"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3.5 8a5.5 5.5 0 118.596 4.547 9.005 9.005 0 015.9 8.18.75.75 0 01-1.5.045 7.5 7.5 0 00-14.993 0 .75.75 0 01-1.499-.044 9.005 9.005 0 015.9-8.181A5.494 5.494 0 013.5 8zM9 4a4 4 0 100 8 4 4 0 000-8z"
            />
            <path
              d="M17.29 8c-.148 0-.292.01-.434.03a.75.75 0 11-.212-1.484 4.53 4.53 0 013.38 8.097 6.69 6.69 0 013.956 6.107.75.75 0 01-1.5 0 5.193 5.193 0 00-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0017.29 8z"
            />
          </svg>
        </div>
      </div>
      <hr class="my-2 mb-3 mx-0 dark:border-chat" />
      <div class="chatSection dark:bg-chatBg">
        <div
          v-for="(chat, index) in chats"
          :key="index"
          class="mb-8 mx-4 chat-messages"
        >
          <div class="w-full">
            <div class="flex justify-between">
              <div class="flex gap-2">
                <span class="">
                  <img class="w-6 h-6 rounded-full" :src="chat.avatar" alt="" />
                </span>
                <div>
                  <p class="text-xs dark:text-white">{{ chat.username }}</p>
                  <div class="" style="">
                    <div
                      class="text-gray-500 max-w-4xl pt-1 text-sm break-words"
                    >
                      <p
                        class="max-w-max px-2 py-2 text-xs dark:text-white bg-gray-100 dark:bg-chat rounded-3xl rounded-tl-none"
                      >
                        {{ chat.message }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p class="text-x text-gray-600 dark:text-gray-400">
                {{ getDate(chat.createdAt) }}
              </p>
            </div>
          </div>
        </div>
        <div ref="chat" class=" mt-24"></div>
      </div>
    </div>
    <div class="dark:bg-chatBg">
      <div
        class="py-0 flex border-2 items-center relative dark:bg-chatInputBg dark:border-chatInputBg" >
        <emoji-picker @emoji="insert" :search="search">
          <div
            slot="emoji-invoker"
            slot-scope="{ events: { click: clickEvent } }"
            @click.stop="clickEvent"
            class=""
          >
            <p
              class="text-3xl -mt-1 cursor-pointer text-gray-500 dark:hover:text-gray-100 hover:text-gray-800"
            >
              ☺
            </p>
          </div>
          <div
            slot="emoji-picker"
            slot-scope="{ emojis, insert, display }"
            class="w-48 h-48 absolute bottom-16 overflow-x-hidden bg-white dark:bg-chatInputBg p-2"
            style="overflow-y: scroll"
          >
            <div class="">
              <div class="flex justify-between pr-4 pt-4">
                <input
                  type="text"
                  v-model="search"
                  placeholder="Search for emoji ...."
                  autofocus
                  class="dark:bg-chatInputBg dark:text-white dark:text-xs"
                />
              </div>
              <div>
                <div v-for="(emojiGroup, category) in emojis" :key="category">
                  <hr class="my-2" />
                  <div>
                    <span
                      class="cursor-pointer"
                      v-for="(emoji, emojiName) in emojiGroup"
                      :key="emojiName"
                      @click="insert(emoji)"
                      :title="emojiName"
                      >{{ emoji }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </emoji-picker>

        <input
          type="text"
          id="mytextarea"
          autofocus
          placeholder="Type your message"
          class="w-full h-8 px-4 mr-4 dark:bg-chatInputBg dark:outline-none dark:text-white"
          @keypress.enter="sendMessage()"
          v-model="message"
        />

        <button
          @click="sendMessage()"
          type="button"
          class="border m-2 border-gray-800 hover:text-gray-900 dark:border-white dark:hover:text-white focus:outline-none font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center text-gray-800 dark:text-gray-400"
        >
          <svg
            aria-hidden="true"
            class="w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Icon description</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import EmojiPicker from "vue-emoji-picker";

export default {
  components: {
    EmojiPicker,
  },
  props: {
    socket: {
      type: Object,
    },
  },
  data() {
    return {
      message: "",
      chats: [],
      username: null,
      room: null,
      moment: moment,
      search: "",
    };
  },
  mounted() {
    this.socket.on("message", (message) => {
      this.chats.push(message);
      this.scrollDown()
    });
    this.username =
      this.$route.params.username || localStorage.getItem("username");
    this.room =
      this.$route.params.room || JSON.parse(localStorage.getItem("room"));
    if (!this.username || this.username === "null" || this.room === "null")
      this.$router.go(-1);
    localStorage.setItem("username", this.username);
    localStorage.setItem("room", JSON.stringify(this.room));
    this.joinRoom(this.username, this.room._id);
  },
  methods: {
    insert(emoji) {
      this.message += emoji;
    },
    scrollDown(){
        let element = this.$refs["chat"];
      if (!element) return;
        element.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "end",
        });
    },
    joinRoom(username, roomId) {
      this.socket.emit("userJoin", { username, roomId }, (response) => {
        this.$store.dispatch("setMember", response.user);
        if (!response.messages.length) return;
        this.chats = response.messages;
        this.setTimeout(() => {
           this.scrollDown()
        }, 1000);

      });
    },
    sendMessage() {
      if (!this.message) return;
      this.socket.emit("chatMessage", this.message);
      this.message = "";
      this.$refs["chat"].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "end",
      });
    },
    getDate(createdAt) {
      if (!createdAt) return "";
      let lastSeen = moment().diff(createdAt, "hours");
      if (lastSeen > 24) return moment(createdAt).format("DD/MM/YYYY");
      return moment(createdAt).format("h:mm a");
    },
  },
};
</script>

<style scoped>
.chatScreen {
  height: calc(100vh - 57px);
}

.chatSection {
  height: calc(100vh - 152px);
  overflow-y: scroll;
}
input:focus {
  outline: none;
}
::-webkit-scrollbar {
  width: 4px; /* for vertical scrollbars */
  height: 12px; /* for horizontal scrollbars */
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar:hover {
  width: 100px;
  border: 10;
}

input,
input::placeholder {
  font: 14px sans-serif;
}
</style>
