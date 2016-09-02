/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	
	$(document).ready(function() {
	
	if (localStorage.items) {
		var items = JSON.parse(localStorage.items);
	}
	
	else {
		var items = [];
		items.push('milk');
		items.push('apples');
		localStorage.items = JSON.stringify(items);
	}
	
	
		console.log(items);
		console.log(localStorage.items);
	
		for (index in items) {
			$('.missionlist').append("<li class='listitem'> <img class='checkdiv' src='images/check.png'/>" + " " + items[index] + " " + "<img class='removediv' src='images/remove.png'/></li>");
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


/***/ }
/******/ ]);
//# sourceMappingURL=shoppinglist_packaged.1.0.0.js.map