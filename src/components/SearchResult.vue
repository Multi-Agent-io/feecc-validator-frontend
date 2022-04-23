<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col result-page rounded">
        <h2 class="text-center">
          Изделие
          <div id="subh">
            Произведено
            {{ this.$dayjs(creationTime).format("DD MMMM YYYY в HH:MM") }}
          </div>
        </h2>
        <div class="list-group">
          <div
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              <img id="small-logo" src="/ipfs-logo.png" />
              IPFS
            </span>
            <a class="badge bg-primary" v-if="ipfsLink" :href="ipfsLink">
              <span class="material-icons">launch</span>
            </a>
            <a class="badge bg-secondary disabled" v-else>
              <span class="material-icons">hide_source</span>
            </a>
          </div>
          <div
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              <img id="small-logo" src="/robonomics-logo.png" />
              TXN
            </span>
            <a class="badge bg-primary" v-if="txnLink" :href="txnLink">
              <span class="material-icons">launch</span>
            </a>
            <a class="badge bg-secondary disabled" v-else>
              <span class="material-icons">hide_source</span>
            </a>
          </div>
          <div
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              <img id="small-logo" src="/ma-logo.png" />
              Сертификат
            </span>
            <a class="badge bg-primary" v-if="shortUrl" :href="shortUrl">
              <span class="material-icons">launch</span>
            </a>
            <a class="badge bg-secondary disabled" v-else>
              <span class="material-icons">hide_source</span>
            </a>
          </div>
        </div>
        <div class="row justify-content-center" id="loaded-unit">
          <div class="col-auto">
            <UnitLoader v-if="ipfsLink" :hash="ipfsLink" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UnitLoader from "./UnitLoader.vue";

export default {
  components: { UnitLoader },
  props: {
    creationTime: String,
    ipfsLink: {
      type: [String, null],
    },
    txnLink: {
      type: [String, null],
    },
    shortUrl: {
      type: [String, null],
    },
  },
};
</script>

<style>
.result-page {
  background-color: white;
  padding-top: 10px;
  padding-bottom: 10px;
}
#small-logo {
  width: 25px;
  height: auto;
  margin-right: 5px;
  margin-left: 5px;
}
#subh {
  color: gray;
  font-size: 16px;
  padding-bottom: 10px;
  margin-right: 100px;
  margin-left: 100px;
}
#loaded-unit {
  padding-top: 10px;
}
</style>
