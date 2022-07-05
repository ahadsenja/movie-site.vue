<template>
  <div class="movie bg-zinc-800 py-32">
    <h1 class="text-3xl flex text-left pl-40 pt-40 pb-6 text-white">
      Movies you can watch
    </h1>
    <div class="grid grid-cols-6 grid-rows-1 gap-6 px-40">
      <div
        class="sm:col-span-4 md:col-span-2 lg:col-span-1 text-white text-left"
        v-for="(movie, index) in movies"
        :key="index"
      >
        <div class="pb-2">
          <img :src="movies.Poster" alt="Poster" />
        </div>
        <h1>{{ movies.Title }}</h1>
        <p>{{ movies.Year }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

import MovieService from "@/services/MovieService";
import Movie from "@/shared/models/Movie";

export default class MovieList extends Vue {
  movies: Movie[] = [];

  mounted() {
    this.showMovieLists();
  }

  showMovieLists() {
    MovieService.getAll().then((response) => {
      this.movies = response.data;
      console.log(response);
    });
  }
}
</script>