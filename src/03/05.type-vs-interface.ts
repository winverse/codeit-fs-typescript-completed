type Point = [number, number]; // 튜플 → type

interface Entity {
  // 객체 공통 구조 → interface
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Monster extends Entity {
  name: string;
  level: number;
  hasGold?: boolean;
  skills: string[];
  move: (fromPoint: Point, toPoint: Point) => void;
}

interface Npc extends Entity {
  name: string;
  dialog: string;
}

function getDiff(fromPoint: Point, toPoint: Point): Point {
  const dx = toPoint[0] - fromPoint[0];
  const dy = toPoint[1] - fromPoint[1];
  return [dx, dy];
}

const monster: Monster = {
  id: "g001",
  name: "고블린",
  level: 22,
  skills: ["태권도", "특공무술"],
  move(fromPoint, toPoint) {
    const [dx, dy] = getDiff(fromPoint, toPoint);
    console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);
  },
  createdAt: new Date(),
  updatedAt: new Date(),
};

const npc: Npc = {
  id: "n001",
  name: "상인",
  dialog: "희귀 아이템을 보고 가세요.",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const current: Point = [0, 0];
const target: Point = [4, 5];

monster.move(current, target); // 출력: 오른쪽으로 4 위쪽으로 5 만큼 이동!
console.log(npc.dialog); // 출력: 희귀 아이템을 보고 가세요.
