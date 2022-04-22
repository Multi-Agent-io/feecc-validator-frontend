<template>
  <div class="container">
    <div class="row center-block">
      <div class="input-group">
        <Selector :options="availableOptions" :on-click="replace" />
        <InputField
          :selectedValue="selected.value"
          :enteredValue="enteredValue"
          :onUpdate="updateField"
        />
        <Button :textField="`Найти`" :onClick="onSearch" />
      </div>
    </div>
    <div class="row" v-if="result">
      <div class="col" id="search-res">
        <SearchResult
          :creationTime="Date(result.creation_time)"
          :ipfsLink="result.ipfs_link"
          :txnLink="result.txn_link"
          :shortUrl="result.passport_short_url"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchResult from "./SearchResult.vue";
import { useToast } from "vue-toastification";
import Selector from "./UI/Selector.vue";
import availableOptions from "../common/options.js";
import InputField from "./UI/InputField.vue";
import Button from "./UI/Button.vue";

export default {
  setup() {
    console.log(availableOptions);
    const toast = useToast();
    return { toast };
  },
  components: {
    SearchResult,
    Selector,
    InputField,
    Button,
  },
  data() {
    return {
      availableOptions: availableOptions,
      selected: availableOptions[0],
      enteredValue: null,
      result: null,
    };
  },
  methods: {
    replace(id) {
      console.log(id);
      this.selected = availableOptions[id];
    },
    updateField(value) {
      console.log(value);
      this.enteredValue = value;
    },
    onSearch() {
      if (!this.selected.request) {
        this.toast.error(
          "Вы не указали тип значения, по которому будет произведен поиск"
        );
        return;
      }
      if (!this.enteredValue) {
        this.toast.error("Вы не ввели значение");
        return;
      }
      console.log(` ${this.enteredValue}`);
      this.getData(this.enteredValue);
    },
    getData() {
      let request = {
        params: {
          key_type: this.selected.request,
          key_value: this.enteredValue,
        },
      };
      axios
        .get("http://134.209.240.5:8084/api/v1/unit-data", request)
        .then((response) => {
          const data = response.data;
          console.log(data);
          if (data.status_code == 404) {
            this.toast.warning("Изделие не найдено");
            return;
          }
          this.result = data.unit_data;
        })
        .catch((e) => {
          this.toast.warning("Произошла ошибка при подключении к серверу");
          console.log(e);
        });
    },
  },
};
</script>

<style>
.center-block {
    display: table;  /* Instead of display:block */
    margin-left: auto;
    margin-right: auto;
}
#search-res {
  padding-top: 25px;
}
</style>