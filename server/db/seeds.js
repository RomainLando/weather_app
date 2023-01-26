use weather
db.dropDatabase();
db.weather_codes.insertMany([
    {0:{
        description:"Clear sky",
        image:"link",
        icon:"link2"
    }
},
    {1:{
        description:"Mainly clear",
        image:"link",
        icon:"link2"
    }
},
    {2:{
        description:"Partly cloudy",
        image:"link",
        icon:"link2"
    }
},
    {3:{
        description:"Overcast",
        image:"link",
        icon:"link2"
    }
},
    {45:{
        description:"Fog",
        image:"link",
        icon:"link2"
    }
},
    {48:{
        description:"Depositing rime fog",
        image:"link",
        icon:"link2"
    }
},
    {51:{
        description:"Light drizzle",
        image:"link",
        icon:"link2"
    }
},
    {53:{
        description:"Moderate drizzle",
        image:"link",
        icon:"link2"
    }
},
    {55:{
        description:"Dense drizzle",
        image:"link",
        icon:"link2"
    }
},
    {56:{
        description:"Light freezing drizzle",
        image:"link",
        icon:"link2"
    }
},
    {57:{
        description:"Dense freezing drizzle",
        image:"link",
        icon:"link2"
    }
},
    {61:{
        description:"Slight rain",
        image:"link",
        icon:"link2"
    }
},
    {63:{
        description:"Moderate rain",
        image:"link",
        icon:"link2"
    }
},
    {65:{
        description:"Heavy rain",
        image:"link",
        icon:"link2"
    }
},
    {66:{
        description:"Light freezing rain",
        image:"link",
        icon:"link2"
    }
},
    {67:{
        description:"Heavy freezing rain",
        image:"link",
        icon:"link2"
    }
},
    {71:{
        description:"Slight snow fall",
        image:"link",
        icon:"link2"
    }
},
    {73:{
        description:"Moderate snow fall",
        image:"link",
        icon:"link2"
    }
},
    {75:{
        description:"Heavy snow fall",
        image:"link",
        icon:"link2"
    }
},
    {77:{
        description:"Snow grains",
        image:"link",
        icon:"link2"
    }
},
    {80:{
        description:"Slight rain showers",
        image:"link",
        icon:"link2"
    }
},
    {81:{
        description:"Moderate rain showers",
        image:"link",
        icon:"link2"
    }
},
    {82:{
        description:"Violent rain showers",
        image:"link",
        icon:"link2"
    }
},
    {85:{
        description:"Slight snow showers",
        image:"link",
        icon:"link2"
    }
},
    {86:{
        description:"Heavy snow showers",
        image:"link",
        icon:"link2"
    }
},
    {95:{
        description:"Slight or moderate thunderstorm",
        image:"link",
        icon:"link2"
    }
},
    {96:{
        description:"Thunderstorm with slight hail",
        image:"link",
        icon:"link2"
    }
},
    {99:{
        description:"Thunderstorm with heavy hail",
        image:"link",
        icon:"link2"
    }
}  
])