var Twit = require('twit');
var config = require("./config/config")
console.log(config)
var T = new Twit(config)

var param = {
    q: 'node.js',
    count: 2
}
var tweet = {
        status: "Hello world from twitter bot"
    }
    //T.get('search/tweets',param,getTweets)
T.post('statuses/update', tweet, posted)

function getTweets(err, data, response) {
    var tweets = data.statuses
    for (var i = 0; i < tweets.length; i++) {
        console.log(i + ' ' + tweets[i].text)
    }

}

function posted(err, data, response) {
    if (err) {
        console.log("Something went wrong")
    } else {
        console.log("tweeted")
    }
}