# Admin Panel Documentation

## Overview
This admin panel allows you to manage your personal portfolio website with the following features:

### 🔐 Authentication
- **Default Login Credentials:**
  - Username: `admin`
  - Password: `admin123`
- Single user authentication system
- Protected routes for admin functionality

### 📁 Project Management
- **Add New Projects:** Create new portfolio projects with:
  - Project name and description
  - Image URL
  - Technologies used (comma-separated)
  - Website URL
  - Active/Inactive status
- **Edit Projects:** Modify existing project details
- **Delete Projects:** Remove projects from the portfolio
- **View Projects:** See all projects in a grid layout

### 📧 Contact Management
- **View Contact Submissions:** See all contact form submissions
- **Reply to Contacts:** Direct email links for responses
- **Copy Email Addresses:** Quick copy functionality
- **Delete Contacts:** Remove old contact submissions

## How to Access

### 1. Start the Backend
```bash
cd "personal portfolio backend"
mvn spring-boot:run
```
The backend will run on `http://localhost:8081`

### 2. Start the Frontend
```bash
cd "personal portfolio fornend"
npm run dev
```
The frontend will run on `http://localhost:5173`

### 3. Access Admin Panel
- Navigate to `http://localhost:5173/admin`
- Use the default credentials: `admin` / `admin123`
- Or click the "Admin" link in the main portfolio navigation

## Features

### Project Management
- **Add Project:** Click "Add New Project" button
- **Edit Project:** Click "Edit" button on any project card
- **Delete Project:** Click "Delete" button (with confirmation)
- **Toggle Status:** Use the Active/Inactive checkbox

### Contact Management
- **View All Contacts:** All contact form submissions are displayed
- **Reply:** Click "Reply via Email" to open your email client
- **Copy Email:** Click "Copy Email" to copy the contact's email address
- **Delete:** Remove contact submissions you no longer need

## Database
The admin panel uses the same database as your contact form:
- **Projects Table:** Stores all portfolio projects
- **Contacts Table:** Stores contact form submissions
- **Admins Table:** Stores admin user credentials

## Security Notes
- The default admin credentials are hardcoded for simplicity
- In production, consider implementing proper password hashing
- The admin panel is protected by route guards
- All admin routes require authentication

## API Endpoints

### Admin
- `POST /api/admin/login` - Admin authentication
- `POST /api/admin/init` - Initialize default admin

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/active` - Get active projects only
- `POST /api/projects` - Create new project
- `PUT /api/projects/{id}` - Update project
- `DELETE /api/projects/{id}` - Delete project

### Contacts
- `GET /api/contacts` - Get all contacts
- `POST /api/contacts` - Create new contact (from form)
- `DELETE /api/contacts/{id}` - Delete contact

## Troubleshooting

### Backend Issues
- Ensure Java and Maven are installed
- Check that port 8081 is available
- Verify database connection in `application.properties`

### Frontend Issues
- Ensure Node.js and npm are installed
- Check that port 5173 is available
- Verify all dependencies are installed with `npm install`

### Admin Login Issues
- Default credentials: `admin` / `admin123`
- Check browser console for errors
- Verify backend is running on port 8081
- Clear browser localStorage if needed

## Customization
- Modify admin credentials in `AdminService.java`
- Change default admin email in `AdminService.java`
- Update project fields in `Project.java` model
- Customize admin panel styling in component files
