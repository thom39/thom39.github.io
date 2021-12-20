console.log(`Final`)
let userin = document.querySelector('.enttxt');
let checkval = document.querySelector('.check');
let result = document.querySelector('.rltbox');
let winmg = document.querySelector('.win')
let score = 10
let highscore = 0
let hghpass = 0
let list1 = document.querySelector('.list1')
let list2 = document.querySelector('.list2')
let list3 = document.querySelector('.list3')
let list4 = document.querySelector('.list4')
let list5 = document.querySelector('.list5')
let list6 = document.querySelector('.list6')
let list7 = document.querySelector('.list7')
let list8 = document.querySelector('.list8')
let list9 = document.querySelector('.list9')
let list10 = document.querySelector('.list10')
let listgroup = [list1, list2, list3, list4, list5, list6, list7, list8, list9, list10]
let guess = []
let coun = -1
let scoremsg = document.querySelector('.score1')
let winbox = document.querySelector('.box2')
let gamebox = document.querySelector('.box')
let losebox = document.querySelector('.box3')
let hghscore = document.querySelector('.score2')
let losemsg = document.querySelector('.rltbox3')
let winmsg = document.querySelector('.rltbox2')
let button = document.querySelector('.btn1')
let button2 = document.querySelector('.btn2')
let button3 = document.querySelector('.btn')
let box2 = document.querySelector('.gamebox')
let box3 = document.querySelector('.box3')
function checkscore() {
if (highscore < score) {
  hghscore.textContent = `High Score: ${score}`
  highscore = score
}
}
function rangen() {
  return Math.floor(Math.random() * 100) + 1;
}
let rannum = rangen()
checkval.addEventListener('click', function () {
  coun = coun + 1
  if (userin.value == rannum) {
    console.log(rannum)
    winmsg.textContent = `You win!! The secret number was ${rannum}`
    guess.push(userin.value)
    winbox.classList.remove('hidden');
    gamebox.classList.add('hidden')
    checkscore()
  }
  else if (userin.value == false) {
    result.innerHTML = `No input detected!!!`
  }
  else if (userin.value < rannum) {
    console.log(rannum)
    result.textContent = `Too low. Guess higher!!!`
    score = score - 1
    scoremsg.innerHTML = `Score: ${score}`
    console.log(`score is ${score}`)
    guess.push(userin.value)
    hghpass = score
  }
  else {
    console.log(rannum)
    result.textContent = `Too high. Guess lower!!!`
    score = score - 1
    scoremsg.innerHTML = `Score: ${score}`
    console.log(`score is ${score}`)
    guess.push(userin.value)
    hghpass = score
  }
  if (score === 0) {
    losemsg.textContent = `You lose. The number was ${rannum}`
    losebox.classList.remove('hidden');
    gamebox.classList.add('hidden')
  }
  listgroup[coun].innerHTML = guess[coun]
})

const reset = function() {
  winbox.classList.add('hidden')
  gamebox.classList.remove('hidden')
  losebox.classList.add('hidden');
  score = 10
  guess.length = 0
  coun = -1
  rannum = rangen()
  for (let i = 0; i < listgroup.length; i++) {
    listgroup[i].innerHTML = ``
  }
}
const reset2 = function() {
  score = 10
  guess.length = 0
  coun = -1
  rannum = rangen()
  for (let i = 0; i < listgroup.length; i++) {
    listgroup[i].innerHTML = ``
  }
}
button.addEventListener('click', reset)
button2.addEventListener('click', reset)
button3.addEventListener('click', reset2)
