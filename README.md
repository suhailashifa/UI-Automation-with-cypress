# Colabo Meets UI Automation with Cypress

This project contains automated UI tests for the Colabo Meets application using Cypress. The tests cover various functionalities like user registration, workspace creation, and task management.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Test Scenarios](#test-scenarios)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

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
UI-Automation-with-cypress/ ├── cypress/ │ ├── fixtures/ # Test data and mock files │ ├── integration/ # Test files │ ├── plugins/ # Plugins for Cypress │ └── support/ # Custom commands and utilities ├── cypress.config.js # Cypress configuration file ├── package.json # Project dependencies and scripts └── README.md # Project documentation

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

### User Registration:
- New user registration without an invitation.
- Registration using an invitation email.

### Workspace Management:
- Create, edit, and delete workspaces.
- Assign users to workspaces and manage roles.

### Task & Memo Management:
- Add, edit, bookmark, and delete tasks.
- Pin/unpin memos and share them among team members.

### Login & Authentication:
- Valid and invalid login scenarios.
- Session handling and redirection.
