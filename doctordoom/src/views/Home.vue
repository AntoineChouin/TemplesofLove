<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <PostAside msg="Welcome to the Vue of your wetUssy.js App"/>
  </div>
</template>

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
  // name: 'aside',
  // components: {
  //   PostAside
  // }
}
// export default {
//   name: 'home',
//   components: {
//     PostAside
//   }
// }
</script>
