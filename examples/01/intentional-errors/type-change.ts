// examples/01/intentional-errors/type-change.ts
function printProduct(product: {
  name: string;
  price: number;
  stock: number; // 새로 추가
}) {
  console.log(product.name, product.price, product.stock);
}

printProduct({ name: "후드", price: 49_000 });
// ❌ 오류: Property 'stock' is missing in type '{ name: string; price: number; }' but required in type '{ name: string; price: number; stock: number; }'

printProduct({ name: "티셔츠", price: 29_000 });
// ❌ 오류: Property 'stock' is missing in type '{ name: string; price: number; }' but required in type '{ name: string; price: number; stock: number; }'
