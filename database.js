

let sql=require("mysql");

let connection=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"newdb"
})

connection.connect(()=>{
    console.log("connected successfully!!");
})

module.exports=connection;