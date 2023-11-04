import { of, from } from 'rxjs'

// const stream$ = of(1,2,3,4)

// stream$.subscribe((val)=>{
//     console.log(val)
// })

const arr$ = from([1,2,3,4])
arr$.subscribe((v)=>console.log(v))