<template>
  <div class="w-screen h-screen grid place-items-center">
    <div class="w-full max-w-xs">
      <form class="bg-primary shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-left text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            v-model="username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-left text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Chat Room
          </label>
          <select
          v-model="room"
            class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option value="Javascript">Javascript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
          </select>
        </div>
        <router-link :to="{ name: 'ChatRoom',params:{room,username} }">
          <button
          :disabled="!username || !room"
          :class="!username || !room ? 'bg-gray-300':'bg-blue-500  hover:bg-blue-700'"
            class=" text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Enter room
          </button>
        </router-link>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Chat Corp. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            room:"",
            username:""
        }
    }
};
</script>

<style></style>
