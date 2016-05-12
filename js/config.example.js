var config = {
    weather: {
        location: "20170", //Can be zip code, address, street, just about anything you can google
        apikey: "API_KEY", //forcast.io api key goes here
        units: "imperial", //imperial or metric. Default is imperial if incorrect value supplied
        refreshTime: 30,/*How often you want to refresh weather data (In Minuites)
                         *Note: forcast.io FREE accounts have 1000
                        *calls per day. To minimize ur api calls,
                        *keep your refresh rate low  (Highr minuites)
                        *defalt to 30 mins if not provided
                         */
        fiveday: "true" // true or false NON FUNCTIONAL
    },
    location: {
    //Not Used Yet
    },
    time: {
        format: 12, //Default to 24 if not provided/invalid
        seconds: false
    },
    compliments: {
        interval: 30000,
        fadeInterval:3,
        morning:[
            'Rise and Shine!',
            'Good Morning Handsome!',
            'Lookin\' Good!',
            'Enjoy your day!'
        ],
        afternoon:[
            'Hey Good Lookin\'',
            'WOW, You Look Good',
            'Beauty!'
            
        ],
        evening:[
            'Good Evening',
            'Looking Fresh!',
            'Date night?',
            'Lookin\' Good!'
        ]
    }


}