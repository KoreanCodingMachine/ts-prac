{
    interface A {
        talk: () => void
    }
    
    const a:A = {
        talk() {return 3}
    }
    
    const b  = a.talk() as unknown as number
    b.toString()
}



