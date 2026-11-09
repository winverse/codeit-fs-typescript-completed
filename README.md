# TypeScript 기본 완성 코드

`TypeScript 기본` 강의자료를 2장 03부터 끝까지 따라 작성한 `my-typescript-project`의 완성 상태입니다. 강의자료 코드블록 첫 줄의 경로(`src/02/01.type-inference.ts` 등)가 이 저장소의 파일 위치와 같으므로, 직접 작성한 파일과 같은 경로의 파일을 비교할 때 엽니다.

## 시작하기

```bash
pnpm install
pnpm build
```

`pnpm build`는 `src` 폴더의 TypeScript 파일을 타입 검사한 뒤 `dist` 폴더에 JavaScript 파일을 만듭니다. 만들어진 파일은 다음처럼 실행합니다.

```bash
pnpm start
node dist/02/06.object-types.js
```

`pnpm start`는 `dist/main.js`를 실행합니다. `src/02/07.unknown.ts`는 프로젝트 루트의 `price.json`을, `src/03/09.type-assertions.ts`는 `size.json`·`sizes.json`을 읽으므로 이 폴더에서 실행합니다.

## 6장 설정 나누기

`tsconfig.json`과 `package.json`은 6장 04까지 마친 상태입니다. 2장 03에서 작성한 `tsconfig.json`의 옵션은 6장 03에서 `tsconfig.base.json`으로 옮겼고, 출력 경로(`rootDir`·`outDir`)는 `tsconfig.build.json`에 있습니다. 6장 04에서 더한 개발용·테스트용·배포용 설정은 프로젝트 루트에서 다음 명령으로 빌드하고 실행합니다.

```bash
# 개발용: dist-dev에 .js와 소스 맵(.js.map)을 만듭니다
pnpm build:dev
node --enable-source-maps dist-dev/06/02.discount/main.js

# 테스트용: dist-test에 테스트 파일까지 만듭니다
pnpm build:test
node --enable-source-maps dist-test/06/02.discount/price.test.js

# 배포용: dist에 테스트 파일과 소스 맵 없이 만듭니다(pnpm build와 같습니다)
pnpm build:prod
node dist/06/02.discount/main.js
```
