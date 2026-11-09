interface User {
  id: number;
  name: string;
  email: string;
}

type UserId = User["id"];

function findUserById(users: User[], id: UserId): User | undefined {
  return users.find((user) => user.id === id);
}

const users: User[] = [
  { id: 1, name: "김철수", email: "kim@email.com" },
  { id: 2, name: "이영희", email: "lee@email.com" },
];

console.log(findUserById(users, 1));
// 출력: { id: 1, name: '김철수', email: 'kim@email.com' }
// findUserById(users, "1"); // ❌ 오류: User["id"]는 number입니다.
