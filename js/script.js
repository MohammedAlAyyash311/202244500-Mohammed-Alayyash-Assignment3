/* ===== DARK / LIGHT MODE TOGGLE ===== */

// Select the theme toggle button
const themeToggle=document.getElementById("theme-toggle")

// Get saved theme from localStorage
const savedTheme=localStorage.getItem("theme")

// Apply saved theme when page loads
if(savedTheme==="dark"){
document.body.classList.add("dark-mode")
themeToggle.textContent="☀️"
}

// Toggle theme when button clicked
themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode")

// Save preference in localStorage
if(document.body.classList.contains("dark-mode")){
localStorage.setItem("theme","dark")
themeToggle.textContent="☀️"
}
else{
localStorage.setItem("theme","light")
themeToggle.textContent="🌙"
}

})



/* ===== SHOW / HIDE PROJECT DETAILS ===== */

// Select all buttons
const buttons=document.querySelectorAll(".details-btn")

buttons.forEach(button=>{

button.addEventListener("click",()=>{

// Get project details element
const details=button.nextElementSibling

// Toggle visibility
details.classList.toggle("show")

// Change button text
if(details.classList.contains("show")){
button.textContent="Hide Details"
}
else{
button.textContent="Show Details"
}

})

})



/* ===== USER NAME STORAGE (localStorage) ===== */

// Get input elements
const nameInput=document.getElementById("visitor-name")
const saveButton=document.getElementById("save-name")
const greeting=document.getElementById("greeting-message")

// Load saved name
const savedName=localStorage.getItem("visitorName")

// If name exists show greeting
if(savedName){
greeting.textContent="Welcome back, "+savedName+"!"
}

// Save name when button clicked
saveButton.addEventListener("click",()=>{

const name=nameInput.value.trim()

// Error message if empty
if(name===""){
greeting.textContent="Please enter your name."
return
}

// Save name to localStorage
localStorage.setItem("visitorName",name)

// Show success message
greeting.textContent="Welcome, "+name+"! Your name has been saved."

})

/* ===== PROJECT FILTER + SORT ===== */
const filterCategory = document.getElementById("filter-category");
const sortProjects = document.getElementById("sort-projects");
const projectsGrid = document.querySelector(".projects-grid");

if (filterCategory && sortProjects && projectsGrid) {
  const originalCards = Array.from(projectsGrid.querySelectorAll(".project-card"));

  const renderProjects = () => {
    const selectedCategory = filterCategory.value;
    const selectedSort = sortProjects.value;

    localStorage.setItem("projectFilter", selectedCategory);
    localStorage.setItem("projectSort", selectedSort);

    let cards = [...originalCards];

    if (selectedCategory !== "all") {
      cards = cards.filter(card => card.dataset.category === selectedCategory);
    }

    cards.sort((a, b) => {
      if (selectedSort === "title") {
        return a.querySelector("h3").textContent.localeCompare(
          b.querySelector("h3").textContent
        );
      }

      const dateA = new Date(a.dataset.date);
      const dateB = new Date(b.dataset.date);

      return selectedSort === "newest" ? dateB - dateA : dateA - dateB;
    });

    projectsGrid.innerHTML = "";
    cards.forEach(card => projectsGrid.appendChild(card));
  };

  const savedFilter = localStorage.getItem("projectFilter");
  const savedSort = localStorage.getItem("projectSort");

  if (savedFilter) filterCategory.value = savedFilter;
  if (savedSort) sortProjects.value = savedSort;

  filterCategory.addEventListener("change", renderProjects);
  sortProjects.addEventListener("change", renderProjects);

  renderProjects();
}


/* ===== CONTACT FORM VALIDATION ===== */
const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.getElementById("contact-message");
const formMessage = document.getElementById("form-message");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = contactName.value.trim();
    const email = contactEmail.value.trim();
    const message = contactMessage.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill in all fields.";
      return;
    }

    if (!emailPattern.test(email)) {
      formMessage.textContent = "Please enter a valid email address.";
      return;
    }

    if (message.length < 10) {
      formMessage.textContent = "Message must be at least 10 characters long.";
      return;
    }

    formMessage.textContent = "Form submitted successfully!";
    contactForm.reset();
  });
}


/* ===== TIME ON SITE COUNTER ===== */
const timeOnSite = document.getElementById("time-on-site");

if (timeOnSite) {
  let seconds = 0;

  setInterval(() => {
    seconds++;
    timeOnSite.textContent = `Time on site: ${seconds} second${seconds !== 1 ? "s" : ""}`;
  }, 1000);
}


/* ===== GITHUB API INTEGRATION ===== */
const repoList = document.getElementById("repo-list");
const repoStatus = document.getElementById("repo-status");

async function loadGitHubRepos() {
  if (!repoList || !repoStatus) return;

  repoStatus.textContent = "Loading repositories...";

  try {
    const username = "MohammedAlAyyash311";
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`);

    if (!response.ok) {
      throw new Error("Failed to fetch repositories.");
    }

    const repos = await response.json();

    repoList.innerHTML = "";

    repos.forEach(repo => {
      const card = document.createElement("article");
      card.className = "project-card";
      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description ? repo.description : "No description available."}</p>
        <p><strong>Language:</strong> ${repo.language ? repo.language : "Not specified"}</p>
        <a href="${repo.html_url}" target="_blank">View Repository</a>
      `;
      repoList.appendChild(card);
    });

    repoStatus.textContent = "";
  } catch (error) {
    repoStatus.textContent = "Sorry, GitHub projects could not be loaded right now.";
  }
}

loadGitHubRepos();