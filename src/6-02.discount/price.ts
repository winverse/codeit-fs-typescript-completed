export function applyDiscount(price: number, percent: number): number {
  if (percent < 0 || percent > 100) {
    throw new Error("할인율은 0부터 100 사이여야 합니다.");
  }

  return price - (price * percent) / 100;
}
