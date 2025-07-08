const projectTasks = [
  // High-Level Phases (Root Nodes)
  {
    id: 'phase1_foundation',
    name: 'Phase 1: Foundation',
    description: 'Establish the core data ingestion and storage infrastructure.',
    parent_id: null,
    type: 'phase',
    details_page_content: {
      implementation_details: 'This phase focuses on setting up robust, scalable, and secure data pipelines from the PI System into BigQuery, forming the Bronze layer. It is the absolute prerequisite for all subsequent ML and AI initiatives.',
      steps: [
        'Evaluate and operationalize Litmus or alternative for PI tag ingestion.',
        'Implement robust error handling, logging, and monitoring.',
        'Establish clear data schemas for raw PI tags.',
        'Secure data in transit and at rest using GCP security features.'
      ],
      budgeted_hours: 1000,
      cost: '$500K - $1M (Infrastructure + Personnel)',
      software_components: ['Litmus (or custom connector)', 'Google Cloud Pub/Sub', 'Google Cloud Storage', 'Google Cloud Dataflow', 'BigQuery']
    }
  },
  {
    id: 'phase2_core_platform',
    name: 'Phase 2: Core Platform',
    description: 'Design and implement the BigQuery-centric data lakehouse for enriched data.',
    parent_id: 'phase1_foundation',
    type: 'phase',
    details_page_content: {
      implementation_details: 'This phase builds upon the Bronze layer, transforming raw data into curated and enriched Silver and Gold layers within BigQuery. It involves extensive metadata enrichment, data casting, and reshaping to make data accessible for various functions.',
      steps: [
        'Design and implement Silver Layer for curated/enriched data.',
        'Design and implement Gold Layer for aggregated/business-ready data.',
        'Establish centralized metadata store for enrichment.',
        'Implement stream and batch enrichment processes.'
      ],
      budgeted_hours: 1500,
      cost: '$750K - $1.5M (Personnel + BigQuery Compute)',
      software_components: ['BigQuery', 'Google Cloud Dataflow', 'Google Cloud Dataproc', 'Dataform', 'Cloud Composer/Airflow', 'Cloud SQL']
    }
  },
  {
    id: 'phase3_ml_applications',
    name: 'Phase 3: ML Applications',
    description: 'Develop and deploy various machine learning models for operational insights.',
    parent_id: 'phase2_core_platform',
    type: 'phase',
    details_page_content: {
      implementation_details: 'This phase focuses on building specific ML models leveraging the enriched data. It includes dynamic thresholding, outlier detection, and optimization tasks, with considerations for A/B testing and fine-tuning foundation models.',
      steps: [
        'Develop Dynamic Threshold models for digital twin and pipeline performance.',
        'Implement Outlier Detection for health and security.',
        'Build Predictive Optimization models for fuel blending.',
        'Create Predictive Resource Allocation models for maintenance crews.',
        'Set up ML Model A/B Testing framework.',
        'Research and fine-tune Foundation Models for pipeline-specific tasks.'
      ],
      budgeted_hours: 3000,
      cost: '$1M - $2M (Annually for Personnel + Compute)',
      software_components: ['Vertex AI (Workbench, Training, Endpoints, Pipelines, Model Monitoring, Feature Store)', 'BigQuery', 'Python ML Libraries (TensorFlow, PyTorch, Scikit-learn)', 'Genetic Algorithm frameworks']
    }
  },
  {
    id: 'phase4_operational_integration',
    name: 'Phase 4: Operational Integration',
    description: 'Automate MLOps, integrate communications, and gamify progress.',
    parent_id: 'phase3_ml_applications', // Can start in parallel with ML applications
    type: 'phase',
    details_page_content: {
      implementation_details: 'This phase focuses on accelerating the path to production for ML models and integrating AI insights into daily operations. It includes CI/CD for ML, automated alerting, and innovative gamification strategies for stakeholder engagement.',
      steps: [
        'Implement automated CI/CD for ML code and pipelines.',
        'Integrate AI alerts with ticketing and communication systems.',
        'Develop gamified dashboards for project status and AI impact.'
      ],
      budgeted_hours: 1200,
      cost: '$300K - $500K',
      software_components: ['Cloud Build', 'Cloud Source Repositories', 'Cloud Composer/Airflow', 'Cloud Functions', 'Cloud Run', 'Looker Studio/Looker', 'Streamlit/Dash/React', 'ServiceNow/Jira APIs', 'Slack/Teams APIs']
    }
  },
  {
    id: 'phase5_future_vision',
    name: 'Phase 5: Future Vision',
    description: 'Explore advanced AI with multi-agent orchestration and full digital twin.',
    parent_id: 'phase4_operational_integration',
    type: 'phase',
    details_page_content: {
      implementation_details: 'This is the long-term vision, focusing on developing a full-scale digital twin of the entire pipeline governed by specialized industrial task-specific AI agents. It involves complex multi-agent systems and deep integration with PLC systems.',
      steps: [
        'Research and prototype multi-agent architectures.',
        'Develop specialized industrial task-specific agents (e.g., pump power optimization, statistical analysis, judge agents).',
        'Establish secure communication protocols between AI agents and PLC systems.',
        'Implement a comprehensive digital twin of the entire pipeline network.'
      ],
      budgeted_hours: 4000,
      cost: '$500K - $1M (R&D + Prototyping)',
      software_components: ['Custom AI Agent Frameworks', 'Reinforcement Learning Libraries', 'Physics-Informed ML Libraries', 'Secure Industrial Communication Protocols (e.g., OPC UA)', 'Kubernetes (for agent orchestration)']
    }
  },
  {
    id: 'strategy_os_migration',
    name: 'Strategy: Open Source Migration',
    description: 'Incremental transition of ML components to open-source alternatives.',
    parent_id: 'phase4_operational_integration', // Can be seen as a parallel/post-Phase 4 activity
    type: 'strategy',
    details_page_content: {
      implementation_details: 'This strategy outlines a phased approach to move from managed Vertex AI services to open-source alternatives, balancing cost optimization with operational control. It focuses on components like model training, serving, MLOps orchestration, and feature stores.',
      steps: [
        'Migrate Model Training to self-managed open-source (e.g., Kubeflow Training Operators on GKE).',
        'Migrate Model Serving to self-managed open-source (e.g., KServe on GKE).',
        'Migrate ML Pipelines Orchestration to open-source (e.g., Kubeflow Pipelines / Apache Airflow).',
        'Migrate Feature Store to open-source (e.g., Redis / Feast).'
      ],
      budgeted_hours: 800,
      cost: '$200K - $400K (Migration Effort + Initial Setup)',
      software_components: ['Kubeflow (Training Operators, KServe, Pipelines)', 'Apache Airflow', 'Redis', 'Feast', 'Google Kubernetes Engine (GKE)', 'Compute Engine']
    }
  },
  // Sub-tasks for ML Applications (Phase 3)
  {
    id: 'ml_dynamic_thresholds',
    name: 'Dynamic Thresholds',
    description: 'Implement ML models to learn adaptive thresholds for sensor readings and operational parameters.',
    parent_id: 'phase3_ml_applications',
    type: 'sub_task',
    details_page_content: {
      implementation_details: 'Utilize time-series forecasting models (ARIMA, LSTMs) to predict expected sensor ranges, and potentially genetic algorithms to optimize threshold parameters. This reduces false alerts and provides more accurate anomaly detection.',
      steps: [
        'Prepare enriched time-series data for training.',
        'Train forecasting models on Vertex AI Training.',
        'Deploy models to Vertex AI Endpoints for real-time inference.',
        'Implement logic for dynamic threshold application and alerting.'
      ],
      budgeted_hours: 400,
      cost: '$150K - $300K',
      software_components: ['Vertex AI (Training, Endpoints, Pipelines)', 'BigQuery', 'Python ML Libraries (TensorFlow, PyTorch, Scikit-learn)', 'Genetic Algorithm frameworks']
    }
  },
  {
    id: 'ml_outlier_detection',
    name: 'Outlier Detection',
    description: 'Develop models to identify significant deviations in multivariate sensor data for health and security.',
    parent_id: 'phase3_ml_applications',
    type: 'sub_task',
    details_page_content: {
      implementation_details: 'Apply unsupervised anomaly detection algorithms (Isolation Forest, Autoencoders) or supervised methods if historical labels exist. Crucial for detecting subtle leaks, equipment malfunctions, or cyber threats.',
      steps: [
        'Create comprehensive feature sets from correlated sensors.',
        'Train anomaly detection models on Vertex AI Training.',
        'Deploy models to Vertex AI Endpoints.',
        'Integrate anomaly scores into dashboards and alerting systems.'
      ],
      budgeted_hours: 350,
      cost: '$120K - $250K',
      software_components: ['Vertex AI (Training, Endpoints, Pipelines)', 'BigQuery', 'Python ML Libraries']
    }
  },
  {
    id: 'ml_fuel_blending_opt',
    name: 'Fuel Blending Optimization',
    description: 'Predict optimal fuel blend ratios to meet specifications while minimizing costs.',
    parent_id: 'phase3_ml_applications',
    type: 'sub_task',
    details_page_content: {
      implementation_details: 'Train regression models or use genetic algorithms/reinforcement learning to recommend optimal blend recipes. Aims to reduce expensive component usage and ensure consistent product quality.',
      steps: [
        'Collect historical blending data, component properties, and costs.',
        'Train optimization models on Vertex AI Training (potentially using genetic algorithms).',
        'Deploy optimization engine as a microservice (Vertex AI Endpoints/Cloud Run).',
        'Integrate recommendations with operational dashboards or control systems.'
      ],
      budgeted_hours: 500,
      cost: '$200K - $400K',
      software_components: ['Vertex AI (Training, Endpoints)', 'Cloud Run', 'BigQuery', 'Python ML Libraries (Optimization, RL frameworks)', 'OR-Tools']
    }
  },
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
      cost: '$180K - $350K',
      software_components: ['Vertex AI (Training, Endpoints)', 'Cloud Run', 'BigQuery', 'Python ML Libraries (Optimization, Routing)']
    }
  },
  {
    id: 'ml_ab_testing',
    name: 'ML Model A/B Testing',
    description: 'Framework for comparing different ML model versions in production.',
    parent_id: 'phase3_ml_applications',
    type: 'sub_task',
    details_page_content: {
      implementation_details: 'Deploy multiple model versions to a single Vertex AI Endpoint, split traffic, and collect real-world performance metrics in BigQuery. Essential for validating improvements and safe model rollouts.',
      steps: [
        'Configure Vertex AI Endpoints for multi-model deployment and traffic splitting.',
        'Implement logging of inference requests and responses to BigQuery.',
        'Set up performance analysis dashboards in Looker Studio/Looker.',
        'Define clear success metrics for A/B tests.'
      ],
      budgeted_hours: 200,
      cost: '$80K - $150K',
      software_components: ['Vertex AI (Model Registry, Endpoints, Model Monitoring)', 'BigQuery', 'Looker Studio/Looker']
    }
  },
  {
    id: 'ml_foundation_fine_tuning',
    name: 'Foundation Model Fine-Tuning',
    description: 'Adapt pre-trained models for pipeline-specific tasks.',
    parent_id: 'phase3_ml_applications',
    type: 'sub_task',
    details_page_content: {
      implementation_details: 'Leverage deep learning architectures (Transformers, LSTMs) or physics-informed neural networks (PINNs) and fine-tune them with your specific historical pipeline data. Accelerates development and improves performance for specialized industrial agents.',
      steps: [
        'Identify relevant foundation models/architectures.',
        'Prepare task-specific labeled datasets from Silver/Gold layers.',
        'Adapt model architectures and fine-tune on Vertex AI Training.',
        'Rigorously evaluate fine-tuned model performance.'
      ],
      budgeted_hours: 600,
      cost: '$250K - $500K',
      software_components: ['Vertex AI (Workbench, Training, Datasets)', 'BigQuery', 'Python Deep Learning Frameworks (TensorFlow, PyTorch)', 'Hugging Face Transformers (for relevant architectures)']
    }
  },
  // Sub-tasks for Operational Integration (Phase 4)
  {
    id: 'ops_mlops_devops_auto',
    name: 'MLOps & DevOps Automation',
    description: 'Automate the ML lifecycle from development to deployment.',
    parent_id: 'phase4_operational_integration',
    type: 'sub_task',
    details_page_content: {
      implementation_details: 'Implement CI/CD pipelines for ML code, automated infrastructure provisioning (IaC), model versioning, and continuous monitoring/retraining. Essential for faster time to production and reliable operations.',
      steps: [
        'Set up CI/CD pipelines using Cloud Build and Cloud Source Repositories.',
        'Implement Infrastructure as Code (Terraform) for GCP resources.',
        'Establish Vertex AI Model Registry for model versioning.',
        'Automate model retraining and monitoring via Vertex AI Pipelines.'
      ],
      budgeted_hours: 500,
      cost: '$200K - $350K',
      software_components: ['Cloud Build', 'Cloud Source Repositories', 'Terraform', 'Vertex AI (Pipelines, Model Registry, Monitoring)', 'Cloud Composer/Airflow']
    }
  },
  {
    id: 'ops_integrated_comms',
    name: 'Integrated Comms & Ticketing',
    description: 'Connect AI insights and alerts directly to operational workflows.',
    parent_id: 'phase4_operational_integration',
    type: 'sub_task',
    details_page_content: {
      implementation_details: 'Configure automated alerts from ML models to trigger notifications in collaboration platforms (Slack, Teams) and create tickets in CMMS/ticketing systems (ServiceNow, Jira). Ensures timely action and feedback.',
      steps: [
        'Configure Cloud Monitoring alerts for ML model performance/anomalies.',
        'Develop Cloud Functions for custom integrations with Slack/Teams/ServiceNow APIs.',
        'Establish feedback loops for operators on AI prediction accuracy.'
      ],
      budgeted_hours: 300,
      cost: '$100K - $200K',
      software_components: ['Cloud Functions', 'Pub/Sub', 'ServiceNow/Jira APIs', 'Slack/Teams APIs']
    }
  },
  {
    id: 'ops_gamification',
    name: 'Gamification of Updates',
    description: 'Enhance stakeholder engagement with game-like progress visualization.',
    parent_id: 'phase4_operational_integration',
    type: 'sub_task',
    details_page_content: {
      implementation_details: 'Create interactive dashboards and simulations that present project status, AI impact, and allow executives to explore scenarios. Frame projects as "quests" to foster engagement and understanding.',
      steps: [
        'Develop interactive dashboards (Looker Studio/Looker) for project KPIs.',
        'Create simplified digital twin simulations (Streamlit/Dash) for executive evaluation.',
        'Design "Pipeline Health Scorecard" and "AI Impact Calculator" concepts.'
      ],
      budgeted_hours: 400,
      cost: '$150K - $250K',
      software_components: ['BigQuery', 'Looker Studio/Looker', 'Streamlit/Dash/React', 'Cloud Functions/Cloud Run']
    }
  },
  // Sub-tasks for Open Source Migration Strategy
  {
    id: 'os_model_training',
    name: 'OS Model Training',
    description: 'Migrate ML model training from Vertex AI to open-source alternatives.',
    parent_id: 'strategy_os_migration',
    type: 'sub_task',
    details_page_content: {
      implementation_details: 'Transition custom training jobs from Vertex AI Training to self-managed Kubernetes (Kubeflow Training Operators on GKE), Dataproc, or Compute Engine VMs. Requires containerization of training code and adjustment of orchestration.',
      steps: [
        'Containerize all existing ML training code.',
        'Set up Kubeflow Training Operators on GKE or configure Dataproc/Compute Engine environments.',
        'Update Vertex AI Pipelines/Cloud Composer DAGs to trigger new training environments.',
        'Ensure secure data access from open-source training environments.'
      ],
      budgeted_hours: 250,
      cost: '$100K - $200K',
      software_components: ['Kubeflow Training Operators', 'Google Kubernetes Engine (GKE)', 'Dataproc', 'Compute Engine', 'Docker']
    }
  },
  {
    id: 'os_model_serving',
    name: 'OS Model Serving',
    description: 'Transition ML model serving from Vertex AI Endpoints to open-source.',
    parent_id: 'strategy_os_migration',
    type: 'sub_task',
    details_page_content: {
      implementation_details: 'Migrate model serving infrastructure from Vertex AI Endpoints to KServe on GKE, TensorFlow Serving/TorchServe, or custom FastAPI/Flask services on Cloud Run/GKE. Focus on containerization, auto-scaling, and monitoring.',
      steps: [
        'Package trained models and inference logic into Docker containers.',
        'Deploy serving containers to GKE (KServe) or Cloud Run.',
        'Configure auto-scaling and integrate with Cloud Monitoring/Logging.',
        'Set up API Gateway/Load Balancer if needed.'
      ],
      budgeted_hours: 250,
      cost: '$100K - $200K',
      software_components: ['Kubeflow Serving (KServe)', 'TensorFlow Serving', 'TorchServe', 'FastAPI/Flask', 'Google Kubernetes Engine (GKE)', 'Cloud Run', 'Docker']
    }
  },
  {
    id: 'os_ml_pipelines',
    name: 'OS ML Pipelines',
    description: 'Move ML workflow orchestration from Vertex AI Pipelines to open-source.',
    parent_id: 'strategy_os_migration',
    type: 'sub_task',
    details_page_content: {
      implementation_details: 'Transition from Vertex AI Pipelines to Kubeflow Pipelines on GKE or a self-managed Apache Airflow instance. Requires redefining pipeline steps and deploying/managing the new orchestrator.',
      steps: [
        'Ensure all pipeline steps are modular and containerized.',
        'Rewrite Vertex AI Pipeline definitions into Kubeflow Pipelines DSL or Airflow DAGs.',
        'Deploy and manage Kubeflow Pipelines on GKE or a self-managed Airflow environment.',
        'Integrate the new orchestrator with BigQuery and other open-source ML tools.'
      ],
      budgeted_hours: 300,
      cost: '$120K - $250K',
      software_components: ['Kubeflow Pipelines', 'Apache Airflow', 'Google Kubernetes Engine (GKE)', 'Docker']
    }
  },
  {
    id: 'os_feature_store',
    name: 'OS Feature Store',
    description: 'Migrate feature store functionality from Vertex AI Feature Store to open-source.',
    parent_id: 'strategy_os_migration',
    type: 'sub_task',
    details_page_content: {
      implementation_details: 'Transition online feature serving from Vertex AI Feature Store to Redis (on Memorystore or self-managed) or Feast. Continue using BigQuery as the offline store. Requires developing ingestion pipelines to the new online store.',
      steps: [
        'Define and catalog all features.',
        'Deploy Redis instance (Memorystore or self-managed) or Feast.',
        'Develop Dataflow jobs/scripts to ingest features from BigQuery to the new online store.',
        'Update model inference code to fetch features from the new online feature store.'
      ],
      budgeted_hours: 200,
      cost: '$80K - $150K',
      software_components: ['Redis', 'Feast', 'Google Cloud Memorystore', 'Google Kubernetes Engine (GKE)', 'BigQuery', 'Google Cloud Dataflow']
    }
  }
];

// Application State
let currentPage = 'map'; // 'map' or a task ID for detail view
let selectedTask = null; // ID of the task for intermediate detail view
let expandedPhases = {}; // Tracks expanded state of root phases, e.g., { phase1_foundation: true }

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    renderApp(); // Call renderApp to display the initial view
    console.log("App initialized. Project data loaded. State variables set.");
    console.log("Current Page:", currentPage);
    console.log("Selected Task:", selectedTask);
    console.log("Expanded Phases:", expandedPhases);
    // The renderApp() call above is responsible for populating the rootDiv.
    // The static HTML below was overwriting it and causing the "Loading map..." to persist.
    // const rootDiv = document.getElementById('root');
    // if (rootDiv) {
    //     rootDiv.innerHTML = '<h1 class="text-2xl text-center text-yellow-400">Welcome to Project Quest!</h1><p class="text-center text-gray-300">Loading map...</p>';
    // }
});

// Later, renderApp and other functions will be defined here.
// For now, this completes the setup of app.js with data and initial state.

// Main Rendering Function
function renderApp() {
    const rootDiv = document.getElementById('root');
    if (!rootDiv) {
        console.error('Root element not found!');
        return;
    }
    rootDiv.innerHTML = ''; // Clear previous content

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
    // For now, we'll just log. Actual view rendering functions will be called here.
    console.log("renderApp called. Current page:", currentPage);
}

function renderMapView(container) {
    container.innerHTML = ''; // Clear container

    const mapTitle = document.createElement('h1');
    mapTitle.textContent = 'PROJECT QUEST MAP';
    // Apply new CSS class for map title, remove Tailwind text color, size. Keep layout/text-align.
    mapTitle.className = 'retro-main-map-title text-center tracking-wider my-8';
    container.appendChild(mapTitle);

    const mapGrid = document.createElement('div');
    mapGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4';
    container.appendChild(mapGrid);

    // Get all phases and strategies to display as top-level cards on the map
    const mapLevelNodes = projectTasks.filter(task => task.type === 'phase' || task.type === 'strategy');

    // Optional: Sort them if a specific order is desired, e.g., by ID or a potential future 'order' property.
    // For now, they will appear in the order they are in the projectTasks array.

    mapLevelNodes.forEach(mapNode => { // Changed from phase to mapNode for clarity
        const phaseElement = document.createElement('div');
        // Keep p-4, cursor, transition. Remove Tailwind shadow classes.
        phaseElement.className = 'retro-panel p-4 cursor-pointer transition-shadow duration-300';
        phaseElement.addEventListener('click', (e) => {
            // Prevent click from bubbling if it's on a sub-task button inside
            if (e.target.closest('.sub-task-action-button')) return;

            expandedPhases[phase.id] = !expandedPhases[phase.id];
            renderApp(); // Re-render the whole app to reflect changes
        });

        const phaseHeader = document.createElement('h2');
        // Apply new heading class, keep layout Tailwind classes. Remove color from Tailwind.
        phaseHeader.className = 'retro-panel-heading mb-2'; // text-xl and font-bold are handled by CSS class
        phaseHeader.textContent = `${expandedPhases[mapNode.id] ? '▼' : '►'} ${mapNode.name}`; // Corrected to use mapNode
        phaseElement.appendChild(phaseHeader);

        const phaseDescription = document.createElement('p');
        // Apply new body text class, keep layout Tailwind classes. Remove color from Tailwind.
        phaseDescription.className = 'retro-panel-body-text mb-3'; // text-sm is handled by CSS class
        phaseDescription.textContent = mapNode.description; // Corrected to use mapNode
        phaseElement.appendChild(phaseDescription);

        // Render sub_task children if expanded
        if (expandedPhases[mapNode.id]) { // Use mapNode.id
            const allChildren = getChildrenTasks(mapNode.id); // Get all children first
            const subTaskChildren = allChildren.filter(child => child.type === 'sub_task'); // Filter for sub_tasks

            if (subTaskChildren.length > 0) {
                const childrenContainer = document.createElement('div');
                // Apply new CSS class for connection line, keep Tailwind for margin/padding. Remove old border color.
                childrenContainer.className = 'retro-connection-line ml-4 mt-3 pl-4';
                subTaskChildren.forEach(subTask => { // Iterate over subTaskChildren
                    const subTaskElement = document.createElement('div');
                    // Keep p-3, mb-2. Remove Tailwind shadow class.
                    subTaskElement.className = 'retro-sub-task-panel p-3 mb-2';

                    const subTaskName = document.createElement('h3');
                    // Apply new sub-task heading class. Remove conflicting color/font size from Tailwind.
                    subTaskName.className = 'retro-sub-task-heading'; // text-md and font-semibold are handled by CSS
                    subTaskName.textContent = subTask.name;
                    subTaskElement.appendChild(subTaskName);

                    const viewDetailsButton = document.createElement('button');
                    viewDetailsButton.textContent = 'Details';
                    // Add new specific class for "Details" button
                    viewDetailsButton.className = 'sub-task-action-button retro-button retro-button-details text-xs mt-2 py-1 px-2';
                    viewDetailsButton.addEventListener('click', (e) => {
                        e.stopPropagation(); // Prevent phase click
                        selectedTask = subTask.id;
                        renderApp(); // Re-render to show intermediate details
                    });
                    subTaskElement.appendChild(viewDetailsButton);
                    childrenContainer.appendChild(subTaskElement);
                });
                phaseElement.appendChild(childrenContainer);
            }
        }
        mapGrid.appendChild(phaseElement);
    });

    // Render Intermediate Detail Panel if a subTask is selected
    if (selectedTask) {
        const task = getTaskById(selectedTask);
        if (task) {
            const detailPanel = document.createElement('div');
            // Keep Tailwind for positioning, sizing, z-index, overflow. Remove Tailwind shadow.
            detailPanel.className = 'retro-intermediate-panel fixed bottom-0 left-0 right-0 p-6 z-50 max-h-[40vh] overflow-y-auto';

            const panelHeader = document.createElement('h3');
            // Apply new heading class, remove Tailwind color/sizing.
            panelHeader.className = 'retro-intermediate-panel-heading';
            panelHeader.textContent = task.name;
            detailPanel.appendChild(panelHeader);

            const panelDescription = document.createElement('p');
            // Apply new body text class, remove Tailwind color/sizing.
            panelDescription.className = 'retro-intermediate-panel-body-text';
            panelDescription.textContent = task.description; // Main description for intermediate
            detailPanel.appendChild(panelDescription);

            const fullDetailsButton = document.createElement('button');
            fullDetailsButton.textContent = 'Start Quest'; // Shortened text
            fullDetailsButton.className = 'retro-button retro-button-primary mr-2'; // Apply primary button style
            fullDetailsButton.addEventListener('click', () => {
                currentPage = task.id; // Navigate to full detail page
                selectedTask = null; // Clear selection
                renderApp();
            });
            detailPanel.appendChild(fullDetailsButton);

            const closeButton = document.createElement('button');
            closeButton.textContent = 'Close';
            closeButton.className = 'retro-button retro-button-secondary'; // Apply secondary button style
            closeButton.addEventListener('click', () => {
                selectedTask = null; // Clear selection
                renderApp();
            });
            detailPanel.appendChild(closeButton);

            container.appendChild(detailPanel); // Append to main container, or a dedicated modal container
        }
    }
}

function renderTaskDetailView(container, taskId) {
    container.innerHTML = ''; // Clear container
    const task = getTaskById(taskId);

    if (!task || !task.details_page_content) {
        const errorParagraph = document.createElement('p');
        errorParagraph.className = 'retro-text-error'; // Apply new error text class
        errorParagraph.textContent = 'Error: Quest data not found!';
        container.appendChild(errorParagraph);

        const backButtonError = document.createElement('button');
        backButtonError.textContent = 'Back to Map';
        backButtonError.className = 'retro-button retro-button-secondary block mx-auto mt-4'; // Apply secondary style
        backButtonError.addEventListener('click', () => {
            currentPage = 'map';
            renderApp();
        });
        container.appendChild(backButtonError);
        return;
    }

    const details = task.details_page_content;

    const detailWrapper = document.createElement('div');
    // Apply .retro-panel, keep layout/sizing Tailwind. Remove conflicting bg/border/color.
    detailWrapper.className = 'retro-panel p-4 md:p-8 max-w-4xl mx-auto';

    const taskTitle = document.createElement('h1');
    // Apply new page title class. Keep text-center, tracking-wide. Remove old color/sizing.
    taskTitle.className = 'retro-page-title mb-6 text-center tracking-wide';
    taskTitle.textContent = `QUEST: ${task.name}`;
    detailWrapper.appendChild(taskTitle);

    // Function to create a section with a title and content
    function createDetailSection(title, content) {
        if (!content) return null;

        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'mb-6'; // Keep margin bottom for section spacing

        const sectionTitle = document.createElement('h2');
        // Apply new section heading class. Keep mb. Remove old color/sizing.
        sectionTitle.className = 'retro-detail-section-heading mb-2';
        sectionTitle.textContent = title;
        sectionDiv.appendChild(sectionTitle);

        if (Array.isArray(content)) {
            const listContainer = document.createElement('div'); // Wrapper for list styling
            listContainer.className = 'retro-detail-list'; // Apply list container class
            const ul = document.createElement('ul');
            ul.className = 'list-disc list-inside pl-4'; // Keep Tailwind list styling for bullets
            content.forEach(item => {
                const li = document.createElement('li');
                // li text color/font will be inherited from .retro-detail-list
                li.textContent = item;
                ul.appendChild(li);
            });
            listContainer.appendChild(ul);
            sectionDiv.appendChild(listContainer);
        } else if (typeof content === 'object' && content !== null) {
            const dlContainer = document.createElement('div'); // Wrapper for dl styling
            dlContainer.className = 'retro-detail-list'; // Apply list container class for dt/dd
            const dl = document.createElement('dl');
            // dl will inherit text styles
            for (const key in content) {
                const dt = document.createElement('dt');
                // dt class from CSS handles color/font. Keep capitalize.
                dt.className = 'capitalize'; // font-semibold is in CSS for dt
                dt.textContent = key.replace(/_/g, ' ') + ':';
                dl.appendChild(dt);
                const dd = document.createElement('dd');
                // dd class from CSS handles margin. Text color/font inherited.
                dd.className = 'mb-1'; // ml-4 is in CSS for dd
                dd.textContent = content[key];
                dl.appendChild(dd);
            }
            dlContainer.appendChild(dl);
            sectionDiv.appendChild(dlContainer);
        } else {
            const p = document.createElement('p');
            // Apply new body text class. Keep whitespace. Remove old color/sizing.
            p.className = 'retro-detail-body-text whitespace-pre-wrap';
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
    backButton.className = 'retro-button retro-button-secondary block mx-auto mt-8'; // Apply secondary style
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
