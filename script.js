// Sample data for skills and projects
const skills = [
	"• Software Development & Testing • Web Application Development • End to End Testing • Troubleshooting • Documentation",
	"• Test-case Design & Execution • Test Management tools • Test Automation • Bug Tracking & Reporting • AGILE",
	"• Front-end Development • Back-end Development • Database Management • Data Analytics & Data Science",
];
const keyProjects = [
	{ name: "keyProject 1", description: "Description of keyProject 1" },
	{ name: "keyProject 2", description: "Description of keyProject 2" },
];
const projects = [
	{ name: "Project 1", description: "Description of Project 1" },
	{ name: "Project 2", description: "Description of Project 2" },
];

// Function to populate skills section
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
	skills.forEach((skill) => {
		const li = document.createElement("li");
		li.textContent = skill;
		skillsList.appendChild(li);
	});
}

// Function to populate projects section
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

// Call functions to populate sections
populateSkills();
populateTechnicalSkills();
populateKeyProjects();
populateProjects();

const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

toggleBtn.addEventListener("click", function () {
	body.classList.toggle("dark-mode");
});
