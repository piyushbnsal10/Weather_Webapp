var weatherForm = document.querySelector('form')
var search =document.querySelector('input')
var messageOne = document.querySelector('#messageOne')
var messageTwo = document.querySelector('#messageTwo')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    messageOne.textContent='Loading....'
    messageTwo.textContent=""

    var location=search.value
    console.log(location)
    fetch('/weather?address='+ location).then((res)=>{
        res.json().then((data)=>{
            if(data.error)
                return messageOne.textContent=data.error
            
            messageOne.textContent=data.location
            messageTwo.textContent=data.data
        })
    })
})