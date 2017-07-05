window.onload = function() {
	
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var words = ["stitch", "mickey", "goofy", "pluto", "nemo"];
	var usedChars = [];
	var wordValue = words[Math.floor(Math.random() * words.length)];
	var maskedWord = wordValue.replace(/./g, "-");
	var ranWord = document.getElementById("ran-word");
		ranWord.textContent = maskedWord;
	console.log(wordValue);
	var wins = 0;
		wins = document.getElementById("win-count");
	var guesses = 10;
		guesses = document.getElementById("guess-count");
	var guessLetter = document.getElementById('user-guess');

	document.onkeyup = function(event) {
  	var key = event.key.toLowerCase();
  	console.log(event.key)
  	if (alphabet.indexOf(key) !== -1) {
    	if (usedChars.indexOf(key) === -1) {
      	usedChars.push(key);
      	var string = usedChars.join(', ');
      	guessLetter.textContent = string;
    	};
  	};
	};

};

// function reset() {
// 	location.reload(event);
// };