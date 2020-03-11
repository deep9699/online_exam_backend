var db=require('../dbconnection');

var exam={
    addExam(item,callback)
    {
        return db.query("insert into exam values (?,?,?,?)",[item.Exam_id,item.Batch_id,item.Date,item.Marks],callback);
    },
    getAllExam(callback)
    {
        return db.query("select * from exam",callback);
    }
}

module.exports=exam;