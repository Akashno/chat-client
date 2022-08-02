<template>
  <div class="flex justify-between dark:bg-rightBg wrapper">
    <p class="font-light text-sm py-3 flex justify-between items-center">
      <!-- License: Apache. Made by grommet: https://github.com/grommet/grommet-icons -->
      
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rules: [
        {
          title: "1. Be respectful.",
          description:
            " Remember the human! No insulting, no bullying, no dogpiling, no name-calling. Do speak in a way that builds up and encourages both the people you are speaking with and the server as a whole. ",
        },
        {
          title: "2. Follow Guidelines.",
          description:
            "This includes but is not limited to asking about hacking, cheating, modifications to the discord client,  and any discussion about piracy.",
        },
        {
          title: "3. Keep discussions limited to the most appropriate channel.",
          description:
            "If multiple channels fit the criteria, pick one; if unsure, feel free to ask. Job postings must be posted in job-postings using the /post command.",
        },
        {
          title: "5. Do not spam.",
          description:
            " This includes but is not limited to: within the same channel, across multiple channels, or using large images ",
        },
      ],
    };
  },
};
</script>

<style scoped>
 
.wrapper {
  height: calc(100vh - 45px);
}
</style>
