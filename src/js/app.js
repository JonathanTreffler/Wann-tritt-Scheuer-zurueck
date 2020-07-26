// Countdown
var interval = setInterval(updateAll, 1000);

function updateAll() {
	var countdowns = document.getElementsByClassName("countdown");
	
	console.log(countdowns);
	
	for (let i = 0; i < countdowns.length; i++) {
		updateSingle(countdowns[i]);
	}
}

function updateSingle(object) {
	var countDownDate = new Date(object.dataset.year, object.dataset.month - 1, object.dataset.day).getTime();

	var now = new Date().getTime();

	var distance = countDownDate - now;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	object.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}

// Loading animation
window.onload = function() {
	let loading = document.getElementById("loading");
	let content = document.getElementById("content");
	let moneyOverlay = document.getElementById("money_overlay");
	
	console.log(loading, content, moneyOverlay);
	
	particlesJS.load('money_overlay', 'assets/particles.json', function() {});
	setTimeout(function() {
		//$("#loading").css("opacity", 0);
		loading.style.opacity = 0;
	}, 700);
	setTimeout(function() {
		//$("#loading").css("display", "none");
		loading.style.display = "none";
		//$("#content").css("display", "initial");
		content.style.display = "initial";
		//$("#content").css("opacity", 1);
		content.style.opacity = 1;
		//$("#money_overlay").css("opacity", 0.5);
		moneyOverlay.opacity = 0.5;
	}, 900);
};

updateAll();
