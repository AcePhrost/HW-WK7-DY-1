const btn = document.createElement('button')
btn.innerText = 'Locate'
document.body.appendChild(btn)

// const linkApi = async (cityname) => {
//     const APIkey = 'ef6202ff17fad748bd296ecdf4319072';
//     const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=imperial`)
//     if (res.ok){
//         let data = await res.json()
//         return data
//     }
// }
// console.log(linkApi('dallas'))

const WeatherLocation = document.getElementById('WeatherLocation')

WeatherLocation.addEventListener('stats', (e) => {
    e.preventDefault()
    const WeatherLo = getWeatherLo()
    linkApi(WeatherLo)
    getweatherdata()
    showWeather()
})

function getWeatherLo(){
    const cityLo = document.querySelector('#city-Lo')
    return cityLo.data
}

function linkApi = async (WeatherLo) => {
        const APIkey = 'ef6202ff17fad748bd296ecdf4319072';
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=imperial`)
        if (res.ok){
            let data = await res.json()
            return data
        }
    
}

function getweatherdata(){}

function showWeather(){}


