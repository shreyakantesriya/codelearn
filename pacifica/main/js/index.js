// calendar js
const date = new Date()
const renderCal = () => {
    date.setDate(1)
    const monthsDay = document.querySelector(".days")
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
        // console.log(lastDay);

    const prevDays = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const fristDayIndex = date.getDate();

    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()
    const nextDays = 7 - lastDayIndex - 1;

    document.querySelector(".calMonth h3").innerHTML = months[new Date().getMonth()]
    document.querySelector(".calMonth p").innerHTML = new Date().toDateString()

    let days = ""
        // previous Date loop
    for (let x = fristDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${(prevDays - x + 1)}</div>`
    }
    // current date loop
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getDate() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`
        } else {
            days += `<div >${i}</div>`
        }
    }

    // next Date loop
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`
        monthsDay.innerHTML = days
    }

}
renderCal()

document.querySelector(".perv").addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1)
    renderCal()
})
document.querySelector(".next").addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1)
    renderCal()
})

// weather js
let weather = {
    "apiKey": "2be6bd66d30702a0c4bb14d1d04dd408",
    fatchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey).then((res) => res.json())
            .then((data) => {
                this.displayWeather(data);
                // console.log(data);
            })
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        // console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = `Weather in ${name} `
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = `${temp} °C`
        document.querySelector(".humidity").innerText = `Humidity: ${humidity} % `
        document.querySelector(".wind").innerText = `Wind speed: ${speed} km/h `
        document.querySelector(".weather").classList.remove("loading")
            // document.weatherMain.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+name+"')"
    },
    search: function() {
        this.fatchWeather(document.querySelector(".search-bar").value)
    }
}

document.querySelector(".search .serachBtn").addEventListener("click", function() {
    weather.search()
})
document.querySelector(".search-bar").addEventListener('keyup', function(event) {
    if (event.key == "Enter") {
        weather.search()
    }
})
weather.fatchWeather("Rajkot");
weather.fatchWeather("Rajkot");