
window.onload = function() {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;
};

function previewHandler() {
	var canvas = document.getElementById("tshirtcanvas");
	var context = canvas.getContext("2d");
	
		
    fillBackgroundColor(canvas,context);
	drawCat(canvas, context);
	
	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;
	
	if(shape == "squares") {
		for(var squares = 0; squares < 20; squares++) {
			drawSquare(canvas, context);
		}
	} else if(shape == "circles") {
		for (var circles = 0; circles < 15; circles++) {
			drawCircle(canvas, context);
		}
	}
	
	drawText(canvas, context);
}

function drawSquare(canvas, context) {
	var w = Math.floor(Math.random() * 35);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);

	context.fillStyle = "lightblue";
	context.fillRect(x, y, w, w);
}

function drawCircle(canvas, context) {
	var radius = Math.floor(Math.random() * 20);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
	
	context.beginPath();
	context.arc(x, y, radius, 0, 2 * Math.PI, true);
	context.fillStyle = "lightblue";
	context.fill();
}

function fillBackgroundColor(canvas, context) {
	var selectObj = document.getElementById("backgroundColor");
	var index = selectObj.selectedIndex;
	var backgroundColor = selectObj[index].value;
	
	context.fillStyle = backgroundColor;
	context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawText(canvas, context) {
	var selectObj = document.getElementById("foregroundColor");
	var index = selectObj.selectedIndex;
	var fgColor = selectObj[index].value;
	
	context.fillStyle = fgColor;
	context.font = "bold 1em sans-serif";
	context.textAlign = "left";
	context.fillText("Are you ok", 20, 40);
	
	context.font = "bold 1em sans-serif";
	context.textAlign = "right";
	context.fillText("I don't want to be your hero", canvas.width-20, canvas.height-40);
}

function drawCat(canvas, context) {
	var cat = new Image();
	cat.src = "1.png";
	cat.onload = function() {
		context.drawImage(cat, 20, 120, 454/4, 340/4);
	}
}