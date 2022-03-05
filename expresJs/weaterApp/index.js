// 2be6bd66d30702a0c4bb14d1d04dd408
// api.openweathermap.org/data/2.5/weather?q=Rajkot&appid=2be6bd66d30702a0c4bb14d1d04dd408

const http = require("http");
const fs = require("fs");
var requests = require("requests");

const file = fs.readFileSync("home.html", "utf-8");
const replaceVale = (tempVal,orgValue)=>{
    let temper = tempVal.replace("{%tempval%}",orgValue.main.temp);
    temper = temper.replace("{%tempmin%}",orgValue.main.temp_min);
    temper = temper.replace("{%tempmax%}",orgValue.main.temp_max);
    temper = temper.replace("{%location%}",orgValue.name);
    temper = temper.replace("{%country%}",orgValue.sys.country);
    temper = temper.replace("{%tempStauts%}",orgValue.weather[0].main);
    return temper;

}
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests('https://api.openweathermap.org/data/2.5/weather?q=Rajkot&appid=2be6bd66d30702a0c4bb14d1d04dd408')
            .on('data', (chunk)=> {
                const obj = JSON.parse(chunk)
                const arr = [obj]
                // console.log(arr[0].main.temp);
                const realTimeData = arr
                .map((val)=>replaceVale(file,val))
                .join("")
                res.write(realTimeData);
                // console.log(realTimeData);
                
            })
            .on('end',  (err)=> {
                if (err) return console.log('connection closed due to errors', err);
                res.end();
            });
    }
});

server.listen(8000,"127.0.0.1");

