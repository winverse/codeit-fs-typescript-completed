# TypeScript 기본 완성 코드

`TypeScript 기본` 강의자료를 2장 03부터 끝까지 따라 작성한 `my-typescript-project`의 완성 상태입니다. 강의자료 코드블록 첫 줄의 경로(`src/02/type-inference.ts` 등)가 이 저장소의 파일 위치와 같으므로, 직접 작성한 파일과 같은 경로의 파일을 비교할 때 엽니다.

## 시작하기

```bash
pnpm install
pnpm build
```

`pnpm build`는 `src` 폴더의 TypeScript 파일을 타입 검사한 뒤 `dist` 폴더에 JavaScript 파일을 만듭니다. 만들어진 파일은 다음처럼 실행합니다.

```bash
pnpm start
node dist/02/object-types.js
```

`pnpm start`는 `dist/main.js`를 실행합니다. `src/02/unknown.ts`는 프로젝트 루트의 `price.json`을, `src/05/type-assertions.ts`는 `size.json`·`sizes.json`을 읽으므로 이 폴더에서 실행합니다.

## 8장 설정 상속

`configs` 폴더는 8장 02에서 설정 파일을 나눈 결과입니다. 다음 명령으로 `configs/tsconfig.build.json`을 적용해 빌드하면 `configs/dist/main.js`가 만들어집니다.

```bash
pnpm exec tsc -p configs/tsconfig.build.json
```
