<template>
    <div class="hello">
        <h1>{{msg}}</h1>
        <div class="ocean"> <span class="wave"></span><span class="wave"></span></div>
        
    </div>
</template>

<script>
export default {
  name: 'postAside',
  props: {
    msg: String
  }
}
</script>