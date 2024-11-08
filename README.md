# Task Tracker CLI

A simple command line interface (CLI) to track and manage your tasks.

## Getting Started

### Prerequisites

- Node.js and npm installed
- A code editor or IDE (e.g., VSCode)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/CamilaManita/challenges.git
   cd task-tracker

2. Install dependencies:
    ```bash
    npm install

### Example
The list of commands and their usage is given below:
    ```bash
    
    # Adding a new task
      npm start add "Buy groceries"

    # Updating a task
      npm start update 1 "Buy groceries and cook dinner"
      
    # Deleting a task
      npm start delete 1
      
    # Marking a task as in progress
      npm start mark-in-progress 1
      
    # Marking a task as done
      npm start mark-done 1
      
    # Listing all tasks
      npm start list
      
    # Listing tasks by status
      npm start list done
      npm start list todo
      npm start list in-progress
