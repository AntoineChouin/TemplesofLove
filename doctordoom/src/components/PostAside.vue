<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <div class="ocean">
      <span class="wave">Wave #1</span>
      <span class="wave">Wave #2</span>
    </div>
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

<style lang="scss"
  scoped>
  .ocean {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 20px;
    margin: 1vh 1vw;
    span{
      min-height: 20px;
      flex: 0 0 50%;
    background-color: greenyellow;
    }
  }
</style>
