const express = require('express')
const ejs = require('ejs')
const path = require('path')

const masterData = require('./weather.js')
const { weeklyWeather, cities } = masterData

const app = express()

// MiddleWare
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname + '/public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//localhost:3000
app.get('/', (req, res) => {
  res.render('index')
})

//localhost:3000/weather
app.get('/weather', (req, res) => {
  const data = { weeklyWeather }
  res.render('weeklyWeather', data)
})

//localhost:3000/weather/kingston
app.get('/weather/:city?', (req, res) => {
  const city = req.params.city
  res.render('cityWeatherWeekly', { city: cities[city] })
})

//localhost:3000/weather/kingston/monday
app.get('/weather/:city?/:day?', (req, res) => {
  const city = req.params.city
  const day = req.params.day.toLowerCase()
  const data = { day }

  res.render('cityWeatherDay', { city: cities[city], day: day })
})

//Step 6 - Query 1 : Find Warmest Location for a given day
app.post('/findWarmestLocation', (req, res) => {
  const data = req.body
  const dayArray = weeklyWeather[data.day] // Extracting a specific day consisting three cities

  // Making a new array including only 'feelLike' variable
  const feelLikeArr = dayArray.map((obj) => {
    return obj.feelLike
  })

  // Finding most warmest number
  const warmest = Math.max(...feelLikeArr)

  // Finding a city matching with the warmest variable
  const result = dayArray.find((obj) => {
    return obj.feelLike === warmest
  })

  res.render('warmestDay', { data, result })
})

//Step 6 - Query 2 : Find warmest Day for a given location
app.post('/findWarmestDay', (req, res) => {
  const data = req.body
  const cityInfo = cities[data.city] // Extracting a specific city consisting seven days

  const feelLikeArr = []
  let warmest, result

  //Iterate a cityInfo object.
  for (const key in cityInfo) {
    // Define an object consisting each day(Mon - Sun, which is also an object)
    const obj = cityInfo[key]

    // Adding only 'feelLike' element to a new array called 'feelLikeArr'
    feelLikeArr.push(obj.feelLike)

    // Finding most warmest number
    warmest = Math.max(...feelLikeArr)

    // Find an object matching warmest and then assign it to an empty result
    if (obj.feelLike === warmest) {
      result = obj
    }
  }
  res.render('warmestCity', { data, result })
})

//Step 6 - Query 3 : Find average weekly temperature for each of the locations
app.post('/findAverageTemp', (req, res) => {
  const data = req.body
  const cityInfo = cities[data.city]

  let cityTemperature = []

  //Iterate a cityInfo object.
  for (const key in cityInfo) {
    const obj = cityInfo[key]
    cityTemperature.push(obj.feelLike) //Assigning feelLike variables to cityTemperature array
  }

  // Calculating sum and average
  const citySum = cityTemperature.reduce((a, b) => a + b)
  const cityAvg = Math.round(citySum / cityTemperature.length)

  res.render('averageTemp', { data, cityAvg })
})

//Step 6 - Query 4 : Find all the sunny days in the week for a given locations
app.post('/findSunnyDays', (req, res) => {
  const data = req.body
  const cityInfo = cities[data.city]

  // Defining sunny days as a day incluing "sunny" word.
  const sunnyArr = []
  const word = 'sunny'

  // Iterate a cityInfo object
  for (const key in cityInfo) {
    const obj = cityInfo[key]
    const weatherInfo = obj.weather
    if (weatherInfo.includes(word)) sunnyArr.push(obj) // If 'sunny' word is included in a word, the object is added to sunnyArr.
  }
  res.render('sunnyDays', { data, sunnyArr })
})

app.listen('3000', () => {
  console.log('Server on port 3000')
})
