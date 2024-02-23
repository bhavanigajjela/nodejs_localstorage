
let sqldata=require("mysql");

let connection=sqldata.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"task4"
})

connection.connect(()=>{
    console.log("connected properly");
})

module.exports=connection;