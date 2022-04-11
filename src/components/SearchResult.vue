<template>
  <div class="ui raised very padded text container segment">
    <h2 class="ui centered header">
      Изделие
      <div class="sub header">Произведено {{ creationTime }}</div>
    </h2>
    <div class="ui list">
      <div class="item">
        <div class="content">
          <img class="ui avatar image" src="/ipfs-logo.png" />
          IPFS Hash - {{ ipfsLink || "Недоступно" }}
        </div>
      </div>
      <div class="item">
        <div class="content">
          <img class="ui avatar image" src="/robonomics-logo.png" />
          TXN Hash - {{ txnLink || "Недоступно" }}
        </div>
      </div>
      <div class="item">
        <div class="content">
          <img class="ui avatar image" src="/ma-logo.png" />
          Ссылка на паспорт - {{ shortUrl || "Недоступно" }}
        </div>
      </div>
    </div>
    <p></p>
  </div>
</template>

<script>
export default {
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
