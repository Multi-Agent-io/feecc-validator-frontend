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
    <div class="ui middle aligned center aligned grid">
      <div class="row"></div>
      <div class="row">
        <img class="ui small image" src="ma-logo.png" />
        <img class="ui small image" src="robonomics-logo.png" />
      </div>
      <div class="row">
        <h1 class="ui huge header" style="color: white">Feecc Validator</h1>
      </div>
      <SearchBar />
    </div>
  </main>
</template>

<style>
#app {
  background-color: #18183a;
}
</style>
