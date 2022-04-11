<template>
  <div class="ui middle aligned divided list">
    <div
      class="row item"
      v-for="row in certificateData.production_stages"
      :key="row.ended_timestamp"
    >
      <div class="left floated content">
        <div class="header">
          {{
            "Начало: " +
            row.started_timestamp +
            ". Конец: " +
            row.ended_timestamp
          }}
        </div>
        <p v-for="video in row.videos" :key="video">{{ video }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["certificateData"],
};
</script>

<style></style>
