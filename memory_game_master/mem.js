
// connect JS variables to HTML elements
var c1 =			document.querySelector("#c1");
var c2 = 			document.querySelector("#c2");
var c3 = 			document.querySelector("#c3");
var c4 = 			document.querySelector("#c4");
var c5 = 			document.querySelector("#c5");
var c6 = 			document.querySelector("#c6");
var c7 = 			document.querySelector("#c7");
var c8 = 			document.querySelector("#c8");
var resetButton = 	document.querySelector("#resetbutton");

// set initial cell values
c1.innerHTML = "*";
c2.innerHTML = "*";
c3.innerHTML = "*";
c4.innerHTML = "*";
c5.innerHTML = "*";
c6.innerHTML = "*";
c7.innerHTML = "*";
c8.innerHTML = "*";

// functions that hide letters = return cells to initial values
var close1 = function() {c1.innerHTML = "*"};
var close2 = function() {c2.innerHTML = "*"};
var close3 = function() {c3.innerHTML = "*"};
var close4 = function() {c4.innerHTML = "*"};
var close5 = function() {c5.innerHTML = "*"};
var close6 = function() {c6.innerHTML = "*"};
var close7 = function() {c7.innerHTML = "*"};
var close8 = function() {c8.innerHTML = "*"};

var closeLast = function() {
for (var i=1; i<=9; i++) {
    if (cellStatus[i] === "last" && i===1) {close1(); cellStatus[i]="x"};
	if (cellStatus[i] === "last" && i===2) {close2(); cellStatus[i]="x"};
	if (cellStatus[i] === "last" && i===3) {close3(); cellStatus[i]="x"};
	if (cellStatus[i] === "last" && i===4) {close4(); cellStatus[i]="x"};
	if (cellStatus[i] === "last" && i===5) {close5(); cellStatus[i]="x"};
	if (cellStatus[i] === "last" && i===6) {close6(); cellStatus[i]="x"};
	if (cellStatus[i] === "last" && i===7) {close7(); cellStatus[i]="x"};
	if (cellStatus[i] === "last" && i===8) {close8(); cellStatus[i]="x"};
	}
}


// Letters to remember
var markG = "G";
var markH = "H";
var markJ = "J";
var markK = "K";

resetButton.onclick = function() {location.reload()};

var clicker =  false;
var cellStatus = ["x","x","x","x","x","x","x","x","x"];

var checkCellStatus = function() {
	for (var i=1; i<=9; i++) {
		if (cellStatus[i]!="found"){
			console.log(cellStatus[i]);
			cellStatus[i] = "x"; 
		}
	}
return cellStatus;
}

var reportCellStatus = function(x) {
	if (cellStatus[x] === "last") {
		return true;
	}
	else return false;
}

var updateCellStatus = function (x, a) {
	cellStatus[x] = a;
}
	

c1.onclick = function() {
	clicker=!clicker;
	// console.log("c1 input clicker " + clicker);
	c1.innerHTML = markG;

	if (clicker===true) {
	// if this is the first cell choice. 
	// Show correct mark & keep cell open.
		updateCellStatus(1,"last");
		console.log("if  " + cellStatus);
		return clicker;
	// update cell status and set clicker for a second click
	}
	
	else if 
	// this is the second click
	(!reportCellStatus(6)) {
	// and there is no match
	window.setTimeout(function() {c1.innerHTML = "*"; closeLast()}, 1500);
	// delay 1.5 secs then close this cell and the last clicked cell
	console.log("else if   " + cellStatus); 
	return clicker;
	// update cell status and set clicker for a first click
	}
	else {
	// this was the second click and a match was found
		updateCellStatus(6,"found")
		updateCellStatus(1,"found")
		checkCellStatus();
	// console.log("else  " + cellStatus);
	// mark this pair cells found and keep both open
		return clicker;
	// update cell status and set clicker for a first click
	}
return cellStatus;
}

c6.onclick = function() {
	clicker=!clicker;
	// console.log("c6 input clicker " + clicker);
	c6.innerHTML = markG;

	if (clicker===true) {
	// if this is the first cell choice. 
	// Show correct mark & keep cell open.
		updateCellStatus(6,"last");
		console.log("if  " + cellStatus);
		return clicker;
	// update cell status and set clicker for a second click
	}
	
	else if 
	// this is the second click
	(!reportCellStatus(1)) {
	// and there is no match
	window.setTimeout(function() {c6.innerHTML = "*"; closeLast()}, 1500);
	// delay 1.5 secs then close this cell and the last clicked cell
	// console.log("else if  " + cellStatus);
	return clicker;
	// update cell status and set clicker for a first click
	}
	else {
	// this was the second click and a match was found
		updateCellStatus(1,"found");
		updateCellStatus(6,"found");
		checkCellStatus();
	// mark this pair cells found and keep both open
	// console.log("else  " + cellStatus);
		return clicker;
	// update cell status and set clicker for a first click
	}
return cellStatus;
}

c2.onclick = function() {
	clicker=!clicker;
	c2.innerHTML = markJ;
	if (clicker===true) {
		updateCellStatus(2,"last");
		console.log("if  " + cellStatus);
		return clicker;
	}
	else if 
	(!reportCellStatus(5)) {
	window.setTimeout(function() {c2.innerHTML = "*"; closeLast()}, 1500);
	console.log("else if   " + cellStatus); 
	return clicker;
	}
	else {
		updateCellStatus(2,"found");
		updateCellStatus(5,"found");
		checkCellStatus();
		return clicker;
	}
return cellStatus;
}

c5.onclick = function() {
	clicker=!clicker;
	c5.innerHTML = markJ;
	if (clicker===true) {
		updateCellStatus(5,"last");
		console.log("if  " + cellStatus);
		return clicker;
	}
	else if 
	(!reportCellStatus(2)) {
	window.setTimeout(function() {c5.innerHTML = "*"; closeLast()}, 1500);
	console.log("else if   " + cellStatus); 
	return clicker;
	}
	else {
		updateCellStatus(2,"found");
		updateCellStatus(5,"found");
		checkCellStatus();
		return clicker;
	}
return cellStatus;
}

c3.onclick = function() {
	clicker=!clicker;
	c3.innerHTML = markK;
	if (clicker===true) {
		updateCellStatus(3,"last");
		console.log("if  " + cellStatus);
		return clicker;
	}
	else if 
	(!reportCellStatus(7)) {
	window.setTimeout(function() {c3.innerHTML = "*"; closeLast()}, 1500);
	console.log("else if   " + cellStatus); 
	return clicker;
	}
	else {
		updateCellStatus(3,"found");
		updateCellStatus(7,"found");
		checkCellStatus();
		return clicker;
	}
return cellStatus;
}

c7.onclick = function() {
	clicker=!clicker;
	c7.innerHTML = markK;
	if (clicker===true) {
		updateCellStatus(7,"last");
		console.log("if  " + cellStatus);
		return clicker;
	}
	else if 
	(!reportCellStatus(3)) {
	window.setTimeout(function() {c7.innerHTML = "*"; closeLast()}, 1500);
	console.log("else if   " + cellStatus); 
	return clicker;
	}
	else {
		updateCellStatus(3,"found");
		updateCellStatus(7,"found");
		checkCellStatus();
		return clicker;
	}
return cellStatus;
}

c4.onclick = function() {
	clicker=!clicker;
	c4.innerHTML = markH;
	if (clicker===true) {
		updateCellStatus(4,"last");
		console.log("if  " + cellStatus);
		return clicker;
	}
	else if 
	(!reportCellStatus(8)) {
	window.setTimeout(function() {c4.innerHTML = "*"; closeLast()}, 1500);
	console.log("else if   " + cellStatus); 
	return clicker;
	}
	else {
		updateCellStatus(4,"found");
		updateCellStatus(8,"found");
		checkCellStatus();
		return clicker;
	}
return cellStatus;
}

c8.onclick = function() {
	clicker=!clicker;
	c8.innerHTML = markH;
	if (clicker===true) {
		updateCellStatus(8,"last");
		console.log("if  " + cellStatus);
		return clicker;
	}
	else if 
	(!reportCellStatus(4)) {
	window.setTimeout(function() {c8.innerHTML = "*"; closeLast()}, 1500);
	console.log("else if   " + cellStatus); 
	return clicker;
	}
	else {
		updateCellStatus(4,"found");
		updateCellStatus(8,"found");
		checkCellStatus();
		return clicker;
	}
return cellStatus;
}













