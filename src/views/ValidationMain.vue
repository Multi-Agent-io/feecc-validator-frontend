<template>
  <header>
    <nav class="navbar fixed-top navbar-light bg-white">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="/ma-logo.png" class="d-inline-block align-text-top logo" />
          <img
            src="/robonomics-logo.png"
            class="d-inline-block align-text-top logo"
          />
          Feecc Validator
        </a>
      </div>
    </nav>
  </header>
  <section class="d-flex aligns-items-center justify-content-center">
    <SearchBar />
  </section>
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
  width: 25px;
  height: auto;
  margin-left: 10px;
  margin-right: 10px;
}
header,
footer,
section {
  padding-top: 25px;
  padding-bottom: 25px;
}
</style>
