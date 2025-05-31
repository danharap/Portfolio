# Daniel Harapiak - Portfolio

A modern, responsive portfolio website built with Angular 19, showcasing my skills as a Full Stack Developer and Software Engineer. This portfolio features a clean design with smooth animations, modern UI components, and a fully responsive layout.

## 🚀 Live Demo

[View Portfolio](https://danharap.github.io/Portfolio) *(Update with your deployed URL)*

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Sections](#sections)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Modern Design**: Clean, professional interface with gradient backgrounds and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Interactive Components**: Hover effects, animated cards, and dynamic content
- **Contact Form**: Working contact form with validation
- **Project Showcase**: Filterable project gallery with live demo and GitHub links
- **Experience Timeline**: Professional experience displayed in a timeline format
- **Skills Visualization**: Organized skill categories with visual indicators
- **Performance Optimized**: Fast loading times and optimized assets

## 🛠 Technologies Used

### Frontend
- **Angular 19** - Modern web framework
- **TypeScript** - Type-safe JavaScript
- **SCSS** - Advanced CSS with variables and mixins
- **Font Awesome** - Professional icons
- **Google Fonts** - Custom typography (Inter & JetBrains Mono)

### Development Tools
- **Angular CLI** - Project scaffolding and build tools
- **Node.js** - JavaScript runtime
- **npm** - Package management

### Architecture
- **Non-Standalone Components** - Traditional Angular module architecture
- **Reactive Forms** - Form handling and validation
- **Component-Based** - Modular and reusable components

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)
- [Angular CLI](https://angular.io/cli) (v19 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/danharap/Portfolio.git
   cd Portfolio/portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

### Build for Production

```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
portfolio-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/          # Navigation header
│   │   │   ├── hero/            # Landing section
│   │   │   ├── about/           # About me section
│   │   │   ├── projects/        # Projects showcase
│   │   │   ├── project-card/    # Individual project card
│   │   │   ├── experience/      # Professional experience
│   │   │   ├── experience-item/ # Individual experience item
│   │   │   ├── contact/         # Contact form and info
│   │   │   └── footer/          # Footer section
│   │   ├── app.component.*      # Main app component
│   │   ├── app.module.ts        # App module configuration
│   │   └── app.routes.ts        # Routing configuration
│   ├── styles.scss              # Global styles and utilities
│   ├── index.html               # Main HTML file
│   └── main.ts                  # Application bootstrap
├── public/                      # Static assets
├── angular.json                 # Angular CLI configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
```

## 🎯 Sections

### 1. Header/Navigation
- Fixed header with smooth scroll navigation
- Mobile-responsive hamburger menu
- Active section highlighting

### 2. Hero Section
- Animated introduction with typing effect
- Call-to-action buttons
- Animated code snippet visual

### 3. About Me
- Personal introduction and bio
- Skills organized by category (Frontend, Backend, Tools & Others)
- Key statistics and achievements
- Downloadable resume link

### 4. Projects
- Project showcase with filtering options
- Individual project cards with:
  - Project images
  - Technology tags
  - Live demo and GitHub links
  - Detailed descriptions

### 5. Experience
- Professional timeline layout
- Company information and roles
- Key achievements and responsibilities
- Technology stacks used

### 6. Contact
- Contact form with validation
- Contact information cards
- Social media links
- Professional email and location

### 7. Footer
- Additional navigation links
- Social media links
- Technology references
- Copyright information

## 🎨 Customization

### Personal Information
Update your personal information in the component files:

1. **Hero Section**: `src/app/components/hero/hero.component.html`
2. **About Section**: `src/app/components/about/about.component.ts`
3. **Contact Information**: `src/app/components/contact/contact.component.html`

### Projects
Add your projects in `src/app/components/projects/projects.component.ts`:

```typescript
projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description...',
    image: 'assets/images/project1.jpg',
    technologies: ['Angular', 'TypeScript', 'SCSS'],
    category: 'frontend',
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/yourusername/project'
  }
  // Add more projects...
];
```

### Experience
Update your work experience in `src/app/components/experience/experience.component.ts`.

### Styling
Customize colors and design in:
- `src/styles.scss` - Global styles and CSS variables
- Individual component SCSS files for specific styling

### Colors
The main color scheme uses CSS variables defined in `src/styles.scss`:
```scss
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  // Customize these to match your brand
}
```

## 🚀 Deployment

### GitHub Pages
1. Build the project:
   ```bash
   ng build --base-href /Portfolio/
   ```

2. Deploy to GitHub Pages using Angular CLI:
   ```bash
   ng deploy --base-href /Portfolio/
   ```

### Netlify
1. Build the project:
   ```bash
   ng build --prod
   ```

2. Upload the `dist/portfolio-app/` folder to Netlify

### Vercel
1. Connect your GitHub repository to Vercel
2. Set build command: `ng build --prod`
3. Set output directory: `dist/portfolio-app`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Angular Team** - For the amazing framework
- **Font Awesome** - For the beautiful icons
- **Google Fonts** - For the typography
- **Design Inspiration** - Various portfolio designs from the community

## 📞 Contact

Daniel Harapiak - [daniel@example.com](mailto:daniel@example.com)

Project Link: [https://github.com/danharap/Portfolio](https://github.com/danharap/Portfolio)

---

⭐ **If you like this project, please give it a star!** ⭐

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
