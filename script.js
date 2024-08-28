const keyProjects = [
	{
		name: "Microservices based Full Stack Ticketing Web Application in TypeScript with Next.JS, Node.JS, MongoDB, Redis & Kubernetes",
		language: "JavaScript",
		description:
			"Enabled Authentication Service with a JWT Token to be shared between Services\nGenerated Create Routes for Tickets Service & Orders Service with Kubernetes MongoDB deployments, with an Expiration Service for Active Orders to time out in 15 minutes if Payment is not completed\nAdministered NATS Streaming Server for Communication between Services using Event-Publishers & Event-Listeners\nPrepared a 'Common' Module with Events, Errors & Middlewares and Published as npm Package to install for code sharing across Services\nConstructed Kubernetes Deployments for Services and Used Ingress-Nginx for Routing to Services based on hostname & paths\nDeveloped Client Application using Next.JS and Implemented Payments with Stripe Charges\nReviewed Tests for Backend Routes using Jest and Configured a GitHub Workflow to Test Services in new PRs\n",
	},
	{
		name: "Microservice Applications with Java, Spring Framework, Spring Cloud, Eureka & Kubernetes",
		language: "Java",
		description:
			"Leveraged Spring Cloud Netflix – Eureka Server for inter-service communication\nImplemented a Spring Cloud Configuration Server to centralize shared Properties and Logic\nSet up Microservices with Distributed Tracing using Zipkin and OpenTelemetry\nCreated Kubernetes deployments and validated deployments on Google Cloud with Google Kubernetes Engine",
	},
	{
		name: "Full Stack eCommerce Web Application with MongoDB, Express, React.JS, Node.JS",
		language: "JavaScript",
		description:
			"Ensured functionalities for User to Register, Login / Logout, Place Order and Create Product Reviews\nPrepared data models for products, orders, users using Mongoose\nDeveloped Custom Middleware and Implemented User Authentication using JWT Web Token\nHandled App State Management using Redux Toolkit\nImplemented Admin Pages and Functionality to Create/Edit/Delete products and users\nActivated and tested Payments with PayPal Integration\nConfigured, Deployed and Tested Deployments on Render\nAutomated Cloud Infrastructure and Formulated CI/CD pipeline to Deploy on Azure",
	},
	{
		name: "Microfrontends based Blog App with JavaScript and React.JS",
		language: "JavaScript",
		description:
			"Developed micro-frontend sub apps using Webpack to enable development for different sub-apps using different front-end frameworks\nImplemented CI/CD pipelines to build & deploy sub-apps to Amazon Web Services\nConfigured and Deployed production-build to AWS using S3 & CloudFront\n",
	},
	{
		name: "Dev Environment with Terraform & Azure",
		language: "Ops",
		description:
			"Developed a Terraform script to automate the setup and management of a development environment, ensuring consistent and reproducible infrastructure\nAutomated configuration of scalable resources such as virtual machines, networks, and storage, to meet the specific requirements of development workflows\nCreated a template for automated Docker & Kubernetes installations on virtual machines\n",
	},
	// { name: "Project x", language: "Python", description: "description" },
];
const projects = [
	{
		name: "Microservices based Full Stack Blog Web Application in JavaScript with React.JS, Node.JS, MongoDB & Kubernetes",
		language: "JavaScript",
		description:
			"Implemented an Event-Bus in JavaScript to enable Event-Driven Communication between Services\nDeveloped Client Application using React.JS to create Posts and Comments\nConstructed Kubernetes Deployments for Services and Used Ingress-Nginx for Routing to Services based on hostname & paths\n",
	},
	{
		name: "Movie-Trailers Full Stack Web Application with React.js, Spring & MongoDB",
		language: "Java",
		description:
			"The Home Page Carousel lists movies with options to play trailers and navigate to movie reviews\nThe Movie Reviews section displays existing reviews and provides an option to create a new review.",
	},
	{
		name: "Employee Management MVC-Web Application with Thymeleaf, Spring-MVC & MySQL",
		language: "Java",
		description:
			"Developed a simple Employee Management System with CRUD operations using Thymeleaf\nImplemented authentication with Spring Security for secure access\n Enhanced application logging with Aspects and Advices",
	},
	{
		name: "Student Management Full Stack Web Application with JSP, Servlets & MySQL",
		language: "Java",
		description:
			"Developed a Simple Student Management System with CRUD operations for each student\nUtilized JSP with JSTL Core Tags for dynamic content\nConfigured a connection pool for efficient JDBC connections",
	},
	{
		name: "File Sharing Web Application with Node.JS and MongoDB",
		language: "JavaScript",
		description:
			"Password Protected File Sharing using Node.JS and MongoDB\n User Interface implemented using Embedded-JavaScript",
	},
	{
		name: "GitHub Authentication with React.JS & Node.JS",
		language: "JavaScript",
		description:
			"User Login redirects to GitHub login and request access token for the user from GitHub API\n On successful login, the user has an option to import user data from GitHub to the web application",
	},
	{
		name: "Stock Watch Web Application with React.JS",
		language: "JavaScript",
		description: "Developed a React application with an existing API to display various Stocks & Details",
	},
	{
		name: "Recipes Web Application  with React.JS",
		language: "JavaScript",
		description:
			"Developed a React application to search Recipes with an existing online API\n Set Recent Searches to Local Storage",
	},
	{
		name: "Team Member Allocation Web Application with React.JS",
		language: "JavaScript",
		description: "Developed a React application to allocate Team members with useState",
	},
	{
		name: "Customer-Relationship-Management application with Python/Django and MySQL",
		language: "Python",
		description:
			"Customer Relationship Management application with Register, Login, Add Records, View Records, Update Records, Delete Records functionalities",
	},
	{
		name: "HTML, CSS & JavaScript",
		language: "JavaScript",
		description:
			"Calculator Application which consists of 10 digits & 4 basic mathematical operations\n To Do Application with Create, Edit, Delete item functionalities\n Product Page with a Countdown Timer which displays Days, Hours, Minutes, Seconds\n",
	},
	// { name: "Project x", language: "Python", description: "description" },
];
const skills = [
	{
		name: "Software",
		description:
			"Front-end Development\nBack-end Development\nSQL & NoSQL Databases\nData Analysis, Machine Learning\nConfiguration & Deployment (CI/CD)\nDocumentation & Workflow Design\nTest-case Design & Bug Reporting\nAPI & E2E Test Automation\nDebugging & Troubleshooting\nAGILE\n",
	},
	// {
	// 	name: "domain",
	// 	description:
	// 		"",
	// },
];
const technicalSkills = [
	{
		name: "Programming / Scripting Languages",
		description: "R\nPython\nJavaScript / TypeScript\nJava\nC / C++",
	},
	{
		name: "Web / Application Design",
		description:
			"HTML5, CSS, Bootstrap\nTcl / Tk\nJavaScript / TypeScript\n eJS\nJSP, Thymeleaf\nReact.JS, Electron.JS",
	},
	{
		name: "Databases / Query Languages",
		description: "SQLite\n MySQL\nMS SQL Server\nPostgreSQL\nMongoDB\nRedis\nGraphQL",
	},
	{
		name: "Web / Application Server",
		description: "Flask, Django\nNode.JS, Express.JS\nTomcat, Servlets, Spring Boot, Spring Framework",
	},
	{
		name: "Automation Tools",
		description: "Cucumber\nPower Automate\npyTest, Playwright\nJest, Cypress\nJUnit",
	},
	{
		name: "Tools",
		description: "Linux\nDocker, Kubernetes, nginx\nPostman\ngit, gitHub\nCI / CD\nTerraform\nAnsible\nJenkins\n",
	},
	{
		name: "Cloud Platforms",
		description: "Render\nVercel\nAmazon Web Services\nGoogle Cloud\nMicrosoft Azure",
	},
];
const keyProjectsContainer = document.getElementById("key-projects");
const projectsContainer = document.getElementById("projects");
const skillsList = document.getElementById("skills-list");
const technicalSkillsList = document.getElementById("technical-skills-list");
// ----------------------------
function createCard(item) {
	const card = document.createElement("div");
	card.className = "card";
	if (item.language) {
		card.setAttribute("data-language", item.language);
	} else {
		card.setAttribute("data-language", "");
	}

	const title = document.createElement("h4");
	title.textContent = item.name;
	card.appendChild(title);

	const separator = document.createElement("hr");
	card.appendChild(separator);

	const description = document.createElement("ul");
	// description.textContent = item.description;
	const lines = item.description.split("\n");
	lines.forEach((line) => {
		if (line) {
			const listItem = document.createElement("li");
			listItem.textContent = line;
			description.appendChild(listItem);
		}
	});
	card.appendChild(description);

	return card;
}

function loadData() {
	keyProjects.forEach((project) => {
		const card = createCard(project);
		keyProjectsContainer.appendChild(card);
	});

	projects.forEach((project) => {
		const card = createCard(project);
		projectsContainer.appendChild(card);
	});

	skills.forEach((skill) => {
		const card = createCard(skill);
		skillsList.appendChild(card);
	});

	technicalSkills.forEach((technicalSkill) => {
		const card = createCard(technicalSkill);
		technicalSkillsList.appendChild(card);
	});
}

window.filterProjects = function (language) {
	const cards = document.querySelectorAll(".card");

	cards.forEach((card) => {
		if (
			language === "all" ||
			card.getAttribute("data-language") === language ||
			card.getAttribute("data-language") === ""
		) {
			card.style.display = "block";
		} else {
			card.style.display = "none";
		}
	});
};

document.addEventListener("DOMContentLoaded", () => {
	loadData();
});
// ----------------------------
