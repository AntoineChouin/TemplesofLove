<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PostAside from '@/components/PostAside.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    PostAside
  }

}

</script>

<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="hello">
      <img v-holder="'img=200x200?auto=yes'">
    </div>
    <PostAside msg="Welcome to the Vue of your wetUssy.js App"/>
  </div>
</template>

<style scoped>

</style>
