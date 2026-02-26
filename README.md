# Plane App UI
**What is CS Pro Plane App?**

CS Pro Plane is a versatile and comprehensive project management software built for teams that prioritize delivering exceptional customer
value. Ideal for product development, IT services, professional services, agencies, and design firms, this software enables mission-critical
teams to streamline their workflows, collaborate effectively, and achieve their goals.
With CS Pro Plane, you can seamlessly integrate your workflows, enhance team collaboration, and maintain full visibility over your projects.
Its flexible features cater to various methodologies and processes, ensuring that every team can operate in a way that best suits their
unique needs. By centralizing all project activities in one place, this app helps you stay organized, prioritize tasks effectively, and deliver
outstanding results.



## Features

- Issues: Quickly create issues and add details using a powerful rich text editor that supports file uploads. Add sub-properties and references to problems for better organization and tracking.
- Sprints: Keep up your team's momentum with sprints. Gain insights into your project's progress with burn-down charts and other valuable features.
- Modules: Break down your large projects into smaller, more manageable modules. Assign modules between teams to track and plan your project's progress easily.
- Analytics: Get insights into all your CS Pro Plane data in real-time. Visualize issue data to spot trends, remove blockers, and progress your work.
- Time tracking (coming soon): CS Pro Plane also includes a powerful time tracking feature, allowing teams to monitor the time spent on tasks and projects accurately.


## Installation

Setting up local environment is extremely easy and straight forward. Follow the below step and you will be ready to contribute.

1. Clone the code locally using:


```bash
  git clone -b main https://github.com/Cyber-Square-Pro/cspro-plane-ui.git

```
2. Switch to project folder using:
```bash
  cd cspro-plane-ui

```
3. Install the packages using:
```bash
  npm install
```
4. Open the code on VS Code or similar equivalent IDE.
5. create a .env.local file at the root of the project and add the following:
```bash
NEXT_PUBLIC_BASE_URL="http://localhost:3000/"
NEXT_PUBLIC_BASE_API_URL="http://127.0.0.1:8000/"

#local
NEXT_PUBLIC_BASE_ASSET_URL="http://localhost:8000/"

NEXT_PUBLIC_LOCAL_ASSET_BASE_URL="https://raw.githubusercontent.com/Cyber-Square-Pro/project-assets/main/Plane/"


# #development
# NEXT_PUBLIC_ASSET_BASE_URL="http://api.plane-dev.pro.cybersquare.org/"
 
```
6. Start the backend server.
7. To run the development server, use:
```bash
npm run dev
```
8. Open http://localhost:3000 with your browser to see the application.
You are now ready to make changes to the code. Don't forget to refresh the browser (in case it does not auto-reload).

## Screenshots

![dashboard](https://github.com/Cyber-Square-Pro/cs-pro-plane-ui/assets/154955593/9c51e9ef-1a42-47b4-a8d4-51a9ad54c041)

![workspace](https://github.com/Cyber-Square-Pro/cs-pro-plane-ui/assets/154955593/3b449d9d-c34f-4539-901d-771584443a79)

 
## Scripts

dev: Starts the development server.

build: Builds the application for production.

start: Starts the production server.

lint: Runs ESLint to check for linting errors.
  
  
"University of Belize - CI/CD Cohort"