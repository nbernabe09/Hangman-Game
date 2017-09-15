window.onload = function bootup() {
	
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	var guesses = 10;
	var words = ["lilo and stitch", "mickey mouse", "goofy", "pluto", "nemo", "minnie mouse", "donald duck", "oswald the lucky rabbit", "mulan", "winnie the pooh", "jiminy cricket", "ludwig von drake", "kuzco", "yzma", "mowgli", "cruella de vil", "panchito pistoles", "jose carioca", "mortimer mouse"];
	// var picture = ["lilo and stitch", "mickey mouse", "goofy", "pluto", "nemo", "minnie mouse", "donald duck", "oswald the lucky rabbit", "mulan", "winnie the pooh", "jiminy cricket", "ludwig von drake", "kuzco", "yzma", "mowgli", "cruella de vil", "panchito pistoles", "jose carioca", "mortimer mouse"];
	var message = {
		win: 'You win!',
		lose: 'Ouch... try again.',
	};

	var usedChars = [];
	var rightChars = [];
	var shownLetter = 0;
	var guessLetter = document.getElementById('user-guess');
	document.getElementById("guess-count").textContent = guesses;
	
	var wordValue = words[Math.floor(Math.random() * words.length)];
	var maskedWord = "";
	displayWord();
	function displayWord() {
		maskedWord = "<span>";
		for (var j = 0; j < wordValue.length; j++) {
			if (rightChars.includes(wordValue[j])) {
				maskedWord += wordValue[j];
			} else if (wordValue[j] === " ") {
				maskedWord += ("</span> <span>");
			} else {
				maskedWord += ("-");
			}
		}
		maskedWord += "</span>"
		document.getElementById("ran-word").innerHTML = maskedWord;
	}
	findSpace()
	function findSpace() {
		for (var k = 0; k < wordValue.length; k++) {
			if (wordValue[k] === " ") {
				shownLetter ++;
			}
		}
	}

	// console.log(wordValue);

	// var wins = 0;
	// document.getElementById("win-count").textContent = wins;

	document.getElementById("message").textContent = "";
	document.getElementById("user-guess").textContent = "...";

	document.getElementById("restart").onclick = bootup;

	function gameOver(win) {
		if (win) {
			// wins ++;
			document.getElementById("message").textContent = message.win;
			document.onkeyup = function() {
  			return false;
  		}
		} else {
			document.getElementById("message").textContent = message.lose;
			document.onkeyup = function() {
  			return false;
  		}
		}
	};

	document.onkeyup = function(event) {
  	var key = event.key.toLowerCase();
  	// console.log(key);
		if (event.keyCode === 32) {
			return false;
		}

  	if (wordValue.indexOf(key) > -1) {
  		if (rightChars.indexOf(key) === -1) {
  			rightChars.push(key);
  			for (var i = 0; i < maskedWord.length; i++) {
  				var letter = maskedWord[i]
  				if (key.includes(wordValue[i])) {
  					shownLetter ++;
					}
  			}
  		}

  	} else if (alphabet.indexOf(key) !== -1) {
    	if (usedChars.indexOf(key) === -1) {
      	usedChars.push(key);
      	var string = usedChars.join(', ');
      	guessLetter.textContent = string;
  			guesses --;
  			document.getElementById("guess-count").textContent = guesses;
    	}
  	}

  	displayWord();
  	if (guesses === 0) {
  		gameOver(false);
  		document.getElementById("ran-word").innerHTML = wordValue;
  	} else if (shownLetter === wordValue.length) {
  		gameOver(true);
  	}
	}
}