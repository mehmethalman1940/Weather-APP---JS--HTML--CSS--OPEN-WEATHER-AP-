
const url = "https://api.openweathermap.org/data/2.5/ ";
const myKey = "fceecd5345b8852ab8b0f214075b629a";

const setQuery =(e) => {
    if (e.keyCode == "13") {
        getResult(searchBar.value)  
    }
}

const getResult = (cityName) => {
    let query = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myKey}&units=metric&lang=TR`
    console.log(query);
    fetch(query)
     .then(weather => {
         return weather.json()
     })
     .then(displayResult)
 }
     const displayResult = (result) => {
         console.log(result);
         let city = document.querySelector(".city");
         city.innerText = `${result.name}, ${result.sys.country}`;

         let temp = document.querySelector(".temp");
         temp.innerText = `${Math.round(result.main.temp)}˚C`

         let desc = document.querySelector(".desc");
         desc.innerText = result.weather[0].description;

         let minmax = document.querySelector(".minmax");
         minmax.innerText = `↑${Math.round(result.main.temp_max)}℃ / ↓${Math.round(result.main.temp_min)}℃`

         let wind = document.querySelector(".wind");
         wind.innerText = `💨 ${result.wind.speed}km/s`;
    }

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery);
