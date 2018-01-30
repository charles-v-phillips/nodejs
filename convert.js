const fs = require('fs');
const csv = require('csvtojson');
const uuidv1 = require('uuid/v1');
const path = require('path');

let arr = [];


csv().fromFile('./customer-data.csv').on('json',(jsonObj,rowIndex)=>{
  arr.push(jsonObj);

}).on('done',(error)=>{
  fs.writeFile('data.json',JSON.stringify(arr,null,2),function(err){
    if(err) throw err;})
})
