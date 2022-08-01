<template>
  <div
    class="text-left pt-4 border-r-2 chatScreen flex flex-col justify-between"
  >
    <div>
      <div class="mx-4 flex justify-between">
        <p class="font-bold"># Welcome</p>
        <div class="flex space-x-2">
          <svg
            @click="$store.dispatch('toggleLeftSection')"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 3.53846C7.32682 3.53846 3.53846 7.32682 3.53846 12C3.53846 16.6732 7.32682 20.4615 12 20.4615C16.6732 20.4615 20.4615 16.6732 20.4615 12C20.4615 7.32682 16.6732 3.53846 12 3.53846ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
              fill="#030D45"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 16.359C12.4248 16.359 12.7692 16.0146 12.7692 15.5897V11.4872C12.7692 11.0623 12.4248 10.7179 12 10.7179C11.5752 10.7179 11.2308 11.0623 11.2308 11.4872V15.5897C11.2308 16.0146 11.5752 16.359 12 16.359Z"
              fill="#030D45"
            />
            <path
              d="M13.0256 8.41026C13.0256 7.84381 12.5664 7.38462 12 7.38462C11.4336 7.38462 10.9744 7.84381 10.9744 8.41026C10.9744 8.9767 11.4336 9.4359 12 9.4359C12.5664 9.4359 13.0256 8.9767 13.0256 8.41026Z"
              fill="#030D45"
            />
          </svg>
          <svg
            title="view users"
            @click="$store.dispatch('toggleRightSection')"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
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

      <hr class="mt-2 my-6 mx-0" />
      <div class="chatSection">
        <div
          v-for="(chat, index) in chats"
          :key="index"
          class="mb-8 mx-4 chat-messages"
        >
          <div class="flex gap-2">
            <span class="col-span-1">
              <img class="w-6 h-6 rounded-full" :src="chat.avatar" alt="" />
            </span>
            <span class="col-span-11 w-full">
              <div class="flex justify-between">
                <p class="text-sm">{{ chat.username }}</p>
                <p class="text-x text-gray-600">
                  {{ moment(chat.createdAt).format("h:mm a") }}
                </p>
              </div>
              <p class="text-gray-500 text-xs text-sm">{{ chat.message }}</p>
            </span>
          </div>
        </div>
        <div ref="chat" class="h-14"></div>
      </div>
    </div>

    <div class="py-0 flex border-2 rounded-full pl-3 items-center relative">
      <emoji-picker @emoji="insert" :search="search">
        <div
          slot="emoji-invoker"
          slot-scope="{ events: { click: clickEvent } }"
          @click.stop="clickEvent"
          class=""
        >
          <p class="text-3xl -mt-1 cursor-pointer text-gray-500 hover:text-gray-700">☺</p>
        </div>
        <div
          slot="emoji-picker"
          slot-scope="{ emojis, insert, display }"
          class="w-48 h-48 absolute bottom-16 overflow-x-hidden bg-white"
          style="overflow-y: scroll; "
        >
          <div class="">
            <div class="flex justify-between pr-4 pt-4">
              <input
                type="text"
                v-model="search"
                placeholder="Search for emoji ...."
                autofocus
                
              />
            </div>
            <div
            >
              <div v-for="(emojiGroup, category) in emojis" :key="category">
                <hr  class="my-2"/>
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
        class="w-full h-8 px-4 mr-4"
        @keypress.enter="sendMessage()"
        v-model="message"
      />

      <button
        @click="sendMessage()"
        type="button"
        class="text-blue-700 border border-blue-700 hover:bg-blue-400 hover:text-white focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:text-blue-500 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
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
      let element = this.$refs["chat"];
      if (!element) return;
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "end",
      });
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
    joinRoom(username, roomId) {
      this.socket.emit("userJoin", { username, roomId }, (response) => {
        this.$store.dispatch("setMember", response.user);
        if (!response.messages.length) return;
        this.chats = response.messages;
        let element = this.$refs["chat"];
        element.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "end",
        });
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
  },
};
</script>

<style scoped>
.chatScreen {
  height: calc(100vh - 58px);
}

.chatSection {
  height: calc(100vh - 200px);
  overflow-y: scroll;
}
textarea:focus,
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
