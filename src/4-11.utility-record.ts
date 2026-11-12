type UserRole = "admin" | "user" | "guest";
type Permission = "read" | "write" | "delete";

type RolePermissions = Record<UserRole, Permission[]>;
// 결과: { admin: Permission[]; guest: Permission[]; user: Permission[] }

const permissions: RolePermissions = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"],
};
