"use strict";

const inputval = document.getElementById("location-input");
const forcastBtn  = document.getElementById("btn");
const city = document.querySelector(".weather-location");
const description = document.querySelector(".weather-status"); // sky condition
const temp = document.querySelector(".temperature-value");
const wind = document.querySelector(".windspeed-value1");
const humidity = document.querySelector(".humidity-value1");

const imgWeather = document.getElementById(".image-weather");

const mainScreen = document.querySelector(".outerSection");
let api = "9319237f58a94baf62cd2a7e595d40ce";

function convertion(val)
{
    return (val - 273).toFixed(2)
}


forcastBtn.addEventListener("click", function(e) {
    e.preventDefault();
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+api)
    .then(res => res.json())


    .then(data =>
        {
            var nameval = data['name']
            var main = data['weather']['0']['main']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']
            var humVal = data['main']['humidity']

            city.innerHTML= nameval;
            temp.innerHTML = convertion(tempature);
            description.innerHTML = main;
            wind.innerHTML = wndspd;
            humidity.innerHTML = humVal;
            // imgWeather.innerHTML = `<img id="image-weather" src="./assets/New folder/${main}.png" alt="weather image" />`
        })

        .catch(err => alert("Invalid city name"));
});