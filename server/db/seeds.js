use weather
db.dropDatabase();
db.weather_codes.insertMany([
    {   
        code: 0,
        description:"Clear sky",
        image:"link",
        iconDay:"./icons/clearDay.png",
        iconNight:"./icons/clearNight.png"
    },
    
    {   code: 1,
        description:"Mainly clear",
        image:"link",
        iconDay:"./icons/clearDay.png",
        iconNight:"./icons/mainlyNight.png"
    },

    {   code: 2,
        description:"Partly cloudy",
        image:"link",
        iconDay:"./icons/clearDay.png",
        iconNight:"./icons/mainlyNight.png"
    },

    {   code: 3,
        description:"Overcast",
        image:"link",
        iconDay:"./icons/overcast.png",
        iconNight:"./icons/overcast.png"
    },

    {   code: 45,
        description:"Fog",
        image:"link",
        iconDay:"./icons/fogDay.png",
        iconNight:"./icons/fogNight.png"
    },

    {   code: 48,
        description:"Depositing rime fog",
        image:"link",
        iconDay:"./icons/fogDay.png",
        iconNight:"./icons/fogNight.png"
    },

    {   code: 51,
        description:"Light drizzle",
        image:"link",
        iconDay:"./icons/drizzle.png",
        iconNight:"./icons/drizzle.png"
    },

    {   code: 53,
        description:"Moderate drizzle",
        image:"link",
        iconDay:"./icons/drizzle.png",
        iconNight:"./icons/drizzle.png"
    },

    {   code: 55,
        description:"Dense drizzle",
        image:"link",
        iconDay:"./icons/drizzle.png",
        iconNight:"./icons/drizzle.png"
    },

    {   code: 56,
        description:"Light freezing drizzle",
        image:"link",
        iconDay:"./icons/drizzle.png",
        iconNight:"./icons/drizzle.png"
    },

    {   code: 57,
        description:"Dense freezing drizzle",
        image:"link",
        iconDay:"./icons/drizzle.png",
        iconNight:"./icons/drizzle.png"
    },

    {   code: 61,
        description:"Slight rain",
        image:"link",
        iconDay:"./icons/rainDay.png",
        iconNight:"./icons/rainNight.png"
    },

    {   code: 63,
        description:"Moderate rain",
        image:"link",
        iconDay:"./icons/rainDay.png",
        iconNight:"./icons/rainNight.png"
    },

    {   code: 65,
        description:"Heavy rain",
        image:"link",
        iconDay:"./icons/rainDay.png",
        iconNight:"./icons/rainNight.png"
    },

    {   code: 66,
        description:"Light freezing rain",
        image:"link",
        iconDay:"./icons/rainDay.png",
        iconNight:"./icons/rainNight.png"
    },

    {   code: 67,
        description:"Heavy freezing rain",
        image:"link",
        iconDay:"./icons/rainDay.png",
        iconNight:"./icons/rainNight.png"
    },

    {   code: 71,
        description:"Slight snow fall",
        image:"link",
        iconDay:"./icons/snowDay.png",
        iconNight:"./icons/snowNight.png"
    },

    {   code: 73,
        description:"Moderate snow fall",
        image:"link",
        iconDay:"./icons/snowDay.png",
        iconNight:"./icons/snowNight.png"
    },

    {   code: 75,
        description:"Heavy snow fall",
        image:"link",
        iconDay:"./icons/snowDay.png",
        iconNight:"./icons/snowNight.png"
    },

    {   code: 77,
        description:"Snow grains",
        image:"link",
        iconDay:"./icons/snowDay.png",
        iconNight:"./icons/snowNight.png"
    },

    {   code: 80,
        description:"Slight rain showers",
        image:"link",
        iconDay:"./icons/rainDay.png",
        iconNight:"./icons/rainNight.png"
    },

    {   code: 81,
        description:"Moderate rain showers",
        image:"link",
        iconDay:"./icons/rainDay.png",
        iconNight:"./icons/rainNight.png"
    },

    {   code: 82,
        description:"Violent rain showers",
        image:"link",
        iconDay:"./icons/heavyRain.png",
        iconNight:"./icons/heavyRain.png"
    },

    {   code: 85,
        description:"Slight snow showers",
        image:"link",
        iconDay:"./icons/snowDay.png",
        iconNight:"./icons/snowNight.png"
    },

    {   code: 86,
        description:"Heavy snow showers",
        image:"link",
        iconDay:"./icons/heavySnow.png",
        iconNight:"./icons/heavySnow.png"
    },

    {   code: 95,
        description:"Slight or moderate thunderstorm",
        image:"link",
        iconDay:"./icons/thunderDay.png",
        iconNight:"./icons/thunderNight.png"
    },

    {   code: 96,
        description:"Thunderstorm with slight hail",
        image:"link",
        iconDay:"./icons/thunderDay.png",
        iconNight:"./icons/thunderNight.png"
    },

    {   code: 99,
        description:"Thunderstorm with heavy hail",
        image:"link",
        iconDay:"./icons/thunderDay.png",
        iconNight:"./icons/thunderNight.png"
    }
])
