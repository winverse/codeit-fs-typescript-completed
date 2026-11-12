interface User {
  id: number;
  name: string;
  email: string;
}

type ReadonlyUser = Readonly<User>;
// 결과: { readonly id: number; readonly name: string; readonly email: string }

function printUser(user: ReadonlyUser): void {
  console.log(user.name);
  // user.name = "새 이름"; // ❌ 오류: 읽기 전용 프로퍼티입니다.
}
