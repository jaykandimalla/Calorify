# Calorify
Calorify project POC

Project Overview
This section of the document is an introduction to the “Think 360’s” proposal to develop software application for the “Digital Health Inc.” company. This Project Management Plan gives an outline of the purpose, scope and targets of the project for which the Plan has been composed, the project presumptions and requirements, a rundown of project expectations, a synopsis of the project timetable and spending plan, and the plan for developing the “Calorify” Project.
1.1 Purpose, Scope, and Objectives
Purpose
As the food intake accounts for 100 percent of energy that goes into our body, while exercise only makes us fit in 10 to 30 percent cases. So, the main purpose of the project is to analyse the requirements and to develop mobile based software application as specified by the client that defines the calorie count and nutritious facts for the food to maintain healthy life cycle.
Scope
The main scope of the project is to develop an automated software application which is highly accurate in both food identification and calorie calculation. Maintaining the degree of excellence and quality through out the project.
Objective
Developing a top-notch automated system for food identification and calorie calculation using ML/AI algorithms with in a year under 3-million-dollar budget.
1.2 Assumptions and Constraints.
Assumptions
• Whole project deployment should complete before week a head of schedule
• Maintaining the project on track and tasks running smoothly on the mobile platform
• If restraints are found in the project, the undertaking could be actualized in stages while meeting the cut-off time
• As Every problem has a solution but finding the efficient solution makes Project on track
• Cost effective solutions for scalability issues are being researched at each phase of deployment
• Basically, utilize internal expertise and resources to lead the usage of this task
Constraints
8 | P a g e
• Visually undetectable items such as salt, pepper etc. will be excluded from the calorie calculation.
• Sauces like mayonnaise, chipotle, etc cannot be counted in calories but we can manually add them to calories.
• Avoiding the quicker completion of the project which will decrease the quality of the project.
• Also, it gives information about the food, but the structure of the application doesn’t take the human habits in to consideration for accurate personal health suggestions.
1.3 Project Deliverables
• Tab based Structure • Registering new user • Secured Login (Single Sign ON) • Home page Tab (Date time Tracking Food Timeline calorie deficient) • Metrics Tab (Data Visualization) • Food Classification (Charts and Tables) • Reports Generation (Metrics Tab) • Camera/Image capturing Tab • Profile Tab Creation • Notifications • Profile Customization • Data acquisition using ML Module • Descriptive Analytics Model • Pattern Detection Algorithm (Creating and Testing) • Logistic Regression and Decision Tree Model • Differentiating Models [To define the food Detection Accuracy] • CNN models for Intelligent Image Detection • Random Forest Methodology for Item detection • Mapping of Calories [From Pre-Defined Datasets] • Hashing techniques for calorie mapping • Logistic Regression for Quantitative mapping • Volumetric Metrology (Intelligent Image Recognition & AI profiling) • Total Calorie Calculation mapping Volumetric Metrology
1.4 Schedule and Budget Summary
The project is scheduled to be completed in one year,
• Initiation of the project will start on the 4th November 2019
• Software application is ready for use after 4th November 2020
The overall budget for completing the software application with accurate intelligent food recognition is around $2.18 Million CAD.
9 | P a g e
The project will be tracked using the AZURE DevOps.
1.5 Evolution of the project
As we are in the smart era where data defines everything using AI and ML. Instead of adding/removing something from the meal to maintain the proper diet, we can just click the image and get every detail in precise.
The main acknowledgment of the food is an especially troublesome procedure since food take various varieties as a fiddle and appearance. Continually improved and evolved (preliminary to improve performance) which makes the product more distinctive attribute and characteristic possessed.
The mobile application is developed in such a way that takes picture as input and processes to give the detailed calorie count and nutritious information as output. Every stage of the project is tracked, updated and necessary inputs are given for further stages and error correction are minimized.
The plan of the project will be updated accordingly on unscheduled basis and scheduled update to the plan will take place on monthly. Changes in the plan are communicated to all the members through emails, and a baseline of the plan is created with the final project plan. If there are any changes in the plan, these will be against the baseline. If any major changes in the scope, then the plan will be updated with new baselines.

Work Breakdown Structure
1. Tab based structure for app
➢ Design
➢ Ionic components
• Header
• Tabs
➢ API - To connect with server
➢ Unit testing – UI
➢ Unit testing - API
2. Register new user
➢ Design/UI - (Same for register and login)
➢ Ionic component for registering with details
• Ionic form
• Form validation
• POST API Integration
➢ Registration API
• Integration with users table
• Creating user table in Database (DB)
➢ Unit testing – UI
➢ Unit testing – API
30 | P a g e
3. Login
➢ Single-sign-on
➢ Username-password based login
➢ social login
➢ mobile-number login
➢ No design as page is already designed for registration
➢ Button for SSO
➢ Input form for Username and password
➢ Integration with social login - third party modules (Google, Facebook, Twitter etc.)
➢ Login with mobile number
➢ Forgot password.
➢ Authentication for Role based, session-based logins
➢ API - API Reference for password reset
➢ Verification of login with user table
➢ Verification of login with third party API's
➢ Return of auth tokens.
➢ OAUTH or JWT Token based authentication.
➢ Unit testing – UI
➢ Unit testing – API
4. Home page
➢ Date and time
• Ionic Component
➢ Todays tracking
• Design
• Ionic component to show all the data - Remaining values
• API - To get all his log for today.
• API - Integration with daily tracker table (DB).
➢ Food timeline
• Design (UX)
• Ionic component to integrate time line (UI)
• Integration of API Data and Calculations (UI)
• API - To get time line from database
➢ Calorie deficient graph
• Design/UI
• Ionic graphs integration (UI)
• API Integration for graph (UI)
• API to fetch data from DB(API)
➢ Unit testing - UI
➢ Unit testing - API
31 | P a g e
5. Data visualization (Metrics tab)
➢ design UI
➢ Graphs for weekly updates
• Bar chart component (UI)
• API Data Integration with Chart (UI)
• API to fetch data based on given parameters
• DB - Query to fetch details from all the tables (JOINS)
➢ Food classification (Doughnut chart)
• Doughnut chart component (UI)
• Integration of API Data (UI)
• API to fetch food data with parameters from DB(API)
• DB Query to fetch details from log table. (DB)
➢ Applying filters
• Time line selection for graphs (Two inputs)
• Food type selection
✓ Ionic component integration with existing graph. (UI)
✓ API to fetch data based on filter parameters (API)
✓ DB Query with filter parameters to fetch data from multiple tables with joins. (DB)
6. Reports generation (Metrics tab)
➢ Design/UI
➢ Historic data valuation & Downloadable reports (PDF)
• Ionic component to handle report requests (UI)
• drop down and select list to select options (UI)
• Calling API with selected combination of params (UI)
• Download of pdf file returned from API(UI)
• DB Query to get data based on given parameters (DB)
• Handling and formatting data from DB in API(API)
• Writing data to PDF or Word document(API)
• Returning PDF to UI(API)
• Unit testing - UI
• Unit testing - API
7. Camera/Image capturing tab
➢ Integrating camera module in APP
➢ Capturing camera image and handling accept/Re-take
➢ Handling captured image (Converting to byte stream)
➢ Integrating gallery for images upload
➢ Handling uploaded image (Converting to byte stream)
32 | P a g e
➢ Prompt for any inputs (Like quantity, additional comments)
➢ Sending image to server (POST API Call)
➢ API To handle uploaded images
➢ ML Integrated API to feed uploaded image to ML Module (Creating a Job)
➢ Handling data returned from ML Analysis
➢ Get the data upload confirmation to UI
➢ UI - Confirmation box (Success or Error Message) (If invalid re-capturing advises)
8. ML Module
➢ Handling incoming image
➢ Queuing multiple images
➢ Load balancer
9. Identification
➢ Data Acquisition
• Collection of food images (Different parameters and varied sources).
• Maintaining AWS data pools.
• scalable - evolutionary feeding on continuous usage.
• Calories tables - mapping with Images.
• Jobs for data acquisition - automatic analysis.
➢ Data Refining
• Detection of duplicates/ Elimination of redundant data
• Segregation / Grouping of feeding imaged.
• Raw data transformation to consumable quality analysis.
• managing Overlapping between colour, shape and other parameters
➢ Descriptive analytics model
• Creation of new model
• Organizing and data feed
• Results analysis
• Integration with main module
➢ Pattern detection algorithm
• Detection of surfaces
• cropping actual content area
• pixel enhancement for respective resolutions
➢ Logistic regression and decision tree models
• Creating decision tree model
• Analysis and output detection
• Integration with main module
➢ Differentiating models
• Pre development analysis for model
• Distinguishing images
• Unique values assigning technique
• Unique value mapping with existing data sets
• Error detection and handling
33 | P a g e
➢ Neural network controls
• Detection of camera intrinsic and intrinsic detection of camera
• Integration of convolution of neural networks (CNN) module for image classification.
• Feed forward neural networks (FNN)
• Recurrent neural network (RNN) module for image identification.
➢ Random forest methodology integration
• Shapes and assumptions analysis for unique values {differentiating models}.
• Integration with main module and secondary interactions detections.
10. Mapping of calories
➢ Creation of database with analysis outputs
➢ hashing techniques
➢ Creating map from the Identification modules
➢ Categorizing different stages of food (Raw, Frozen State, rotten, etc.)
➢ Logistic regression for quantitative mapping.
11. Volumetric analysis
➢ Calculating scale of the objects of any image
➢ Object size recognition using Intelligent Image Recognition.
➢ Camera orientation analysis and object orientation recognition model
➢ Fore shorting overcome technique
➢ Shape and general assumptions analysis
➢ View analysis (Side view, Front view. etc.)
➢ Mass calculation - addition
➢ Calculating weight of the object (In three different stages)
➢ Logistic Regression and Artificial Intelligence profiling.
12. Calorie calculation
➢ Mapping calories to volumetric data using FNN
➢ Multiplication of calorie value per unit with volume.
➢ Universal constant for each stages feed to the calories for optimistic data
➢ Total calorie value by summing each material calories multiplying volume
13. Incremental evolution
14. Sending back the final analysis output data for given transaction.
15. Node - Handling the returned transaction
➢ Inserting data into respective tables (With transaction)
➢ DB Query for insertion.
34 | P a g e
➢ Error returns handling.
➢ Triggering notification with response.
16. Notification ghanta
➢ Handling auto notified API's
➢ Image request processes.
➢ Showing/ Opening message in a screen.
➢ Alerts and customized time table maintenance.
➢ Reminders and latest food & fitness articles.
17. Profile
➢ Customization
➢ About
➢ Info
➢ Profile picture
➢ Login details
➢ User preferences
➢ Settings
▪ Theme
▪ Time and Date
▪ Day's or week's limit set
▪ permissions
➢ Log-out
