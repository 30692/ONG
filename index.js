const express = require('express');
const graph = require('fbgraph');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const rotasDeUsuario = require('./src/routes/usuarios')
const rotasDePatrocinador = require('./src/routes/patrocinadores')
const rotasDeOng = require('./src/routes/ongs')
const app = express();
const server = require("http").createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'public')));

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'



app.get('/painel', (req, res) => {
  res.sendFile(__dirname + '/public/PainelOng.html');
})

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/public/PainelUser.html');
})


app.use('/usuarios', rotasDeUsuario);
app.use('/patrocinadores', rotasDePatrocinador);
app.use('/ongs', rotasDeOng);


app.use('/', express.static(path.join(__dirname, 'public')));

/**
 * Module dependencies.
 */




// this should really be in a config file!
var conf = {
  client_id: '947587352283598',
  client_secret: '558dd13aae67945fd03adedfeb6adc32',
  scope: 'email, user_friends, user_photos, user_posts'
    // You have to set http://localhost:3000/ as your website
    // using Settings -> Add platform -> Website
    ,
  redirect_uri: 'http://localhost:3000/auth'
};


// Configuration
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');

app.use(methodOverride());

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
  app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
}

app.use('/', express.static(path.join(__dirname, 'public')));

// Routes

app.get('/fb', function (req, res) {
  res.sendFile(__dirname + '/public/fb.html');
});

app.get('/auth', function (req, res) {

  // we don't have a code yet
  // so we'll redirect to the oauth dialog
  if (!req.query.code) {
    console.log("Performing oauth for some user right now.");

    var authUrl = graph.getOauthUrl({
      "client_id": conf.client_id,
      "redirect_uri": conf.redirect_uri,
      "scope": conf.scope
    });

    if (!req.query.error) { //checks whether a user denied the app facebook login/permissions
      res.redirect(authUrl);
    } else { //req.query.error == 'access_denied'
      res.send('access denied');
    }
  }
  // If this branch executes user is already being redirected back with 
  // code (whatever that is)
  else {
    console.log("Oauth successful, the code (whatever it is) is: ", req.query.code);
    // code is set
    // we'll send that and get the access token
    graph.authorize({
      "client_id": conf.client_id,
      "redirect_uri": conf.redirect_uri,
      "client_secret": conf.client_secret,
      "code": req.query.code
    }, function (err, facebookRes) {
      console.log(facebookRes);
      res.redirect('/UserHasLoggedIn');
    });
  }
});


// user gets sent here after being authorized
app.get('/UserHasLoggedIn', function (req, res) {
  res.sendFile(path.resolve("public/home2.html"));
});



var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Express server listening on port %d", port);

});