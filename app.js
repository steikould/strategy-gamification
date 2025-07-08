const projectTasks = [
    // Your projectTasks array goes here, it's correct
    // ...
    {
      id: 'ml_resource_allocation',
      name: 'Resource Allocation',
      description: 'Optimize scheduling and dispatch of maintenance crews and equipment.',
      parent_id: 'phase3_ml_applications',
      type: 'sub_task',
      details_page_content: {
        implementation_details: 'Forecast maintenance demand using ML and apply optimization algorithms (routing, constraint programming) to allocate resources efficiently across the pipeline network. Reduces travel time and improves response.',
        steps: [
          'Integrate predictive maintenance outputs, crew/equipment data, and GIS data.',
          'Train forecasting and optimization models on Vertex AI Training.',
          'Deploy optimization service (Cloud Run/Vertex AI Endpoints).',
          'Integrate optimized plans with dispatch systems.'
        ],
        budgeted_hours: 450,
        cost: "$180K - $350K", // This was the previous fix, keeping it
        software_components: ['Vertex AI (Training, Endpoints)', 'Cloud Run', 'BigQuery', 'Python ML Libraries (Optimization, Routing)']
      }
    },
    // ... rest of your projectTasks array
    // ...
];

// Application State
let currentPage = 'map'; // 'map' or a task ID for detail view
let selectedTask = null; // ID of the task for intermediate detail view
let expandedPhases = {}; // Tracks expanded state of root phases, e.g., { phase1_foundation: true }

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    // Corrected: Only call renderApp once the DOM is ready.
    // The placeholder message for rootDiv is removed from here
    // as renderApp will immediately clear and populate it.
    renderApp();

    console.log("App initialized. Project data loaded. State variables set.");
    console.log("Current Page:", currentPage);
    console.log("Selected Task:", selectedTask);
    console.log("Expanded Phases:", expandedPhases);
});

// Main Rendering Function
function renderApp() {
    const rootDiv = document.getElementById('root');
    if (!rootDiv) {
        console.error('Root element not found!');
        return;
    }
    // Crucial: Clear previous content before rendering the current view
    rootDiv.innerHTML = '';

    console.log(`Rendering page: ${currentPage}`);

    switch (currentPage) {
        case 'map':
            renderMapView(rootDiv);
            break;
        default:
            // This case handles task detail pages
            renderTaskDetailView(rootDiv, currentPage);
            break;
    }
    console.log("renderApp called. Current page:", currentPage);
}

// ... (rest of your code above renderMapView) ...

function renderMapView(container) {
    container.innerHTML = ''; // Clear container

    const mapTitle = document.createElement('h1');
    mapTitle.textContent = 'PROJECT QUEST MAP';
    mapTitle.className = 'text-3xl text-yellow-400 text-center my-8 tracking-wider';
    container.appendChild(mapTitle);

    const mapGrid = document.createElement('div');
    mapGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4';
    container.appendChild(mapGrid);

    // Get all phases and strategies to display as top-level cards on the map
    const mapLevelNodes = projectTasks.filter(task => task.type === 'phase' || task.type === 'strategy');

    console.log("DEBUG: mapLevelNodes found:", mapLevelNodes);

    // Optional: Sort them if a specific order is desired, e.g., by ID or a potential future 'order' property.
    // For now, they will appear in the order they are in the projectTasks array.

    mapLevelNodes.forEach(mapNode => {
        const phaseElement = document.createElement('div');
        // ... (rest of the phaseElement creation and appending logic) ...
        phaseElement.className = 'retro-panel bg-indigo-800 border-2 border-indigo-400 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer';
        phaseElement.addEventListener('click', (e) => {
            if (e.target.closest('.sub-task-action-button')) return;
            expandedPhases[mapNode.id] = !expandedPhases[mapNode.id];
            renderApp();
        });

        const phaseHeader = document.createElement('h2');
        phaseHeader.className = 'text-xl text-yellow-300 mb-2 font-bold';
        phaseHeader.textContent = `${expandedPhases[mapNode.id] ? '▼' : '►'} ${mapNode.name}`;
        phaseElement.appendChild(phaseHeader);

        const phaseDescription = document.createElement('p');
        phaseDescription.className = 'text-sm text-gray-300 mb-3';
        phaseDescription.textContent = mapNode.description;
        phaseElement.appendChild(phaseDescription);

        // Render sub_task children if expanded
        if (expandedPhases[mapNode.id]) {
            const allChildren = getChildrenTasks(mapNode.id);
            const subTaskChildren = allChildren.filter(child => child.type === 'sub_task');

            if (subTaskChildren.length > 0) {
                const childrenContainer = document.createElement('div');
                childrenContainer.className = 'ml-4 mt-3 border-l-2 border-dashed border-gray-500 pl-4';
                subTaskChildren.forEach(subTask => {
                    const subTaskElement = document.createElement('div');
                    subTaskElement.className = 'retro-panel bg-purple-700 border border-purple-400 rounded p-3 mb-2 shadow-md hover:bg-purple-600';

                    const subTaskName = document.createElement('h3');
                    subTaskName.className = 'text-md text-green-300 font-semibold';
                    subTaskName.textContent = subTask.name;
                    subTaskElement.appendChild(subTaskName);

                    const viewDetailsButton = document.createElement('button');
                    viewDetailsButton.textContent = 'Details';
                    viewDetailsButton.className = 'sub-task-action-button retro-button text-xs mt-2 bg-green-500 hover:bg-green-400 text-black py-1 px-2';
                    viewDetailsButton.addEventListener('click', (e) => {
                        e.stopPropagation();
                        selectedTask = subTask.id;
                        renderApp();
                    });
                    subTaskElement.appendChild(viewDetailsButton);
                    childrenContainer.appendChild(subTaskElement);
                });
                phaseElement.appendChild(childrenContainer);
            }
        }
        mapGrid.appendChild(phaseElement); // This line is crucial for appending to mapGrid
    });
}

function renderTaskDetailView(container, taskId) {
    container.innerHTML = '';
    const task = getTaskById(taskId);

    if (!task || !task.details_page_content) {
        container.innerHTML = '<p class="text-red-500 text-center p-10">Error: Task details not found!</p>';

        const backButtonError = document.createElement('button');
        backButtonError.textContent = 'Back to Map';
        backButtonError.className = 'retro-button bg-yellow-500 hover:bg-yellow-400 block mx-auto mt-4';
        backButtonError.addEventListener('click', () => {
            currentPage = 'map';
            renderApp();
        });
        container.appendChild(backButtonError);
        return;
    }

    const details = task.details_page_content;

    const detailWrapper = document.createElement('div');
    detailWrapper.className = 'p-4 md:p-8 max-w-4xl mx-auto retro-panel bg-gray-800 border-2 border-gray-600';

    const taskTitle = document.createElement('h1');
    taskTitle.className = 'text-3xl md:text-4xl text-yellow-400 mb-6 text-center tracking-wide';
    taskTitle.textContent = `QUEST: ${task.name}`;
    detailWrapper.appendChild(taskTitle);

    function createDetailSection(title, content) {
        if (!content) return null;

        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'mb-6';

        const sectionTitle = document.createElement('h2');
        sectionTitle.className = 'text-2xl text-green-400 mb-2';
        sectionTitle.textContent = title;
        sectionDiv.appendChild(sectionTitle);

        if (Array.isArray(content)) {
            const ul = document.createElement('ul');
            ul.className = 'list-disc list-inside text-gray-300 pl-4 text-sm md:text-base';
            content.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                ul.appendChild(li);
            });
            sectionDiv.appendChild(ul);
        } else if (typeof content === 'object' && content !== null) {
            const dl = document.createElement('dl');
            dl.className = 'text-gray-300 text-sm md:text-base';
            for (const key in content) {
                const dt = document.createElement('dt');
                dt.className = 'font-semibold text-cyan-400 capitalize';
                dt.textContent = key.replace(/_/g, ' ') + ':';
                dl.appendChild(dt);
                const dd = document.createElement('dd');
                dd.className = 'ml-4 mb-1';
                dd.textContent = content[key];
                dl.appendChild(dd);
            }
            sectionDiv.appendChild(dl);
        } else {
            const p = document.createElement('p');
            p.className = 'text-gray-300 whitespace-pre-wrap text-sm md:text-base';
            p.textContent = content;
            sectionDiv.appendChild(p);
        }
        return sectionDiv;
    }

    const sections = [
        { title: 'Implementation Details', content: details.implementation_details },
        { title: 'Key Steps / Objectives', content: details.steps },
        { title: 'Budgeted Hours', content: details.budgeted_hours?.toString() },
        { title: 'Estimated Cost', content: details.cost },
        { title: 'Software / Tech Stack', content: details.software_components }
    ];

    sections.forEach(sec => {
        const sectionEl = createDetailSection(sec.title, sec.content);
        if (sectionEl) detailWrapper.appendChild(sectionEl);
    });

    const backButton = document.createElement('button');
    backButton.textContent = 'Return to Map';
    backButton.className = 'retro-button bg-yellow-500 hover:bg-yellow-400 block mx-auto mt-8';
    backButton.addEventListener('click', () => {
        currentPage = 'map';
        renderApp();
    });
    detailWrapper.appendChild(backButton);

    container.appendChild(detailWrapper);
}


// Helper function to find a task by ID (will be used by rendering functions)
function getTaskById(taskId) {
    return projectTasks.find(task => task.id === taskId);
}

// Helper function to find children of a task (will be used by rendering functions)
function getChildrenTasks(parentId) {
    return projectTasks.filter(task => task.parent_id === parentId);
}