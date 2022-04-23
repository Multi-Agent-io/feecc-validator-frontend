<template>
  <div class="dropdown">
    <a
      class="btn btn-primary btn-custom dropdown-toggle"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      style="height: 38px"
    >
      {{ selectedValue }}
    </a>

    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <li v-for="option in options" :key="option">
        <a class="dropdown-item" @click="updateField(option)">{{
          option.name
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    onClick: Function,
  },
  data() {
    return {
      selectedValueId: 0,
      selectedValue: this.options[0].name,
    };
  },
  methods: {
    updateField(value) {
      this.onClick(value.id);
      this.selectedValue = value.name;
      localStorage.setItem("selectedValueId", value.id);
    },
  },
};
</script>

<style>
.btn-custom {
  background-color: auto;
}
</style>
