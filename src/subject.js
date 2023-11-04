import { Subject } from "rxjs"


document.addEventListener('click', ()=>{
    const stream$ = new Subject()

    stream$.subscribe(v=>console.log('stream value: ', v))

    stream$.next('Jello')

    setTimeout(()=>stream$.next('RxJs'), 2000)
})