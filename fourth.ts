{

    //집합 관계로 설명하면 쉬움 

    // type A = string | number // 더 넓은 타입 
    // type B = string // 더 좁은 타입 
    // type C = string & number // 더더 좁은 타입 


    // 좁은 타입을 넓은 타입에 대입할 수는 있다. 하지만 넓은 타입을 좁은 타입에 대입할 수는 없음 


    // 객체는 상세할수록 더 좁은 타입이다. 
    type A = {name : string} // 중간 타입 
    type B = {age : number} //  중간 타입

    type AB = A | B  // 가장 넓은 타입 

    type C = A & B //  가장 좁은 타입   {name:string , age : number}



    // 좁은 타입을 넓은 타입에 대입하는 경우  
    const c: C = {name:'jh',age:10} // 좁은 타입 
    const ab: AB = c // 넓은 타입 
   

    const name: AB = {name:'jh'}
    // const alis: C = {name:'jh' , age : 10 , married:false}  // 잉여 속성 검사 + 타입이 넓은지 좁은지
    // 위 구문은 기본적으로 좁은 타입을 넓은 타입에 대입함으로 성립해야 하지만 잉여 속성 검사 때문에 성립하지 않는다. 

    // 에러 해결 방법 
    const obj = {name:'jh' , age : 10 , married:false}
    const alias: C = obj

    // 함수의 규칙은 나중에 

}