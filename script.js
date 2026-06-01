const keyProjectsContainer = document.getElementById("key-projects");
const projectsContainer = document.getElementById("projects");
const skillsList = document.getElementById("skills-list");
const technicalSkillsList = document.getElementById("technical-skills-list");

const keyProjects = [
	{
		name: "Microservices based Full Stack Ticketing Web Application in TypeScript with Next.JS, Node.JS, MongoDB, Redis & Kubernetes with Stripe Payments Integration",
		tags: ["Next.JS","Node.JS","MongoDB","Kubernetes","Stripe","Event-Driven Architecture","CI/CD","GCP"],
		description:
			"Enabled Authentication Service with a JWT Token to be shared between Services\nGenerated Create Routes for Tickets Service & Orders Service with Kubernetes MongoDB deployments, with an Expiration Service for Active Orders to time out in 15 minutes if Payment is not completed\nAdministered NATS Streaming Server for Communication between Services using Event-Publishers & Event-Listeners\nPrepared a 'Common' Module with Events, Errors & Middlewares and Published as npm Package to install for code sharing across Services\nConstructed Kubernetes Deployments for Services and Used Ingress-Nginx for Routing to Services based on hostname & paths\nDeveloped Client Application using Next.JS and Implemented Payments with Stripe Charges\nReviewed Tests for Backend Routes using Jest and Configured a GitHub Workflow to Test Services in new PRs\n",
	},
	{
		name: "Microservices with Java, Spring Framework, Spring Cloud, Eureka & Kubernetes",
		tags: ["Spring","Kubernetes","CI/CD","GCP"],
		description:
			"Leveraged Spring Cloud Netflix – Eureka Server for inter-service communication\nImplemented a Spring Cloud Configuration Server to centralize shared Properties and Logic\nSet up Microservices with Distributed Tracing using Zipkin and OpenTelemetry\nCreated Kubernetes deployments and validated deployments on Google Cloud with Google Kubernetes Engine",
	},
	{
		name: "Library Full Stack Web Application with React.JS, Spring & MySQL with Okta Authentication & Stripe Payments Integrations",
		tags: ["React.JS","Spring","MySQL","Okta","Stripe"],
		description:
			"Developed Client Application using React.JS & Utilized Lombok, Spring Data REST, and JPARepository to streamline backend codebase and efficiently manage data with Security configuration\nIntegrated Okta Authentication for secure user login and Stripe Payments for processing transactions, enhancing user experience and security\nSecured the application with HTTPS using OpenSSL and keytool utilities, ensuring data encryption and secure data transmission",
	},
	{
		name: "Full Stack eCommerce Web Application with MongoDB, Express, React.JS, Node.JS with Paypal Payments Integration",
		tags: ["React.JS","Node.JS","MongoDB","PayPal"],
		description:
			"Ensured functionalities for User to Register, Login / Logout, Place Order and Create Product Reviews\nPrepared data models for products, orders, users using Mongoose\nDeveloped Custom Middleware and Implemented User Authentication using JWT Web Token\nHandled App State Management using Redux Toolkit\nImplemented Admin Pages and Functionality to Create/Edit/Delete products and users\nActivated and tested Payments with PayPal Integration\nConfigured, Deployed and Tested Deployments on Render\nAutomated Cloud Infrastructure and Formulated CI/CD pipeline to Deploy on Azure",
	},
	{
		name: "Microfrontends based Blog App with JavaScript and React.JS",
		tags: ["React.JS","JavaScript","Vue.js","Webpack","AWS"],
		description:
			"Developed micro-frontend sub apps using Webpack to enable development for different sub-apps using different front-end frameworks\nImplemented CI/CD pipelines to build & deploy sub-apps to Amazon Web Services\nConfigured and Deployed production-build to AWS using S3 & CloudFront\n",
	},
	{
		name: "MVC based Job Portal Application with Spring-MVC, Thymeleaf & MySQL ",
		tags: ["Spring","Thymeleaf","MySQL"],
		description:
			"Designed Recruiter Dashboard to Create / Edit Jobs & Candidate Dashboard to Search / Save / Apply for jobs\nImplemented Global Search for Jobs & Facilitated Authentication with Spring-Security for Candidates & Recruiters\nDeveloped File Upload / Download Utilities for Pictures & PDFs",
	},
	// { name: "Project x", tags: ["Python"], description: "description" },
];

const projects = [
	{
		name: "Microservices based Full Stack Blog Web Application in JavaScript with React.JS, Node.JS, MongoDB & Kubernetes",
		tags: ["React.JS","Node.JS","MongoDB","Kubernetes","Stripe","Event-Driven Architecture","CI/CD","GCP"],
		description:
			"Implemented an Event-Bus in JavaScript to enable Event-Driven Communication between Services\nDeveloped Client Application using React.JS to create Posts and Comments\nConstructed Kubernetes Deployments for Services and Used Ingress-Nginx for Routing to Services based on hostname & paths\n",
	},
	{
		name: "Dev Environment with Terraform & Azure",
		tags: ["Terraform","Azure","CI/CD"],
		description:
			"Developed a Terraform script to automate the setup and management of a development environment, ensuring consistent and reproducible infrastructure\nAutomated configuration of scalable resources such as virtual machines, networks, and storage, to meet the specific requirements of development workflows\nCreated a template for automated Docker & Kubernetes installations on virtual machines\n",
	},
	{
		name: "Movie-Trailers Full Stack Web Application with React.js, Spring & MongoDB",
		tags: ["Spring","React.JS","MongoDB"],
		description:
			"The Home Page Carousel lists movies with options to play trailers and navigate to movie reviews\nThe Movie Reviews section displays existing reviews and provides an option to create a new review.",
	},
	{
		name: "MVC based Employee Management Web Application with Spring-MVC, Thymeleaf & MySQL",
		tags: ["Spring","Thymeleaf","MySQL"],
		description:
			"Developed a simple Employee Management System with CRUD operations using Thymeleaf\nImplemented authentication with Spring Security for secure access\n Enhanced application logging with Aspects and Advices",
	},
	{
		name: "Student Management Full Stack Web Application with JSP, Servlets & MySQL",
		tags: ["jsp","Java","MySQL"],
		description:
			"Developed a Simple Student Management System with CRUD operations for each student\nUtilized JSP with JSTL Core Tags for dynamic content\nConfigured a connection pool for efficient JDBC connections",
	},
	{
		name: "Blog Web Application with Django and PostgreSQL",
		tags: ["Django","PostgreSQL","AWS"],
		description:
			"Blog application with Register, Login, Add Posts, View Post & Comments related to post, Update & Delete Records functionalities\n Registered Data Models with custom settings on Django Admin to manage data with Super User \n Configured & Deployed on AWS Elastic Beanstalk with S3 Bucket for static files \n Migrated from SQLite to PostgreSQL for production",
	},
	{
		name: "File Sharing Web Application with Node.JS and MongoDB",
		tags: ["Node.JS","MongoDB"],
		description:
			"Password Protected File Sharing using Node.JS and MongoDB\n User Interface implemented using Embedded-JavaScript",
	},
	{
		name: "GitHub Authentication with React.JS & Node.JS",
		tags: ["React.JS","Node.JS"],
		description:
			"User Login redirects to GitHub login and request access token for the user from GitHub API\n On successful login, the user has an option to import user data from GitHub to the web application",
	},
	{
		name: "Stock Watch Web Application with React.JS",
		tags: ["React.JS"],
		description: "Developed a React application with an existing API to display various Stocks & Details",
	},
	{
		name: "Recipes Web Application with React.JS",
		tags: ["React.JS"],
		description:
			"Developed a React application to search Recipes with an existing online API\n Set Recent Searches to Local Storage",
	},
	{
		name: "Team Member Allocation Web Application with React.JS",
		tags: ["React.JS"],
		description: "Developed a React application to allocate Team members with useState",
	},
	{
		name: "Customer-Relationship-Management Application with Django and MySQL",
		tags: ["Django","MySQL"],
		description:
			"Customer Relationship Management application with Register, Login, Add Records, View Records, Update Records, Delete Records functionalities",
	},
	{
		name: "HTML, CSS & JavaScript",
		tags: ["JavaScript"],
		description:
			"Calculator Application which consists of 10 digits & 4 basic mathematical operations\n To Do Application with Create, Edit, Delete item functionalities\n Product Page with a Countdown Timer which displays Days, Hours, Minutes, Seconds\n",
	},
	// { name: "Project x", tags: ["Python"], description: "description" },
];

const skills = [
	{
		name: "Web / Application",
		description:
			"Front-end Development\n Back-end Development\n SQL & NoSQL Databases\n Data Analysis, Machine Learning\n Configuration & Deployment\n CI/CD\n Documentation & Workflow Design\n Test-case Design & Bug Reporting\n API & E2E Test Automation\n AGILE",
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
		description: "Python\n R\n JavaScript / TypeScript\n Java\n C / C++",
	},
	{
		name: "Web / Application Design",
		description:
			"HTML5, CSS, Bootstrap\n Tcl / Tk\n jQuery\n JavaScript / TypeScript\n eJS\n JSP\n Thymeleaf\n Django\n Angular\n React.JS\n Vue.JS\n Electron.JS\n Astro",
	},
	{
		name: "Databases / Query Languages",
		description: "SQLite\n MySQL\n PostgreSQL\n MS SQL Server\n MongoDB\n Redis\n GraphQL",
	},
	{
		name: "Web / Application Server",
		description: "Flask\n Node.JS\n Express.JS\n Tomcat\n Servlets\n Spring Boot\n Spring Framework",
	},
	{
		name: "Automation Tools",
		description: "Cucumber\n Power Automate\n pyTest, Playwright\n Jest, Cypress\n JUnit",
	},
	{
		name: "Tools",
		description:
			"Linux\n Docker\n Kubernetes\n nginx\n Postman\n git, gitHub\n CI / CD\n Terraform\n Ansible\n Jenkins\n OpenSSL\n Okta\n Stripe\n PayPal",
	},
	{
		name: "Cloud Platforms",
		description: "Render\n Netlify\n Vercel\n Amazon Web Services\n Google Cloud\n Microsoft Azure",
	},
];

// ── Scroll Reveal ──
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
revealEls.forEach(el => observer.observe(el));


// =========================
// Render Featured Projects
// =========================

keyProjectsContainer.innerHTML = keyProjects
  .map(
    project => `
      <div class="card key-project-card reveal">
        <span class="card-tag">Featured</span>

        <h3>${project.name}</h3>

		<p>${project.description.replace(/\n/g, "<br>")}</p>

        <div class="card-footer">
          <div class="card-tags">
            ${project.tags
              .map(tag => `<span class="tag">${tag}</span>`)
              .join("")}
          </div>

          <a href="${project.link}" class="card-link">
            View →
          </a>
        </div>
      </div>
    `
  )
  .join("");


// =========================
// Render Projects
// =========================

projectsContainer.innerHTML = projects
  .map(
    project => `
      <div class="card project-card reveal">
        <h3>${project.name}</h3>

		<p>${project.description.replace(/\n/g, "<br>")}</p>
        
		<div class="card-tags">
          ${project.tags
            .map(tag => `<span class="tag">${tag}</span>`)
            .join("")}
        </div>
      </div>
    `
  )
  .join("");


// =========================
// Render Skills
// =========================


  
skillsList.innerHTML = skills
  .map(
    skill => `
      <div class="skill-group">
        <h3>${skill.name}</h3>

        <ul>
          ${skill.description
            .split("\n")
            .map(item => `<li>${item.trim()}</li>`)
            .join("")}
        </ul>
      </div>
    `
  )
  .join("");


// =========================
// Render Technical Skills
// =========================

technicalSkillsList.innerHTML = technicalSkills
  .map(
    skill => `
      <div class="skill-group">
        <h3>${skill.name}</h3>

        <ul>
          ${skill.description
            .split("\n")
            .map(item => `<li>${item.trim()}</li>`)
            .join("")}
        </ul>
      </div>
    `
  )
  .join("");

// ── Subtle cursor glow on cards ──
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
    const y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
    card.style.setProperty('--mx', `${x}%`);
    card.style.setProperty('--my', `${y}%`);
    card.style.background =
        `radial-gradient(circle at ${x}% ${y}%, rgba(99,102,241,0.08), transparent 60%), var(--surface)`;
    });
    card.addEventListener('mouseleave', () => {
    card.style.background = '';
    });
});

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});