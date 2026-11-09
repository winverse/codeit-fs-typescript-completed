type ArrayElement<T> = T extends (infer U)[] ? U : never;

const fruits = ["apple", "banana", "orange"];
type Fruit = ArrayElement<typeof fruits>;
// 결과: string

const numbers = [1, 2, 3, 4, 5];
type NumberElement = ArrayElement<typeof numbers>;
// 결과: number
