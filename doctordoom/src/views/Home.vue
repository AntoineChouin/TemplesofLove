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
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <PostAside msg="Welcome to the Vue of your wetUssy.js App"/>
    <!-- <img data-src="holder.js/100px75?theme=social"> -->
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  background-color: yellowgreen;
}
img{
  max-width: 50%;
  max-height: 50%;
}
.home * {
  background-color: navajowhite;
  border: 1px solid violet;
  flex: 0 0  auto;
  /* display: none; */
}
.home .hello:first-child{
  align-self: flex-end;
  color: royalblue;
}
</style>
