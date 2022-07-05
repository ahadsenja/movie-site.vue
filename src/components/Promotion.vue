<template>
  <div class="flex flex-row items-center text-left pl-40 py-20">
    <div class="basis-1/2">
      <div class="pl-40">
        <h1 class="text-5xl pb-5">Enjoy on your TV.</h1>
        <p class="text-2xl leading-8">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, <br />
          Apple TV, Blu-ray players, and more.
        </p>
      </div>
    </div>

    <div class="basis-1/2">
      <div class="flex">
        <img
          class="bg-blue-500 shadow-lg shadow-blue-500/50"
          src="https://images.unsplash.com/photo-1606937295547-bc0f668595b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt="Promotion"
          width="500"
        />
      </div>
    </div>
  </div>

  <div class="flex flex-row items-center text-left pl-40 py-20">
    <div class="basis-1/2">
      <div class="pl-40 h-96">
        <img
          class="bg-red-800 shadow-lg shadow-red-800/50"
          src="https://images.unsplash.com/photo-1617217139408-a7edcce70e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt="Promotion"
          width="500"
        />
      </div>
    </div>

    <div class="basis-1/2">
      <div class="">
        <h1 class="text-5xl pb-5">
          Download your shows <br />
          to watch offline.
        </h1>
        <p class="text-2xl leading-8">
          Save your favorites easily and always <br />
          have something to watch.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Promotion extends Vue {}
</script>