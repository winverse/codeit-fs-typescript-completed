interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
}

const product1: Product = {
  id: "c001",
  name: "코드잇 블랙 후드 집업",
  price: 129_000,
  membersOnly: true,
};

const product2: Product = {
  id: "d001",
  name: "코드잇 텀블러",
  price: 25_000,
};

function printProduct(product: Product): void {
  console.log(`${product.name}의 가격은 ${product.price}원입니다.`);
}

printProduct(product1); // 출력: 코드잇 블랙 후드 집업의 가격은 129000원입니다.
printProduct(product2); // 출력: 코드잇 텀블러의 가격은 25000원입니다.

interface ClothingProduct extends Product {
  sizes: string[];
  color: string;
}

const jacket: ClothingProduct = {
  id: "c002",
  name: "코드잇 자켓",
  price: 149_000,
  sizes: ["M", "L", "XL"],
  color: "navy",
};

printProduct(jacket); // 출력: 코드잇 자켓의 가격은 149000원입니다.
