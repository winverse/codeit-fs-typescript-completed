# TypeScript 기본 완성 코드

`TypeScript 기본` 강의자료를 2장 03부터 끝까지 따라 작성한 `my-typescript-project`의 완성 상태입니다. 강의자료 코드블록 첫 줄의 경로(`src/2-01.type-inference.ts` 등)가 이 저장소의 파일 위치와 같으므로, 직접 작성한 파일과 같은 경로의 파일을 비교할 때 엽니다.

## 시작하기

```bash
pnpm install
pnpm build
```

`pnpm build`는 `src` 폴더의 TypeScript 파일을 타입 검사한 뒤 `dist` 폴더에 JavaScript 파일을 만듭니다. 만들어진 파일은 다음처럼 실행합니다.

```bash
pnpm start
node dist/2-06.object-types.js
```

`pnpm start`는 `dist/main.js`를 실행합니다. `src/2-07.unknown.ts`는 프로젝트 루트의 `price.json`을, `src/3-09.type-assertions.ts`는 `size.json`·`sizes.json`을, `src/5-03.type-guard.ts`는 `sizes.json`을 읽으므로 이 폴더에서 실행합니다.

## 5장 부록의 설정 파일

`tsconfig.json`과 `package.json`은 5장 부록까지 마친 상태입니다. 2장 03에서 작성한 `tsconfig.json`은 5장 03에서 `rootDir`·`outDir`을 빼고 `noEmit: true`를 더해 에디터와 타입 검사에만 쓰고, 빌드는 `tsconfig.json`을 상속한 `tsconfig.build.json`으로 합니다. `tsconfig.build.json`은 출력 경로(`rootDir`·`outDir`)와 5장 04에서 더한 `sourceMap`을 담습니다. `pnpm build`는 `tsc -p tsconfig.build.json`을 실행하므로 `dist`에 JavaScript 파일과 소스 맵 파일(`.js.map`)을 함께 만듭니다.

```bash
# 소스 맵을 읽어 오류 위치를 .ts 파일의 줄로 보여 줍니다
node --enable-source-maps dist/5-02.discount/main.js

# 빌드하지 않고 .ts 파일을 바로 실행합니다(타입 검사는 하지 않습니다)
node src/main.ts
```
