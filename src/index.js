
const init = ()=> {
    fetch('http://localhost:3000/ramens')
    .then(response => response.json())
}   .then(data => console.log(data))






document.addEventListener('DOMContenLoader', init)