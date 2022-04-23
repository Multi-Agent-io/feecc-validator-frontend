<template>
  <div class="d-grid gap-2">
    <button type="button" class="btn btn-primary" @click="onClick()">
      <span v-if="!loading">{{ textField }}</span>
      <div v-else class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    textField: [String, null],
    onClick: [Function, null],
    loading: {
      type: [Boolean, null],
      default() {
        return false;
      },
    },
  },
};
</script>

<style></style>
