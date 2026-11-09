import { applyDiscount } from "./price.js";

const result = applyDiscount(129_000, 10);

if (result !== 116_100) {
  throw new Error(`할인 가격이 116100이 아니라 ${result}입니다.`);
}

console.log("applyDiscount 테스트 통과");
