<template>
  <div class="container">
    <div class="row center-block">
      <div class="col result-page rounded">
        <h2 class="text-center">
          Изделие
          <div id="subh">Произведено {{ creationTime }}</div>
        </h2>
        <div class="list-group">
          <div class="list-group-item d-flex align-items-center">
            <img id="small-logo" src="/ipfs-logo.png" />
            IPFS - {{ ipfsLink || "Недоступно" }}
          </div>
          <div class="list-group-item d-flex align-items-center">
            <img id="small-logo" src="/robonomics-logo.png" />
            TXN - {{ txnLink || "Недоступно" }}
          </div>
          <div class="list-group-item d-flex align-items-center">
            <img id="small-logo" src="/ma-logo.png" />
            Ссылка на сертификат - {{ shortUrl || "Недоступно" }}
          </div>
        </div>
      </div>
    </div>
    <div class="ui row fluid divider"></div>
    <div class="ui centered grid">
      <UnitLoader v-if="ipfsLink" :hash="ipfsLink" />
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
}
</style>
