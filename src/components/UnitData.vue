<template>
  <ul class="list-group group">
    <li
      class="list-group-item d-flex justify-content-between align-items-center"
      v-for="row in certificateData.production_stages"
      :key="row.ended_timestamp"
    >
      <span>
        <img id="small-logo" src="/storage_icon.svg" />
        {{
          "Начало: " +
          this.parseDate(row.started_timestamp) +
          ". Конец: " +
          this.parseDate(row.ended_timestamp)
        }}
      </span>
      <a class="badge bg-primary" :href="row.videos[0]">
        <span id="icon-small" class="material-icons">launch</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["certificateData"],
  methods: {
    parseDate(date) {
      console.log(date);
      return this.$dayjs(date, "DD-MM-YYYY HH:mm:ss").format(
        "DD MMMM YYYY HH:mm"
      );
    },
  },
};
</script>

<style scoped>
.group {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
