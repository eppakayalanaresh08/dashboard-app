
# 📊 Board Dashboard Admin Panel  

![Login Preview](/src/assets/readme/d-login.png)  
![Dashboard Preview](/src/assets/readme/d-dashboard.png)  
*A responsive admin dashboard built with React and Tailwind CSS, designed to mirror exact UI specifications.*  

---

## 🚀 Live Demo  
[![Vercel](https://img.shields.io/badge/View_Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel)](https://board-dashboard-app-ten-tau.vercel.app/)  

---

## ✨ Key Features  
| Feature          | Highlights                                                                 |
|------------------|---------------------------------------------------------------------------|
| **Pixel-Perfect UI** | Matched design specs down to spacing, colors, and typography.            |
| **Responsive Layout** | Adapts seamlessly to desktop, tablet, and mobile (see challenges below). |
| **Interactive Components** | Dynamic charts, collapsible sidebar, and form validations.              |

---

## 📱 Screenshots  
| Desktop View                     | Mobile View                      |
|----------------------------------|----------------------------------|
| ![Desktop](/src/assets/readme/d-login.png)   | ![Mobile](/src/assets/readme/m-login.jpg)     |
| ![Desktop](/src/assets/readme/d-dashboard.png)   | ![Mobile](/src/assets/readme/m-dashboard.jpg)     |


---

## 🧠 Challenges & Solutions  
### 1. **Mobile Responsiveness**  
**Difficulty**: Sidebar collapsed awkwardly on small screens, and charts overflowed.  
**Solution**:  
- Used Tailwind’s `md:`/`lg:` breakpoints to reorganize content.  
- Implemented a hamburger menu for the sidebar on mobile.  

### 2. **Chart Integration**  
**Difficulty**: Ensuring percentage bars in "Top Products" scaled correctly.  
**Solution**:  
- Dynamically calculated widths with `style={{ width: `${percentage}%` }}`.  
- Added smooth transitions with `transition-all duration-300`.  

### 3. **Design Consistency**  
**Difficulty**: Matching exact colors/spacing from the design.  
**Solution**:  
- Extracted Tailwind’s color palette from the design using EyeDropper.  


---

## 🛠️ Tech Stack  
- **Frontend**: React 18, Tailwind CSS  
- **Routing**: React Router 6  
- **Deployment**: Vercel  

---

## 🏗️ Project Structure 
src/
├── assets/
│   └── (any images/icons)
├── components/
│   ├── Dashboard/
│   │   ├── DataCard.jsx
│   │   ├── ActivitySection.jsx
│   │   ├── TopProducts.jsx
│   │   └── Schedule.jsx
│   ├── Auth/
│   │   └── LoginForm.jsx
│   ├── Layout/
│   │   ├── Sidebar.jsx
│   │   └── Header.jsx
│   └── UI/
│       ├── Button.jsx
│       └── Input.jsx
├── pages/
│   ├── Dashboard.jsx
│   └── Login.jsx
├── App.js
├── index.js
└── styles/
    └── index.css

## 🏗️ Project Structure  folder structure explanation

src/src/
├── assets/               # Static assets (images/icons)
├── components/
│   ├── Dashboard/        # Dashboard widgets
│   │   ├── DataCard.jsx          # Metric cards (revenue/users)
│   │   ├── ActivitySection.jsx   # Weekly timeline
│   │   ├── TopProducts.jsx       # Product analytics
│   │   └── Schedule.jsx          # Daily agenda
│   ├── Auth/
│   │   └── LoginForm.jsx         # Auth form with social login
│   ├── Layout/
│   │   ├── Sidebar.jsx           # Collapsible navigation
│   │   └── Header.jsx            # Search + user profile
├── pages/
│   ├── Dashboard.jsx     # Main dashboard view
│   └── Login.jsx         # Login page
├── App.js                # Router configuration
├── index.js
└── styles/
    └── index.css         # Global CSS/Tailwind
