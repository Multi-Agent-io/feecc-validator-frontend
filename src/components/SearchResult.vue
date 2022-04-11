<template>
  <div class="ui centered padded grid text segment">
    <div class="row">
      <h2 class="ui centered header">
        Изделие
        <div class="sub header">Произведено {{ creationTime }}</div>
      </h2>
    </div>
    <div class="ui list">
      <div class="item">
        <div class="left floated content">
          <img class="ui avatar image" src="/ipfs-logo.png" />
          IPFS - {{ ipfsLink || "Недоступно" }}
        </div>
      </div>
      <div class="item">
        <div class="left floated content">
          <img class="ui avatar image" src="/robonomics-logo.png" />
          TXN - {{ txnLink || "Недоступно" }}
        </div>
      </div>
      <div class="item">
        <div class="left floated content">
          <img class="ui avatar image" src="/ma-logo.png" />
          Ссылка на сертификат - {{ shortUrl || "Недоступно" }}
        </div>
      </div>
    </div>
    <div class="ui centered padded grid text segment">
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

<style></style>
