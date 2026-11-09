import fs from "fs/promises";

const sizeJson = await fs.readFile("size.json", "utf-8");
const unsafeParsedData: unknown = JSON.parse(sizeJson);

// const unsafeSizes = unsafeParsedData as string[];
// console.log(unsafeSizes.join(', '));
// ↑ 컴파일은 통과하지만, 실제 값은 배열이 아니라서 실행하면 오류가 납니다.

const sizesJson = await fs.readFile("sizes.json", "utf-8");
const parsedData: unknown = JSON.parse(sizesJson);

function hasOnlyStrings(value: unknown): boolean {
  return (
    Array.isArray(value) && value.every((size) => typeof size === "string")
  );
}

if (hasOnlyStrings(parsedData)) {
  // console.log(parsedData.join(", ")); // ❌ 오류: parsedData는 아직 unknown입니다
  const sizes = parsedData as string[];
  console.log(sizes.join(", ")); // 출력: S, M, L
}
