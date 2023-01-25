{


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
// 하지만 class의 instance를 의미한다. 

class A {
    aaa() {}
}

class B {
    bbb() {}
}


function aOrB(param:A | B){
    if(param instanceof A){
        param.aaa()
    }else{
        param.bbb()
    }
}

aOrB(new A())
aOrB(new B())


}


{

    // 객체간의 타입 검사 서로 차이를 만들어줘야함 
    // type이 다름 , 속성의 이름이 다름 

    type B = { type: 'b', bbb: string };
    type C = { type: 'c', ccc: string };
    type D = { type: 'd', ddd: string };
    type A = B | C | D;
    
    // 값으로 구분하는 경우
    function typeCheck(a: A) {
        if (a.type === 'b') {
            a.bbb;
        } else if (a.type === 'c') {
            a.ccc;
        } else {
            a.ddd;
        }
    }

    // 속성으로 구분하는 경우 
    function typeCheck2(a:A){
        if('bbb' in a){
            a.bbb
        } else if ('ccc' in a){
            a.ccc
        } else {
            a.ddd
        }
    }


    // 객체 생성이 type을 넣는 습관을 기르는게 좋음 

    const human = {type:'human'}
    const dog = {type:'dog'}
    const cat = {type:'cat'}


}