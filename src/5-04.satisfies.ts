const shippingFees = {
  standard: 3_000,
  express: 5_000,
} satisfies Record<string, number>;

const total = 129_000 + shippingFees.express;
console.log(total); // 출력: 134000
