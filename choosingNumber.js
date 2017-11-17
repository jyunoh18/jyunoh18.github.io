var i = [Math.floor(Math.random( )*5) +1];

var i = parseInt ( i ) ;

var x = i * 1000;

function sayAloha( ) { 
	document.getElementById(‘demo’).innerHTML = x;
  
  setTimeout (function() {
  		document.getElementById('wake').innerHTML = "Get Up"
  }, x);
