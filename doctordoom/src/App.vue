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
  align-items: center;

  a{
    font-size: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 0.5rem 0;
    margin:0 2.5%;
    flex: 1 1 (100% * (1/3));
  }
}
</style>
