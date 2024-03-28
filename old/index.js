runScript();

function runScript() {
	console.log("JS");
	$("body").toggleClass("darkMode");
	let mode = false;
	$(".link-github").attr("href", "https://www.github.com");
	$(".link-twitter-x").attr("href", "https://twitter.com/VaibhavCha56395");
	$(".link-instagram").attr("href", "https://www.github.com");
	$(".link-discord").attr("href", "https://www.github.com");
	$(".link-google").attr("href", "https://www.github.com");
	$(".link-steam").attr("href", "https://www.github.com");
	$(".link-playstation").attr("href", "https://www.github.com");
	$(".link-xbox").attr("href", "https://www.github.com");
	$(".link-linkedin").attr("href", "https://www.github.com");
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
