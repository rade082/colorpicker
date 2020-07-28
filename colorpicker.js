var numSquare=6;
var color=generateColor(numSquare);
var square = document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
colorDisplay.textContent=pickedColor;

reset.addEventListener("click",function(){
	color=generateColor(numSquare);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	this.textContent="NEW COLOR"
	message.textContent="";
	for(var i=0;i<square.length;i++){
		square[i].style.background=color[i];
	}
   h1.style.background="steelblue";	

})
easyBtn.addEventListener("click",function(){
	numSquare=3;
	color=generateColor(numSquare);
	pickedColor=pickColor();
	easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    for(var i=0;i<square.length;i++){
    	if (color[i]) {
    		square[i].style.background=color[i];
    	}else{
    		square[i].style.display="none";
    	}
    }
})
hardBtn.addEventListener("click",function(){
	 numSquare=6;
     color=generateColor(numSquare);
     pickedColor=pickColor();
     hardBtn.classList.add("selected");
     easyBtn.classList.remove("selected");
     for(var i=0;i<square.length;i++){
     	square[i].style.background=color[i];
    	square[i].style.display="block";
    	}
});


for(var i=0; i<square.length; i++){
	square[i].style.background=color[i];
	square[i].addEventListener("click",function(){
		var clickedColor=this.style.background;
		if (clickedColor===pickedColor) {
			message.textContent="correct";
		    reset.textContent="PLAY Again?"	
		    h1.style.background=clickedColor;
			changeColor(clickedColor);

		}
	    else{
			this.style.background="black";
            message.textContent="Try Again";
	    };
	})
}

function changeColor(color){
	for(var i=0;i<square.length;i++){
		square[i].style.background=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*color.length);
	return color[random];
}

function generateColor(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());

	}
	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()* 256);
	var g=Math.floor(Math.random()* 256);
	var b=Math.floor(Math.random()* 256);
	return "rgb("+ r +", "+ g +", "+ b +")";
}