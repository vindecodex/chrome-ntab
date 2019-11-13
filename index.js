const greetings = document.querySelector("#greetings")
const bd = document.querySelector("body")
let today = new Date()
function getGreetings() {
  if (today.getHours() >= 1 && today.getHours() < 12) {
    bd.setAttribute("style","background-image: url(./img/morning.jpg);")
    return "Good Morning <br> Vindecode"
  }
  if (today.getHours() >= 12 && today.getHours() < 18) {
    bd.setAttribute("style","background-image: url(./img/afternoon.jpg);")    
    return "Good Afternoon <br> Vindecode"
  }
  if (today.getHours() >= 18 && today.getHours() < 24) {
    bd.setAttribute("style","background-image: url(./img/evening.jpg);")    
    return "Good Evening <br> Vindecode"
  }
  return "Can't Greet :("
}
greetings.innerHTML = getGreetings()

