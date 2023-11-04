import { interval } from "rxjs";
import { filter, map, take, tap } from 'rxjs/operators'

const stream$ = interval(1000)
    .pipe(
        tap(v=>console.log('tap: ', v)),
        map((v)=>v*3),
        filter(v=> v%2==0 ),
        take(5)
    )

stream$.subscribe({
    next: val => {
        console.log('next: ', val)
    },
    complete: () => {
        console.log('complete')
    }
})