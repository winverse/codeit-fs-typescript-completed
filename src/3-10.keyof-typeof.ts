const product = {
  id: "c001",
  name: "코드잇 블랙 후드 집업",
  price: 129_000,
  membersOnly: true,
};

type ProductFromValue = typeof product;
type ProductProperty = keyof typeof product;

const productTableKeys: ProductProperty[] = ["name", "price", "membersOnly"];

function printProductValue(item: ProductFromValue, key: ProductProperty) {
  console.log(`${key} | ${item[key]}`);
}

for (const key of productTableKeys) {
  printProductValue(product, key);
}
// 출력:
// name | 코드잇 블랙 후드 집업
// price | 129000
// membersOnly | true

const product2: typeof product = {
  id: "c002",
  name: "코드잇 텀블러",
  price: 25_000,
  membersOnly: false,
};

const product3: ProductFromValue = {
  id: "c003",
  name: "코드잇 머그컵",
  price: 19_000,
  membersOnly: false,
};

console.log(product2, product3);
// 출력: { id: 'c002', name: '코드잇 텀블러', price: 25000, membersOnly: false } { id: 'c003', name: '코드잇 머그컵', price: 19000, membersOnly: false }
