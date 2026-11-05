const unsafeParsedData: unknown = JSON.parse('{"size":"M"}');

// const unsafeSizes = unsafeParsedData as string[];
// console.log(unsafeSizes.join(', '));
// ↑ 컴파일은 통과하지만, 실제 값은 배열이 아니라서 실행하면 오류가 납니다.

const parsedData: unknown = JSON.parse('["S", "M", "L"]');

function hasOnlyStrings(value: unknown): boolean {
  return (
    Array.isArray(value) && value.every((size) => typeof size === "string")
  );
}

if (hasOnlyStrings(parsedData)) {
  const sizes = parsedData as string[];
  console.log(sizes.join(", ")); // 출력: S, M, L
}
