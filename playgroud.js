const monday = [
  {
    day: 'monday',
    location: 'Kingston',
    weather: 'Light rain',
    feelLike: 22,
    POP: '80%',
    wind: '25W',
  },
  {
    day: 'monday',
    location: 'Toronto',
    weather: 'Light rain',
    feelLike: 24,
    POP: '80%',
    wind: '12SE',
  },
  {
    day: 'monday',
    location: 'Ottawa',
    weather: 'Rain',
    feelLike: 15,
    POP: '90%',
    wind: '14SW',
  },
]

const tuesday = [
  {
    day: 'tuesday',
    location: 'Kingston',
    weather: 'Cloudy with showers',
    feelLike: 21,
    POP: '70%',
    wind: '15NE',
  },
  {
    day: 'tuesday',
    location: 'Toronto',
    weather: 'Mainly sunny',
    feelLike: 31,
    POP: '10%',
    wind: '16SW',
  },
  {
    day: 'tuesday',
    location: 'Ottawa',
    weather: 'Mainly sunny',
    feelLike: 16,
    POP: '60%',
    wind: '13E',
  },
]

const wednesday = [
  {
    day: 'wednesday',
    location: 'Kingston',
    weather: 'Rain',
    feelLike: 17,
    POP: '80%',
    wind: '16NE',
  },
  {
    day: 'wednesday',
    location: 'Toronto',
    weather: 'Cloudy with showers',
    feelLike: 24,
    POP: '80%',
    wind: '14S',
  },
  {
    day: 'wednesday',
    location: 'Ottawa',
    weather: 'Rain',
    feelLike: 15,
    POP: '80%',
    wind: '18E',
  },
]

const thursday = [
  {
    day: 'thursday',
    location: 'Kingston',
    weather: 'Mainly cloudy',
    feelLike: 19,
    POP: '30%',
    wind: '16N',
  },
  {
    day: 'thursday',
    location: 'Toronto',
    weather: 'Cloudy with showers',
    feelLike: 21,
    POP: '70%',
    wind: '13NE',
  },
  {
    day: 'thursday',
    location: 'Ottawa',
    weather: 'Cloudy with showers',
    feelLike: 17,
    POP: '40%',
    wind: '13NE',
  },
]

const friday = [
  {
    day: 'friday',
    location: 'Kingston',
    weather: 'Cloudy with sunny breaks',
    feelLike: 21,
    POP: '30%',
    wind: '16NE',
  },
  {
    day: 'friday',
    location: 'Toronto',
    weather: 'Cloudy with sunnry breaks',
    feelLike: 21,
    POP: '30%',
    wind: '19NE',
  },
  {
    day: 'friday',
    location: 'Ottawa',
    weather: 'Mainly cloudy',
    feelLike: 20,
    POP: '30%',
    wind: '11NE',
  },
]

const saturday = [
  {
    day: 'saturday',
    location: 'Kingston',
    weather: 'Mainly sunny',
    feelLike: 21,
    POP: '20%',
    wind: '14E',
  },
  {
    day: 'saturday',
    location: 'Toronto',
    weather: 'Mainly cloudy',
    feelLike: 22,
    POP: '30%',
    wind: '26E',
  },
  {
    day: 'saturday',
    location: 'Ottawa',
    weather: 'Mainly sunny',
    feelLike: 21,
    POP: '20%',
    wind: '10E',
  },
]

const sunday = [
  {
    day: 'sunday',
    location: 'Kingston',
    weather: 'Mainly cloudy',
    feelLike: 22,
    POP: '30%',
    wind: '15NE',
  },
  {
    day: 'sunday',
    location: 'Toronto',
    weather: 'Cloud with showers',
    feelLike: 22,
    POP: '40%',
    wind: '27E',
  },
  {
    day: 'sunday',
    location: 'Ottawa',
    weather: 'Mainly cloudy',
    feelLike: 21,
    POP: '30%',
    wind: '12E',
  },
]

const weeklyWeather = {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

const kingston = {
  monday: monday[0],
  tuesday: tuesday[0],
  wednesday: wednesday[0],
  thursday: thursday[0],
  friday: friday[0],
  saturday: saturday[0],
  sunday: sunday[0],
}

const toronto = {
  monday: monday[1],
  tuesday: tuesday[1],
  wednesday: wednesday[1],
  thursday: thursday[1],
  friday: friday[1],
  saturday: saturday[1],
  sunday: sunday[1],
}

const ottawa = {
  monday: monday[2],
  tuesday: tuesday[2],
  wednesday: wednesday[2],
  thursday: thursday[2],
  friday: friday[2],
  saturday: saturday[2],
  sunday: sunday[2],
}

const cities = { kingston, toronto, ottawa }

const masterData = {
  weeklyWeather,
  cities,
}

module.exports = masterData
//===========================================================
//Find all the sunny days in the week for a given location

const sunnyArr = []
const word = 'sunny'
for (const key in kingston) {
  const obj = kingston[key]
  const weatherInfo = obj.weather
  if (weatherInfo.includes(word)) sunnyArr.push(obj)
  // console.log(`${key} : ${obj.weather}`)
}
console.log(sunnyArr)
//===========================================================

//Find average weekly temperature for each of the locations
// let kingstonTemp = []
// for (const key in kingston) {
//   const obj = kingston[key]
//   // console.log(obj.feelLike)
//   kingstonTemp.push(obj.feelLike)
// }
// console.log(kingstonTemp)
// const kingstonSum = kingstonTemp.reduce((a, b) => a + b)
// const kingstonAvg = Math.round(kingstonSum / kingstonTemp.length)
// console.log(kingstonAvg)

//===========================================================
// Find the warmest cday for a given location
// 1. cities['kingston'] === kingston
// const feelLikeArr = []
// let warmest, result
// for (const key in kingston) {
//   const obj = kingston[key]

//   feelLikeArr.push(obj.feelLike)
//   // console.log(obj.feelLike)
//   warmest = Math.max(...feelLikeArr)

//   if (obj.feelLike === warmest) {
//     result = obj
//   }
// }
// console.log(feelLikeArr)

// const warmest = Math.max(...feelLikeArr)

// let result
// for (key in kingston) {
//   const obj = kingston[key]

//   if (obj.feelLike === warmest) {
//     result = obj
//   }
// }
// console.log(result)

//===============================================================
//Find the warmest location for a given day
//Let's say it is a monday => Find the warmest location for Monday
// console.log(weeklyWeather['monday'])
// const dayArray = weeklyWeather['monday']
// const [city1, city2, city3] = dayArray

// console.log(dayArray)
// const feelLikeArr = dayArray.map((obj) => {
//   return obj.feelLike
// })
// console.log(feelLikeArr)
// const warmest = Math.max(...feelLikeArr)
// console.log(warmest)

// const result = dayArray.find((obj) => {
//   return obj.feelLike === warmest
// })
// console.log(result)
// =============================================================
// for (const city in cities) {
//   for (const info in cities[city])
//     console.log(`${info} : ${cities[city][info]}`)
// }

// console.log(kingston)

// for (const day in kingston) {
//   for (const info in kingston[day]) {
//     console.log(`${info}: ${kingston[day][info]}`)
//   }
// }

// for (const day in weeklyWeather) {
//   // console.log(`${day} : ${weeklyWeather[day]}`)
//   for (const city in weeklyWeather[day]) {
//     for (const key in weeklyWeather[day][city]) {
//       console.log(`${key} : ${weeklyWeather[day][city][key]}`)
//     }
//     // console.log(weeklyWeather[day][city])
//   }
// for (city in weeklyWeather[day]) {
//   console.log(`${city}`)

// const key = Object.keys(weeklyWeather[day][city])
// console.log(`${city} : ${weeklyWeather[day][city].key}`)
// }
