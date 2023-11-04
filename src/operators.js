import { interval } from "rxjs";
import { filter, map } from 'rxjs/operators'

const stream$ = interval(1000)
    .pipe(
        map((v)=>v*3),
        filter(v=> v%2==0 )
    )

stream$.subscribe({
    next: val => {
        console.log('next: ', val)
    },
    complete: () => {
        console.log('complete')
    }
})