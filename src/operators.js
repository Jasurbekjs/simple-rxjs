import { interval } from "rxjs";
import { map } from 'rxjs/operators'

const stream$ = interval(1000)
    .pipe(
        map((v)=>v*3)
    )

stream$.subscribe({
    next: val => {
        console.log('next: ', val)
    },
    complete: () => {
        console.log('complete')
    }
})