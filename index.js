


// fetch("http://localhost:3000/horrors", {
//   method: 'POST',
//   headers: {"Content-Type": "application/json"},
//   body: JSON.stringify({
//     "name": "test2",
//     "rating": 10
//   }),
//   redirect: 'follow'
// })
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


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