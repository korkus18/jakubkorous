# Jakub Korous - Portfolio

Personal portfolio website showcasing my work as a full-stack developer and B2B SaaS builder.

## 🚀 About

Portfolio website highlighting my experience in:
- Full-stack web development
- B2B SaaS product building
- End-to-end system architecture
- Automation and scalable solutions

## 🛠 Built With

- **React.js** - Frontend framework
- **React Router** - Client-side routing
- **React Bootstrap** - UI components
- **Particle.js** - Interactive background animations
- **Typewriter Effect** - Dynamic text animations
- **React PDF** - PDF document rendering
- **EmailJS** - Contact form functionality

## ✨ Features

- **Multi-Page Layout** - Home, About, Resume, Contact
- **Interactive Timeline** - Education & experience visualization
- **PDF Resume Viewer** - Inline CV preview with download options (EN/CS)
- **Responsive Design** - Optimized for all devices
- **Contact Form** - With reCAPTCHA integration
- **GitHub Activity** - Contribution calendar display
- **Tech Stack Showcase** - Visual representation of skills

## 📁 Project Structure

```
src/
├── components/
│   ├── Home/           # Landing page components
│   ├── About/          # About section with timeline
│   ├── Projects/       # Project showcase (optional)
│   ├── Resume/         # CV viewer and downloads
│   ├── Contact/        # Contact form
│   ├── Navbar.js       # Navigation bar
│   ├── Footer.js       # Footer component
│   └── Particle.js     # Background animation
├── Assets/             # Images, PDFs, icons
└── style.css          # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/korkus18/jakubkorous.git
cd jakubkorous
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🔧 Configuration

### Update Personal Information

1. **CV Files**: Replace files in `src/Assets/`
   - `Korous_jakub_CV_cs.pdf` (Czech version)
   - `Korous_jakub_CV_en.pdf` (English version)

2. **About Text**: Edit `src/components/About/AboutCard.js`

3. **Timeline**: Update experience in `src/components/About/Timeline.js`

4. **Contact Info**: Modify `src/components/Contact/Contact.js`

### Styling

- Global styles: `src/style.css`
- Component-specific: `src/App.css`

## 📄 License

This project is open source and available for personal use.

## 📧 Contact

Jakub Korous  
Email: contact@jakubkorous.cz  
Website: [jakubkorous.cz](https://jakubkorous.cz)  
LinkedIn: [jakub-korous](https://www.linkedin.com/in/jakub-korous-9a98aa1b9/)

---

Built with React.js | Deployed on web hosting
