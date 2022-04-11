<template>
  <div class="ui bulleted list">
    <div class="item"
      v-for="row in certificateData.production_stages"
      :key="row.ended_timestamp"
    >
    <div class="header">{{ "Начало: " + row.started_timestamp + ". Конец: " + row.ended_timestamp }}</div>
      <p v-for="video in row.videos" :key="video">{{ video }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["certificateData"],
};
</script>

<style></style>
