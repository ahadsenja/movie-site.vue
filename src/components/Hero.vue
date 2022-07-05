<template>
  <div
    class="
      flex
      justify-center
      items-center
      h-96
      bg-local bg-no-repeat bg-center bg-cover
      text-white
      pt-28
    "
    style="
      background-color: black;
      background-image: url(https://images.unsplash.com/photo-1621955964441-c173e01c135b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80);
      height: 70vh;
    "
  >
    <div class="justify-center leading-5">
      <p class="text-6xl">
        Unlimited movies, TV<br />
        shows and more
      </p>
      <span class="text-2xl"
        >Watch anywhare, Cancel anythime Voluptatibus <br />
        cupiditate molestias repellat inventore cum saepe iusto,
      </span>

      <div class="flex justify-center mt-10">
        <form action="#">
          <input
            class="border-2 h-full px-4 rounded-tl rounded-bl"
            type="text"
            placeholder="Email address"
          />
        </form>
        <button class="bg-red-600 text-white px-10 py-3 rounded-tr rounded-br">
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
