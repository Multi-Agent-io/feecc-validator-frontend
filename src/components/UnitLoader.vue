<template>
  <div v-if="!buttonChecked">
    <a class="ui button" @click="checkButton()">Загрузить паспорт</a>
  </div>
  <div v-else>
    <h2 class="ui centered header">
      {{ result.unit_name }} - Этапы сборки
      <div class="sub header">Обновлено {{ Date() }}</div>
    </h2>
    <UnitData :certificateData="result" />
  </div>
</template>

<script>
import axios from "axios";
import UnitData from "./UnitData.vue";

export default {
  components: { UnitData },
  props: {
    hash: String,
  },
  data() {
    return {
      buttonChecked: false,
      result: null,
    };
  },
  methods: {
    checkButton() {
      this.buttonChecked = !this.buttonChecked;
      this.loadData();
    },
    loadData() {
      axios
        .get("http://134.209.240.5:8084/api/v1/unit-certificate", {
          params: {
            ipfs_cid: this.hash,
          },
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          if (data.status_code != 200) {
            alert("An error occured");
          }
          this.result = data.certificate_data;
        });
    },
  },
};
</script>

<style></style>
