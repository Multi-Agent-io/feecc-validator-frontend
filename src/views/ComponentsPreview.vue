<template>
  <Selector :options="[1, 2, 3]" :on-click="updateSelected" />
</template>

<script>
import Selector from "../components/UI/Selector.vue";

export default {
  components: {
    Selector,
  },
  methods: {
    updateSelected(id) {
      console.log(id);
    },
  },
};
</script>

<style></style>
