/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


var express = require('express');
const cors = require('cors');
//var ejs = require('ejs');
//const bodyParser = require("body-parser");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test";
//var url='mongodb://ayush:ayush@cluster0-shard-00-00.sspbe.mongodb.net:27017,cluster0-shard-00-01.sspbe.mongodb.net:27017,cluster0-shard-00-02.sspbe.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-1f2p8t-shard-0&authSource=admin&retryWrites=true&w=majority';

var dbo; //= undefined;

MongoClient.connect(url, function (err, db) {
    if (err)
        console.log(err);
    console.log("Database connected!");
    dbo = db.db("test");
});

const app = express();
app.use(cors());
//app.engine('html', ejs.renderFile);

//app.set("view engine", "ejs");

/*app.use(bodyParser.urlencoded({	// important
 extended: true
 }));
 app.use(express.static(__dirname + '/public'));*/
app.use(express.json());

app.post('/doctors',(req,res)=>{
    //console.log(req);
   const specialization=req.body.specialization;
   const query = {Specialization: specialization};
   
   const Collection=dbo.collection("doctors");

   Collection.find(query).toArray((error, result) => {
     if (error)
            res.send({err:"server encountered an error!"});
     else{
            console.log(result);
            res.send(result);
        }
    });
});
const server = app.listen(3003, function () {
    console.log("App is running on Port 3003");
});