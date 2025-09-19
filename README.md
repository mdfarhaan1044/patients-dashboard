# Patients Dashboard

Modern, responsive patients management dashboard built with React, Vite, Redux Toolkit, React Router, and Tailwind CSS.

## Overview

This application provides a clean interface to view patients. It leverages Redux Toolkit for predictable state management, React Router for navigation, and Tailwind CSS for utility-first styling.

## Features

- **Dashboard UI**: Responsive layout optimized for desktop and mobile.
- **Patients listing**: Browse patients.
- **Global state management**: Powered by `@reduxjs/toolkit` and `react-redux`.
- **Routing**: Client-side navigation with `react-router-dom`.

## Tech Stack

- **Frontend**: React , Vite
- **State**: Redux Toolkit , React Redux
- **Routing**: React Router
- **Styling**: Tailwind CSS with `@tailwindcss/vite`

## Requirements

- Node.js >= 18 (LTS recommended)
- npm >= 9

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

Vite will print a local URL. Open it in your browser.

3. Build for production

```bash
npm run build
```

4. Preview the production build locally

```bash
npm run preview
```

## Project Structure

Key files and directories under `src/`:

```
src/
  App.jsx               # App root and routes
  main.jsx              # React root render and providers
  index.css             # Tailwind entry and global styles
  store.js              # Redux store configuration
  slices/
    patientsSlice.js    # Patients state, reducers, actions
  pages/
    Home.jsx            # Landing/home page
    Patients.jsx        # Patients dashboard page
    About.jsx           # About page
  components/
    Header.jsx          # App header/navigation
    PatientCards.jsx    # Card/list UI for patients
    PatientModel.jsx    # Modal for More information on patient
  data/
    patients.json       # Static/mock data
```

## State Management

The Redux store is defined in `src/store.js` and uses Redux Toolkit for a concise setup. The `patientsSlice` in `src/slices/patientsSlice.js` contains reducers, actions, and initial state for patient data. Components access and update state via `useSelector` and `useDispatch` from `react-redux`.

## Styling

Tailwind CSS v4 is integrated using the `@tailwindcss/vite` plugin. Global styles and Tailwind directives are located in `src/index.css`. Utility classes are used throughout components to ensure a consistent, responsive UI.
