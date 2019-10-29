var https = require('https');

var options = {
  'method': 'GET',
  'hostname': 'developer-apis.awair.is',
  'path': '/v1/users/self/devices/devicetype/deviceid/air-data/latest?fahrenheit=false',
  'headers': {
    'Authorization': 'Bearer example - token'
  }
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();