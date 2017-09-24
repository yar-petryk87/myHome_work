var express = require('express')
var app = express()
app.set('view engine' , 'pug')


app.get('/' , function (req, res) {
	
  res.render(
  		'index' , 
  		{ heading: `ЕНЕЇДА` ,
  		  message_first: `Еней був парубок моторний,` ,
  		  message_second: `І хлопець хоть куди козак,` ,
    	  message_third: `Удавсь на всеє зле проворний,` ,
  		  message_fourth: `Завзятіший од всіх бурлак.` ,
  		  

  	}
  )
 
})

app.listen(8080 , function() {
	console.log("Everything is OK")
});
