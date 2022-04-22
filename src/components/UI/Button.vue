<template>
  <button type="button" class="btn btn-primary" @click="onClick()">
    {{ textField }}
  </button>
</template>

<script>
export default {
  props: {
    textField: String,
    onClick: Function,
  },
};
</script>

<style></style>
