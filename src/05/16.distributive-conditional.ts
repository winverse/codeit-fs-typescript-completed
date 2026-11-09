type ToArray<T> = T extends unknown ? T[] : never;

type UnionArray = ToArray<string | number>;
// 결과: string[] | number[]

type WithoutNull<T> = T extends null | undefined ? never : T;

type CleanValue = WithoutNull<string | number | null | undefined>;
// 결과: string | number
