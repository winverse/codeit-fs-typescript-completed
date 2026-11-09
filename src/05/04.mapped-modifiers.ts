interface User {
  readonly id: number;
  name?: string;
  email: string;
}

type RequiredUser = {
  [K in keyof User]-?: User[K];
};
// 결과: { readonly id: number; name: string; email: string }

type MutableRequiredUser = {
  -readonly [K in keyof User]-?: User[K];
};
// 결과: { id: number; name: string; email: string }

const user: MutableRequiredUser = {
  id: 1,
  name: "김철수",
  email: "kim@email.com",
};

user.id = 2;
