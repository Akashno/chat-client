<template>
  <div class="w-screen h-screen mx-auto max-w-1/2 bg-home" style="">
    <div class="flex justify-between p-8 items-center mx-0">
      <div
        class="text-xl dark:text-white font-extrabold flex items-center disableSelect"
      >
        <div
          class="w-4 h-4 bg-gray-800 dark:bg-gray-200 rounded-full mr-2 ring-gray-800 dark:ring-gray-100 border-gray-700 dark:border-white border-4 animate-pulse"
        ></div>
        Goofy
      </div>
      <div>
        <button
          @click="openDialog()"
          type="button"
          class="text-white hover:text-white border border-white hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-2 py-1 text-x md:text-xs md:px-5 md:py-2 text-center mr-2 mb-2"
        >
          Chat now
        </button>
      </div>
    </div>
    <div class="mt-10">
      <p
        class="text-6xl font-bold max-w-sm mx-auto text-white leading-tight heading"
      >
        Connect with Strangers
      </p>
      <p class="max-w-xl text-gray-500 mx-auto mt-6 subHeading">
        Here is a messaging platform for you that help you to connect with
        strangers anonymously in an easy and comfortable way
      </p>
      <button
        type="button"
        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-8"
        @click="openDialog"
      >
        Connect
      </button>
      <div class="grid place-items-center bg-home image">
        <img
          :src="require('@/assets/goofy.png')"
          width="900px"
          class="mt-10 bg-cover drop-shadow-lg"
          alt=""
        />
      </div>
    </div>
    <div
      v-show="dialog"
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-home dialog"
    >
      <div class="absolute -right-2 -top-2 cursor-pointer">
        <button
          @click="closeDialog"
          type="button"
          class="rounded-md p-1 inline-flex items-center justify-center text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 mt-2 mr-2"
        >
          <!-- Heroicon name: outline/x -->
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <form class="px-8 pt-6 pb-8 mb-4 w-72">
        <div class="mb-4">
          <label
            class="block text-left text-white text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>

          <input
            v-model="username"
            class="border bg-home rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline focus:bg-home active:bg-home"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-left text-white text-sm font-bold mb-2"
            for="password"
          >
            Chat Room
          </label>
          <select
            v-model="room"
            class="form-select focus:bg-home appearance-none bg-home block w-full px-3 py-1.5 text-base font-normal text-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option
              v-for="room in rooms"
              :value="room"
              v-text="room.title"
              :key="room.id"
            ></option>
          </select>
        </div>
        <div class="flex items-center mb-4" v-if="isOldUser">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            v-model="isNew"
            class="accent-home focus:bg-home"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-white text-sm font-medium"
            >Enter as new User</label
          >
        </div>

        <router-link
          :to="{ name: 'ChatRoom', params: { room, username, isNew } }"
        >
          <button
            :disabled="!username || !room"
            :class="
              !username || !room ? 'bg-gray-600' : 'bg-chat  hover:bg-chatBg'
            "
            class="text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Enter room
          </button>
        </router-link>
        <p class="text-center text-gray-200 text-xs mt-4">
          &copy;2020 Groovy Corp. All rights reserved.
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { baseUrl } from "../config.js";
import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
gsap.registerPlugin(CSSPlugin);
export default {
  data() {
    return {
      room: "",
      username: "",
      rooms: [],
      isOldUser: false,
      isNew: true,
      dialog: false,
    };
  },
  mounted() {
    gsap.fromTo(
      ".heading",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      ".image",
      { opacity: 0, y: 200 },
      { opacity: 1, y: 0, duration: 1.5 }
    );
  },
  methods: {
    openDialog() {
      this.dialog = true;
      gsap.fromTo(
        ".dialog",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    },
    closeDialog() {
      gsap.fromTo(
        ".dialog",
        { opacity: 1, y: 0 },
        { opacity: 0, y: 100, duration: 0.5 }
      );

      setTimeout(() => {
        this.dialog = false;
      }, 200);
    },
  },
  created() {
    let deviceId = localStorage.getItem("deviceId");
    this.username = localStorage.getItem("username");
    if (deviceId) {
      this.isNew = false;
      this.isOldUser = true;
    }

    fetch(`${baseUrl}/rooms`)
      // fetch('https://chat-express-api.herokuapp.com/rooms')
      .then((res) => res.json())
      .then(({ rooms }) => {
        this.rooms = rooms;
        this.room = this.rooms[0];
      });
  },
};
</script>

<style scoped></style>
