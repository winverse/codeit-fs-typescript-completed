enum Size {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

const productSize: Size = Size.M;
console.log(productSize); // 출력: M

function printSize(size: Size): void {
  console.log(`사이즈: ${size}`);
}

printSize(Size.L); // 출력: 사이즈: L
// printSize('L'); // ❌ 오류: 문자열 'L'은 Size 타입이 아닙니다

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

function move(direction: Direction): void {
  console.log(`이동 방향: ${direction}`);
}

move(Direction.Up); // 출력: 이동 방향: UP
move(Direction.Left); // 출력: 이동 방향: LEFT
// move('UP'); // ❌ 오류: 문자열 'UP'은 Direction 타입이 아닙니다

enum NumericDirection {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

console.log(NumericDirection.Left); // 출력: 2

function printDirection(direction: NumericDirection): void {
  console.log(`방향: ${direction}`);
}

printDirection(0); // 출력: 방향: 0

enum StringDirection {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(StringDirection.Left); // 출력: LEFT
