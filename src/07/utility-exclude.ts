type MouseEventName = "click" | "mousedown" | "mouseup" | "mousemove";
type KeyboardEventName = "keydown" | "keyup" | "keypress";
type AppEventName = MouseEventName | KeyboardEventName;

type NonClickEvent = Exclude<AppEventName, "click">;
// 결과: "mousedown" | "mouseup" | "mousemove" | "keydown" | "keyup" | "keypress"
type NonMouseEvent = Exclude<AppEventName, MouseEventName>;
// 결과: "keydown" | "keyup" | "keypress"

const keyboardEvent: NonMouseEvent = "keydown";
