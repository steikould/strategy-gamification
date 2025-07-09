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
  },
  // Newly added Beam Sub-Tasks
  {
    id: 'ml_batch_inference_beam',
    name: 'Large-Scale Batch Inference (Beam)',
    description: 'Utilize Apache Beam for high-throughput batch processing of ML models on massive datasets, optimizing for resource use and parallelization.',
    parent_id: 'phase3_ml_applications',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "This sub-task focuses on leveraging Apache Beam's strengths in distributed processing to apply machine learning models to very large datasets efficiently. Key aspects include model parallelization across a cluster and optimizing the use of specialized hardware like GPUs or TPUs. Example: Processing a full day's worth of transaction data through sophisticated fraud detection models.",
      steps: [
        'Design Beam pipeline for ingesting massive datasets (e.g., from GCS, BigQuery).',
        'Integrate and serialize ML models for use within Beam transforms (e.g., RunInference API).',
        'Implement parallel processing strategies for model execution.',
        'Configure resource allocation and worker types for optimal performance (CPUs, GPUs, TPUs).',
        'Develop output sinks for inference results (e.g., BigQuery, Pub/Sub).',
        'Test and benchmark with representative large-scale datasets.'
      ],
      software_components: ['Apache Beam', 'Google Cloud Dataflow', 'Python ML Libraries (TensorFlow, PyTorch, Scikit-learn)', 'GPUs/TPUs (optional)', 'BigQuery', 'Google Cloud Storage']
    }
  },
  {
    id: 'platform_realtime_feature_eng_beam',
    name: 'Real-Time Feature Engineering (Beam)',
    description: 'Implement Apache Beam pipelines for real-time feature computation, complex aggregations, and multi-source joins for live ML models.',
    parent_id: 'phase2_core_platform',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "This involves using Apache Beam for dynamic feature engineering in streaming pipelines. It enables the creation of timely features for real-time ML model inference by processing live data streams, performing complex window-based aggregations, and joining streaming data with batch lookups. Example: Generating features for a real-time recommendation system based on continuous user activity.",
      steps: [
        'Define Beam streaming pipeline for ingesting live data (e.g., from Pub/Sub, Kafka).',
        'Implement transformations for real-time feature computation (e.g., event parsing, data enrichment).',
        'Utilize Beam\'s windowing capabilities for time-based aggregations (rolling averages, session statistics).',
        'Design and implement joins between streaming data and external lookup tables (e.g., user profiles in BigQuery/Spanner).',
        'Ensure low-latency processing for timely feature availability.',
        'Integrate with feature stores or direct model serving endpoints.'
      ],
      software_components: ['Apache Beam', 'Google Cloud Dataflow', 'Google Cloud Pub/Sub', 'Kafka (optional)', 'BigQuery/Cloud Spanner (for lookups)', 'Feature Store solutions']
    }
  },
  {
    id: 'ml_data_orchestration_beam',
    name: 'ML Data Pipeline Orchestration (Beam)',
    description: 'Leverage Apache Beam for robust ETL, data validation, feature store management, and large-scale preprocessing for ML training data.',
    parent_id: 'phase3_ml_applications',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Focuses on using Apache Beam to build and manage comprehensive data pipelines specifically for machine learning workflows. This includes extracting data from various sources, transforming it into suitable formats for model training, performing data quality checks, populating feature stores, and preparing large-scale datasets for model consumption.",
      steps: [
        'Develop Beam pipelines for ETL processes tailored to ML data requirements.',
        'Integrate data validation steps using tools like TensorFlow Data Validation (TFDV) within Beam.',
        'Implement logic for feature extraction, transformation, and normalization at scale.',
        'Build pipelines to populate and maintain feature repositories (Feature Stores).',
        'Handle large-scale data preprocessing tasks efficiently (e.g., image augmentation, text vectorization).',
        'Orchestrate these pipelines using tools like Apache Airflow or Vertex AI Pipelines.'
      ],
      software_components: ['Apache Beam', 'Google Cloud Dataflow', 'TensorFlow Data Validation (TFDV)', 'Feature Store solutions', 'Apache Airflow / Vertex AI Pipelines', 'BigQuery', 'Google Cloud Storage']
    }
  },
  {
    id: 'ml_multi_model_inference_beam',
    name: 'Multi-Model Inference Orchestration (Beam)',
    description: 'Design and implement Apache Beam pipelines for complex inference scenarios involving model chaining, ensembles, and A/B testing.',
    parent_id: 'phase3_ml_applications',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "This sub-task addresses advanced ML deployment patterns where multiple models are used in conjunction. Apache Beam can orchestrate these complex inference workflows, such as sequentially applying models (chaining), combining results from multiple models (ensembles), or evaluating different model versions in parallel (A/B testing). Example: A content moderation system that first runs a toxicity detection model, then a sentiment analysis model, and finally a classification model.",
      steps: [
        'Design Beam pipeline structure for multi-model workflows (e.g., sequential ParDo, branches).',
        'Implement logic for model chaining, passing outputs of one model as inputs to another.',
        'Develop strategies for ensemble inference, including result aggregation and weighting.',
        'Set up A/B testing frameworks by splitting traffic within the Beam pipeline to different model versions.',
        'Manage model loading and prediction calls efficiently within distributed environments.',
        'Monitor and log performance of individual models and the overall multi-model pipeline.'
      ],
      software_components: ['Apache Beam', 'Google Cloud Dataflow', 'Python ML Libraries', 'Vertex AI Endpoints (for model hosting, optional)', 'Experimentation Frameworks']
    }
  },
  {
    id: 'platform_hybrid_ml_workloads_beam',
    name: 'Hybrid Batch-Streaming ML Workloads (Beam)',
    description: 'Develop unified Apache Beam pipelines for hybrid ML workloads, enabling consistent data processing and model serving across batch and streaming contexts (Lambda architecture).',
    parent_id: 'phase2_core_platform',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Focuses on creating a unified codebase using Apache Beam to handle both batch and streaming data for ML workloads, often seen in Lambda architectures. This ensures consistent data processing logic whether backfilling historical data or performing real-time inference, simplifying development and maintenance. The same pipeline can serve both needs.",
      steps: [
        'Design Beam pipelines with shared core logic adaptable to both batch and streaming sources.',
        'Implement windowing and trigger strategies suitable for both continuous (streaming) and bounded (batch) data.',
        'Develop common data transformations and feature engineering steps applicable across contexts.',
        'Ensure consistent model serving logic for both historical backfills and live predictions.',
        'Test pipeline behavior and performance under both batch and streaming conditions.',
        'Manage state and side inputs effectively in hybrid environments.'
      ],
      software_components: ['Apache Beam', 'Google Cloud Dataflow', 'Google Cloud Pub/Sub', 'Google Cloud Storage', 'BigQuery', 'Relevant ML serving frameworks']
    }
  },
  // Existing Beam Sub-Tasks from previous addition (ensure these are not duplicated if run again)
  // ... (assuming previous Beam tasks like ml_batch_inference_beam are here) ...
  // If they are not, this section will just append the new ones.
  // For a clean append, this assumes the previous Beam tasks were part of the 'projectTasks'
  // variable that was read. If this is a re-run, one might need to filter them out first
  // or ensure this is the first time they are added.
  // For this operation, I will just append the new set of 5 top-level projects and their 22 sub-tasks.

  // New Top-Level Projects (DeltaCat/Ray Initiative)
  {
    id: 'phaseA_lakehouse_foundation',
    name: 'Project 1: Lakehouse Foundation & Bronze Ingestion (DeltaCat/Ray)',
    description: 'Establish a robust, scalable DeltaCat/Ray-based data lakehouse foundation for all operational and historical data, focusing on efficient, continuous ingestion into the Bronze layer and solving the "1000 tiny files" problem.',
    parent_id: null,
    type: 'phase',
    details_page_content: {
      implementation_details: "This foundational project focuses on setting up the core infrastructure using Google Cloud Storage, DeltaCat (or similar like PyIceberg on Ray Data), and Ray clusters. It aims to establish continuous, high-volume data ingestion pipelines for sensor data, PI System data, on-prem databases (Oracle, SQL Server), and non-structured data into a well-managed Bronze layer. A key outcome is leveraging DeltaCat's compaction to address the '1000 tiny files' issue, ensuring efficient storage and access.",
      steps: [
        "1.1 Design & Setup Core Lakehouse Infrastructure (GCS, DeltaCat, Ray)",
        "1.2 Implement High-Volume Multi-Source Data Ingestion (Sensors, PI System, On-Prem DBs, Files) into Bronze Layer",
        "1.3 Address '1000 Tiny Files' Problem with DeltaCat Compaction"
      ],
      software_components: ['DeltaCat / PyIceberg', 'Apache Ray (Ray Data, Ray Stream)', 'Google Cloud Storage (GCS)', 'Pub/Sub', 'Google Cloud Dataflow (for specific ingestion paths)', 'Litmus', 'Datastream / CDC tools']
    }
  },
  {
    id: 'phaseB_lakehouse_curation',
    name: 'Project 2: Data Curation & Enrichment (Silver/Gold Tables)',
    description: 'Transform raw Bronze layer data into clean, conformed, and richly enriched Silver layer tables and initial Gold tables, serving as a single source of truth for analytics and ML.',
    parent_id: null,
    type: 'phase',
    details_page_content: {
      implementation_details: "Building on the Bronze layer, this project implements the Silver layer of the medallion architecture. It involves defining a unified data model, developing Ray-based data cleansing and conformance jobs, and performing efficient, large-scale joins to enrich data (e.g., sensor readings with geospatial and equipment metadata). DeltaCat's efficient upserts will be utilized. Initial outlier detection will be integrated into Silver layer processing.",
      steps: [
        "2.1 Define Unified Data Model & Medallion Architecture (Bronze-Silver-Gold)",
        "2.2 Implement Data Cleansing & Conformance (Ray Data/Modin) into Silver DeltaCat Tables",
        "2.3 Perform Efficient Joins for Enrichment, Creating 'Golden Tables' in Silver Layer (Ray, DeltaCat Upserts)",
        "2.4 Implement Initial Outlier Detection & Flagging in Silver Layer"
      ],
      software_components: ['DeltaCat / PyIceberg', 'Apache Ray (Ray Data, Modin)', 'Python (Pandas, NumPy)']
    }
  },
  {
    id: 'phaseC_lakehouse_ml_ray',
    name: 'Project 3: Real-time Operational ML/AI Pipelines (Ray MLOps)',
    description: 'Develop, deploy, and manage high-impact operational ML/AI models (e.g., advanced leak detection, predictive maintenance) leveraging the curated lakehouse data and Ray for a unified MLOps lifecycle.',
    parent_id: null,
    type: 'phase',
    details_page_content: {
      implementation_details: "This project focuses on operationalizing machine learning using the Python-friendly data lakehouse. It involves setting up an ML development environment with direct access to DeltaCat tables, creating advanced ML-specific features for the Gold layer (potentially a feature store), and implementing both real-time (Ray Serve/Actors) and batch (Ray Train/Data) ML model training and inference pipelines for critical use cases. Ray's unified platform will simplify MLOps.",
      steps: [
        "3.1 Establish Pythonic ML Development Environment with DeltaCat Access",
        "3.2 Develop Advanced Feature Engineering Pipelines for Gold Layer (Ray)",
        "3.3 Implement Real-time & Batch ML Models (Leak Detection, Predictive Maintenance, Optimization, etc.) using Ray Train/Serve",
        "3.4 Streamline MLOps with Ray's Unified Platform"
      ],
      software_components: ['DeltaCat / PyIceberg', 'Apache Ray (Ray Data, Ray Train, Ray Serve, Ray Tune)', 'Python ML Libraries (Scikit-learn, TensorFlow, PyTorch)', 'Feature Store concepts']
    }
  },
  {
    id: 'phaseD_lakehouse_governance',
    name: 'Project 4: Data Governance, Quality & Observability',
    description: 'Establish robust data governance, ensure high data quality, and provide transparency and auditability across the DeltaCat/Ray lakehouse using Apache Iceberg features.',
    parent_id: null,
    type: 'phase',
    details_page_content: {
      implementation_details: "This project ensures the reliability and trustworthiness of the data lakehouse. It involves adopting Apache Iceberg as the table format for all layers to leverage ACID transactions, full schema evolution, and time travel capabilities. Data quality will be enhanced using Bloom Filters for deduplication via DeltaCat, alongside monitoring dashboards and alerting. A centralized metadata catalog will be established.",
      steps: [
        "4.1 Implement Apache Iceberg Tables for Data Reliability & Governance (ACID, Schema Evolution, Time Travel)",
        "4.2 Enhance Data Quality & Deduplication (DeltaCat Bloom Filters, Monitoring Dashboards)",
        "4.3 Establish Centralized Metadata & Catalog for DeltaCat Tables"
      ],
      software_components: ['DeltaCat / PyIceberg', 'Apache Iceberg', 'Apache Ray', 'Data Quality Monitoring Tools']
    }
  },
  {
    id: 'strategyX_lakehouse_adoption',
    name: 'Project 5: Strategic Shift & Continuous Improvement',
    description: 'Facilitate a strategic shift to the cloud-native/hybrid lakehouse, focusing on cost reduction, flexibility, scalability, and fostering continuous innovation through training and agile practices.',
    parent_id: null,
    type: 'strategy',
    details_page_content: {
      implementation_details: "This overarching strategy focuses on the organizational and operational aspects of adopting the new lakehouse. It includes a phased transition from legacy systems (PI, Oracle, SQL Server), optimizing costs by leveraging Ray and efficient storage, training personnel on new technologies (DeltaCat, Ray), and establishing agile development processes with continuous feedback loops.",
      steps: [
        "5.1 Plan and Execute Phased Legacy System Transition to Lakehouse",
        "5.2 Implement Cost Optimization Strategies (Ray for Spark replacement, Storage Efficiency)",
        "5.3 Conduct Training & Knowledge Transfer for Teams (DeltaCat, Ray, Lakehouse Concepts)",
        "5.4 Establish Iterative Development, Feedback Loops, and Continuous Improvement Processes"
      ],
      software_components: ['DeltaCat / PyIceberg', 'Apache Ray', 'Change Management Processes', 'Training Programs']
    }
  },

  // Sub-tasks for Project 1: phaseA_lakehouse_foundation
  {
    id: 'phaseA_1_1_core_infra',
    name: '1.1 Design & Setup Core Lakehouse Infrastructure',
    description: 'Set up GCS buckets, configure DeltaCat/PyIceberg on Ray Data, and provision initial Ray cluster.',
    parent_id: 'phaseA_lakehouse_foundation',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "This foundational step involves provisioning and configuring the core components of the data lakehouse. Google Cloud Storage (GCS) will serve as the primary storage layer. DeltaCat (or a similar framework like PyIceberg integrated with Ray Data) will be set up to manage table formats (Delta Lake/Iceberg) on top of GCS. An initial Apache Ray cluster will be provisioned to handle data ingestion and processing tasks.",
      steps: [
        "Provision GCS buckets with appropriate storage classes and access policies for Bronze, Silver, and Gold layers.",
        "Install and configure DeltaCat or PyIceberg libraries within the Ray environment.",
        "Define initial catalog settings for DeltaCat/PyIceberg.",
        "Set up and configure an initial auto-scaling Ray cluster on GCP (e.g., using Kubernetes Engine or Vertex AI Custom Training with Ray).",
        "Establish network configurations and security permissions for Ray cluster access to GCS and other services."
      ],
      software_components: ['Google Cloud Storage (GCS)', 'DeltaCat / PyIceberg', 'Apache Ray (Ray Core, Ray Data)', 'Google Kubernetes Engine (GKE) / Vertex AI']
    }
  },
  {
    id: 'phaseA_1_2_sensor_ingest',
    name: '1.2.1 High-Volume Sensor Data Ingestion (Direct)',
    description: 'Develop real-time pipelines (Pub/Sub + Dataflow/Ray Stream) for direct high-velocity sensor data capture.',
    parent_id: 'phaseA_lakehouse_foundation',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Addresses the need for sub-second to few-second data freshness from critical sensors by establishing direct ingestion pathways, bypassing slower legacy systems. This involves capturing data from instruments that can directly egress, potentially using Pub/Sub for message queuing and Dataflow or Ray Stream for processing and writing to Bronze DeltaCat tables. This is crucial for real-time ML like leak detection.",
      steps: [
        "Identify sensors capable of direct, high-velocity data egress.",
        "Configure sensor output formats (e.g., JSON, Avro) suitable for streaming.",
        "Set up Pub/Sub topics for ingesting raw sensor data streams.",
        "Develop and deploy Dataflow or Ray Stream pipelines to consume from Pub/Sub, perform minimal validation/transformation, and write to Bronze DeltaCat tables.",
        "Implement error handling and monitoring for ingestion pipelines.",
        "Ensure data is written in small, frequent batches manageable by DeltaCat compaction."
      ],
      software_components: ['Google Cloud Pub/Sub', 'Apache Beam (via Dataflow)', 'Apache Ray (Ray Stream)', 'DeltaCat / PyIceberg', 'GCS']
    }
  },
  {
    id: 'phaseA_1_2_pi_integration',
    name: '1.2.2 PI System Integration (Optimized Extraction)',
    description: 'Develop optimized extraction from Aveeva PI System (Enterprise/Historian) to Bronze layer, potentially using Litmus.',
    parent_id: 'phaseA_lakehouse_foundation',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Focuses on efficiently extracting data from the existing Aveeva PI System (both Enterprise and Historian modules) into the Bronze layer of the lakehouse. This aims to overcome the limitations of the current C# script and potentially expensive egress. Options include developing more efficient batch export mechanisms or leveraging Litmus to directly move PI data to GCS/DeltaCat.",
      steps: [
        "Analyze current PI System data structures and egress limitations.",
        "Evaluate Litmus capabilities for direct GCS/DeltaCat integration from PI System.",
        "If Litmus is not fully suitable, design and develop optimized batch extraction scripts (e.g., Python using PI SDK/API if available, or improved C#).",
        "Schedule and automate data extraction processes.",
        "Ensure data is landed in GCS in a format compatible with DeltaCat Bronze tables.",
        "Monitor extraction performance and data consistency."
      ],
      software_components: ['Aveeva PI System (Enterprise, Historian)', 'Litmus', 'Python/C# for custom scripting', 'PI SDK/API', 'DeltaCat / PyIceberg', 'GCS']
    }
  },
  {
    id: 'phaseA_1_2_onprem_db_ingest',
    name: '1.2.3 On-Prem Database Ingestion (CDC)',
    description: 'Migrate/replicate data from on-prem Oracle & SQL Server using Datastream/CDC to Bronze DeltaCat tables.',
    parent_id: 'phaseA_lakehouse_foundation',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "This activity involves ingesting data from on-premise relational databases (Oracle and SQL Server) into the Bronze layer. Change Data Capture (CDC) tools like Google Cloud Datastream will be used to replicate data changes in near real-time or frequent batches directly into DeltaCat tables on GCS, ensuring the lakehouse stays synchronized with these source systems.",
      steps: [
        "Identify source tables and schemas in Oracle and SQL Server databases.",
        "Configure Datastream or other CDC tools (e.g., Debezium with Kafka Connect if more control is needed) for each source database.",
        "Set up target DeltaCat table structures in the Bronze layer to receive CDC data.",
        "Establish secure network connectivity between on-prem systems and GCP.",
        "Initiate historical backfills and continuous replication.",
        "Monitor CDC pipeline health, latency, and data integrity."
      ],
      software_components: ['Oracle Database', 'SQL Server', 'Google Cloud Datastream', 'Debezium (optional)', 'Apache Kafka (optional)', 'DeltaCat / PyIceberg', 'GCS']
    }
  },
  {
    id: 'phaseA_1_2_nonstructured_ingest',
    name: '1.2.4 Non-Structured Data Ingestion',
    description: 'Establish processes for ingesting non-structured data (Parquet, XML files) into managed DeltaCat tables.',
    parent_id: 'phaseA_lakehouse_foundation',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Addresses the current lack of sophistication in storing non-structured data (e.g., existing Parquet, XML files in GCS). This involves developing structured processes to register these files as DeltaCat tables, allowing for metadata management, schema enforcement (where applicable), and integration into the broader lakehouse ecosystem for future processing and analytics.",
      steps: [
        "Inventory existing non-structured data sources and formats in GCS.",
        "Define schemas for non-structured data where possible (e.g., for Parquet files).",
        "Develop Ray Data or Spark jobs to read existing files and write them as DeltaCat tables, or register external files if supported and appropriate.",
        "Implement processes for ongoing ingestion of new non-structured files into managed DeltaCat tables.",
        "Ensure metadata (source, timestamps, etc.) is captured for these datasets."
      ],
      software_components: ['DeltaCat / PyIceberg', 'Apache Ray (Ray Data)', 'Apache Spark (optional)', 'GCS', 'Parquet tools', 'XML parsing libraries']
    }
  },
  {
    id: 'phaseA_1_3_compaction',
    name: '1.3 "1000 Tiny Files" & Initial Compaction',
    description: 'Leverage DeltaCat\'s LSM-based CDC compaction to merge small, arriving sensor data files in the Bronze layer.',
    parent_id: 'phaseA_lakehouse_foundation',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "A critical step to address the '1000 tiny files' problem, especially with high-frequency sensor data. DeltaCat's (or the underlying Delta Lake/Iceberg format's) compaction capabilities will be configured and utilized to automatically or regularly merge small incoming data files into larger, optimized Parquet files within the Bronze layer. This improves read performance for downstream processes and optimizes storage.",
      steps: [
        "Understand DeltaCat's/Iceberg's compaction mechanisms (e.g., `OPTIMIZE` command, auto-compaction features).",
        "Configure compaction strategies based on data volume, arrival frequency, and query patterns.",
        "Implement scheduled Ray jobs or utilize built-in DeltaCat features to run compaction on Bronze tables.",
        "Monitor compaction effectiveness and impact on storage and query performance.",
        "Adjust compaction parameters as needed."
      ],
      software_components: ['DeltaCat / PyIceberg', 'Apache Ray (for scheduling/running compaction jobs if needed)', 'Parquet']
    }
  },
  // Sub-tasks for Project 2: phaseB_lakehouse_curation
  {
    id: 'phaseB_2_1_unified_model',
    name: '2.1 Define Unified Data Model & Medallion Architecture',
    description: 'Collaborate to define a unified data model for pipeline operations, aligning with Bronze-Silver-Gold layers.',
    parent_id: 'phaseB_lakehouse_curation',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "This strategic activity involves working closely with domain experts, data scientists, and analysts to define a common understanding and structure for data across the organization. The Medallion Architecture (Bronze for raw, Silver for cleansed/conformed, Gold for aggregated/business-ready) will be formally adopted and mapped to specific data entities and transformations.",
      steps: [
        "Conduct workshops with stakeholders to identify key data entities and relationships.",
        "Document the conceptual, logical, and physical data models for Bronze, Silver, and Gold layers.",
        "Define standards for data naming, data types, and metadata.",
        "Ensure the model supports current and anticipated analytical and ML use cases.",
        "Version control the data model artifacts."
      ],
      software_components: ['Data Modeling Tools (e.g., ERwin, Lucidchart, dbt for documentation)', 'Collaboration Platforms']
    }
  },
  {
    id: 'phaseB_2_2_cleansing_conformance',
    name: '2.2 Implement Data Cleansing & Conformance',
    description: 'Develop Ray-based jobs to cleanse raw Bronze data and write conformed data to Silver DeltaCat tables.',
    parent_id: 'phaseB_lakehouse_curation',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Focuses on improving data quality by processing raw data from Bronze DeltaCat tables using Apache Ray (Ray Data/Modin). This includes implementing rules for handling missing values, correcting erroneous sensor readings, standardizing units of measurement, identifying and flagging duplicates, and other data quality checks. The cleaned and conformed data is then written to new Silver DeltaCat tables.",
      steps: [
        "Identify common data quality issues from source systems.",
        "Define data quality rules and cleansing logic.",
        "Develop and test Ray Data/Modin jobs for reading from Bronze, applying transformations, and writing to Silver tables.",
        "Implement logging and metrics for data quality improvements.",
        "Automate cleansing jobs as part of the data pipeline."
      ],
      software_components: ['Apache Ray (Ray Data, Modin)', 'DeltaCat / PyIceberg', 'Python (Pandas, NumPy)', 'Data Quality Libraries (e.g., Great Expectations, TFDV integrated in Ray)']
    }
  },
  {
    id: 'phaseB_2_3_enrichment_joins',
    name: '2.3 Perform Efficient Joins for Enrichment (Golden Tables)',
    description: 'Use Ray/Modin to join cleansed sensor data with metadata, storing enriched data in Silver DeltaCat tables using efficient upserts.',
    parent_id: 'phaseB_lakehouse_curation',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "This involves creating highly valuable 'golden tables' by enriching cleansed sensor data with contextual information. For instance, joining sensor readings with geospatial data, pipe section tags, and equipment specifications from metadata tables (ingested from Oracle/SQL Server). Ray's distributed DataFrame capabilities (Modin) will be used for these potentially large-scale joins. DeltaCat's optimized upserts (via positional deletes) will efficiently update these enriched Silver tables if metadata changes or historical data is reprocessed.",
      steps: [
        "Identify datasets for enrichment (e.g., sensor data, asset metadata).",
        "Design join strategies and keys for combining datasets.",
        "Develop Ray Data/Modin jobs to perform distributed joins at scale.",
        "Leverage DeltaCat's upsert capabilities for efficient updates to enriched tables.",
        "Validate the accuracy and completeness of enriched data.",
        "Example: A sensor reading `P_001: 500 PSI` joined with `pipeline_metadata` to become `P_001: 500 PSI, Segment: North-12, Material: Steel`."
      ],
      software_components: ['Apache Ray (Ray Data, Modin)', 'DeltaCat / PyIceberg', 'Python']
    }
  },
  {
    id: 'phaseB_2_4_outlier_flagging',
    name: '2.4 Outlier Detection - Initial Flagging',
    description: 'Apply lightweight, unsupervised outlier detection (Z-score, IQR) on Silver data, flagging potential anomalies.',
    parent_id: 'phaseB_lakehouse_curation',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "As part of the Silver layer processing, this step involves applying initial, computationally efficient outlier detection techniques to the cleansed and enriched sensor data. Methods like Z-score or Interquartile Range (IQR) can flag potential anomalies by adding columns like `is_outlier`, `outlier_score`, or `outlier_type` to the Silver tables. This serves as an early warning system and provides valuable input for more sophisticated downstream ML models.",
      steps: [
        "Select appropriate statistical outlier detection methods for sensor data.",
        "Incorporate these methods into Ray-based Silver layer processing jobs.",
        "Define thresholds for flagging outliers.",
        "Add new columns to Silver tables to store outlier information.",
        "Evaluate the effectiveness of initial flagging."
      ],
      software_components: ['Apache Ray (Ray Data)', 'Python (NumPy, SciPy, Pandas)', 'DeltaCat / PyIceberg']
    }
  },
  // Sub-tasks for Project 2: phaseC_lakehouse_ml_ray (Corrected comment, should be Project 3)
  // Sub-tasks for Project 3: phaseC_lakehouse_ml_ray
  {
    id: 'phaseC_3_1_ml_dev_env',
    name: '3.1 ML Model Development Environment',
    description: 'Provide a Pythonic Data Lakehouse environment for direct access to DeltaCat tables using common ML libraries.',
    parent_id: 'phaseC_lakehouse_ml_ray',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Establish an accessible and efficient development environment for data scientists and ML engineers. This environment will allow them to directly query and interact with Silver and Gold layer data stored in DeltaCat tables using familiar Python tools and libraries (Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch), reducing friction and accelerating ML experimentation.",
      steps: [
        "Configure Ray cluster access for data science teams (e.g., Jupyter notebooks connected to Ray).",
        "Provide examples and documentation for querying DeltaCat tables via Ray Data.",
        "Ensure necessary Python ML libraries are available in the Ray environment.",
        "Integrate with version control (Git) for ML code and notebooks."
      ],
      software_components: ['Apache Ray (Ray Client, Ray Data)', 'DeltaCat / PyIceberg', 'Jupyter / VS Code', 'Python ML Stack (Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch)']
    }
  },
  {
    id: 'phaseC_3_2_feature_eng_gold',
    name: '3.2 Feature Engineering & Gold Layer Creation',
    description: 'Develop Ray pipelines for advanced ML-specific features from Silver data, storing them in Gold DeltaCat tables/feature store.',
    parent_id: 'phaseC_lakehouse_ml_ray',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "This involves creating the Gold layer of the medallion architecture, which contains highly curated and aggregated data specifically prepared for machine learning models. Ray-based pipelines will be developed to generate advanced features like rolling averages, rate of change calculations, frequency domain features, etc., from Silver layer data. These ML-ready features will be stored in Gold DeltaCat tables, potentially structured as a feature store for easy consumption by ML training and inference jobs.",
      steps: [
        "Identify features required for specific ML models (leak detection, predictive maintenance, etc.).",
        "Develop Ray Data pipelines for complex feature transformations and aggregations.",
        "Implement logic for handling time-series features, categorical encoding, and numerical scaling.",
        "Design schema for Gold DeltaCat tables / feature store.",
        "Automate feature generation pipelines.",
        "Ensure features are versioned and documented."
      ],
      software_components: ['Apache Ray (Ray Data)', 'DeltaCat / PyIceberg', 'Python (Pandas, Scikit-learn)', 'Feature Store concepts/tools (e.g., Feast - integrated with Ray)']
    }
  },
  {
    id: 'phaseC_3_3_leak_detection_ml',
    name: '3.3.1 Advanced Leak Detection & Localization ML',
    description: 'Deploy real-time ML (acoustic, pressure wave) on Ray Serve/Actors using lakehouse data, with false positive reduction.',
    parent_id: 'phaseC_lakehouse_ml_ray',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Develop and deploy sophisticated ML models for real-time leak detection and localization. This includes models based on acoustic anomaly detection, pressure wave analysis, or multi-modal fusion, consuming enriched data from Silver/Gold layers. Ray Serve or Ray Actors will be used for real-time model serving. An additional ML component will focus on reducing false positives from initial alerts.",
      steps: [
        "Train ML models for leak detection using Gold layer features.",
        "Deploy trained models using Ray Serve or custom Ray Actors for low-latency inference.",
        "Integrate real-time data streams from Silver/Gold DeltaCat tables (potentially via Ray Stream or Pub/Sub).",
        "Develop models for false positive reduction and alert refinement.",
        "Write predictions and alerts back to Gold DeltaCat tables or dedicated alerting systems.",
        "Monitor model performance and retrain as needed."
      ],
      software_components: ['Apache Ray (Ray Serve, Ray Actors, Ray Train, Ray Data)', 'DeltaCat / PyIceberg', 'Python ML Libraries', 'Real-time data streaming infrastructure']
    }
  },
  {
    id: 'phaseC_3_3_pred_maint_ml',
    name: '3.3.2 Pipeline Integrity & Predictive Maintenance ML',
    description: 'Train and run batch/regular ML models (corrosion, crack propagation, RUL) using Ray Train/Data on Gold layer data.',
    parent_id: 'phaseC_lakehouse_ml_ray',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Focuses on ML models for assessing pipeline integrity and predicting maintenance needs. This includes models for corrosion prediction, crack propagation modeling, and estimating remaining useful life (RUL) of components. These models will typically be trained and run in batch mode (daily, weekly, monthly) using Ray Train and Ray Data on historical and current Gold layer data.",
      steps: [
        "Collect and prepare historical data for training integrity assessment models.",
        "Train models for corrosion, crack propagation, and RUL using Ray Train.",
        "Schedule regular batch inference jobs using Ray Data to update predictions.",
        "Integrate predictions with maintenance planning systems.",
        "Continuously evaluate and improve model accuracy."
      ],
      software_components: ['Apache Ray (Ray Train, Ray Data)', 'DeltaCat / PyIceberg', 'Python ML Libraries']
    }
  },
  {
    id: 'phaseC_3_3_other_ml_models',
    name: '3.3.3 Other Operational ML Models',
    description: 'Implement ML for flow optimization, demand forecasting, cybersecurity, environmental compliance, and cross-border coordination using Ray.',
    parent_id: 'phaseC_lakehouse_ml_ray',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "This covers a range of other valuable ML applications for pipeline operations. Using the Ray framework and the curated Gold layer data, models will be developed and deployed for use cases such as flow optimization, demand forecasting, cybersecurity threat detection, environmental compliance monitoring, and facilitating cross-border coordination. The specific data freshness requirements (near real-time, hourly, etc.) for each model will be addressed.",
      steps: [
        "Define specific requirements and data needs for each operational ML model.",
        "Develop and train models using Ray Train/Data.",
        "Deploy models using Ray Serve/Actors or batch inference pipelines as appropriate.",
        "Integrate model outputs into relevant operational systems or dashboards.",
        "Monitor and maintain these diverse ML applications."
      ],
      software_components: ['Apache Ray (Ray Train, Ray Data, Ray Serve)', 'DeltaCat / PyIceberg', 'Python ML Libraries']
    }
  },
  {
    id: 'phaseC_3_4_simplified_mlops',
    name: '3.4 Simplified MLOps with Ray',
    description: 'Utilize Ray\'s unified platform for the entire ML lifecycle (data prep, training, tuning, deployment, serving, monitoring).',
    parent_id: 'phaseC_lakehouse_ml_ray',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Leverage Apache Ray's capabilities as a unified platform to streamline MLOps. This involves using Ray for each stage of the machine learning lifecycle: data preparation (Ray Data), model training (Ray Train), hyperparameter tuning (Ray Tune), model deployment and serving (Ray Serve), and potentially integrating with monitoring tools. This approach simplifies the MLOps toolchain and improves iteration speed, addressing the challenge of deploying code into production.",
      steps: [
        "Establish standardized ML project structures leveraging Ray libraries.",
        "Implement CI/CD pipelines for ML models built with Ray.",
        "Utilize Ray Tune for efficient hyperparameter optimization.",
        "Deploy models consistently using Ray Serve for real-time and Ray Data for batch.",
        "Integrate Ray applications with existing monitoring and logging infrastructure (e.g., Prometheus, Grafana, Ray Dashboard).",
        "Document MLOps best practices for Ray-based projects."
      ],
      software_components: ['Apache Ray (Ray Data, Ray Train, Ray Tune, Ray Serve, Ray Client)', 'CI/CD tools (e.g., Jenkins, GitLab CI, GitHub Actions)', 'Monitoring tools']
    }
  },
  // Sub-tasks for Project 4: phaseD_lakehouse_governance
  {
    id: 'phaseD_4_1_iceberg_tables',
    name: '4.1 Implement Iceberg Tables for Data Reliability & Governance',
    description: 'Adopt Apache Iceberg for all DeltaCat tables, leveraging ACID, schema evolution, and time travel.',
    parent_id: 'phaseD_lakehouse_governance',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "This activity mandates the use of Apache Iceberg as the underlying table format for all data stored via DeltaCat in the Bronze, Silver, and Gold layers. This provides critical data reliability and governance features: ACID transactions ensure data consistency; full schema evolution allows for adapting to new data requirements without breaking pipelines or rewriting historical data (e.g., renaming columns, changing types); and time travel enables auditing, reproducing analyses, and quick data recovery.",
      steps: [
        "Configure DeltaCat to use Apache Iceberg as the default table format.",
        "Ensure all data ingestion and transformation jobs write to Iceberg tables.",
        "Train team on Iceberg concepts: snapshots, metadata, schema evolution, time travel.",
        "Establish procedures for performing schema evolution operations.",
        "Develop runbooks for using time travel for data recovery and auditing.",
        "Example (Schema Evolution): Renaming `pressure_psi` to `pressure_reading_kpa` and changing units without rewriting old data."
      ],
      software_components: ['Apache Iceberg', 'DeltaCat / PyIceberg', 'Apache Ray']
    }
  },
  {
    id: 'phaseD_4_2_quality_dedup',
    name: '4.2 Data Quality & Deduplication with DeltaCat',
    description: 'Implement DeltaCat Bloom Filters for efficient duplicate checks; develop DQ monitoring and alerting.',
    parent_id: 'phaseD_lakehouse_governance',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Focuses on proactive data quality management. DeltaCat's support for Bloom Filters will be implemented for efficient, large-scale duplicate checking, particularly for high-velocity sensor data during ingestion and processing. Additionally, data quality monitoring dashboards (e.g., using Ray to compute metrics and Looker/Grafana to display them) and automated alerting will be developed based on metrics derived from Bronze and Silver layer data.",
      steps: [
        "Configure and utilize Bloom Filters in DeltaCat for relevant datasets to prevent duplicates.",
        "Define key data quality metrics (completeness, timeliness, accuracy, consistency).",
        "Develop Ray jobs to compute DQ metrics regularly from Bronze and Silver tables.",
        "Build dashboards to visualize DQ trends and issues.",
        "Set up alerts for significant data quality degradations."
      ],
      software_components: ['DeltaCat', 'Bloom Filter implementations', 'Apache Ray', 'Data Visualization Tools (Looker, Grafana, etc.)', 'Alerting Systems']
    }
  },
  {
    id: 'phaseD_4_3_metadata_catalog',
    name: '4.3 Centralized Metadata & Catalog',
    description: 'Establish a centralized catalog for all DeltaCat tables for discovery and management.',
    parent_id: 'phaseD_lakehouse_governance',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Addresses the need for organized and centrally managed data assets. A centralized metadata catalog will be established for all DeltaCat (Iceberg) tables across the Bronze, Silver, and Gold layers. This catalog will serve as a single point of discovery, providing information about table schemas, data lineage (if tracked), ownership, and descriptions, facilitating better data governance and usability.",
      steps: [
        "Evaluate and select a suitable metadata catalog solution compatible with DeltaCat/Iceberg (e.g., AWS Glue Data Catalog if on AWS, Nessie, or DeltaCat's own catalog capabilities if sufficient).",
        "Integrate DeltaCat table registration with the chosen catalog.",
        "Develop processes for populating and maintaining rich metadata (descriptions, tags, ownership).",
        "Provide user-friendly access to the catalog for data discovery."
      ],
      software_components: ['DeltaCat / PyIceberg', 'Apache Iceberg', 'Metadata Catalog solutions (e.g., Nessie, AWS Glue Data Catalog, custom solutions)']
    }
  },
  // Sub-tasks for Project 5: strategyX_lakehouse_adoption
  {
    id: 'strategyX_5_1_legacy_transition',
    name: '5.1 Phased Legacy System Transition',
    description: 'Gradual migration of critical data/workloads from PI, Oracle, SQL Server to the lakehouse; decommission where possible.',
    parent_id: 'strategyX_lakehouse_adoption',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "This involves a carefully planned, phased approach to migrate critical data and analytical workloads from existing legacy systems (Aveeva PI System, Oracle, SQL Server) to the new DeltaCat/Ray data lakehouse. The goal is to minimize disruption and risk while maximizing the benefits of the modern platform. Opportunities to decommission legacy data stores will be identified once their functionality is fully replicated and validated on the lakehouse.",
      steps: [
        "Prioritize data and workloads for migration based on business impact and technical feasibility.",
        "Develop detailed migration plans for each source system.",
        "Execute data migration, ensuring validation and reconciliation.",
        "Rewrite or adapt existing analytical queries and applications to use the lakehouse.",
        "Conduct parallel runs and user acceptance testing before decommissioning legacy systems."
      ],
      software_components: ['DeltaCat / PyIceberg', 'Apache Ray', 'Data Migration Tools', 'Legacy Systems (PI, Oracle, SQL Server)']
    }
  },
  {
    id: 'strategyX_5_2_cost_optimization',
    name: '5.2 Cost Optimization Strategies',
    description: 'Leverage Ray to replace expensive Spark jobs; optimize GCS storage and DeltaCat compaction for cost reduction.',
    parent_id: 'strategyX_lakehouse_adoption',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Focuses on achieving cost efficiencies with the new lakehouse architecture. This includes leveraging Apache Ray's performance and resource management to potentially replace more expensive Spark jobs for large-scale data processing. Storage costs will be optimized through efficient Parquet file formats, intelligent data tiering on GCS (if applicable), and effective compaction strategies within DeltaCat/Iceberg to reduce storage footprint and improve query efficiency.",
      steps: [
        "Benchmark Ray performance against existing Spark jobs for specific workloads.",
        "Identify and refactor high-cost Spark jobs to Ray where beneficial.",
        "Implement optimal Parquet compression and encoding settings.",
        "Configure GCS storage classes and lifecycle policies.",
        "Fine-tune DeltaCat/Iceberg compaction and data retention policies to balance performance and storage costs.",
        "Regularly monitor and report on compute and storage costs."
      ],
      software_components: ['Apache Ray', 'DeltaCat / PyIceberg', 'Google Cloud Storage', 'Cost Management Tools (GCP Cost Explorer)']
    }
  },
  {
    id: 'strategyX_5_3_training_transfer',
    name: '5.3 Training & Knowledge Transfer',
    description: 'Train existing data engineers (e.g., Oracle DBAs) on DeltaCat, Ray, and lakehouse concepts; foster team collaboration.',
    parent_id: 'strategyX_lakehouse_adoption',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "A critical component for successful adoption is upskilling the existing team. This involves providing comprehensive training on new technologies like DeltaCat, Apache Ray, and modern data lakehouse principles for data engineers (including those with backgrounds like Oracle DB administration). It also aims to foster better collaboration between the analytics team, cloud engineering, and any new ML contractors by providing a unified Python-centric environment and clear design principles.",
      steps: [
        "Develop or procure training materials for DeltaCat, Ray, Python for data engineering, and lakehouse architecture.",
        "Conduct workshops and hands-on training sessions for relevant teams.",
        "Establish a mentorship program or pair programming to facilitate knowledge sharing.",
        "Create shared documentation and best practice guides.",
        "Promote cross-functional team projects on the new platform."
      ],
      software_components: ['Training Platforms', 'Documentation Tools (Confluence, Git wikis)', 'Apache Ray', 'DeltaCat / PyIceberg']
    }
  },
  {
    id: 'strategyX_5_4_agile_feedback',
    name: '5.4 Iterative Development & Feedback Loops',
    description: 'Establish agile processes for new data pipelines and ML models, embracing faster iteration and continuous feedback.',
    parent_id: 'strategyX_lakehouse_adoption',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Shift towards more agile methodologies for developing and deploying data pipelines and ML models on the new lakehouse. This emphasizes faster iteration cycles, continuous integration/continuous deployment (CI/CD) where appropriate, and establishing regular feedback loops with data scientists, analysts, and operational teams. This approach allows for quicker delivery of value and continuous improvement of the lakehouse capabilities and data products based on user needs.",
      steps: [
        "Adopt agile project management practices (e.g., Scrum, Kanban) for lakehouse projects.",
        "Implement CI/CD pipelines for data pipeline and ML model code.",
        "Schedule regular sprint reviews and demos with stakeholders.",
        "Create channels for users to provide feedback on data products and platform features.",
        "Use feedback to prioritize backlog and guide future development."
      ],
      software_components: ['Agile Project Management Tools (Jira, Trello)', 'CI/CD Tools (Jenkins, GitLab CI, GitHub Actions)', 'Feedback Collection Tools']
    }
  },
  // ... (other existing tasks from the original set and previous additions remain here) ...

  // New Top-Level Project: Advanced Beam Data Foundation
  {
    id: 'project_beam_data_foundation',
    name: 'Project: Advanced Beam Data Foundation for Pipelines',
    description: 'A comprehensive initiative to build a modern, Beam-based data foundation for national fuel pipelines, enabling real-time ML/AI and operational insights through phased delivery.',
    parent_id: null,
    type: 'phase',
    details_page_content: {
      implementation_details: "This initiative outlines a strategic, phased approach to implementing a state-of-the-art data foundation using Apache Beam for national fuel pipeline operations. It aims to enable advanced analytics, real-time monitoring, and machine learning capabilities by segmenting the work into distinct phases, allowing for continuous value realization and iterative refinement. The project covers foundational infrastructure, real-time processing, advanced ML integration, and operationalization.",
      steps: [
        "Phase 1: Foundation & Ingestion (Months 1-3) - Establish core infrastructure and high-volume data ingestion.",
        "Phase 2: Real-time Processing & Core Application Development (Months 4-7) - Build real-time pipelines for anomaly detection and operational monitoring.",
        "Phase 3: Advanced ML Integration & Predictive Capabilities (Months 8-12) - Integrate ML models for predictive maintenance and sophisticated anomaly detection.",
        "Phase 4: Operationalization, Optimization & Expansion (Months 13-18) - Mature the platform, optimize performance/cost, and plan for future expansion."
      ],
      software_components: ['Apache Beam', 'Google Cloud Dataflow / AWS EMR / Azure Flink (Beam Runners)', 'Apache Kafka / Google Cloud Pub/Sub / AWS Kinesis', 'Google Cloud Storage / AWS S3 / Azure Data Lake Store', 'Apache Iceberg / Apache Parquet', 'Python', 'ML Libraries (TensorFlow, PyTorch, Scikit-learn)', 'MLOps Tools (Kubeflow, MLflow, etc.)']
    }
  },

  // Sub-tasks for Project: Advanced Beam Data Foundation
  {
    id: 'bfp_phase1_ingestion',
    name: 'Phase 1: Foundation & Ingestion (Months 1-3)',
    description: 'Establish core infrastructure for high-volume, high-velocity data ingestion and initial processing from critical pipeline sensors.',
    parent_id: 'project_beam_data_foundation',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Objective: Establish the core infrastructure for high-volume, high-velocity data ingestion and initial processing from critical pipeline sensors. This phase focuses on detailed requirements gathering, setting up the chosen cloud environment (GCP, AWS, or Azure) with Beam runtimes, messaging queues, and data lake storage (Iceberg/Parquet). Core Beam pipelines for raw sensor data ingestion will be developed, including basic transforms, error handling, and foundational security/governance. Your Role: Leading the technical architecture and initial Beam pipeline development, ensuring scalability and adherence to best practices for distributed systems. Acting as a bridge between technical implementation and business requirements.",
      steps: [
        "Detailed Requirements Gathering: Finalize sensor data sources, velocity, volume, and initial use case priorities.",
        "Technology & Platform Setup: Finalize cloud provider, Beam runtime, messaging queues (Kafka/Pub/Sub/Kinesis), and data lake storage (GCS/S3/ADLS with Iceberg/Parquet).",
        "Core Ingestion Pipeline Development (Beam): Develop initial Beam pipelines for raw sensor data, including parsing, schema enforcement, type conversion.",
        "Error Handling for Ingestion: Establish robust error handling and dead-letter queues.",
        "Security & Governance Baseline: Implement foundational security, access controls, and data governance policies."
      ],
      software_components: ['Apache Beam', 'Google Dataflow / AWS EMR / Azure Flink', 'Apache Kafka / Pub/Sub / Kinesis', 'GCS / S3 / ADLS', 'Apache Iceberg', 'Apache Parquet', 'Python']
    }
  },
  {
    id: 'bfp_phase2_realtime',
    name: 'Phase 2: Real-time Processing & Core Application Development (Months 4-7)',
    description: 'Build and deploy core real-time processing pipelines for critical operational insights, focusing on anomaly detection and monitoring.',
    parent_id: 'project_beam_data_foundation',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Objective: Build and deploy core real-time processing pipelines for critical operational insights, focusing on immediate value-adding applications like anomaly detection and basic operational monitoring. This involves developing advanced data quality/cleansing pipelines, a real-time anomaly detection pipeline integrated with alerting, and pipelines for operational monitoring dashboards. Initial unified batch/stream processing patterns will be demonstrated. Your Role: Hands-on development and leadership of the Beam pipeline teams, driving real-time analytics implementation, ensuring code quality, and optimizing for low latency/high throughput.",
      steps: [
        "Advanced Data Quality & Cleansing Pipelines (Beam): Develop transforms for filtering noise, deduplication, advanced imputation, and time synchronization.",
        "Real-time Anomaly Detection Pipeline (Beam): Compute real-time metrics, apply rule-based/statistical anomaly detection, and integrate with alerting systems.",
        "Operational Monitoring Dashboard Integration: Develop Beam pipelines to aggregate data for real-time dashboards (Grafana, custom UI) focusing on KPIs.",
        "Unified Batch/Stream Pattern Implementation: Demonstrate reprocessing historical data with the same streaming Beam pipeline logic."
      ],
      software_components: ['Apache Beam', 'Relevant Beam Runner', 'Alerting Systems (PagerDuty, Slack)', 'Dashboarding Tools (Grafana)', 'Python']
    }
  },
  {
    id: 'bfp_phase3_ml_integration',
    name: 'Phase 3: Advanced ML Integration & Predictive Capabilities (Months 8-12)',
    description: 'Integrate advanced ML models into streaming pipelines for predictive maintenance and sophisticated anomaly detection, leveraging MLOps.',
    parent_id: 'project_beam_data_foundation',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Objective: Integrate advanced machine learning models into the streaming pipelines for predictive maintenance and more sophisticated anomaly detection, leveraging historical data for model training and MLOps principles. Activities include real-time feature engineering, preparing historical data for model training, integrating pre-trained models for real-time inference, automating MLOps pipelines, and piloting LLM/RAG for unstructured data. Your Role: Leading ML engineering, bridging data engineering/science, implementing MLOps, and driving ML integration.",
      steps: [
        "Feature Engineering Pipelines (Beam): Develop real-time feature engineering for ML models (moving averages, aggregations over windows).",
        "ML Model Training Data Preparation (Beam): Use Beam's batch capabilities to prepare large historical datasets for predictive models (e.g., pump failure).",
        "Real-time ML Inference Pipelines (Beam): Integrate pre-trained ML models into Beam streaming pipelines for continuous predictions.",
        "MLOps Pipeline Automation: Implement automated MLOps (Kubeflow, MLflow, or custom scripts with Beam) for CI/CD/CT of models.",
        "LLM/RAG Integration (Pilot): Conduct a pilot using Beam's RAG package for processing unstructured data (e.g., maintenance logs)."
      ],
      software_components: ['Apache Beam', 'Relevant Beam Runner', 'Python ML Libraries (TensorFlow, PyTorch, Scikit-learn)', 'MLOps Tools (Kubeflow, MLflow)', 'Apache Beam RAG Package (for pilot)']
    }
  },
  {
    id: 'bfp_phase4_ops_expansion',
    name: 'Phase 4: Operationalization, Optimization & Expansion (Months 13-18)',
    description: 'Mature the data platform, optimize performance/cost, ensure sustainability, and plan for expansion.',
    parent_id: 'project_beam_data_foundation',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Objective: Mature the data platform, optimize performance and cost, ensure long-term operational sustainability, and plan for expansion to new use cases and pipeline segments. This includes in-depth performance tuning, cost optimization of Beam pipelines, implementing robust monitoring/alerting/logging, enhancing error handling and resiliency, developing thorough documentation and training, optimizing edge-to-cloud data flows, and strategic planning for future expansion.",
      steps: [
        "Performance Tuning & Cost Optimization: Analyze Beam pipeline performance (CPU, memory, I/O), use cost calculators, optimize configurations, and refine autoscaling.",
        "Robust Monitoring, Alerting & Logging: Implement comprehensive dashboards, alerting rules, and centralized logging for Beam jobs and infrastructure.",
        "Error Handling & Resiliency Enhancements: Implement advanced error handling (retries, circuit breakers, backpressure) and conduct fault injection testing.",
        "Documentation & Training: Develop technical documentation and provide training to operations, IT, and analytics teams.",
        "Edge-to-Cloud Optimization: Review and optimize edge processing logic and data flow to cloud Beam pipelines.",
        "Strategic Expansion Planning: Identify and prioritize next-generation use cases and new pipeline segments for onboarding."
      ],
      software_components: ['Apache Beam', 'Relevant Beam Runner', 'Monitoring Tools (Prometheus, Grafana, Cloud specific monitoring)', 'Logging Systems (ELK Stack, Cloud specific logging)', 'Cost Optimization Tools (e.g., Dataflow Cost Calculator)']
    }
  },
  // ... (all previously existing tasks, including the DeltaCat/Ray projects, remain above this line) ...

  // New Top-Level Project: Investigation & Discovery
  {
    id: 'project_investigation_discovery',
    name: 'Project IDP: Investigation & Discovery for Real-Time Pipeline Data',
    description: 'Comprehensive investigation of Aveeva PI System data, velocity, validation, and exception flood characteristics to inform real-time ML/AI pipeline design.',
    parent_id: null,
    type: 'phase',
    details_page_content: {
      implementation_details: "Objective: To gain a comprehensive understanding of our existing Aveeva PI System sensor data landscape, characterize its velocity and volume, analyze validation rules, and identify key considerations for building a scalable, real-time data ingestion pipeline capable of supporting ML/AI initiatives, digital twinning, and gracefully handling 'exception floods.' This project is segmented into four distinct investigative phases.",
      steps: [
        "Phase 1: Understanding the Aveeva PI System Framework & Data Sources - Understand PI System architecture, sensor inventory, PI templates, and data ingress.",
        "Phase 2: Data Characteristics Analysis & Velocity Profiling - Analyze data volume, per-sensor/template velocity, exception floods, and message payloads.",
        "Phase 3: Validation, Data Quality & Existing Usage - Document PI template validation, data quality handling, and current data consumption.",
        "Phase 4: Planning for 'Exception Floods' & Future State - Define flood scenarios, serialization/schema strategy, and consolidate future pipeline requirements."
      ],
      software_components: ['Aveeva PI System (Data Archive, AF, Vision, Integrators)', 'PI System Management Tools (SMT)', 'PI AF SDK', 'PI Web API', 'PI DataLink', 'PI OLEDB', 'Spreadsheet Software', 'Documentation Tools']
    }
  },

  // Sub-tasks for Project: Investigation & Discovery
  {
    id: 'idp_phase1_pi_system_understanding',
    name: 'IDP Phase 1: Understanding Aveeva PI System & Data Sources',
    description: 'Understand PI System architecture, sensor inventory, PI templates, and data ingress mechanisms.',
    parent_id: 'project_investigation_discovery',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Goal: Understand how data flows from sensors to the PI System, where it's stored, how it's accessed, map the logical structure of sensor data to physical PI points, identify core vs. ancillary sensors, and understand the first mile of data ingestion including potential failure points.",
      steps: [
        "Obtain/document PI System architectural diagram (Data Archive, AF, Vision, Integrators, interfaces/connectors).",
        "Inventory PI Points (tags) and distinct PI Asset Framework (AF) templates used for sensors.",
        "For major PI templates: identify sensor types, critical attributes/measurements, and typical reporting frequency.",
        "Identify primary data collection mechanisms feeding PI System (Interfaces, Connectors, OPC UA, Modbus, custom apps, Edge Data Store).",
        "Investigate existing edge data buffering or local processing mechanisms before data reaches central PI Server."
      ],
      deliverables: [
        "High-level PI system architecture diagram with key components.",
        "Categorized list/spreadsheet of sensor types, associated PI templates, and reporting characteristics.",
        "Documentation of primary data ingress pathways and edge processing."
      ],
      software_components: ['Aveeva PI System Documentation', 'PI System Management Tools (SMT)', 'PI Asset Framework (AF) configuration tools']
    }
  },
  {
    id: 'idp_phase2_data_characteristics',
    name: 'IDP Phase 2: Data Characteristics Analysis & Velocity Profiling',
    description: 'Analyze overall data volume, per-sensor/template velocity, exception flood patterns, and message payloads.',
    parent_id: 'project_investigation_discovery',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Goal: Quantify data volumes (average/peak), events per second (average/peak), analyze per-sensor/template velocity focusing on 'report by exception' logic and historical 'exception flood' events. Confirm message payload sizes and structures.",
      steps: [
        "Determine average/peak daily compressed data volume (GB/TB) into PI Data Archive (by category/template if possible).",
        "Determine average/sustained/short-duration peak events per second in PI Data Archive.",
        "For representative PI Templates (critical & report-by-exception): determine average/max events per minute/second per sensor instance.",
        "For 'report by exception' sensors: document normal frequency, exception triggers, and max observed frequency during exception floods.",
        "Identify and analyze historical 'exception flood' events (affected sensors, peak rates).",
        "Obtain sample raw data payloads for different sensor types entering PI System.",
        "Analyze typical and maximum message size (bytes/KB) per event for different sensor types."
      ],
      deliverables: [
        "Daily/hourly data volume reports (average/peak) and events per second (average/peak) for last 3-6 months.",
        "Detailed velocity profiles for key sensor types, including peak rates for exception reporting.",
        "Examples of historical exception floods with associated metrics.",
        "Sample payloads and analysis of average/max message sizes."
      ],
      software_components: ['PI System Management Tools (SMT)', 'PI AF SDK', 'PI Web API', 'PI Integrator for Business Analytics', 'PI DataLink (Excel Add-in)', 'PI Vision', 'PI OLEDB']
    }
  },
  {
    id: 'idp_phase3_validation_quality_usage',
    name: 'IDP Phase 3: Validation, Data Quality & Existing Usage',
    description: 'Document PI template validation logic, data quality handling, and current PI data consumption patterns.',
    parent_id: 'project_investigation_discovery',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Goal: Understand existing data quality assurance measures within the PI System and identify current dependencies on PI data to inform requirements for the new pipeline.",
      steps: [
        "Document validation rules configured within PI Templates (range checks, deadbands, quality flags, calculations).",
        "Investigate how data quality issues are currently handled or flagged in PI System (Bad values, questionable flags).",
        "Identify how PI data is consumed beyond PI Vision (Integrators, custom apps via PI Web API/AF SDK, reporting tools).",
        "Analyze existing real-time analytics or alerting systems consuming PI data: their latency requirements and volume handling."
      ],
      deliverables: [
        "Documentation of key validation rules and data quality handling in PI System.",
        "List of current data consumers of PI data and their high-level requirements."
      ],
      software_components: ['Aveeva PI System (AF Templates, PI Vision)', 'PI Integrator for Business Analytics', 'PI Web API', 'PI AF SDK']
    }
  },
  {
    id: 'idp_phase4_exception_planning_future_state',
    name: 'IDP Phase 4: Planning for Exception Floods & Future State Requirements',
    description: 'Define exception flood scenarios, data serialization/schema strategy, and consolidate future pipeline requirements.',
    parent_id: 'project_investigation_discovery',
    type: 'sub_task',
    details_page_content: {
      implementation_details: "Goal: Establish clear, measurable targets for the new ingestion pipeline's performance under stress, optimize data transfer, ensure schema compatibility, and solidify design principles and non-functional requirements for the proposed architecture.",
      steps: [
        "Define concrete 'exception flood' scenarios with quantifiable metrics (volume, velocity, duration) based on historical analysis.",
        "Determine business impacts and desired real-time responses/latency for each flood scenario.",
        "Propose a standard data serialization format (Avro, Protobuf) for sensor data leaving PI System or new edge ingestion points.",
        "Outline a strategy for managing schema evolution (e.g., using a schema registry).",
        "Consolidate specific data volume, velocity, latency, and quality requirements for the new ingestion pipeline to support ML/AI, digital twinning, and event detection across the entire pipeline network."
      ],
      deliverables: [
        "Defined exception flood scenarios with quantitative metrics and latency/action requirements.",
        "Recommended data serialization format and schema management approach.",
        "Consolidated list of functional and non-functional requirements for the new data ingestion pipeline."
      ],
      software_components: ['Schema Registry (e.g., Confluent Schema Registry - for planning)', 'Data Serialization Libraries (Avro, Protobuf - for planning)']
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

            expandedPhases[mapNode.id] = !expandedPhases[mapNode.id]; // Corrected: was phase.id
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
