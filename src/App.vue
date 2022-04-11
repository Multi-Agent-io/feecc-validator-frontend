<script>
import SearchBar from "./components/SearchBar.vue";

export default {
  components: {
    SearchBar,
  },
};
</script>

<template>
  <main>
    <div class="ui four wide centered grid">
      <div class="row"></div>
      <div class="ui small images">
        <img class="ui image" src="/ma-logo.png" />
        <img class="ui image" src="/robonomics-logo.png" />
      </div>
      <div class="row">
        <h1 class="ui center aligned header" style="color: white">
          Feecc Validator
        </h1>
      </div> 
      <div class="row">
        <div class="eight wide column">
          <SearchBar />
        </div>
      </div>
    </div>
  </main>
</template>

<style>
#app {
  background-color: #18183a;
}
</style>
