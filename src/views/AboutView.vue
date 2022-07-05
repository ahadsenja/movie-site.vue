<template>
  <div class="pt-60">
    <h1 class="text-6xl">Source Design</h1>
    <br />
    <a
      class="text-2xl hover:text-red-600"
      href="https://www.netflix.com/id-en/"
      target="_blank"
      >Netflix</a
    >
  </div>
  <Footer class="bottom-0 absolute w-full" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/Footer.vue";

@Options({
  components: {
    Footer,
  },
})
export default class AboutView extends Vue {}
</script>