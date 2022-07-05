<template>
  <div class="home justify-center">
    <Hero />
    <Promotion />
    <MovieList class="mt-24" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Hero from "@/components/Hero.vue"; // @ is an alias to /src
import Promotion from "@/components/Promotion.vue";
import MovieList from "@/components/MovieList.vue";
import Footer from "@/components/Footer.vue";

@Options({
  components: {
    Hero,
    Promotion,
    MovieList,
    Footer,
  },
})
export default class HomeView extends Vue {}
</script>
