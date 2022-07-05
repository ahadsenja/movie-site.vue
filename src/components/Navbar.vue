<template>
  <nav class="flex items-center bg-zinc-800 px-40 my-0">
    <div class="logo flex justify-start mr-20">
      <a class="text-white text-3xl" href="/">Muvi</a>
    </div>

    <div class="flex justify-between items-center w-full">
      <div class="menu-item">
        <router-link class="text-white pr-6" to="/">Home</router-link>
        <router-link class="text-white" to="/about">About</router-link>
      </div>

      <div class="flex items-center">
        <form action="">
          <input
            class="w-96 rounded-full py-2 px-4"
            type="text"
            placeholder="Search"
          />
        </form>
        <a class="ml-20 bg-red-600 text-white px-10 py-2 rounded-full" href="#"
          >Sign In</a
        >
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Navbar extends Vue {}
</script>