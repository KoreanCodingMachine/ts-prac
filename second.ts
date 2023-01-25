// js 코드상에서 사라짐 
/* 
enum 타입 -> 
Enum은 숫자 혹은 문자열 값 집합에 이름(Member)을 부여할 수 있는 타입으로, 
값의 종류가 일정한 범위로 정해져 있는 경우 유용합니다.
기본적으로 0부터 시작하며 값은 1씩 증가합니다.
*/
const enum EDirection {
    Up = 3,
    Down,
    Left,
    Right 
}


const enum Day {
    sun,
    mon,
    tue,
    wed,
    thu,
    fri,
    sat
}

console.log(Day.sun) // 0
console.log(Day.wed) // 3

// js 코드상에서 사라지지 않음 
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
  } as const



// Using the enum as a parameter
function walk(dir: EDirection) {}
 
// It requires an extra line to pull out the keys
type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}
 
walk(EDirection.Left);
run(ODirection.Right);