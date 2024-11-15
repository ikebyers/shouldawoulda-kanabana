# Shoulda Woulda Kana Bana
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Table of Contents
- [Description](#description)
- [Installation](#installation-instructions)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Deployed Application URL
https://shouldawoulda-kanabana.onrender.com/login

## Screenshots
you can find the screenshots of the deployed application in the client/public/assets/deployed-screenshots in the repository

## Description
A Kanban Board web application for managing tasks, organizing workflow, and boosting productivity. Built with modern web development tools and APIs.

## Features

	•	Task Management: Create, edit, and delete tasks.
	•	Persistence: Task data is saved locally or via a database.
	•	User Authentication: Secure login/logout for personalized boards.

## Getting Started
These instructions will help you set up and run the application locally for your own development and/or testing purposes.

**Prequisites**
    - Node.js and npm
    - API keys if required for authentication

## Installation Instructions
1. Clone the repository:
```bash
git clone https://github.com/ikebyers/shouldawoulda-kanabana
```
2. Install dependencies:
```bash
npm install
```
3. Create environment variables:
    - create a .env file in the root directory and add necessary environment variables
```bash
DB_NAME='kanban_db'
DB_USER='your_username'
DB_PASSWORD='your_password'
JWT_SECRET_KEY='your_secret_key'
```
4. Run the schema file from the db server/db directory
```bash
psql -U postgres
\i schema.sql
```
5. Seed the project
```bash
npm run seed
```
6. Start the application
```bash
npm start
```

## Usage
- Logging In/User Authentication: Click "login" and enter appropriate username and password (there is no "create user" functionality, so if you want to make your own users you will need to add that information to the server/src/seeds/user-seeds.ts file)
- Adding tasks: Click "add task" to create a new task
- Editing tasks: Click on task to edit details or assign it to a different column or user

## Technologies Used
	•	Frontend: HTML, CSS, JavaScript
	•	Backend: Node.js, Express
	•	Database: MongoDB (or any preferred database)
	•	Authentication: JWT-based authentication (or other chosen methods)
	•	Deployment: Render (for cloud hosting)
	•	Version Control: Git

## License 
This project is licensed under the MIT License.

## Credits
**Ike Byers** - Primary development, debugging, deployment

## Sources
This project used information from several sources, including documentation, tutorials, and support on platforms. Here are notable references:
- Express Documentation: Used for setting up the server and managing routes.
- Render Deployment Guide: Referenced for deploying the Node.js application on Render, including configuration of the main entry in package.json.
- Node.js Documentation: Consulted for handling environment variables, error handling, and other Node.js features.
- Stack Overflow: Various questions and answers consulted for handling common errors and debugging issues in deployment and configuration.

## Questions
If you have any questions, please contact me at:
- GitHub: [ikebyers](https://github.com/ikebyers)
- Email: ikebyersmgmt@gmail.com
