use weather
db.dropDatabase();
db.weather_codes.insertMany([
    {   
        code: 0,
        description:"Clear sky",
        image:"link",
        icon:"link2"
    },
    
    {   code: 1,
        description:"Mainly clear",
        image:"link",
        icon:"link2"
    },

    {   code: 2,
        code: '2',
        description:"Partly cloudy",
        image:"link",
        icon:"link2"
    },

    {   code: 3,
        description:"Overcast",
        image:"link",
        icon:"link2"
    },

    {   code: 45,
        description:"Fog",
        image:"link",
        icon:"link2"
    },

    {   code: 48,
        description:"Depositing rime fog",
        image:"link",
        icon:"link2"
    },

    {   code: 51,
        description:"Light drizzle",
        image:"link",
        icon:"link2"
    },

    {   code: 53,
        description:"Moderate drizzle",
        image:"link",
        icon:"link2"
    },

    {   code: 55,
        description:"Dense drizzle",
        image:"link",
        icon:"link2"
    },

    {   code: 56,
        description:"Light freezing drizzle",
        image:"link",
        icon:"link2"
    },

    {   code: 57,
        description:"Dense freezing drizzle",
        image:"link",
        icon:"link2"
    },

    {   code: 61,
        description:"Slight rain",
        image:"link",
        icon:"link2"
    },

    {   code: 63,
        description:"Moderate rain",
        image:"link",
        icon:"link2"
    },

    {   code: 65,
        description:"Heavy rain",
        image:"link",
        icon:"link2"
    },

    {   code: 66,
        description:"Light freezing rain",
        image:"link",
        icon:"link2"
    },

    {   code: 67,
        description:"Heavy freezing rain",
        image:"link",
        icon:"link2"
    },

    {   code: 71,
        description:"Slight snow fall",
        image:"link",
        icon:"link2"
    },

    {   code: 73,
        description:"Moderate snow fall",
        image:"link",
        icon:"link2"
    },

    {   code: 75,
        description:"Heavy snow fall",
        image:"link",
        icon:"link2"
    },

    {   code: 77,
        description:"Snow grains",
        image:"link",
        icon:"link2"
    },

    {   code: 80,
        description:"Slight rain showers",
        image:"link",
        icon:"link2"
    },

    {   code: 81,
        description:"Moderate rain showers",
        image:"link",
        icon:"link2"
    },

    {   code: 82,
        description:"Violent rain showers",
        image:"link",
        icon:"link2"
    },

    {   code: 85,
        description:"Slight snow showers",
        image:"link",
        icon:"link2"
    },

    {   code: 86,
        description:"Heavy snow showers",
        image:"link",
        icon:"link2"
    },

    {   code: 95,
        description:"Slight or moderate thunderstorm",
        image:"link",
        icon:"link2"
    },

    {   code: 96,
        description:"Thunderstorm with slight hail",
        image:"link",
        icon:"link2"
    },

    {   code: 99,
        description:"Thunderstorm with heavy hail",
        image:"link",
        icon:"link2"
    }
])