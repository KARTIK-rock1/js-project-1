const apikey = "b85e1b938f8057c9e5a0cd79350d3bf5";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const input = document.querySelector(".head input");
const button = document.querySelector(".btn-1");


async function checkweather (city) {
    let response = await fetch(apiurl + city +`&appid=${apikey}`);
    let data = await response.json();
    console.log(data);

    
    document.querySelector("h2").innerHTML = data.weather[0].description;
    document.querySelector(".c").innerHTML = data.name;
    document.querySelector(".tem").innerHTML = Math.round(data.main.temp) + "&deg;C";
    document.querySelector(".hum").innerHTML = data.main.humidity + "%";
    document.querySelector(".win").innerHTML = data.wind.speed + "kmph";
}

button.addEventListener("click", () => {
    checkweather(input.value);
});
// const url = "https://timeapi.io/api/time/current/zone?timeZone=asia";

// async function checktime() {
//     let response = await fetch(url);
//     let getdata = await response.json();
//     console.log(getdata);
// }
// checktime();