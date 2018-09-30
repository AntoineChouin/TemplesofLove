<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#nav{
  display: flex;
  justify-content: center;

  a{
    margin:0 2.5%;
    flex: 1 1 (100% * (1/3));
  }
}
</style>
