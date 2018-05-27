var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/',function(req,res){
	//res.send(results);
	
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_USER
    });
    connection.query('select * from eventos', function(err, results){
        res.render('index', {lista: results});
        //res.render('/eventos/lista', {lista: results});
    });
	connection.end();
	//res.render('eventos/lista');
});

module.exports = router;