const apikey ="a8cb33861687f3175ae993b0eb822c1e"
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/hr";

    if (data.weather[0].main == "clouds"){
        weatherIcon.src ="clouds.png";
        }
       else if (data.weather[0].main == "Clear"){
        weatherIcon.src ="clear.png";
        }
        else if (data.weather[0].main == "Rain"){
        weatherIcon.src ="rain.png";
        }
        else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src ="drizzle.png";
        }
        else if (data.weather[0].main == "Mist"){
        weatherIcon.src ="mist.png";
        }
    }



searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
})