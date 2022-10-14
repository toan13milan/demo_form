var express = require('express');
var router = express.Router();

var database = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', session : req.session });
});

router.post('/login', function(request, response, next){
    console.log(request.body);
    if(request.body.user_name && request.body.user_email)
    {
        query = `INSERT INTO form_lead (user_name, user_email, phone_number, car_type, pay_type) VALUES ('${request.body.user_name}', '${request.body.user_email}', '${request.body.phone_number}', '${request.body.car_type}', '${request.body.paytype}')`;
        
        database.query(query, function(error, data){
            if(data)
            {
                response.redirect("/thanks");
            }
            else
            {
                response.send('Something wrong');
            }
            response.end();
        });
    }
    else
    {
        response.send('Please Enter Email Address and Password Details');
        response.end();
    }

});

router.get('/logout', function(request, response, next){

    request.session.destroy();

    response.redirect("/");

});

module.exports = router;