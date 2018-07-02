
var express = require('express');
var app = express();



app.get("/api/timestamp/:date_string?",(req,res)=>{
  let date = req.params.date_string;
  if(Number(date)) date = Number(date)*1000;
  let validDate = new Date(date);
  let time = validDate.getTime();
  let unixDate = validDate.toUTCString();
  
  if(!date) res.json({"unix":new Date().getTime(), "UTC":new Date().toUTCString()});
  if (validDate){
    res.json({"unix":time, "UTC":unixDate});
  }
  else res.json({"error" : "Invalid Date"});
});


module.exports = app;
