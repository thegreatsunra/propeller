var fs = require('fs')
  , util = require('util')
  , Converter=require("csvtojson").core.Converter;

context = {};

function ingestCSV(src) {
  var csvConverter=new Converter();
  var csvFileName="./public/data/" + src + ".csv";
  csvConverter.from(csvFileName);
  csvConverter.on("end_parsed",function(jsonObj){
      context[src] = jsonObj;
      console.log(util.inspect(jsonObj, false, null));
  });
}

ingestCSV('people');
ingestCSV('places');
