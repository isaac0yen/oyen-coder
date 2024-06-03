/* 
  Oyen Coder is a project that has the ability to create frontend and backend applications.
  It takes certain properties as an object and goes through series of prompts from the groqText AI module.
*/
import projectAnalysis from "./controllers/project_analyis.js";
import projectStructure from "./controllers/project_structure.js";
import { projectProperty } from "./types.js"


const property: projectProperty = {
  projectName: "Oyen Coder",
  applicationType: "backend",
  language: "typescript",
  framework: "null",
  /* database: "sqlite", */
  packageManager: "npm",
  versionControl: "git",
  testingFramework: "jest",
  testingEnvironment: "node",
  deploymentPlatform: "dedicated server",
  cicdTool: "github-actions",
  lintingTool: "eslint",
  formattingTool: "prettier",
  bundlingTool: "webpack",
  taskRunner: "npm-scripts",
  buildTool: "babel",
  /*   containerizationTool: "docker",
    orchestrationTool: "kubernetes",
    monitoringTool: "prometheus",
    loggingTool: "elastic-stack",
    securityTool: "oauth2",
    cacheSystem: "redis",
    messagingSystem: "rabbitmq",
    searchEngine: "elasticsearch",
    analyticsSystem: "google-analytics",
    paymentGateway: "stripe",
    notificationSystem: "twilio",
    geoSpatialSystem: "mapbox",
    machinelearningSystem: "tensorflow",
    blockchainSystem: "ethereum",
    iotSystem: "aws-iot",
    serverlessSystem: "aws-lambda",
    graphqlSystem: "apollo-server",
    restSystem: "express",
    websocketSystem: "socket.io",
    streamingSystem: "kafka",
    batchProcessingSystem: "apache-spark",
    dataWarehouseSystem: "aws-redshift",
    dataLakeSystem: "aws-s3",
    dataStreamingSystem: "aws-kinesis",
    dataTransformationSystem: "aws-glue",
    dataVisualizationSystem: "d3.js",
    dataGovernanceSystem: "aws-lake-formation",
    dataSecuritySystem: "aws-macie",
    dataQualitySystem: "aws-datalens",
    dataCatalogSystem: "aws-glue-data-catalog",
    dataLineageSystem: "aws-glue-studio",
    dataObservabilitySystem: "aws-cloudwatch",
    dataPrivacySystem: "aws-macie",
    dataComplianceSystem: "aws-config",
    dataAuditingSystem: "aws-cloudtrail",
    dataAccessControlSystem: "aws-iam",
    dataEncryptionSystem: "aws-kms",
    dataBackupSystem: "aws-backup",
    dataRecoverySystem: "aws-disaster-recovery",
    dataArchivingSystem: "aws-glacier",
    dataLifecycleManagementSystem: "aws-lifecycle-manager",
    dataReplicationSystem: "aws-dms",
    dataMigrationSystem: "aws-dms",
    dataIntegrationSystem: "aws-appflow",
    dataExchangeSystem: "aws-data-exchange",
    dataLakeHouseSystem: "aws-lake-house",
    dataMeshSystem: "aws-data-mesh",
    dataFabricSystem: "aws-data-fabric",
    dataVirtualizationSystem: "aws-data-virtualization",
    dataFederationSystem: "aws-data-federation",
    dataGovernanceFramework: "aws-data-governance-framework",
    dataQualityFramework: "aws-data-quality-framework",
    dataSecurityFramework: "aws-data-security-framework",
    dataPrivacyFramework: "aws-data-privacy-framework",
    dataComplianceFramework: "aws-data-compliance-framework",
    dataAuditingFramework: "aws-data-auditing-framework",
    dataAccessControlFramework: "aws-data-access-control-framework",
    dataEncryptionFramework: "aws-data-encryption-framework",
    dataBackupFramework: "aws-data-backup-framework",
    dataRecoveryFramework: "aws-data-recovery-framework",
    dataArchivingFramework: "aws-data-archiving-framework",
    dataLifecycleManagementFramework: "aws-data-lifecycle-management-framework",
    dataReplicationFramework: "aws-data-replication-framework",
    dataMigrationFramework: "aws-data-migration-framework",
    dataIntegrationFramework: "aws-data-integration-framework",
    dataExchangeFramework: "aws-data-exchange-framework",
    dataLakeHouseFramework: "aws-data-lake-house-framework",
    dataMeshFramework: "aws-data-mesh-framework",
    dataFabricFramework: "aws-data-fabric-framework",
    dataVirtualizationFramework: "aws-data-virtualization-framework",
    dataFederationFramework: "aws-data-federation-framework",
   */
  description: `This is a cutting-edge AI-powered application generator that streamlines the development process by leveraging  It takes in a set of requirements as input and guides the user through an interactive series of prompts to gather additional details. Based on this information, the agent dynamically generates a robust, scalable, and production-ready full-stack application, adhering to industry best practices such as SOLID principles, test-driven development, and clean architecture.

The agent's capabilities include creating RESTful APIs with secure authentication and authorization mechanisms, integrating with various databases, building responsive and intuitive user interfaces, and implementing advanced features such as real-time communication, data analytics, and machine learning models. With its modular and extensible architecture, the agent can be easily customized and extended to suit specific project needs, enabling rapid application development and accelerating the software engineering process.

By automating the tedious and repetitive tasks involved in application development, this AI-powered generator empowers developers to focus on higher-level tasks, fostering innovation and creativity.
`,
  purpose: `This project is a Node.js application that automates the generation of a either front end or backend application by creating all the necessary files and directories based on user input. The automation process involves writing the entire project structure, including the package.json file and helper functions, from scratch. This application streamlines the development process by eliminating the need for manual file creation and setup.

  The application generates the entire codebase for the full-stack application, including the API routes, the database models, and the frontend user interface (if applicable). This automation process saves developers a significant amount of time and effort, allowing them to focus on writing the core business logic and functionality of the application.
  
  The application prompts the user for various inputs, such as the project name, the technology stack (e.g., React, Angular, Vue for the frontend, and Express, Nest.js, or Fastify for the backend), the database type (e.g., MySQL, PostgreSQL, MongoDB), and any additional features or configurations required. Based on these inputs, the application generates the appropriate files and directories, sets up the project structure, and writes the necessary boilerplate code for the chosen technology stack.
  
  By automating the setup and generation of the project structure and boilerplate code, this application significantly reduces the time and effort required to start a new full-stack project, enabling developers to quickly set up a new project and begin working on the core functionality.

 Delivers A fully functional Node.js application that generates a full-stack application based on user input
  `,
  flowIdea: `
  The application has an index.ts which accepts a property object containing all the information from the tech stack to the interation it's going to use.
  This object is going to be passes into the projectAnanalysis function which will return an object that contains all the information about the project. the Analyis would be generated by an AI connection function gotten from the helper functions followed by the projectStructure function which will create the project structure based on the information provided by the analysis.
  The projectStructure function will return a list of all the files and directories that are going to be created and the content of those files still generated by the AI connection function.

  The above is going to require serious prompt engineering with the analysis and structure passed into the AI connection function for context.
  Afterwards the AI would be able to generate the project structure and the files and directories WITH WHAT EACH MFILE IS SUPPOSED TO DO WITH IT'S RELATIONSHIP WITH OTHERS.

  This description would be passed into the AI connection function and the AI would generate an  ARRAY of prompts for individual files and directories. the prompts should contain the information about the file and directory and the relationship it has with other files and directories and it's purpose.
  `
};

const analysis = await projectAnalysis(property);
const structure = await projectStructure(analysis);


console.log("Process succeeded");
//console.log(await groqText("Say hello world!"))