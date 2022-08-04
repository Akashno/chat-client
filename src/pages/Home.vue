<template>
  <div class="w-screen h-screen mx-auto max-w-1/2 bg-home " :class="{'backdrop-blur-lg':dialog}">
    <div class="flex justify-between p-8 items-center mx-0 ">
      <div
        class="text-xl dark:text-white font-extrabold flex items-center disableSelect"
      >
        <div
          class="w-4 h-4 bg-gray-800 dark:bg-gray-200 rounded-full mr-2 ring-gray-800 dark:ring-gray-100 border-gray-700 dark:border-white border-4 animate-pulse"
        ></div>
        Goofy
      </div>

      
    </div>
      <div class="mt-10">
      <p class="text-6xl font-bold max-w-sm mx-auto text-white leading-tight">Connect with strangers</p>
      <p class="max-w-xl text-gray-500 mx-auto mt-10">Here is a messaging platform for you that help you to connect with strangers anonymously in an easy and comfortable way</p>
      <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-8" @click="dialog = true">Connect</button>
      <div class="grid place-items-center">

      <img :src="require('@/assets/hey.png')" width="900px" class=" my-10 drop-shadow-lg" alt="">
      </div>

    </div>
    <div class="w-full h-screen  absolute top-0 left-0 m-auto bg-home ease-in" v-if="dialog">
    <div class="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 border-2 bg-home" v-if="dialog" >  
    <div class="absolute -right-2 -top-2 cursor-pointer">

    <span @click="dialog = false" class="px-2 py-1 w-4 h-4   rounded-full bg-white" >x</span>
    </div>
      <form class="   px-8 pt-6 pb-8 mb-4 w-full max-w-md   col-span-6">
        <div class="mb-4">
          <label
            class="block text-left text-white text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>

          <input
            v-model="username"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
            class="w-4 h-4 text-white bg-gray-100 rounded border-gray-300"
          />
          <label for="default-checkbox" class="ml-2 text-white text-sm font-medium"
            >Enter as new User</label
          >
        </div>

        <router-link
          :to="{ name: 'ChatRoom', params: { room, username, isNew } }"
        >
          <button
            :disabled="!username || !room"
            :class="
              !username || !room
                ? 'bg-gray-300'
                : 'bg-blue-500  hover:bg-blue-700'
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
  </div>
</template>

<script>
import { baseUrl } from "../config.js";
export default {
  data() {
    return {
      room: "",
      username: "",
      rooms: [],
      isOldUser: false,
      isNew: true,
      dialog:false,
    };
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

<style>
.home {
  background: #232526; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #285bc5,
    #2053bd
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #285bc5,
    #2053bd
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
