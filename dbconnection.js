var mysql=require('mysql');
	var connection=mysql.createPool({
 
	host:'localhost',
 	user:'root',
 	password:'',
 	database:'online_exam_db'
 
	});
	module.exports=connection;