<template>
  <div v-if="!buttonChecked && !result" class="row-6">
    <Button :text-field="`Загрузить паспорт`" :on-click="checkButton"></Button>
  </div>
  <div v-else-if="buttonChecked && !result">
    <Button :loading="true" />
  </div>
  <div v-else class="row">
    <h2 class="text-center">
      {{ result.unit_name }}
      <div id="subh">
        Обновлено {{ this.$dayjs().format("DD MMMM YYYY в HH:MM") }}. Этапы
        сборки:
      </div>
    </h2>
    <UnitData :certificate-data="result" />
  </div>
</template>

<script>
import axios from "axios";
import UnitData from "./UnitData.vue";
import { useToast } from "vue-toastification";
import Button from "./UI/Button.vue";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  components: { UnitData, Button },
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
