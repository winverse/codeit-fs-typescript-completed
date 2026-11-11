import fs from "fs/promises";

const priceJson = await fs.readFile("price.json", "utf-8");

const unsafePrice: any = JSON.parse(priceJson);
console.log(unsafePrice * 0.9); // 출력: NaN

const parsedPrice: unknown = JSON.parse(priceJson);

// console.log(parsedPrice * 0.9); // ❌ 오류: unknown은 바로 계산할 수 없습니다

if (typeof parsedPrice === "number") {
  console.log(parsedPrice * 0.9);
} else {
  console.log("숫자 데이터가 아닙니다."); // 출력: 숫자 데이터가 아닙니다.
}
