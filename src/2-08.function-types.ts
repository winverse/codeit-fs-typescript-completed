const stock: { [id: string]: number } = {
  c001: 3,
  c002: 1,
};
const cart: { id: string; quantity: number }[] = [];

function addToCart(id: string, quantity: number = 1): boolean {
  const count = stock[id];
  if (typeof count !== "number" || count < quantity) {
    return false;
  }

  stock[id] = count - quantity;
  cart.push({ id, quantity });

  return true;
}

addToCart("c001", 2);
addToCart("c001");
// addToCart(123, 2); // ❌ 오류: number를 string 자리에 넣을 수 없습니다

function printCart(title?: string): void {
  if (title) {
    console.log(title);
  }

  console.log(cart);
}

printCart(); // 출력: [ { id: 'c001', quantity: 2 }, { id: 'c001', quantity: 1 } ]
printCart("현재 장바구니");
// 출력:
// 현재 장바구니
// [ { id: 'c001', quantity: 2 }, { id: 'c001', quantity: 1 } ]

function addManyToCart(...ids: string[]): void {
  for (const id of ids) {
    addToCart(id);
  }
}

addManyToCart("c001", "c002");
