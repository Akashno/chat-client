<template>
    <div class="font-bold">
      <p class="mb-4">
     Information
      </p>

     
   </div>
</template>

<script>
export default {
  data(){
    return{
      rooms:[]
    }
  },
    created(){
      fetch('http://localhost:3000/rooms')
      .then((res)=>res.json())
      .then(({rooms})=>this.rooms=rooms)
    }
}
</script>

<style>

</style>