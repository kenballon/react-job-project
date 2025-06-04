# React Job Board

A job board application built with React, Vite, and Tailwind CSS. This application allows users to view job listings, job details, and manage job postings.

## Features

- View all job listings
- View detailed job information
- Manage job postings (add, edit, delete)
- Responsive design
- Modern UI with Tailwind CSS

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd react-job
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

The application requires two terminals to run:

1. Start the JSON server (provides the jobs API):
```bash
npm run server
```
This will start the mock API server on http://localhost:8000

2. In a new terminal, start the development server:
```bash
npm run dev
```
This will start the Vite development server and the application will be available at http://localhost:5173

## Technologies Used

- React
- Vite
- Tailwind CSS
- React Router DOM
- JSON Server (for mock API)
- React Icons

## Project Structure

```
react-job/
├── data/            # Contains JSON server data
├── public/          # Public assets
├── src/
│   ├── assets/      # Project assets
│   ├── components/  # Reusable components
│   ├── layouts/     # Layout components
│   ├── pages/       # Page components
│   ├── App.jsx      # Main application component
│   └── main.jsx     # Application entry point
└── package.json
```

## Scripts

- `npm run dev` - Start the development server
- `npm run server` - Start the JSON server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
