type GetReturnType<T> = T extends (...args: never[]) => infer R ? R : never;

function add(a: number, b: number): number {
  return a + b;
}

function sayHello(): string {
  return "안녕하세요!";
}

type AddResult = GetReturnType<typeof add>;
// 결과: number
type Greeting = GetReturnType<typeof sayHello>;
// 결과: string
