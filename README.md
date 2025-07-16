# 🗂️ Task Manager App (React)

A simple task management frontend application built using **React**. It allows users to create tasks, organize them into three stages — **Todo**, **Ongoing**, and **Completed** — and manage tags associated with each task.

---

## ✨ Features

- ✅ Add new tasks with a name
- ✅ Manage task status (Todo → Ongoing → Completed)
- ✅ Forward-only status progression (no going backward)
- ✅ Add up to 3 tags per task (with remove option)
- ✅ Delete tasks
- ✅ Press `Escape` to confirm and reload the page
- ✅ Automatically logs all tasks to the browser console every 60 seconds in JSON format
- ✅ Clean UI with minimal styling
- ✅ No backend — entirely frontend

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/) (Functional components and Hooks)
- `useReducer` for state management
- Native DOM event listeners for `Escape` key handling
- No third-party state libraries

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/wakar32/testapp.git
cd testapp
```

### 2. Install Dependencies

Make sure you have Node.js and npm installed, then run:
npm install

### 3. Start the Application

npm start
This will launch the development server at http://localhost:3000/.

### 4. Project Structure

src/
├── components/
│ ├── TaskBoard.jsx
│ ├── TaskColumn.jsx
│ └── TaskCard.jsx
├── reducers/
│ └── taskReducer.js
├── App.jsx
├── index.js
├── styles.css

### 5. Notes

The app is built as a frontend-only project — there is no backend or persistent storage.

All data is lost on refresh (as expected per requirements).

ESC key behavior uses native window.addEventListener, cleaned up on unmount.

### 5. Author

Built by Wakar Ahamed as part of a frontend developer assignment.
