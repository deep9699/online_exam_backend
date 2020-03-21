var db=require('../dbconnection');

var result={
    addResult(item,callback)
    {
        return db.query("insert into result values (?,?)",[item.Student_exam_id,item.Obtained_Marks],callback);
    }
}

module.exports=result;