function getUser() {
  return {
    id: 1,
    name: "김철수",
    email: "kim@email.com",
  };
}

async function fetchUser() {
  return getUser();
}

type User = ReturnType<typeof getUser>;
// 결과: { id: number; name: string; email: string }
type UserPromise = ReturnType<typeof fetchUser>;
// 결과: Promise<{ id: number; name: string; email: string }>
type AsyncUser = Awaited<UserPromise>;
// 결과: { id: number; name: string; email: string }

const user: User = getUser();
const asyncUser: AsyncUser = user;
