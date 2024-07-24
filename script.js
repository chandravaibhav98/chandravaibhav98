document.addEventListener("DOMContentLoaded", () => {
	const keyProjects = [
		{
			name: "Microservices based Full Stack Ticketing Web Application in TypeScript with Next.JS, Node.JS, MongoDB, Redis & Kubernetes",
			language: "JavaScript",
			description:
				"Enabled Authentication Service with a JWT Token to be shared between Services\n Generated Create Routes for Tickets Service & Orders Service with Kubernetes MongoDB deployments, with an Expiration Service for Active Orders to time out in 15 minutes if Payment is not completed\n Administered NATS Streaming Server for Communication between Services using Event-Publishers & Event-Listeners\n Prepared a 'Common' Module with Events, Errors & Middlewares and Published as npm Package to install for code sharing across Services\n Constructed Kubernetes Deployments for Services and Used Ingress-Nginx for Routing to Services based on hostname & paths\n Developed Client Application using Next.JS and Implemented Payments with Stripe Charges\n Reviewed Tests for Backend Routes using Jest and Configured a GitHub Workflow to Test Services in new PRs\n",
		},
		{
			name: "Full Stack eCommerce Web Application with MongoDB, Express, React.JS, Node.JS",
			language: "JavaScript",
			description:
				"Ensured functionalities for User to Register, Login / Logout, Place Order and Create Product Reviews\n Prepared data models for products, orders, users using Mongoose\n Developed Custom Middleware and Implemented User Authentication using JWT Web Token\n Handled App State Management using Redux Toolkit\n Implemented Admin Pages and Functionality to Create/Edit/Delete products and users\n Activated and tested Payments with PayPal Integration\n Configured, Deployed and Tested Production-Build on Render\n",
		},
		{
			name: "Micro-Frontends based Blog App with JavaScript and React.JS",
			language: "JavaScript",
			description:
				"Developed micro-frontend sub apps using Webpack to enable development for different sub-apps using different front-end frameworks\n Implemented CI/CD pipelines to build & deploy sub-apps to Amazon Web Services\n Configured and Deployed production-build to AWS using S3 & CloudFront\n",
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
			name: "Student Management MVC-Web Application with JSP, Servlets & MySQL",
			language: "Java",
			description:
				"Simple Student Management System with CRUD operations per Student\nDesigned JSP with JSTL : Core Tags\nConfigured Connection-Pool for JDBC connections",
		},
		{
			name: "GitHub Authentication with React.JS & Node.JS",
			language: "JavaScript",
			description:
				"User Login redirects to GitHub login and request access token for the user from GitHub API\n On successful login, the user has an option to import user data from GitHub to the web application",
		},
		{
			name: "File Sharing Web Application with Node.JS and MongoDB",
			language: "JavaScript",
			description:
				"Password Protected File Sharing using Node.JS and MongoDB\n User Interface implemented using Embedded-JavaScript",
		},
		{
			name: "Stock Watch Web Application with React.JS",
			language: "JavaScript",
			description:
				"Developed a React application with an existing API to display various Stocks & Details",
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
				"Front-end Development\nBack-end Development\nDatabase Management\nData Analytics & Science\nDocumentation\n",
		},
		{
			name: "IT",
			description:
				"Workflow Design\nTest-case Design\nTest Automation\nTroubleshooting\nBug Tracking\nAGILE\n",
		},
	];
	const technicalSkills = [
		{
			name: "Programming / Scripting Languages",
			description: "JavaScript / TypeScript, Java, Python, C++, R",
		},
		{
			name: "Web / Application Design",
			description:
				"HTML5, CSS, Bootstrap, JavaScript / TypeScript, Embedded-JavaScript, React.JS, Tkinter, Electron.JS",
		},
		{
			name: "Databases / Query Languages",
			description: "SQLite, MySQL, MS SQL Server, PostgreSQL, MongoDB, Redis, GraphQL",
		},
		{
			name: "Web / Application Server",
			description:
				"Node.JS, Express.JS, Flask, Django, Spring Boot, Spring Core, Spring REST, Spring MVC, Spring Security, Spring Data JPA, Spring Hibernate",
		},
		{
			name: "Automation Tools",
			description: "Cucumber, Jest, Cypress, pyTest, Power Automate",
		},
		{
			name: "Tools",
			description: "Git, GitHub, Postman, Docker, Kubernetes, Linux",
		},
	];
	// ----------------------------
	const keyProjectsContainer = document.getElementById("key-projects");
	const projectsContainer = document.getElementById("projects");
	const skillsList = document.getElementById("skills-list");
	const technicalSkillsList = document.getElementById("technical-skills-list");

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

		const description = document.createElement("p");
		// description.textContent = item.description;
		const lines = item.description.split("\n"); // Split description into lines
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

	loadData();
});
// ----------------------------
