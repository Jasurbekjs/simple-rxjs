import { BehaviorSubject, Subject } from "rxjs"


document.addEventListener('click', ()=>{
    const stream$ = new BehaviorSubject('First') // тот же Subject, но имеет значение по умолчанию, и показывает последнее событие если подписка после событий

    stream$.subscribe(v=>console.log('stream value: ', v))

    stream$.next('Jello')

    setTimeout(()=>stream$.next('RxJs'), 2000)
})