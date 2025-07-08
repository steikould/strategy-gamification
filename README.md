# Project Quest: ML/AI Roadmap Visualizer
## Overview
Project Quest is an interactive, retro-themed web application designed to visualize and explore complex Machine Learning (ML) and Artificial Intelligence (AI) project roadmaps. It breaks down large-scale initiatives into manageable phases and sub-tasks, offering detailed insights into implementation, steps, resource allocation, and technology stacks. This tool serves as a dynamic, gamified representation of project progression, enhancing stakeholder engagement and clarity on strategic ML/AI endeavors.

## Features
Interactive Map View: Visually explore project phases and strategies, presented as a "quest map."

Expandable Phases: Click on top-level phases to reveal their underlying sub-tasks.

Detailed Task Views: Dive deep into individual tasks to see:

## Implementation details

### Key steps/objectives

### Budgeted hours

### Estimated costs

### Software/Tech Stack components

Retro UI/UX: A nostalgic, pixel-art inspired interface (powered by Tailwind CSS) for an engaging user experience.

Pure Frontend: Built with vanilla HTML, CSS, and JavaScript, making it easily deployable on static hosting platforms like GitHub Pages.

### Technical Stack
HTML5: For semantic structure.

CSS3 (Tailwind CSS): Utility-first CSS framework for rapid and responsive styling. (Note: Using CDN for simplicity, but for production, a build process with PostCSS is recommended for optimization.)

JavaScript (Vanilla JS): Powers all the interactive elements, dynamic content rendering, and application state management.

### Project Structure
The project is straightforward and consists of two primary files:

.
├── index.html
├── app.js
└── style.css (if you have custom CSS beyond Tailwind)
index.html: The main entry point of the application. It includes the basic HTML structure, links to Tailwind CSS, and most importantly, imports app.js.

app.js: Contains all the application logic, including the projectTasks data structure, state management, and functions responsible for rendering the different views (map and detail pages) based on user interaction.

style.css: (Optional) For any custom CSS beyond what Tailwind provides.

### Getting Started
To get a local copy up and running, follow these simple steps.

### Prerequisites
You only need a modern web browser. No complex build tools or server-side environments are required.

### Installation
Clone the repository:

Bash
'''
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Open index.html: Simply open the index.html file in your web browser.

Alternatively, if you have a local web server (e.g., Python's http.server, Live Server VS Code extension), serve the directory to view it as you would on a deployed page:
'''

python -m http.server
Then, navigate to http://localhost:8000 in your browser.

Deployment (GitHub Pages)
This project is perfectly suited for deployment on GitHub Pages.

Push to GitHub: Ensure your project is pushed to a GitHub repository (e.g., https://github.com/your-username/project-quest).

*Enable GitHub Pages:*

Go to your repository on GitHub.

Click on "Settings".

In the left sidebar, click on "Pages".

Under "Source," select your main branch (or whichever branch contains your index.html and app.js files) and the /root or /docs folder if you've structured it that way. Typically, for a simple root deployment, main branch and / (root) is correct.

Click "Save".

Access Your Page: GitHub will provide you with a URL (e.g., https://your-username.github.io/project-quest/) where your live roadmap visualizer will be accessible within a few minutes.

Extending the Roadmap Data
The core of the project roadmap is defined within the projectTasks array in app.js. To extend or modify the roadmap:

Open app.js.

Modify projectTasks:

Add new phases or sub-tasks following the existing JSON structure.

Ensure each task has a unique id.

Use parent_id to define the hierarchical relationship between phases and sub-tasks.

Populate the details_page_content object with relevant information for each task.

Contributions
Contributions are welcome! If you have ideas for new features, improvements, or bug fixes, feel free to:

Fork the repository.

Create your feature branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some AmazingFeature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request.

