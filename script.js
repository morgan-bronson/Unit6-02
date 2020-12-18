'use strict'

document.getElementById('mybtn').addEventListener('click', Integer)

function Integer () {
  const input = parseInt(document.getElementById('input').value)
  if (input >= 0) {
    alert('positive')
  } else {
    alert('negative')
  }
}
