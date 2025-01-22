# Project Documentation

## Overview

This document provides a detailed overview of the project's folder structure, outlining the purpose of each folder and file. It also includes a visual representation of the folder hierarchy to help developers navigate and understand the project.

## Folder Structure

The project folder is organized as follows:

```
root/
├── node_modules/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── defaults.css
│   │   │   ├── font.css
│   │   │   ├── responsive.css
│   │   │   ├── styles.css
│   │   │   ├── variables.css
│   │   ├── fonts/
│   │   ├── images/
│   │   ├── images/
│   │   │   ├── index.js
│   ├── components/
│   │   ├── CardComponents/
│   │   │   ├── index.js
│   │   ├── FormComponents/
│   │   │   ├── index.js
│   │   ├── ModalComponents/
│   │   │   ├── index.js
│   │   ├── index.js
│   ├── layouts/
│   │   ├── Auth/
│   │   ├── Web/
│   │   ├── index.js
│   │   ├── pages/
│   │   ├── Auth/
│   │   │   ├── Login
│   │   │   │   ├── index.jsx
│   │   │   ├── index.js
│   │   ├── Web/
│   ├── providers/
│   ├── routes/
│   │   ├── index.js
│   │   ├── ProtectedRoute.jsx
│   │   ├── App.jsx
│   ├── index.js
├── .env
├── client.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
```

## Key Components

### 1. `assets/`

Contains static files such as CSS, fonts, and images.

- **css/**: Contains stylesheets used across the project.
  - `defaults.css`: Base styles for the project.
  - `responsive.css`: Styles for responsive design.
  - `variables.css`: CSS variables for consistent theming.
- **fonts/**: Custom fonts used in the project.
- **images/**: Static images used in UI components.

### 2. `components/`

Reusable components for the project.

- **BPButton.js**: Custom button component.
- **BPHeader.js**: Header component used across pages.
- **BPFooter.js**: Footer component used across pages.
- **CardComponents/**: Components for cards.
- **FormComponents/**: Form-related components.
- **ModalComponents/**: Components for modals.

### 3. `layouts/`

Defines page layouts.

- **Auth/**: Layout for authentication-related pages.
- **Web/**: Layout for public-facing web pages.

### 4. `pages/`

Contains the pages of the application.

- **Auth/**: Authentication-related pages (Login, SignUp).
- **Web/**: Public-facing pages (Home, CTA, FAQ, etc.).
- **NotFound.js**: Page displayed for undefined routes.

### 5. `routes/`

Handles routing logic for the application.

- `ProtectedRoute.jsx`: A higher-order component for protected routes.
- `App.jsx`: Root routing component.

### 6. Configuration Files

- `.env`: Environment variables.
- `tailwind.config.js`: Tailwind CSS configuration.
- `vite.config.js`: Vite configuration for development and build.

## How to Use

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Visual Representation

Below is a visual diagram of the folder structure:

![Folder Structure](https://via.placeholder.com/800x600?text=Folder+Structure+Diagram)

- **Arrows**: Indicate folder hierarchy.
- **Colors**: Differentiate between key sections (e.g., blue for `components/`, green for `assets/`).

Feel free to customize this documentation as needed for your team!
