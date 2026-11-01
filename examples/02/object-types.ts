// examples/02/object-types.ts
const memberProduct: {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
  sizes: string[];
} = {
  id: "c001",
  name: "코드잇 블랙 후드",
  price: 129_000,
  membersOnly: true,
  sizes: ["M", "L", "XL"],
};

const guestProduct: {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
  sizes: string[];
} = {
  id: "c002",
  name: "코드잇 화이트 후드",
  price: 119_000,
  sizes: ["S", "M"],
};

if (memberProduct.membersOnly) {
  console.log("회원 전용 상품"); // 출력: 회원 전용 상품
}

console.log(guestProduct.membersOnly); // 출력: undefined

const stock: { [id: string]: number } = {
  c001: 3,
  c002: 0,
  c003: 1,
};

stock["c004"] = 5; // OK
// stock["c005"] = "없음"; // ❌ 오류: 값은 number여야 합니다

console.log(stock["c001"], stock["c004"]); // 출력: 3 5
