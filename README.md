# Shivam Mourya - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS, showcasing skills, projects, education, and achievements for a Computer Science student passionate about technology and innovation.

## ✨ Features

- **Modern UI/UX**: Clean, professional design with smooth animations and micro-interactions
- **Fully Responsive**: Optimized for all devices (mobile-first approach)
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Interactive Sections**:
  - 🎯 Hero with animated typing effect and social links
  - 👨‍💻 About section with personal stats and background
  - 🛠️ Skills showcase with animated progress bars and tech stack
  - 💼 Projects portfolio with filtering (Personal, GenAI, Freelance)
  - 🎓 Education timeline with academic achievements
  - 🏆 Achievements and certifications gallery
  - 📧 Contact form with EmailJS integration for real email sending
- **Smooth Navigation**: Anchor-based navigation with smooth scrolling
- **SEO Optimized**: Semantic HTML and meta tags
- **Fast Performance**: Vite build optimization

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Build Tool**: Vite (Fast HMR & optimized builds)
- **Styling**: Tailwind CSS (Utility-first CSS framework)
- **Icons**: Lucide React (Beautiful, customizable icons)
- **Email Service**: EmailJS (Contact form functionality)
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/shivammourya10/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (for contact form)
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your EmailJS credentials
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📧 EmailJS Configuration

The contact form uses EmailJS for sending emails. To set it up:

1. **Create EmailJS Account**: Visit [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. **Create Email Service**: Set up Gmail, Outlook, or other email service
3. **Create Email Template**: Use template ID `template_contact`
4. **Update Environment Variables**:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=template_contact
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_ENABLE_EMAIL=true
   ```

### EmailJS Template Format
```
Subject: {{subject}} - Portfolio Contact Form

Hello Shivam,

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

## 🎨 Project Structure

```
Portfolio/
├── public/
│   ├── favicon.png          # Custom favicon
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── Project_cover/   # Project images
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Hero.jsx         # Hero section with typing animation
│   │   ├── About.jsx        # About me section
│   │   ├── Skills.jsx       # Skills and technologies
│   │   ├── Projects.jsx     # Projects showcase
│   │   ├── Education.jsx    # Education timeline
│   │   ├── Achievements.jsx # Achievements & certifications
│   │   ├── Contact.jsx      # Contact form with EmailJS
│   │   └── Footer.jsx       # Footer section
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── .env.local               # Environment variables
├── package.json             # Dependencies
├── tailwind.config.cjs      # Tailwind configuration
├── vite.config.js           # Vite configuration
└── README.md
```

## 🎯 Customization Guide

### Personal Information
- **Hero Section**: Update name, title, description, and social links
- **About Section**: Modify personal background, stats, and skills summary
- **Contact Info**: Update email, phone, location, and social profiles

### Content Updates
- **Skills**: Add/remove technologies in `Skills.jsx`
- **Projects**: Update project details, images, and links in `Projects.jsx`
- **Education**: Modify educational background in `Education.jsx`
- **Achievements**: Update certifications and achievements in `Achievements.jsx`

### Styling Customization
- **Colors**: Modify primary colors in `tailwind.config.cjs`
- **Fonts**: Update font imports in `index.css`
- **Components**: Customize individual component styles using Tailwind classes

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com/) and import your repository
3. Configure environment variables in Vercel dashboard
4. Deploy automatically with every push

### Netlify
1. Run `npm run build` to create production build
2. Upload the `dist` folder to [Netlify](https://netlify.com/)
3. Or connect your GitHub repository for automatic deployments

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deployment script to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run `npm run build && npm run deploy`

## 📱 Features Showcase

### Contact Form
- ✅ Real email sending via EmailJS
- ✅ Form validation
- ✅ Success/error feedback
- ✅ Fallback to mailto for failed sends

### Dark Mode
- ✅ System preference detection
- ✅ Manual toggle
- ✅ Persistent user preference

### Responsive Design
- ✅ Mobile-first approach
- ✅ Tablet and desktop optimized
- ✅ Touch-friendly interactions

### Performance
- ✅ Fast loading with Vite
- ✅ Optimized images
- ✅ Minimal bundle size

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About the Developer

**Shivam Mourya**
- 🎓 Computer Science Student passionate about technology
- 💻 Specializes in Full-stack Development and GenAI
- 🌟 Always learning and exploring new technologies
- 📧 Contact: mouryas318@gmail.com
- 🔗 LinkedIn: [shivam318](https://linkedin.com/in/shivam318)
- 💼 GitHub: [shivammourya10](https://github.com/shivammourya10)

---

**Made with ❤️ using React, Vite & Tailwind CSS**

⭐ Star this repository if you found it helpful!
