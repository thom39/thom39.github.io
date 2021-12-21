console.log(`Final`)
let yeet = document.querySelector('.yeet')
let yeet2 = document.querySelector('.yeet2')
function yeetfun() {
  document.body.style.backgroundColor = "purple";
}
function yeetfun2() {
  document.body.style.backgroundColor = "black";
}
yeet.addEventListener('mouseover', yeetfun)
yeet.addEventListener('mouseout', yeetfun2)
yeet2.addEventListener('mouseover', yeetfun)
yeet2.addEventListener('mouseout', yeetfun2)
