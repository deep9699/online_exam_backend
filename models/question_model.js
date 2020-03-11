
var db=require('../dbconnection');
var Question={
    getQuestions(tag_id,difficulty,count,limit,callback){
       
        console.log(tag_id,difficulty,count,limit);
        let lim=Number(limit);
        return db.query("SELECT * FROM questions WHERE Tag_id=? and Difficulty=? and Count=? ORDER BY RAND() LIMIT ?",[tag_id,difficulty,count,lim],callback);
    },
    getAllQuestion(callback)
    {
        return db.query("Select * from questions",callback);
    }

}
module.exports=Question;