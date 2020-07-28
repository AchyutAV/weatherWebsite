console.log("javascript gets loaded! done");


fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data);
        
    })
})



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#displayContainer')
const messageTwo = document.querySelector('#displayContainer2')
if(weatherForm){
    weatherForm.addEventListener('submit', (e) => {
        e.preventDefault()
        messageOne.textContent = "Loading..."
        messageTwo.textContent = ""
        fetch('http://localhost:3000/weather?address='+search.value).then((response) => {
    response.json().then((data) => {
        if(data.error){
            messageOne.textContent = data.error
            
        }else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast   
        }
    })
})
    })
}
