type IsNumber<T> = T extends number ? true : false;

type NumberResult = IsNumber<42>;
// 결과: true
type StringResult = IsNumber<string>;
// 결과: false
