var userInput=document.querySelector("#user-input")
var translate=document.querySelector("#translate")
var output=document.querySelector("#output")

translate.addEventListener("click", clickHandler)

function clickHandler(){
    var inputValue=userInput.value;
    fetch(serverUrl(inputValue))
    .then(response=>{
        if(response.status===401){
            output.innerText="user not found"
        }else if (response.status===404){
            output.innerText="you are not log in"
        }else {
            output.innerText=`Great! you are good to go`
        }
    })}
    // .catch(errorHandler)


function serverUrl(text){
    var api="https://unitube-server.herokuapp.com/playlists"
    //var api="https://jsonplaceholder.typicode.com/dummyUsers"
     //var api="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
    return api+`?text=${text}`
}

// function errorHandler(){
//     alert("Server down--please try after sometime")
// }