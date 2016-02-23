// Request API access: http://www.yelp.com/developers/getting_started/api_access
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET,
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({ term: 'coffee', location: 'Seattle' })
.then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.error(err);
});

