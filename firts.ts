function firstTime(){
    const a: number = 5
    const b: string = 'hello'
    const c: boolean = true
    const d: undefined = undefined
    const e: null = null
    const f: any = true
    const g: true = true // true만 저장  
    const z: 5 = 5; // 고정된 원시값을 넣을 수 있음 
    
    
    // 타입 추론을 적극 활용하자 
    // 만약 틀렸다면 그때서야 직접적인 타이핑 
    // any타입은 무조건 지양해야함 (타입스크립트 사용하는 의미가 사라짐)
    const str = '5'
    
    // function add(x: number, y: number): number { return x + y }
    
    // Type Alias 방식 
    // type ADD = (x:number,y:number) => number
    // const add: ADD = (x, y) => x + y;
    
    // 인터페이스 방식 
    // interface Add{
    //     (x:number,y:number):number
    // }
    
    // const add:Add = (x,y) => x+y
    
    function multiple(x:number,y:number):number {return x * y}
    const result = multiple(1,2)
    
    
    // Type Alias 방식 
    // type MINUS = (x:number,y:number) => number
    // const minus : (x:number,y:number) => number = (x,y) => x-y
    
    // interface 방식 
    
    // interface MINUS{
    //     (x:number,y:number):number
    // }
    
    // const minus:MINUS = (x,y) => x-y
    
    
    const obj: { lat: number, lon: number} = { lat: 37.5, lon: 127.5 };
    
    const arr = ['123','456']
    
    // 제네릭 타이핑
    const arr3: number[] = [123,456]
    const arr2: Array<number> = [123,456]
    
    
    // 튜플 -> 길이가 고정된 배열 
    const arr4: [number,number,string] = [123,456,'123']
    
    
    
    // 타입함수 , 선언 함수가 동시에 나오는 case도 있음 
    
    function divide(x:number,y:number):number
    
    function divide(x:any,y:any){
        return x / y
    }
    
    
    // 타입을 강제 변환하는 as 키워드가 있다.
    let aa = 123;
    aa = 'hello' as unknown as number
    
    
    
    // never 타입 
    // 빈 배열은 never 타입 
    
    try {
        const array:string[] = []
        array.push('3')
    } catch(error){
        error
    }
    
    
    // const head:Element = document.querySelector('#head')!;
    // console.log(head);
    
    // f12 , 타입 정의 확인 가능하다. 
    // ! -> head에 무조건 타입이 있다. , null 가능성 배제한다. 즉 null , undefined의 가능성을 배제함 
    // ! 사용을 지양해야함 
    
    const head = document.querySelector('#head');
    if (head) {
        head.innerHTML = 'hello'
        console.log(head);
    }
    // head?.innerHTML = 'hi'
    
    // | 는 또는을 의미한다. 
    type World = 'world' | 'hell'
    const dd:World = 'world'
    
    // type Gretting = 'hello world'
    type Gretting = `hello ${World}`
    
    // 정교한 타입 추천 가능 
    const cc:Gretting = 'hello world'
    
    
    let ar:string[] = []
    let ar2:Array<string> = []
    function rest(a:string,...args:string[]){
        console.log(a,args) // 1, [2,3]
    }
    rest('1','2','3')
    
    const tuple: [string,number] = ['1',1]
    // tuple[2] = 'hello' // Type '"hello"' is not assignable to type 'undefined'.ts(2322) , 튜플은 배열의 length가 정해져있음 
    tuple.push('hello')
    console.log(tuple)
}

