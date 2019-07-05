const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a5c0b92b2483842dcc02f3be3ded3147/' + latitude + ',' + longitude
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Could not contact the services. Please check your connection.', undefined) 
        } else if (body.error) {
            callback('Could not find the location.  Please check the coordinates.', undefined)
        } else {
            const degrees = body.currently.temperature;
            const precipChance = body.currently.precipProbability;
            callback(undefined, body.daily.data[0].summary + " It is currently " + degrees + " degrees F out.  There is a " + precipChance + "% chance of rain.")
            }
    
    })
}

module.exports = forecast