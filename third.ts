{

    type A = {a : 'hello'}
    const a : A = {a:'hello'}


    interface B { a : string }
    const b : B = { a : 'hello'}


    // union 타입 (|)
    // 여러개 중 하나의 속성만 있어도 된다. 
    // 애초에 잘못된 코드 
    // function add(x: string | number, y: string | number): string | number { return x + y }
    
    // const result:string|number = add(1,2)
    // result.charAt()  -> 결과값은 number 타입이지만 string 또는 number 타입으로 정의 , 잘못된 코드 
   


    // intersection(&)
    // &일때는 모두 포함되어 있어야 한다.(모든 속성이 다 있어야 한다.)
    type C = {hello:'world'} & {kim:'jh'}
    const c:C = {hello:'world', kim:'jh' }

    // union(|)
    // 여러가지 속성 중 한 개만 있어도 된다. 
    type D = {hello:'world'} | {kim:'jh'}
    const d:D = {kim:'jh'}


    // 타입을 상속하는 느낌 
    type Animal = {breath:true}
    type Poyouru = Animal & {breed:true}
    type Human = Poyouru & {think:true}

    const jh:Human = {breath:true , breed:true, think:true}



    interface z {
        breath:true
    }

    interface k extends z {
        breed:true
    } 

    const jjh:k = {breath:true , breed:true}


    interface alias extends Human{
        breed:true
    }

    const jjjh:alias = {breath:true,breed:true,think:true}


    // type는 중복 선언이 되지 않지만 interface는 중복 선언이 가능하다. 
    // interface는 서로간에 합쳐지는 특성이 있다. 
    // 주로 오픈소스코드 수정할 때 사용한다. 

    interface hi {
        talk:() => void
    }

    interface hi {
        eat:() => void
    }

    interface hi {
        shit:() => void
    }

    const hix:hi = {talk(){} , eat(){} , shit(){} , sleep(){}}
    console.log(hix)

    interface hi {
        sleep:() => void
    }


}