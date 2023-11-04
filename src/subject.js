import { BehaviorSubject, ReplaySubject, Subject } from "rxjs"


document.addEventListener('click', ()=>{
    const stream$ = new ReplaySubject(1) // имеет буфер повтора событий

    stream$.next('Jello')
    stream$.next('Angular')

    setTimeout(()=>stream$.next('RxJs'), 2000)

    stream$.subscribe(v=>console.log('stream value: ', v))
})