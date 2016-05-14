var config = {
    weather: {
        location: "LOCATION", //Can be zip code, address, street, just about anything you can google
        apikey: "API_KEY", //forcast.io api key goes here
        units: "imperial", //imperial or metric. Default is imperial if incorrect value supplied
        refreshTime: 30,/*How often you want to refresh weather data (In Minuites)
                        *Note: forcast.io FREE accounts have 1000
                        *calls per day. To minimize ur api calls,
                        *keep your refresh rate low  (Higher minuites)
                        *defalt to 30 mins if not provided
                         */
        fiveday: "true" // true or false
    },
    location: {
        location: "LOCATION",
        googleKey: "API_KEY"
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
    },
    news: {
        refreshInterval: 30
    },
    maps: {
        bingAPIKey: "API_KEY",
        avoid:["tolls"],/* Availible options are "highways" and "tolls"
                        * To use both, format like this ex. ["highways","tolls"]
                        * anything else will be ignored
                        */
        origin:"HOME_ADDRESS",/* This should be origin of travel
                                                     * Most likely should be address of
                                                     * current location of the mirror
                                                     * THIS SHOULD BE IN HUMAN READABLE FORM
                                                     * PLEASE NO NOT INCLUDE COMMAS OR ANY SPECIAL
                                                     * CHARACTERS
                                                     * Ex."1600 Pennsylvania Ave NW Washington DC 20500"
                                                     */
        destinations:{
            /* You may add multiple destinations to this list
             * Please format like so;
             * name_of_place:"Human Readable Address"
             * a comma is required if not last in the list
             * name_of_place will be the keyword to descripe that place.
             * for example, saying "traffic to work" will show
             * traffic to "1600 Pennsylvania Ave NW Washington DC 20500"
             * in the example below. Each "name_of_place" needs to be a
             * unique word.
             * */
            work: "1600 PENNSYLVANIA AVE NW  WASHINGTON DC 20500",
            school: "4400 University Dr Fairfax VA 22030"
        },
        method: "Driving" //Driving or Walking supported as of now
    }
}