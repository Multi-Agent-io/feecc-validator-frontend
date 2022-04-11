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
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
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
          if (data.status_code == 404) {
            this.toast.warning("Данные о изделии не найдены");
          }
          this.result = data.certificate_data;
        })
        .catch((e) => this.toast.error(e));
    },
  },
};
</script>

<style></style>
