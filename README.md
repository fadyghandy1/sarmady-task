# Sarmady Task

![Angular Badge](https://img.shields.io/badge/angular-v17.3.0-red)

> **Sarmady Task** is a front-end project built with the latest Angular version (v17), implementing a stand-alone component architecture. The project features reusable components, Angular Material, NG Prime, and Angular Bootstrap for styling and UI elements, and uses custom **keyframe animations** for enhanced user interaction.

---

## Table of Contents

1. [Features](#features)
2. [Demo](#demo)
3. [Technologies](#technologies)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [Running the Application](#running-the-application)
7. [Testing](#testing)
8. [Deployment](#deployment)
9. [Contributing](#contributing)
10. [License](#license)
11. [Contact](#contact)

---

## Features

- **Product Component**: The main container for the product page.
- **Reusable Subcomponents**:
  - Product Header
  - Product Footer
  - Product Details
- Uses **stand-alone component strategy**, making each component reusable across the application.
- Implements Angular's **input/output** techniques to pass data between components.
- **Custom Keyframe Animations** are used to add dynamic and smooth transitions across the UI.
- **Global SASS file** for consistent color management.
- UI is enhanced with **Angular Material**, **NG Prime**, and **Angular Bootstrap**.

## Demo

![App Screenshot](https://drive.google.com/drive/folders/153N1QOv24wKOqG-_jGJlZVCgo2N7NEtv?usp=sharing).

A live demo can be accessed [(https://drive.google.com/file/d/1m6QVM3qXjQj-rH1MT7PHCtw5Mp8LYl1I/view?usp=sharing)]

## Technologies

This project is built with the following technologies:

- **Angular**: `v17.3.0`
- **TypeScript**: `v5.4.2`
- **RxJS**: `v7.8.0`
- **Zone.js**: `v0.14.3`
- **Angular Material**: `v17.3.10`
- **PrimeNG**: `v17.17.0`
- **PrimeIcons**: `v7.0.0`
- **Bootstrap**: `v5.3.3`
- **Swiper**: `v11.1.3`
- **NgRx Signals**: `v17.2.0`
- **ngx-translate/core**: `v15.0.0`
- **ngx-translate/http-loader**: `v8.0.0`
- **ngx-translate-multi-http-loader**: `v17.0.0`
- **Validator**: `v13.12.0`

Development Dependencies:

- **@angular/cli**: `v17.3.7`
- **Karma**: `v6.4.0`
- **Jasmine**: `v5.1.0`
- **Prettier**: `v3.2.5`

## Installation

### Prerequisites

- Node.js `v16.0.0+`
- Angular CLI `v17.3.7`

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/fadyghandy1/sarmady-task.git
   cd sarmady-task
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables (if any).

## Configuration

- **Global SASS Colors**: You can customize the global colors in `src/styles/_variables.scss`.
- **Keyframe Animations**: Custom animations are located in the `src/styles/_animations.scss` file and can be modified as needed.

## Running the Application

To start the development server, run:

```bash
ng serve
The application will be available at http://localhost:4200.

Build
To create a production build:

bash
Copy code
ng build --prod
Linting
To lint the codebase:

bash
Copy code
ng lint
Testing
Unit Tests
Run unit tests using:

bash
Copy code
ng test
End-to-End Tests
To run end-to-end tests:

bash
Copy code
ng e2e
Deployment
Describe the deployment process, e.g., to Firebase, AWS, or any hosting platform.

Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature/new-feature
Make your changes.
Commit your changes:
bash
Copy code
git commit -m "Add new feature"
Push to the branch:
bash
Copy code
git push origin feature/new-feature
Open a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any inquiries or feedback, feel free to contact:

Fady George
Email: fadyghandy1@gmail.com
GitHub: https://github.com/fadyghandy1
```
