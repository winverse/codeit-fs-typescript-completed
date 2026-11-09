interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial<User>의 결과: { id?: number; name?: string; email?: string; age?: number }
function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

const user: User = {
  id: 1,
  name: "김철수",
  email: "kim@email.com",
  age: 25,
};

console.log(updateUser(user, { name: "새 이름" }));
// 출력: { id: 1, name: '새 이름', email: 'kim@email.com', age: 25 }
