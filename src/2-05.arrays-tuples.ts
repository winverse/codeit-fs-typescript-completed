// string[] : 문자열 배열
const moves: string[] = ["up", "up"];
moves.push("right"); // OK
// moves.push(123); // ❌ 오류: number는 넣을 수 없습니다

// string[][] : 배열의 배열
const moveHistory: string[][] = [["up", "up"], ["right"]];

// number[] : 신발 사이즈 목록 (길이 제한 없음)
const shoeSizes: number[] = [230, 250, 280];
shoeSizes.push(300); // OK, 언제든 추가 가능

// readonly [number, number] : 캐릭터의 x, y 좌표
const position: readonly [number, number] = [3, 5];

// readonly [string, number] : 사이즈 라벨과 재고 수량
const sizeStock: readonly [string, number] = ["M", 50];

// const invalidPosition: readonly [number, number] = [3, 5, 7]; // ❌ 오류: 개수가 맞지 않습니다
// const invalidSizeStock: readonly [string, number] = [50, "M"]; // ❌ 오류: 순서가 맞지 않습니다
// position.push(7); // ❌ 오류: readonly 튜플은 변경할 수 없습니다
