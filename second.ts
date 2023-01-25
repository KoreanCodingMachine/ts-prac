// js 코드상에서 사라짐 

/* 
enum 타입 -> 
Enum은 숫자 혹은 문자열 값 집합에 이름(Member)을 부여할 수 있는 타입으로, 
값의 종류가 일정한 범위로 정해져 있는 경우 유용합니다.
기본적으로 0부터 시작하며 값은 1씩 증가합니다.
*/
{
    
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


// enum타입은 수동으로 값을 변경할 수 있음 , 값을 변경한 부분부터 다시 1씩 증가한다. 

enum Week {
    sun=0,
    mon=23,
    tue,
    wed,
    thu
}


console.log(Week.tue) // 24


// enum 타입은 역방향 매핑을 지원한다. (값으로 멤버에 접근할 수 있음 )

console.log(Week)
console.log(Week.mon)
console.log(Week['sun'])
console.log(Week[0])


// Enum은 문자열 값으로 초기화 할 수 있음 
// 역방향 매핑을 지원하지 않음 

enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
  }
  console.log(Color.Red); // red
  console.log(Color['Green']); // green
  console.log(Color)

// js 코드상에서 사라지지 않음 
// as const를 선언하면 readOnly , 즉 엄격한 타입체크 

const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
  } as const



// Using the enum as a parameter 
// enum타입을 함수의 파라미터로 사용할 수도 있음 
function walk(dir: EDirection) {}
 


// js의 기본값은 타입으로 사용할 수 없기 때문에 keyof typeof로 사용해야한다.
const obj = {a:'123',b:'hello',c:'world'} as const

type Key = typeof obj[keyof typeof obj] // value를 타입으로 지정 
type key2 = keyof typeof obj // key를 타입으로 지정 

// It requires an extra line to pull out the keys
type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}
 
walk(EDirection.Left);
run(ODirection.Right);







enum Brand {
    Nike = 'nike',
    Adidas = 'adidas',
    Puma = 'puma'
}



}