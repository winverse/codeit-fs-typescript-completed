# TypeScript 기본 예제 모음

이 저장소는 `TypeScript 기본` 강의의 예제를 담고 있습니다. 교재 코드블록 첫 줄의 경로가 이 저장소의 파일 위치입니다.

## 시작하기

```bash
pnpm install
pnpm run check
```

`pnpm run check`는 정상 예제를 `strict` 설정으로 타입 검사하며, 타입 오류가 없으면 오류 메시지 없이 끝납니다.

## 의도적 오류 예제

`intentional-errors/` 아래 코드는 강의에서 타입 진단이나 런타임 오류를 관찰하기 위한 예제입니다. 에디터에서 열면 오류가 표시되는 것이 정상이며, `pnpm run check`의 검사 대상에서는 제외되어 있습니다.

## 8장 예제

모듈 예제는 다음 명령으로 빌드한 뒤 실행합니다. 결과는 `examples/08/modules/dist/`에 만들어집니다.

```bash
pnpm build:modules
pnpm start:modules
```

설정 상속 예제는 다음 명령으로 빌드합니다. 결과는 `examples/08/configs/extends/dist/`에 만들어집니다.

```bash
pnpm build:configs
```
