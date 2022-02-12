btn1.onclick = function () {
  document.body.style.backgroundColor = 'red'
}

btn2.onclick = function () {
  btn1.style.color = 'orange'
  btn3.style.color = 'orange'
}

btn3.onclick = function () {
  btn7.style.color = 'red'
}

btn4.onclick = function () {
  grass.style.display = 'block'
}

btn5.onclick = function () {
  const clonedNode = document.getElementById("btn5").cloneNode(true);
  document.querySelector("body").appendChild(clonedNode);
}

btn6.onclick = function () {
  btn1.style.display = 'none'
}

btn7.onclick = function () {
  btn1.style.display = 'inline'
  btn1.innerHTML = "Єкнопка"
}