<template>
  <input
    type="text"
    v-bind:placeholder="selectedValue"
    v-model="enteredValue"
    @change="onUpdate(enteredValue)"
  />
</template>

<script>
export default {
  data() {
    return { enteredValue: "" };
  },
  props: {
    selectedValue: String,
    // enteredValue: String,
    onUpdate: Function,
  },
};
</script>

<style></style>
