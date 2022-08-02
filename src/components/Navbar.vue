<template>
  <div class="flex justify-between py-2 px-4 items-center mx-0 dark:bg-navBg ">
    <div class="text-xl dark:text-white font-extrabold flex items-center disableSelect">
      <div
        class="w-4 h-4 bg-gray-800 dark:bg-gray-200 rounded-full mr-2 ring-gray-800 dark:ring-gray-100 border-gray-700 dark:border-white border-4 animate-pulse"
      ></div>
      Goofy
    </div>
              
    <span class="flex space-x-3 items-center">
      <!-- <img
        v-if="!$store.getters.member?.avatar"
        class="w-10 h-10 mx-0 rounded-full"
        src="data:image/jpeg;base64,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"
        alt=""
      />

      <img
        v-else
        class="w-10 h-10 mx-0 rounded-full"
        :src="$store.getters.member?.avatar"
        alt=""
      /> -->
      <svg @click="$store.dispatch('toggleDarkMode')" class="w-6 h-6 cursor-pointer"  v-if="!$store.getters.isDark" xmlns="http://www.w3.org/2000/svg" fill="bg-chatBg" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg> 
       <svg class="cursor-pointer" @click="$store.dispatch('toggleDarkMode')" v-else width="20px" height="20px" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 1.5a7 7 0 100-14 7 7 0 000 14zm12-7a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h2.5A.75.75 0 0124 12zM4 12a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h2.5A.75.75 0 014 12zm16.485-8.485a.75.75 0 010 1.06l-1.768 1.768a.75.75 0 01-1.06-1.06l1.767-1.768a.75.75 0 011.061 0zM6.343 17.657a.75.75 0 010 1.06l-1.768 1.768a.75.75 0 11-1.06-1.06l1.767-1.768a.75.75 0 011.061 0zM12 0a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0V.75A.75.75 0 0112 0zm0 20a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 0112 20zM3.515 3.515a.75.75 0 011.06 0l1.768 1.768a.75.75 0 11-1.06 1.06L3.515 4.575a.75.75 0 010-1.06zm14.142 14.142a.75.75 0 011.06 0l1.768 1.768a.75.75 0 01-1.06 1.06l-1.768-1.767a.75.75 0 010-1.061z"/></svg> 
      <svg
        width="20px"
        @click="goToHome()"
        height="20px"
        :fill="$store.getters.isDark ?'white' :'chatBg'"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        class="icon rotate cursor-pointer"
      >
        <path
          d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"
        />
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  props:{
   socket:{
    type:Object
   }
  },
  data() {
    return {
      showMenu: false,
      darkMode:false,
    };
  },
  methods: {
    goToHome() {
      this.socket.emit('forceDisconnect')
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>

<style scoped>
.rotate path{
    transform: rotate(180deg);
    transform-box: fill-box;
    transform-origin: center;
}
</style>
