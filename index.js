

const nameInput = document.querySelector('#name');
const ratingInput = document.querySelector('#rating')

function render() {
  let dataHtml = ''
  fetch('http://localhost:3000/horrors/')
  .then(res => res.json())
  .then(data => { 
    data.map(item => {
      dataHtml += `
      <p>${item.name}, ${item.rating}</p>
      `
    })
    document.querySelector('#get').innerHTML = dataHtml
  })
}  

render()

document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault()
  fetch("http://localhost:3000/horrors", {
  method: 'POST',
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({
    "name": nameInput.value,
    "rating": ratingInput.value
  }),
  redirect: 'follow'
})
  .then(response => response.text())
  .then(result => console.log(result))
  .then(render())
  .catch(error => console.log('error', error));
});