import { of, from, Observable } from 'rxjs'
import { scan } from 'rxjs/operators'

// const stream$ = of(1,2,3,4)

// stream$.subscribe((val)=>{
//     console.log(val)
// })

// const arr$ = from([1,2,3,4]).pipe(scan((acc, v)=>acc.concat(v),[]))
// arr$.subscribe((v)=>console.log(v))

const stream$ = new Observable(observer => {
    console.log(observer)

    observer.next("First value")

    setTimeout(()=> observer.next('After 2s'), 2000)
    setTimeout(()=> observer.complete(), 2500)
    setTimeout(()=> observer.error('Something went wrong'), 3000)
    setTimeout(()=> observer.next('After 4s'), 4000)
})

// stream$.subscribe(
//     val=>console.log(val),
//     err=>console.log(err),
//     ()=>console.log("Complete")
// )

stream$.subscribe({
    next (val) {
        console.log(val)
    },
    error (err) {
        console.log(err)
    },
    complete () {
        console.log("Complete")
    }
})