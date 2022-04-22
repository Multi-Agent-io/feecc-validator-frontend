<template>
  <header>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-3">
          <img class="mx-auto d-block logo" src="/ma-logo.png" />
        </div>
        <div class="col-3">
          <img class="mx-auto d-block logo" src="/robonomics-logo.png" />
        </div>
      </div>
      <div class="row">
        <h1 class="text-center" style="color: white">Feecc Validator</h1>
      </div>
    </div>
  </header>
  <SearchBar />
</template>

<script>
import SearchBar from "../components/SearchBar.vue";

export default {
  components: {
    SearchBar,
  },
};
</script>

<style>
.logo {
  width: 75%;
  height: auto;
}
header,
footer,
section {
  padding-top: 25px;
  padding-bottom: 25px;
}
</style>
