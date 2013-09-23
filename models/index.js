var fs = require('fs');

//Converter Class
var Converter=require("csvtojson").core.Converter;
//CSV File Path or CSV String or Readable Stream Object
var csvFileName="./public/data/people.csv";
//new converter instance
var csvConverter=new Converter();
//end_parsed will be emitted once parsing finished
csvConverter.on("end_parsed",function(jsonObj){
    console.log(jsonObj); //here is your result json object
});

//read from file
csvConverter.from(csvFileName);

// old model
context = {
  people: [
    {
      first_name: 'Steve',
      last_name: 'Jobs',
      company: 'Apple'
    },
    {
      first_name: 'Steve',
      last_name: 'Wozniak',
      company: 'Apple'
    },
    {
      first_name: 'Bill',
      last_name: 'Gates',
      company: 'Microsoft'
    },
    {
      first_name: 'Steve',
      last_name: 'Ballmer',
      company: 'Microsoft'
    }
  ]
};