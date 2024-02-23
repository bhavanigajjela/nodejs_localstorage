

let express=require("express");
let app=express();
app.use(express.json());

let getdata=require("./task4.js");

app.post("/register",(req,res)=>{
    var {username,password,email}=req.body;

    getdata.query("select*from nodetask where username= ? or password = ? or email= ?",[username,password,email], (err,data)=>{
        if(err){
            res.send(err);
        }
        else{
            if(data.length >0){
                res.send("user already existed");
            }
            else{
                getdata.query("insert into nodetask set ?",req.body,(err,data)=>{
                        res.status(200).json({
                            "status":200,
                            "data":req.body
                        })
                        console.log(data);
                        console.log(err);
                    }); 
                
            }
        }
    })
    
    // 
});
app.get("/",(req,res)=>{
    getdata.query("select*from nodetask",(err,data)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(data);
        }
    })
})

app.post("/login",(req,res)=>{
    var {username,password,email} =req.body;
    getdata.query("select*from nodetask where username= ? and password = ? and email= ?",[username,password,email], (err,data)=>{
        if(err){
            res.send(err);
        }
        else{
            if(data.length >0){
                res.send("login successful");
            }
            else{
                res.send("wrong credentials");
            }
        }
    })
})
app.listen(601,()=>{
    console.log("601 port running successfully!!");
})
 