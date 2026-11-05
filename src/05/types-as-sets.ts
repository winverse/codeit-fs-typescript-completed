type MediumSize = "M";
type ClothingSize = "S" | "M" | "L";
type ExtendedSize = ClothingSize | "FREE";

interface HasName {
  name: string;
}

interface HasPrice {
  price: number;
}

type ProductPreview = HasName & HasPrice;

const selectedSize: MediumSize = "M";
const sizeOption: ClothingSize = selectedSize;
const eventSize: ExtendedSize = "FREE";

const preview: ProductPreview = {
  name: "코드잇 블랙 후드 집업",
  price: 129_000,
};

function fail(message: string): never {
  throw new Error(message);
}

console.log(sizeOption, eventSize, preview);
// 출력: M FREE { name: '코드잇 블랙 후드 집업', price: 129000 }

try {
  fail("never 예시");
} catch (error) {
  console.log(error); // 출력: Error: never 예시 (이어서 오류가 발생한 위치가 표시됩니다)
}
