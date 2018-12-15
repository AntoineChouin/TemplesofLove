<template>
  <div id="app">
    <nav id="nav">
      <ul class="nav-list">
        <li class="nav-list_item">
          <router-link class="nav-link" to="/">Accueil</router-link>
        </li>
        <li class="nav-list_item">
          <router-link class="nav-link" to="/calendrier">Calendrier</router-link>
        </li>
        <li class="nav-list_item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
        <li class="nav-list_item">
          <router-link class="nav-link" to="/superheroes">Superheroes</router-link>
        </li>
      </ul>
  
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
  
</style>
