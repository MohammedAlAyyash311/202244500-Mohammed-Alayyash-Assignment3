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