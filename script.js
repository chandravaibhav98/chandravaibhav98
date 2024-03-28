// Sample data for skills and projects
const skills = [
	"• Software Development & Testing • Web Application Development • End to End Testing • Troubleshooting • Documentation",
	// "• Test-case Design & Execution • Test Management tools • Test Automation • Bug Tracking & Reporting • AGILE",
	"• Front-end Development • Back-end Development • Database Management • Data Analytics & Data Science",
];
const technicalSkills = [
	"Programming / Scripting Languages: JavaScript / TypeScript, Java, Python, C++, R",
	"Web / Application Design: HTML5, CSS, Bootstrap, JavaScript / TypeScript, Embedded-JavaScript, React.JS, Tkinter, Electron.JS",
	"Databases / Query Languages: SQLite, MySQL, MS SQL Server, PostgreSQL, MongoDB, Redis, GraphQL",
	"Web / Application Server: Node.JS, Express.JS, Flask, Django, Spring Boot, Spring Core, Spring REST, Spring MVC, Spring Security, Spring Data JPA, Spring Hibernate",
	"Automation Tools: Cucumber, Jest, Cypress, pyTest, Power Automate",
	"Tools: Git, GitHub, Postman, Docker, Kubernetes, Jira, Confluence, Trello, Microsoft Office, VMware, Linux",
];
const keyProjects = [
	{
		name: "Micro-Frontends based Blog App with JavaScript and React.JS",
		description:
			"Developed micro-frontend sub apps using Webpack to enable development for different sub-apps using different front-end frameworks. Implemented CI/CD pipelines to build & deploy sub-apps to Amazon Web Services. Configured and Deployed production-build to AWS using S3 & CloudFront",
	},
	{
		name: "Full Stack eCommerce Web Application with MongoDB, Express, React.JS, Node.JS",
		description:
			"Ensured functionalities for User to Register, Login / Logout, Place Order and Create Product Reviews. Prepared data models for products, orders, users using Mongoose. Developed Custom Middleware and Implemented User Authentication using JWT Web Token. Handled App State Management using Redux Toolkit. Implemented Admin Pages and Functionality to Create/Edit/Delete products and users. Activated and tested Payments with PayPal Integration. Configured, Deployed and Tested Production-Build on Render.",
	},
	{
		name: "Microservices based Full Stack Ticketing Web Application in TypeScript with Next.JS, Node.JS, MongoDB, Redis & Kubernetes",
		description:
			"Enabled Authentication Service with a JWT Token to be shared between Services. Generated Create Routes for Tickets Service & Orders Service with Kubernetes MongoDB deployments, with an Expiration Service for Active Orders to time out in 15 minutes if Payment is not completed. Administered NATS Streaming Server for Communication between Services using Event-Publishers & Event-Listeners. Prepared a 'Common' Module with Events, Errors & Middlewares and Published as npm Package to install for code sharing across Services. Constructed Kubernetes Deployments for Services and Used Ingress-Nginx for Routing to Services based on hostname & paths. Developed Client Application using Next.JS and Implemented Payments with Stripe Charges. Reviewed Tests for Backend Routes using Jest and Configured a GitHub Workflow to Test Services in new PRs.",
	},
];
const projects = [
	{
		name: "GitHub authentication with React.JS & Node.JS",
		description:
			"User Login redirects to GitHub login and request access token for the user from GitHub API. On successful login, the user has an option to import user data from GitHub to the web application",
	},
	{
		name: "File Sharing Web Application with Node.JS and MongoDB",
		description:
			"Password Protected File Sharing using Node.JS and MongoDB. User Interface implemented using Embedded-JavaScript",
	},
	{
		name: "Customer-Relationship-Management application with Python/Django and MySQL",
		description:
			"Customer Relationship Management application with Register, Login, Add Records, View Records, Update Records, Delete Records functionalities",
	},
	{
		name: "HTML, CSS with Vanilla JavaScript",
		description:
			"Calculator Application which consists of 10 digits & 4 basic mathematical operations. To Do Application with Create, Edit, Delete item functionalities. Product Page with a Countdown Timer which displays Days, Hours, Minutes, Seconds",
	},
	// { name: "Project 2", description: "Description of Project 2" },
];
// ____________________________
function populateSkills() {
	const skillsList = document.getElementById("skills-list");
	skills.forEach((skill) => {
		const li = document.createElement("li");
		li.textContent = skill;
		skillsList.appendChild(li);
	});
}
function populateTechnicalSkills() {
	const skillsList = document.getElementById("technical-skills-list");
	technicalSkills.forEach((skill) => {
		const li = document.createElement("li");
		li.textContent = skill;
		skillsList.appendChild(li);
	});
}

function populateKeyProjects() {
	const projectsList = document.getElementById("key-projects-list");
	keyProjects.forEach((project) => {
		const div = document.createElement("div");
		div.innerHTML = `
            <h5>${project.name}</h5>
            <p>${project.description}</p>
        `;
		projectsList.appendChild(div);
	});
}
function populateProjects() {
	const projectsList = document.getElementById("projects-list");
	projects.forEach((project) => {
		const div = document.createElement("div");
		div.innerHTML = `
            <h5>${project.name}</h5>
            <p>${project.description}</p>
        `;
		projectsList.appendChild(div);
	});
}

populateSkills();
populateTechnicalSkills();
populateKeyProjects();
populateProjects();

const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

toggleBtn.addEventListener("click", function () {
	body.classList.toggle("dark-mode");
});
