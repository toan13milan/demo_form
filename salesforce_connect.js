var jsforce = require('jsforce');
var conn = new jsforce.Connection({
    loginUrl: 'https://wise-shark-bghz74-dev-ed.trailblaze.my.salesforce.com/'
});
conn.login('dotoan555@wise-shark-bghz74.com', 'Hoathuongso1' + 'M20nHkeJxHuhchmsNkwRpyQ8', function(err, res) {
  if (err) { return console.error(err); }
  conn.query('SELECT Id, Name FROM Account', function(err, res) {
    if (err) { return console.error(err); }
    console.log(res);
    console.log('xxxxxxxxxxxsss');
  }
  
  );
});


module.exports = conn;