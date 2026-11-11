interface User {
  id: number;
  name: string;
  email: string;
}

type OptionalUser = {
  [K in keyof User]?: User[K];
};
// 결과: { id?: number; name?: string; email?: string }

type StringifiedUser = {
  [K in keyof User]: string;
};
// 결과: { id: string; name: string; email: string }

const updates: OptionalUser = { name: "새 이름" };
const formValues: StringifiedUser = {
  id: "1",
  name: "김철수",
  email: "kim@email.com",
};

console.log(updates, formValues);
// 출력: { name: '새 이름' } { id: '1', name: '김철수', email: 'kim@email.com' }
