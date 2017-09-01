
// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;
// The constructor should accept two arguments: text and cloze.
// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
// The constructed object should have a partial property that contains only the partial text.
// The constructed object should have a fullText property that contains only the full text.
// The constructor should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.

var ClozeCard = function (text, cloze) {

	if (!text.includes(cloze)) {
		console.log("Error, cloze text isn't in the text.");
		return;
	}

	var clozeTextArray = text.split(" ");
	var wordToHideArray = cloze.split(" ");
	wordToHideArray.forEach(function(elem){
		clozeTextArray.splice(clozeTextArray.indexOf(elem), 1,"..");
	});
	var clozeText = clozeTextArray.join(" ");

	this.fullText = text;
	this.cloze = cloze;
	this.partial = clozeText;

}

module.exports = ClozeCard
