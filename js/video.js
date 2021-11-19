var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log(video.currentTime)
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate -= 0.05;
	console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate += 0.05;
	console.log("New video speed is " + video.playbackRate);
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	video.currentTime += 15;
	console.log(video.currentTime)
	video.loop = false;
});