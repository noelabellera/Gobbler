var express = require('express');
var router = require('express').Router();
var request = require('request');
var passport = require('passport');
var gobbleCtrl = require('../controllers/gobbles')
var Twit = require('twit');

var tweet = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


router.get('/gobbles', gobbleCtrl.index);
router.put('/gobbles', gobbleCtrl.update);
router.get('/show', gobbleCtrl.showAll);

router.get('/', function(req, res) {
  res.render('login', {user: req.user});
})

router.get('/auth/twitter', passport.authenticate(
  'twitter',
  { scope: 'profile' }
))

router.get('/twitter/oauthcallback', passport.authenticate(
  'twitter',
  {
    successRedirect : '/gobbles',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/login');
});





// let tweets = [];
// tweet.get('statuses/home_timeline', { count: 50 }, function(err, data, response){
//     for(let i = 0; i < data.length; i++) {
//         tweets = data[i];
//     };
// });


module.exports = router;
