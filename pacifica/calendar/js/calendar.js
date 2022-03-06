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

    document.querySelector(".calMonth h1").innerHTML = months[new Date().getMonth()]
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

// console.log(date);
// console.log(months);