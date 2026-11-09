type AppEvent =
  | { type: "user"; userId: number }
  | { type: "post"; postId: number }
  | { type: "error"; message: string };

type SuccessEvent = Extract<AppEvent, { type: "user" | "post" }>;
// 결과: { type: "user"; userId: number } | { type: "post"; postId: number }

const event: SuccessEvent = {
  type: "post",
  postId: 10,
};
