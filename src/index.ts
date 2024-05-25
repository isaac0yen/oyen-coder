/* 
  Oyen Coder is a project that has the ability to create frontend and backend applications.
  It takes certain properties as an object and goes through series of prompts from the groqText AI module.
*/
import projectAnalysis from "./controllers/first_stage.js";
import { projectProperty } from "./types.js"


const property: projectProperty = {
  applicationType: "backend",
  language: "javascript",
  framework: "null",
  database: "sqlite",
  packageManager: "npm",
  versionControl: "git",
  testingFramework: "jest",
  testingEnvironment: "node",
  deploymentPlatform: "aws",
  cicdTool: "github-actions",
  lintingTool: "eslint",
  formattingTool: "prettier",
  bundlingTool: "webpack",
  taskRunner: "npm-scripts",
  buildTool: "babel",
  containerizationTool: "docker",
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
  description: `This is a cutting-edge AI-powered application generator that streamlines the development process by leveraging advanced natural language processing and machine learning algorithms. It takes in a set of requirements as input and guides the user through an interactive series of prompts to gather additional details. Based on this information, the agent dynamically generates a robust, scalable, and production-ready full-stack application, adhering to industry best practices such as SOLID principles, test-driven development, and clean architecture.

The agent's capabilities include creating RESTful APIs with secure authentication and authorization mechanisms, integrating with various databases, building responsive and intuitive user interfaces, and implementing advanced features such as real-time communication, data analytics, and machine learning models. With its modular and extensible architecture, the agent can be easily customized and extended to suit specific project needs, enabling rapid application development and accelerating the software engineering process.

By automating the tedious and repetitive tasks involved in application development, this AI-powered generator empowers developers to focus on higher-level tasks, fostering innovation and creativity. It serves as a powerful tool for both experienced developers and those new to the field, providing a seamless and efficient way to bring their ideas to life.`,
};

const analysis = await projectAnalysis(property);

if (!analysis) {
  throw new Error("Project analysis failed");
}

console.log("Project analysis succeeded");
//console.log(await groqText("Say hello world!"))