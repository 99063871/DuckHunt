var directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
var duck = document.getElementById("duck");
var posLeft = 450;
var posTop = 250;

var hitCounter = 0;
var missCounter = 0;
var totalCounter = 0;
console.log(totalCounter)


var BHit = document.getElementById("ButtonHit");
var BMiss = document.getElementById("ButtonMiss");
var Score = document.getElementById("score");

function moveduck(){
	if(totalCounter == "20")
    return;
     
	var number = Math.floor(Math.random()* 8);
	var direction = directions[number];
	if(direction == "N"){
		if(posTop > 0){
		posTop = posTop - 75;
		duck.style.top = posTop + "px";
		}
	}

	else if(direction == "NE"){
		if(posLeft < 1000){
			if(posTop > 0){
			posLeft = posLeft + 75;
			duck.style.left = posLeft + "px";
			posTop = posTop - 75;
			duck.style.top = posTop + "px";
			duck.style.transform = "scaleX(1)"
			}
		}
	}

	else if(direction == "E"){
		if(posLeft < 1000){
		posLeft = posLeft + 75;
		duck.style.left = posLeft + "px";
		duck.style.transform = "scaleX(1)"
		}
	}

	else if(direction == "SE"){
		if(posLeft < 1000){
			if(posTop < 450){
			posLeft = posLeft + 75;
			duck.style.left = posLeft + "px";
			posTop = posTop + 75;
			duck.style.top = posTop + "px";
			duck.style.transform = "scaleX(1)"
			}
		}
	}

	else if(direction == "S"){
		if(posTop < 450){
		posTop = posTop + 75;
		duck.style.top = posTop + "px";
		}
	}

	else if(direction == "SW"){
		if(posLeft > 0){
			if(posTop < 450){
			posLeft = posLeft - 75;
			duck.style.left = posLeft + "px";
			posTop = posTop + 75;
			duck.style.top = posTop + "px";
			duck.style.transform = "scaleX(-1)"
			}
		}
	}

	else if(direction == "W"){
		if(posLeft > 0){
		posLeft = posLeft - 75;
		duck.style.left = posLeft + "px";
		duck.style.transform = "scaleX(-1)"
		}
	}

	else if(direction == "NW"){
		if(posLeft > 0){
			if(posTop > 0){
			posLeft = posLeft - 75;
			duck.style.left = posLeft + "px";
			posTop = posTop - 75;
			duck.style.top = posTop + "px";
			duck.style.transform = "scaleX(-1)"
			}
		}
	}
}


setInterval(moveduck, 300);

function hit(e){
	e.stopPropagation();
	posLeft = 450;
	posTop = 250;
	hitCounter = hitCounter + 1;
	totalCounter = totalCounter + 1
	console.log(totalCounter);
		if(totalCounter == "20"){
		Score.innerHTML ="Je hebt " + hitCounter + " keer geraakt <br> en " + missCounter + " keer gemist <br> Je score is: " + hitCounter;
		}
}

function miss(){
	posLeft = 450;
	posTop = 250;
	missCounter = missCounter + 1;
	totalCounter = totalCounter + 1
	console.log(totalCounter);
		if(totalCounter == "20"){
		Score.innerHTML ="Je hebt " + hitCounter + " keer geraakt <br> en " + missCounter + " keer gemist <br> Je score is:" + hitCounter;
		}
}