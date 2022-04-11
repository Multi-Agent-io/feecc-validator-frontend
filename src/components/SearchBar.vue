<template>
  <div class="row">
    <div class="ui action input">
      <select class="ui compact selection dropdown">
        <option disabled selected="">Option:</option>
        <option
          v-for="opt in availableOptions"
          :key="opt.name"
          @click="replace(opt.id)"
        >
          {{ opt.name }}
        </option>
      </select>
      <input
        type="text"
        v-bind:placeholder="selected.value"
        v-model="enteredValue"
      />
      <div class="ui button" @click="onSearch()">
        <i class="ui search icon" />
      </div>
    </div>
  </div>
  <div class="row" v-if="result">
    <SearchResult
      :creationTime="Date(result.creation_time)"
      :ipfsLink="result.ipfs_link"
      :txnLink="result.txn_link"
      :shortUrl="result.passport_short_url"
    />
  </div>
</template>

<script>
import axios from "axios";
import SearchResult from "./SearchResult.vue";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  components: {
    SearchResult,
  },
  data() {
    return {
      availableOptions: [
        {
          id: 0,
          name: "Int. Id",
          value: "Enter Internal ID",
          request: "internal_id",
        },
        { id: 1, name: "URL", value: "Enter short link", request: "short_url" },
        { id: 2, name: "UUID", value: "Enter uuid", request: "uuid" },
        { id: 3, name: "IPFS", value: "Enter IPFS Hash", request: "ipfs_cid" },
        { id: 4, name: "TXN", value: "Enter TXN Hash", request: "txn_hash" },
      ],
      selected: { value: "Поиск по:", request: null },
      enteredValue: null,
      result: null,
    };
  },
  methods: {
    replace(id) {
      this.selected = this.availableOptions[id];
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
