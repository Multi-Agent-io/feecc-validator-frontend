const availableOptions = [
  {
    id: 0,
    name: "ID",
    value: "Введите внутренний ID",
    request: "internal_id",
  },
  { id: 1, name: "URL", value: "Введите ссылку", request: "short_url" },
  { id: 2, name: "UUID", value: "Введите UUID", request: "uuid" },
  {
    id: 3,
    name: "IPFS",
    value: "Введите IPFS Hash",
    request: "ipfs_cid",
  },
  { id: 4, name: "TXN", value: "Введите TXN Hash", request: "txn_hash" },
];

export default availableOptions;
