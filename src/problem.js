const btn = document.getElementById('interval')
const rxjsBtn = document.getElementById('rxjs')
const display = document.querySelector('#problem .result')

const people = [
  {name: 'Vladilen', age: 25},
  {name: 'Elena', age: 17},
  {name: 'Ivan', age: 18},
  {name: 'Igor', age: 14},
  {name: 'Lisa', age: 32},
  {name: 'Irina', age: 23},
  {name: 'Oleg', age: 20}
]

btn.addEventListener('click', ()=>{
  btn.disabled = true
  let i = 0
  const agree = []

  const inter = setInterval(()=>{
    if (people[i]) {
      if(people[i].age >= 18){
        agree.push(people[i].name)
      }
      display.textContent = agree.join(' ')
      i++
    } else {
      clearInterval(inter)
      btn.disabled = false
    }
  }, 1000)
})