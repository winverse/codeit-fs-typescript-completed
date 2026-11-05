type PropertyType<T, K extends keyof T> =
  T extends Record<K, infer V> ? V : never;

interface User {
  id: number;
  name: string;
  email: string;
}

type IdType = PropertyType<User, "id">;
// 결과: number
type NameType = PropertyType<User, "name">;
// 결과: string
