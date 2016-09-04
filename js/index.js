var $ = require('jquery');

import {Shoppinglist} from "./shoppinglist";

var myshoppinglist;
console.log(myshoppinglist);

$(document).ready(function() {

if (localStorage.items) {
	myshoppinglist = new Shoppinglist(JSON.parse(localStorage.items));
}

else {
	myshoppinglist = new Shoppinglist();
	myshoppinglist.additem('milk');
	myshoppinglist.additem('apples');
	localStorage.items = JSON.stringify(items);
}


	//console.log(items);
	console.log(localStorage.items);

	for (let index in myshoppinglist.items) {
		$('.missionlist').append("<li class='listitem'> <img class='checkdiv' src='images/check.png'/>" + " " + myshoppinglist.items[index] + " " + "<img class='removediv' src='images/remove.png'/></li>");
	}

$('#userInput').submit(function(event) {
		event.preventDefault();
		var something = $('#inputBox').val();
		// if user inputs nothing and hits enter, alert will pop up and nothing is appended
		if (something === "") {
			alert('Please enter an item!')
		}
		//otherwise, text is appended as a li to the shopping list
		else {
			$('.missionlist').append("<li class='listitem'> <img class='checkdiv' src='images/check.png'/>" + " " + something + " " + "<img class='removediv' src='images/remove.png'/></li>");
			items = JSON.parse(localStorage.items);
			items.push(something);
			localStorage.items = JSON.stringify(items);
			/*alert(something);*/
		}
		// resets the textbox after item is entered
		$('#userInput')[0].reset();
	});

});

//functions to delete and strikethrough code when checkbox and trashcan are clicked
assignlisteners();
function assignlisteners() {
	$('ul').on('click', '.removediv', function(event){
		console.log('trash clicked');
		$(this).closest('li').remove();
	});
	$('ul').on('click', '.checkdiv', function(event) {
		var li = $(this).closest('li');
		$('.missionaccomplishedlist').append(li);
		console.log('check clicked');
	});

}
