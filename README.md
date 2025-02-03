# Colabo Meets UI Automation with Cypress

This project contains automated UI tests for the Colabo Meets application using Cypress. The tests cover various functionalities like user registration, workspace creation, and task management.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Test Scenarios](#test-scenarios)

## Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)
- Git

Ensure you have Cypress installed globally or as a dev dependency in your project.

## Installation

### Clone the Repository:

```bash
git clone git@github.com:suhailashifa/UI-Automation-with-cypress.git
cd UI-Automation-with-cypress
```
### Install Dependencies:

```bash
npm install
```
### Open Cypress:

```bash
npx cypress open
```

## Project Structure
```
UI-Automation-with-cypress/
├── cypress/
│   ├── fixtures/        # Test data and mock files
│   ├── integration/     # Test files
│   ├── plugins/         # Plugins for Cypress
│   └── support/         # Custom commands and utilities
├── cypress.config.js    # Cypress configuration file
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```
## Running Tests

### Run Tests in Interactive Mode:

```bash
npx cypress open
```
This opens the Cypress Test Runner where you can manually select and run tests.

### Run Tests in Headless Mode:
```bash
npx cypress run
```
This will execute all tests in headless mode and output the results in the terminal.

## Test Scenarios

The following features are tested in the Colabo Meets app:

### 1. User Registration:
- New user registration with or without an invitation.
- Registration using an invitation email.

### 2. Workspace Management:
- Create, edit, and delete workspaces.
- Assign users to workspaces and manage roles.

### 3. Task & Memo Management:
- Add, edit, bookmark, and delete tasks.
- Pin/unpin memos and share them among team members.

### 4. Login & Authentication:
- Valid and invalid login scenarios.
- Session handling and redirection.

### 5. Connect to Google Calender:
- Lets user connect to their google account and loads the all the google calender meeting to Colabo Meets.
- User can disconnect their google account.

### 6. Create a Meeting Board:
- Add, edit, delete or invite users to a meeting board.
- Session handling and redirection.

### 7. Record a Meeting and displays the Generated Meeting Summary with AI:
- Start, pause and retake a meeting recording.
- Based on the latest meeting recording the latest AI summary will appear on the meeting board.
