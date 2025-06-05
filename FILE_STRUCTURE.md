# Portfolio Website File Structure

## Root Directory Files
- `package.json` - Defines project dependencies and scripts for running, building, and testing the application
- `package-lock.json` - Locks the versions of all dependencies for consistent installations
- `vite.config.js` - Configuration file for Vite (the build tool), sets up project settings and plugins
- `.gitignore` - Specifies which files Git should ignore (node_modules, build files, etc.)
- `README.md` - Project documentation and setup instructions

## Source Directory (`src/`)
### Main Application Files
- `index.js` - The entry point of the React application, renders the root App component
- `app.jsx` - The root React component that sets up routing and the main application structure
- `pic_of_me.jpg` - Profile picture used in the Home component

### Pages (`src/pages/`)
- `Home.jsx` - The main website page component containing all sections (About, Projects, Skills, Contact)

### Components (`src/components/`)
- `Navbar.jsx` - Navigation bar component with menu items and responsive design
- `Footer.jsx` - Footer component with social links and copyright information
- `AnimatedCursor.jsx` - Custom cursor animation component for enhanced user interaction
- `BackgroundAnimation.jsx` - Background particle animation component for visual effects

### Styles (`src/styles/`)
- `App.css` - Global styles and layout for the main application
- `Home.css` - Styles specific to the Home page component
- `Navbar.css` - Styles for the navigation bar component
- `Footer.css` - Styles for the footer component
- `AnimatedCursor.css` - Styles for the custom cursor animation
- `BackgroundAnimation.css` - Styles for the background particle effects

## Public Directory (`public/`)
- Contains static assets that are served directly
- Typically includes favicon, robots.txt, and other public files

## Build Directory (`build/`)
- Contains the production-ready files after running the build command
- Generated automatically and should not be edited manually
- Should be in .gitignore (already handled)

## Node Modules (`node_modules/`)
- Contains all project dependencies
- Managed by npm/yarn
- Should be in .gitignore (already handled)

## GitHub Directory (`.github/`)
- Contains GitHub-specific files like workflows and templates
- Used for CI/CD and repository management

## Note
The `.history/` directory contains file change history and is not essential for the website's functionality. It can be safely ignored or removed. 