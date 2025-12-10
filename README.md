# Barangay Navarro Portal

A professional web portal for Barangay Navarro (General Trias) that enables residents to view announcements, request official documents, contact barangay staff, and register/login for online services.

## Features
- Community announcements (expandable details)  
- Online document request form (certificate, clearance, indigency)  
- Contact form with email/phone details  
- User registration and login (frontend demo; backend required for persistence)  
- Responsive, accessible, and framework-free (HTML/CSS/vanilla JS)

## Technologies
- HTML (single-page: `index.html`)  
- CSS (inline; CSS variables for theme)  
- JavaScript (vanilla, client-side interactions and validation)  
- Optional assets: `/proj/img/logo.jpg`, Google Fonts

## Quick start (local)
1. Clone or download the repository.
2. Place `index.html` and `/proj/img/logo.jpg` in the project folder.
3. Serve the folder with a static server (recommended):
   - Python 3: `python -m http.server 8000`
   - Or: `npx http-server .`
4. Open `http://localhost:8000` in your browser.

## Notes
- Current registration/login and data flows are front-end only. Implement a backend and secure storage (bcrypt/argon2 + HTTPS) for production.
- Consider splitting CSS/JS into separate files and minifying assets before production.

## Contributors
- Arniel Trillo Jr.  
- Daniel Mondragon  
- Gabriel Creencia  
- Andrei Navarro

## Preview
<img width="1915" height="909" alt="image" src="https://github.com/user-attachments/assets/d5d3f1dd-d1b0-4c50-909e-7b3fa54d24f1" />


```
