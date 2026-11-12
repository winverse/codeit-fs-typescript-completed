import fs from "fs/promises";

const sizesJson = await fs.readFile("sizes.json", "utf-8");
const parsedData: unknown = JSON.parse(sizesJson);

function hasOnlyStrings(value: unknown): value is string[] {
  return (
    Array.isArray(value) && value.every((size) => typeof size === "string")
  );
}

if (hasOnlyStrings(parsedData)) {
  console.log(parsedData.join(", ")); // 출력: S, M, L
}
