type GetReturnType<T> = T extends (...args: never[]) => infer R ? R : never;

function add(a: number, b: number): number {
  return a + b;
}

type AddResult = GetReturnType<typeof add>;
// 결과: number

type ArrayElement<T> = T extends (infer U)[] ? U : never;

const fruits = ["apple", "banana", "orange"];
type Fruit = ArrayElement<typeof fruits>;
// 결과: string
