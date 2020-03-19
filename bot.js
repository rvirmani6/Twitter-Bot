// Our Twitter library
var Twit = require('twit'); //import statement

// We need to include our configuration file
var T = new Twit(require('./config.js'));


//commands:
//.get() -> search by hashtag, location, user
//.post() -> tweeting
//.stream() -> reply to @mention

// This function finds the latest tweet with the #mediaarts hashtag, and retweets it.
function retweet() {
	var hashtag = Array("#aquarius", "#aries", "#leo", "#sagittarius", "#taurus",
		"#virgo", "#capricorn", "#gemini", "#libra", "#cancer", "#scorpio", "#pisces",
		"#astrology", "#zodiac", "#horoscope");
	var randomHashtag = hashtag[Math.floor(Math.random()*hashtag.length)];

	var astrologySearch = {q: randomHashtag, count: 10, result_type: "recent"};

	T.get('search/tweets', astrologySearch, function (error, data) {
	  // log out any errors and responses
	  console.log(error, data);
	  // If our search request to the server had no errors...
	  if (!error) {
	  	// ...then we grab the ID of the tweet we want to retweet...
		var retweetId = data.statuses[0].id_str;
		// ...and then we tell Twitter we want to retweet it!
		T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
			if (response) {
				console.log('Success! Check your bot, it should have retweeted something.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
		})
	  }
	  // However, if our original search request had an error, we want to print it out here.
	  else {
	  	console.log('There was an error with your hashtag search:', error);
	  }
	});
}

function retweet1() {
	var hashtag = Array("#mercury", "#venus", "#earth", "#mars", "#jupiter", "#saturn", "#uranus",
		"#neptune", "#pluto", "#moon", "#sun", "#retrograde");
	var randomHashtag = hashtag[Math.floor(Math.random()*hashtag.length)];

	var zodiacSearch = {q: randomHashtag, count: 10, result_type: "recent"};

	T.get('search/tweets', zodiacSearch, function (error, data) {
	  // log out any errors and responses
	  console.log(error, data);
	  // If our search request to the server had no errors...
	  if (!error) {
	  	// ...then we grab the ID of the tweet we want to retweet...
		var retweetId = data.statuses[0].id_str;
		// ...and then we tell Twitter we want to retweet it!
		T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
			if (response) {
				console.log('Success! Check your bot, it should have retweeted something.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
		})
	  }
	  // However, if our original search request had an error, we want to print it out here.
	  else {
	  	console.log('There was an error with your hashtag search:', error);
	  }
	});
}

function retweet2() {
	var horoscopeSearch = {q: "#horoscope", count: 10, result_type: "recent"};

	T.get('search/tweets', horoscopeSearch, function (error, data) {
	  // log out any errors and responses
	  console.log(error, data);
	  // If our search request to the server had no errors...
	  if (!error) {
	  	// ...then we grab the ID of the tweet we want to retweet...
		var retweetId = data.statuses[0].id_str;
		// ...and then we tell Twitter we want to retweet it!
		T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
			if (response) {
				console.log('Success! Check your bot, it should have retweeted something.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
		})
	  }
	  // However, if our original search request had an error, we want to print it out here.
	  else {
	  	console.log('There was an error with your hashtag search:', error);
	  }
	});
}

function tweet() {

	//var rand = Math.floor(Math.random() * 100);
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1;
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd = '0'+dd
	} 
	if(mm<10) {
	    mm = '0'+mm
	} 

	today = mm + '/' + dd + '/' + yyyy;

	var tweet = {
		status: "Find out your horoscope for today, " + today + ": https://www.horoscope.com/us/horoscopes/general/index-horoscope-general-daily.aspx"
	}

	T.post('statuses/update', tweet, function(error, data, response) {
		if (response) {
			console.log('Success! Check your bot, it should have tweeted something.')
		}
		if (error) {
			console.log('There was an error with Twitter:', error);
		}
	});
}

function randomTweet() {

	var sign = Array("Aquariuses", "Aries", "Leos", "Sagittariuses", "Tauruses",
		"Virgos", "Capricorns", "Geminis", "Libras", "Cancers", "Scorpios", "Pisces");
	var randomSign = sign[Math.floor(Math.random()*sign.length)];

	var opinion = Array("are kinda judgy", "smell like they look",
	 "need a break", "only sound good singing ke$ha",
	 "probably liked xxx", "are tall", "type slow", "are always cold", "have scoliosis",
	 "have a linger right arm than left arm", "will have braces as adults",
	 "need invisalign", "are not for sale", "are like 7 years old", "own like three (3) shirts",
	 "talk while they chew", "have weak knees", "wear socks to bed",
	 "had a pet tarantula when they were younger", "have arthritis", "bite their lollipops",
	 "are lying when they say they're good", "eat creamy onions during Thanksgiving",
	 "like coleslaw", "rip the crust off their sandwiches", "don't know where their birth certificate is",
	 "have tails", "are outties", "like jam", "are grounded for til college", "say 'spooky season'",
	 "dad sneeze", "are squibs :/", "stan snape", "miss rory's version of Humble </3",
	 "say leviosAA not leviOsa", "can't hang", "have a god complex", "have a princess complex",
	 "are horse girls", "teach you pain", "teach you patience", "teach you love", "need validation",
	 "are fake deep", "are inconsistent", "are lowkey snakes", "are highkey snakes", "don't have a pulse",
	 "only eat cheesy potatoes", "have weak knees, arms spaghetti", "are into matty b", "like capris and corn");
	var randomOpinion = opinion[Math.floor(Math.random()*opinion.length)];

	var tweet = {
		status: randomSign + " " + randomOpinion
	}

	T.post('statuses/update', tweet, function(error, data, response) {
		if (response) {
			console.log('Success! Check your bot, it should have tweeted something.')
		}
		if (error) {
			console.log('There was an error with Twitter:', error);
		}
	});
}

// var reply = {status: tweet.source.screen_name + " "}

// function welcomeTweet(text) {
// 	var tweet = {
// 		status: text
// 	}
// 	T.post('statuses/update', tweet, function(error, data, response) {
// 		if (response) {
// 			console.log('it werk');
// 		}
// 		if (error) {
// 			console.log('error');
// 		}
// 	});
// }

// var stream = T.stream('user');
// stream.on('follow', followed);

// function followed(event) {
// 	console.log("Follow event");

// 	var name = event.source.name;
// 	var screenName = event.source.screen_name;
// 	welcomeTweet('@' + screenName + ' thank you for following! Ily <3');
// }


// Try to retweet something as soon as we run the program...
retweet();
retweet1();
//retweet2();
randomTweet();
tweet();
// ...and then every hour after that. Time here is in milliseconds, so
// 1000 ms = 1 second, 1 sec * 60 = 1 min, 1 min * 60 = 1 hour --> 1000 * 60 * 60
setInterval(retweet, 1000 * 60 * 60);
setInterval(retweet1, 1000 * 60 * 60 * 2);
//setInterval(retweet2, 1000 * 60 * 30);
setInterval(randomTweet, 1000 * 60 * 60 * 6);
setInterval(tweet, 1000 * 60 * 60 * 24);
