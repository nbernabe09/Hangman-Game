window.onload = function() {
	
	var words = ["stitch", "mickey", "goofy", "pluto", "nemo"];
	var wordValue = words[Math.floor(Math.random() * words.length)];
		wordValue = wordValue.replace(/\s/g, "-");
	var ranWord = document.getElementById("ran-word");
		ranWord.textContent = wordValue;
	var wins = 0;
	
	document.onkeyup = function(event) {

		var userGuess = document.getElementById("user-guess");
			userGuess.textContent = event.key

	};

};

// function reset() {
// 	location.reload(event);
// };