

let express=require("express");
let app=express();

let conn=require("./database.js");


app.use(express.json());
app.get("/register",(req,res)=>{
    console.log(req.body);

    //var sqldata="CREATE TABLE getting(LastName varchar(255),FirstName varchar(255))"
    //console.log(sqldata);
    conn.query("insert into getting set ?",req.body,(err,data)=>{
         //console.log(data);
        // console.log(err);
        res.status(200).json({
            "status":200,
            "data":data
        })
        // res.send(" server connected with server!!");
    })
    
})

app.get("/users",(req,res)=>{
    conn.query("SELECT * FROM newdb.getting",(err,data)=>{
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).json(data);
        }
    })
})
app.listen(205,()=>{
    console.log("205 created!!");
})