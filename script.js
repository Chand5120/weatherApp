const inputval = document.querySelector(".textArea");
const forcastBtn  = document.querySelector(".btnSubmit");
const city = document.querySelector(".headingH4");
const descrip = document.querySelector(".description");
const temp = document.querySelector(".temp1");
const wind = document.querySelector(".windSpeed");
const mainScreen = document.querySelector(".outerSection");
const modal = document.querySelector(".modalWindow");
const exitButton = document.querySelector(".exitBtn");
let api = "9319237f58a94baf62cd2a7e595d40ce";

function convertion(val)
{
    return (val - 273).toFixed(2)
}

forcastBtn.addEventListener("click", function() {
    mainScreen.classList.add("hidden");
    modal.classList.remove("hidden");

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+api)
    .then(res => res.json())


    .then(data =>
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']
            city.innerHTML=`Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
            descrip.innerHTML = `Sky Conditions: ${descrip}`
            // descrip.innerHTML = `Sky Conditions: <span>${descrip}<span>`
            wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
        })

        .catch(err => alert("Invalid city name"))
});

exitButton.addEventListener("click", function() {
    mainScreen.classList.remove("hidden");
    modal.classList.add("hidden");
})