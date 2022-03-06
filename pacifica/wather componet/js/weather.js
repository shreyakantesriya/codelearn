// 2be6bd66d30702a0c4bb14d1d04dd408
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let weather = {
    "apiKey": "2be6bd66d30702a0c4bb14d1d04dd408",
    fatchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey).then((res) => res.json())
            .then((data) => {
                this.displayWeather(data);
                // console.log(data);
            })
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = `Weather in ${name} `
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = `${temp} °C`
        document.querySelector(".humidity").innerText = `Humidity: ${humidity} % `
        document.querySelector(".wind").innerText = `Wind speed: ${speed} km/h `
        document.querySelector(".weather").classList.remove("loading")
        // document.weatherMain.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+name+"')"
    },
    search: function () {
        this.fatchWeather(document.querySelector(".search-bar").value)
    }
}

document.querySelector(".search button").addEventListener("click", function () {
    weather.search()
})
document.querySelector(".search-bar").addEventListener('keyup',function(event){
if(event.key=="Enter"){
    weather.search()
}
})
weather.fatchWeather("Rajkot");