{

    interface A {a:string}

    const obj = {a:'hello',b:'hi'} 
    const obj1: A = obj
    // 객체 리터럴의 경우 잉여 속성 검사가 발생한다. 


    // return값이 없는 void 타입    
    // return값으로 undefined는 가능하지만 null은 불가능함 
    

    // void 타입의 함수 크게 3가지 

    // 1. return 값이 void인 경우 
    // 2. 매개변수의 함수가 void인 경우 
    // 3. 메서드가 void인 경우 


    // 1. return 값이 void인 경우 
    // 리턴값이 존재할 수 없음 
    function a():void {
        return;
    }
 
   // 2. 매개변수가 void인 경우 
   // 매개변수의 void는 매개변수를 사용하지 않겠다는 의미 
   // 리턴값의 void는 리턴값이 없어야 한다. 
   function aa(callback:()=>void):void{

   }

   // 콜백의 리턴값이 존재할 수 있음 
   aa(()=>{
    return '3'
   })

   // 3. 메서드가 void인 경우 
    interface Human {
        talk: () => void
    }

    // 메서드의 리턴값이 존재할 수 있음 
    const human: Human = {
        talk() {return 'abc' }
    }





    // 매개변수에서의 void는 실제 리턴값이 어떤 경우든 상관하지 않음 (case 2)
    // declare 키워드를 사용하면 js로 컴파일 시에 삭제됨 
    // void !== undefined

    // 외부에서 타입 선언 된 경우 declare 키워드를 사용함 
    // declare function forEach(arr:number[], callback:(el:number)=>void):void

    // let target: number[] = []
    // forEach([1,2,3],el => {target.push(el)})
    // forEach([1,2,3],el => target.push(el))


    // any 와 unknown은 서로 다르다 .
    // any 는 타입 포기 , unknown은 어떤게 나올 지 모를 때 임시로 사용함 

    try{

    }catch(error){
        (error as Error).message
    }

} 

 