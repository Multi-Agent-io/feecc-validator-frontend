<template>
  <input
    type="text"
    class="form-control"
    v-bind:placeholder="selectedValue"
    v-model="enteredValue"
  />
</template>

<script>
export default {
  data() {
    return { enteredValue: "" };
  },
  mounted() {
    const enteredValueCached = localStorage.getItem("enteredValue");
    if (enteredValueCached) {
      this.enteredValue = enteredValueCached;
    }
  },
  watch: {
    enteredValue(valueNew, valueOld) {
      this.onUpdate(valueNew);
      localStorage.setItem("enteredValue", valueNew);
    },
  },
  props: {
    selectedValue: String,
    onUpdate: Function,
  },
};
</script>

<style></style>
