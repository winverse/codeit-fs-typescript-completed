interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type UserProfile = Pick<User, "id" | "name" | "email">;
// 결과: { id: number; name: string; email: string }

function displayUserProfile(user: UserProfile): string {
  return `${user.name} (${user.email})`;
}
