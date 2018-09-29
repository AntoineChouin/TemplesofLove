<template>
  <div id="app">
    <header>
      <h1>This is madness</h1>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
      </header> 
   




    <HelloWorld msg="Welcome to Your pyssu.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>

html *,
*:before,
*:after {
  box-sizing: border-box;
}



header {
  text-align: center;
}

h1 {
  font-size: 2.44140625em;
}

h3 {
  font-size: 1.5625em;
}

h4 {
  font-size: 1.25em;
}

.container {
  width: 100%;
  max-width: 100vw;
  margin: auto;
  max-height: 100vh;
  background-color: #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container > aside {
  display: none;
  background-color: #6699cc;
  flex: 1 1 15%;
  align-self: stretch;
  margin: 0;
  padding: 0;
}
.container > aside:before, .container > aside:after {
  content: "";
  flex-basis: 0;
  order: 1;
}
.container > aside header {
  margin: 0;
  max-width: 100%;
  height: 100%;
  background-color: #333;
}
.container > section {
  background-color: #cc9966;
  flex: 1 1 77.5%;
  margin: 0 1.5%;
}
.container > section:before, .container > section:after {
  content: "";
  flex-basis: 0;
  order: 1;
}
.container > section header {
  border-bottom: 4px solid;
}

article {
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
}
article .days {
  background: #fe6f5e;
}
article .days:before, article .days:after {
  content: "";
  flex-basis: 0;
  order: 1;
}
article .days > header {
  margin: 0;
  display: flex;
  flex-flow: wrap column;
  max-height: 250px;
}
article .days > header * {
  border: 1px solid white;
}
article .days > header *:before, article .days > header *:after {
  content: "";
  flex-basis: 0;
  order: 1;
}
article .weekend {
  flex: 1 1 22.2222222222%;
}
article .weekend:nth-child(10n + 1) {
  background: #eb4747;
}
article .weekend:nth-child(10n + 2) {
  background: #eba947;
}
article .weekend:nth-child(10n + 3) {
  background: #caeb47;
}
article .weekend:nth-child(10n + 4) {
  background: #68eb47;
}
article .weekend:nth-child(10n + 5) {
  background: #47eb89;
}
article .weekend:nth-child(10n + 6) {
  background: #47ebeb;
}
article .weekend:nth-child(10n + 7) {
  background: #4789eb;
}
article .weekend:nth-child(10n + 8) {
  background: #6847eb;
}
article .weekend:nth-child(10n + 9) {
  background: #ca47eb;
}
article .weekend:nth-child(10n + 10) {
  background: #eb47a9;
}
article .weekend:first-child {
  border-right: 3px #aaa solid;
}
article .weekend:last-child {
  border-left: 3px #aaa solid;
}
article .week {
  flex: 1 1 11.1111111111%;
}
article .week:nth-child(10n + 1) {
  background: #eb4747;
}
article .week:nth-child(10n + 2) {
  background: #eba947;
}
article .week:nth-child(10n + 3) {
  background: #caeb47;
}
article .week:nth-child(10n + 4) {
  background: #68eb47;
}
article .week:nth-child(10n + 5) {
  background: #47eb89;
}
article .week:nth-child(10n + 6) {
  background: #47ebeb;
}
article .week:nth-child(10n + 7) {
  background: #4789eb;
}
article .week:nth-child(10n + 8) {
  background: #6847eb;
}
article .week:nth-child(10n + 9) {
  background: #ca47eb;
}
article .week:nth-child(10n + 10) {
  background: #eb47a9;
}

.days-moment {
  display: flex;
  justify-content: space-evenly;
}
.days-moment p:before, .days-moment p:after {
  content: "";
  flex-basis: 0;
  order: 1;
}
.days .quart {
  overflow: visible;
  margin: 1% 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1rem;
}
#app h1{
  font-size: 3rem;
}

.quart-calendrier {
  display: flex;
  justify-content: space-evenly;

}
.quart-calendrier select{
  flex: 1 1 50%;
}

</style>
