# Technical Documentation

## Overview
This project is an interactive personal portfolio website built using HTML, CSS, and JavaScript. It is based on the previous portfolio from Assignment 1 and extends it by adding dynamic behavior, data handling, animations, and user feedback features.

The purpose of the website is to present personal information, projects, and contact details in a clear and interactive way.

## Technologies Used
- HTML5 for page structure
- CSS3 for styling, layout, responsiveness, and animations
- JavaScript for dynamic features, data handling, and user interaction

## File Structure
- `index.html`  
  Contains the structure of the webpage, including the header, hero section, about section, projects section, contact section, and footer.

- `css/styles.css`  
  Contains styling for layout, colors, typography, dark/light mode design, transitions, hover effects, and responsive behavior.

- `js/script.js`  
  Contains JavaScript logic for theme toggling, saving data in `localStorage`, showing and hiding project details, and displaying user feedback messages.

## Implemented Features

### 1. Dynamic Content
The website includes dynamic content that changes based on user interaction:
- the user can click **Show Details** to reveal additional information about each project
- the user can click the same button again to hide the details
- the greeting message updates when a user enters and saves their name

### 2. Data Handling
The website demonstrates basic JavaScript data handling using `localStorage`:
- the selected theme is saved as either `dark` or `light`
- the visitor name is saved as `visitorName`
- when the page reloads, the saved theme and saved name are loaded automatically

### 3. Animations and Transitions
The website includes several animations and transitions to improve the user experience:
- smooth scrolling between page sections
- hover effects on navigation links
- hover effects on buttons
- hover animation on project cards
- hover animation on the profile image
- animated expand/collapse effect for project details
- smooth visual transition between dark mode and light mode

### 4. Error Handling and User Feedback
The website provides feedback to the user:
- if the user tries to save an empty name input, an error message is displayed
- if the user enters a valid name, a success message is displayed
- if a name is already stored, a welcome-back message is shown when the page loads

## JavaScript Logic Summary

### Theme Toggle
The script:
1. reads the saved theme from `localStorage`
2. applies dark mode if it was previously selected
3. updates the theme icon
4. saves the new theme when the toggle button is clicked

### Project Details Toggle
The script:
1. selects all project detail buttons
2. listens for button clicks
3. toggles the `show` class on the corresponding details container
4. updates the button text between **Show Details** and **Hide Details**

### Name Storage
The script:
1. reads a saved name from `localStorage`
2. displays a welcome-back message if a name exists
3. validates the name input when the save button is clicked
4. shows an error if the input is empty
5. saves the name and displays a success message if the input is valid

## Responsive Design
The website is designed to work across different screen sizes:
- Flexbox is used in the hero section
- CSS Grid is used in the projects section
- responsive layout behavior is included for smaller screens
- the page remains readable and usable on desktop, tablet, and mobile devices

## Testing
The website was tested manually in a browser by checking:
- navigation between sections
- smooth scrolling behavior
- theme toggle behavior
- saved theme after refresh
- saving and loading the visitor name
- project details expand/collapse behavior
- hover effects and transitions
- mobile-friendly layout using browser resizing tools

## Possible Future Improvements
- add real social media links
- replace placeholder image with a real profile image
- add project filtering or search
- include more projects and a skills section
- improve accessibility with additional ARIA labels and keyboard support

## Conclusion
This project builds on the first portfolio assignment by adding more interactivity and better user experience. It demonstrates core front-end skills in HTML, CSS, and JavaScript while remaining simple, clear, and easy to maintain.