// Raw Data
// Making days from Mon to Sun including three object of each city.

const monday = [
  {
    day: 'Monday',
    location: 'Kingston',
    weather: 'Light rain',
    feelLike: 22,
    POP: '80%',
    wind: '25W',
  },
  {
    day: 'Monday',
    location: 'Toronto',
    weather: 'Light rain',
    feelLike: 24,
    POP: '80%',
    wind: '12SE',
  },
  {
    day: 'Monday',
    location: 'Ottawa',
    weather: 'Rain',
    feelLike: 15,
    POP: '90%',
    wind: '14SW',
  },
]

const tuesday = [
  {
    day: 'Tuesday',
    location: 'Kingston',
    weather: 'Cloudy with showers',
    feelLike: 21,
    POP: '70%',
    wind: '15NE',
  },
  {
    day: 'Tuesday',
    location: 'Toronto',
    weather: 'Mainly sunny',
    feelLike: 31,
    POP: '10%',
    wind: '16SW',
  },
  {
    day: 'Tuesday',
    location: 'Ottawa',
    weather: 'Mainly sunny',
    feelLike: 16,
    POP: '60%',
    wind: '13E',
  },
]

const wednesday = [
  {
    day: 'Wednesday',
    location: 'Kingston',
    weather: 'Rain',
    feelLike: 17,
    POP: '80%',
    wind: '16NE',
  },
  {
    day: 'Wednesday',
    location: 'Toronto',
    weather: 'Cloudy with showers',
    feelLike: 24,
    POP: '80%',
    wind: '14S',
  },
  {
    day: 'Wednesday',
    location: 'Ottawa',
    weather: 'Rain',
    feelLike: 15,
    POP: '80%',
    wind: '18E',
  },
]

const thursday = [
  {
    day: 'Thursday',
    location: 'Kingston',
    weather: 'Mainly cloudy',
    feelLike: 19,
    POP: '30%',
    wind: '16N',
  },
  {
    day: 'Thursday',
    location: 'Toronto',
    weather: 'Cloudy with showers',
    feelLike: 21,
    POP: '70%',
    wind: '13NE',
  },
  {
    day: 'Thursday',
    location: 'Ottawa',
    weather: 'Cloudy with showers',
    feelLike: 17,
    POP: '40%',
    wind: '13NE',
  },
]

const friday = [
  {
    day: 'Friday',
    location: 'Kingston',
    weather: 'Cloudy with sunny breaks',
    feelLike: 21,
    POP: '30%',
    wind: '16NE',
  },
  {
    day: 'Friday',
    location: 'Toronto',
    weather: 'Cloudy with sunnry breaks',
    feelLike: 21,
    POP: '30%',
    wind: '19NE',
  },
  {
    day: 'Friday',
    location: 'Ottawa',
    weather: 'Mainly cloudy',
    feelLike: 20,
    POP: '30%',
    wind: '11NE',
  },
]

const saturday = [
  {
    day: 'Saturday',
    location: 'Kingston',
    weather: 'Mainly sunny',
    feelLike: 21,
    POP: '20%',
    wind: '14E',
  },
  {
    day: 'Saturday',
    location: 'Toronto',
    weather: 'Mainly cloudy',
    feelLike: 22,
    POP: '30%',
    wind: '26E',
  },
  {
    day: 'Saturday',
    location: 'Ottawa',
    weather: 'Mainly sunny',
    feelLike: 21,
    POP: '20%',
    wind: '10E',
  },
]

const sunday = [
  {
    day: 'Sunday',
    location: 'Kingston',
    weather: 'Mainly cloudy',
    feelLike: 22,
    POP: '30%',
    wind: '15NE',
  },
  {
    day: 'Sunday',
    location: 'Toronto',
    weather: 'Cloud with showers',
    feelLike: 22,
    POP: '40%',
    wind: '27E',
  },
  {
    day: 'Sunday',
    location: 'Ottawa',
    weather: 'Mainly cloudy',
    feelLike: 21,
    POP: '30%',
    wind: '12E',
  },
]

// Weekly weather including all days
const weeklyWeather = {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

// Each cities including all data from day's objects.
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

// An object including three cities
const cities = { kingston, toronto, ottawa }

// Weekly data + all cities
const masterData = {
  weeklyWeather,
  cities,
}

module.exports = masterData
