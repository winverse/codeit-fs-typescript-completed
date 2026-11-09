type MaybeString = string | null | undefined;
type DefinedString = NonNullable<MaybeString>;
// 결과: string

type MixedArray = (string | number | null | undefined)[];
type CleanElement = NonNullable<MixedArray[number]>;
// 결과: string | number
