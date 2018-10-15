$(document).ready(function(){


var sArray = ['sea', 'sad', 'seed', 'set', 'sip', 'sit', 'sob', 'soot', 'soup', 
'sub', 'suit', 'sun', 'same', 'sew'];

var lArray = ['log', 'look', 'love', 'lady', 'lake', 'lock', 'late', 'line', 'lab',
'lid', 'leaf', 'lime'];

var rArray = ['ride', 'road', 'robe', 'rope', 'race', 'rake', 'rock', 'roof',
'rook', 'rug'];

var currentSWord = sArray[Math.floor(sArray.length*Math.random())];
var currentLWord = lArray[Math.floor(sArray.length*Math.random())];
var currentRWord = rArray[Math.floor(sArray.length*Math.random())];

function nextSCard(){

	sArray = ['sea', 'sad', 'seed', 'set', 'sip', 'sit', 'sob', 'soot', 'soup', 
	'sub', 'suit', 'sun', 'same', 'sew'];
	currentSWord = sArray[Math.floor(sArray.length*Math.random())];
	$(".card-word").text(currentSWord);
	console.log(currentSWord);
}

$("#s-deck-start").on("click", function(){
	nextSCard();
});

function nextLCard(){

	lArray = ['log', 'look', 'love', 'lady', 'lake', 'lock', 'late', 'line', 'lab',
	'lid', 'leaf', 'lime'];
	currentLWord = lArray[Math.floor(lArray.length*Math.random())];
	$(".card-word").text(currentLWord);
	console.log(currentLWord);
}

$("#l-deck-start").on("click", function(){
	nextLCard();
});

function nextRCard(){

	rArray = ['ride', 'road', 'robe', 'rope', 'race', 'rake', 'rock', 'roof',
	'rook', 'rug'];
	currentRWord = rArray[Math.floor(rArray.length*Math.random())];
	$(".card-word").text(currentRWord);
	console.log(currentRWord);
}

$("#r-deck-start").on("click", function(){
	nextRCard();
});

});



