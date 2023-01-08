let textArea = document.querySelector("#textarea");
let transButton = document.querySelector("#tButton");
let outputText = document.querySelector("#output");

let apiUrl = "https://api.funtranslations.com/translate/dothraki.json"

function getFetchUrl(input) {
    return apiUrl + "?text=" + input
}
function errorHandler(error) {
    console.log("Error has Occured ! : " + error);
    alert("Something went wrong with server!\nPlease try after some time");
}
transButton.addEventListener("click", function clickEventHandler() {
    let inputText = textArea.value
    // fetching API
    fetch(getFetchUrl(inputText))
        .then(Response => Response.json())
        .then(json => {
            let finaloutput = json.contents.translated;
            outputText.innerText = finaloutput;
        }).catch(errorHandler)
});

/*
var btnTranslate = document.querySelector("#tButton");

var txtInput = document.querySelector("textarea");

var outputDiv = document.querySelector("#output");

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function gerTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error occured",error);
    alert("Something wrong with the server, try again after sometime");
}

function clickEventHandler(){
    //outputDiv.innerText = "ajsajsajsajas " + txtInput.value;

    var inputText = txtInput.value; //Taking input

    //calling server
    fetch(gerTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler)
*/