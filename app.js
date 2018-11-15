var form = document.getElementById('add-item')
var input = document.getElementById('input')
var list = document.getElementById('list')

function addItem(e) {
  // this prevents page reloads and lossing of form data
  e.preventDefault()
  // this grabs in user input
  var item = input.Value

  // puts user input into a ul
  list.innerHTML += "<li>" + item + "</li>"

  form.reset()
}

form.addEventListener('submit', addItem)