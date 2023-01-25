
// unknown일때를 제외하고는 as를 거의 사용하지 않는다. -> 타입가드 사용 

function numOrStr(a: number | string) {
  
    // 타입가드 
    if (typeof a === 'string') {
      a.split(',');  
    } else {
      a.toFixed(1);
    }

    // a.toFixed(1)

    // if (typeof a === 'boolean'){
    //     a.toString() // a의 타입은 never -> 사용 불가 
    // }

}

// 타입가드 
// 원시값의 경우 -> typeof
// 배열인경우 -> Array.isArray()


function numOrNumArr(a: number | number[]) {
    if (Array.isArray(a)) {
      a.slice(1);  
    } else {
      a.toFixed(1);
    }
  }

// class는 그 자체로 타입의 이름이 될 수 있다. 
class A


