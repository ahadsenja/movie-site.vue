<template>
  <Navbar />
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "./components/Navbar.vue";

@Options({
  components: {
    Navbar,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #dd4233;
}
</style>
