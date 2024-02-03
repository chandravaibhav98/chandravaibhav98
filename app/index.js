runScript();

function runScript() {
	console.log("JS");
	$("body").toggleClass("darkMode");
	let mode = false;
	$(".bi bi-github").attr("href", "https://www.github.com");
	$(".bi bi-twitter-x").attr("href", "https://twitter.com/VaibhavCha56395");
	$("bi bi-discord").attr("href", "https://www.github.com");
	$("bi bi-google").attr("href", "https://www.github.com");
	$("bi bi-steam").attr("href", "https://www.github.com");
	$("bi bi-playstation").attr("href", "https://www.github.com");
	$("bi bi-xbox").attr("href", "https://www.github.com");
	$("bi bi-linkedin").attr("href", "https://www.github.com");
	console.info("jQuery");
	$(".mode").click(function () {
		console.log("Switch Mode");
		mode != mode;
		switch (mode) {
			case true:
				$("body").toggleClass("lightMode");
				break;
			case false:
				$("body").toggleClass("darkMode");
				break;
			default:
				$("body").toggleClass("darkMode");
				break;
		}
	});
}
