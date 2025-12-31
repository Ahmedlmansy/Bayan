# Bayan Dashboard

A comprehensive and modern dashboard built with Next.js featuring full Arabic and English support, providing data analytics tools, interactive charts, and geographic maps.

## 📊 Overview

Bayan is a professional full-featured dashboard that provides:
- Real-time analytics and statistics
- Multiple types of interactive charts
- Interactive geographic maps
- Data and content management
- Modern and user-friendly interface

## ✨ Key Features

### 🌐 Multi-Language Support
- Full Arabic language support (RTL)
- English language support (LTR)
- Seamless language switching
- Dynamic translation for all UI elements

### 📈 Charts & Analytics
- **Chart.js**: Classic charts (Line, Bar, Pie, Doughnut)
- **ApexCharts**: Advanced charts (Area, Candlestick, Heatmap)
- **Recharts**: Fully customizable charts
- Interactive dashboards
- Data and report export

### 🗺️ Interactive Maps
- **Mapbox GL**: High-performance 3D maps
- **jVectorMap**: Statistical country maps
- **React Simple Maps**: Lightweight SVG maps
- Custom markers and multiple layers
- Geographic data integration

### 🎨 User Interface
- **Material-UI (MUI)**: Ready-made consistent components
- **Tailwind CSS**: Flexible and fast styling
- **Bootstrap 5**: Responsive grid and UI components
- **Dark/Light Mode**: Support for dark and light themes
- **Responsive Design**: Works perfectly on all screen sizes

### 🔐 Authentication & Security
- Full integration with **Firebase Authentication**
- User and permission management
- Route and page protection
- Secure sessions

### 🔔 Additional Features
- Real-time notifications
- Sortable and searchable data tables
- Dynamic forms with validation
- File upload and management
- Data export and import

## 🚀 Quick Start

### Prerequisites
```
Node.js >= 18.0.0
npm >= 9.0.0 or yarn >= 1.22.0
```

### 1. Installation

```bash
# Clone the repository
git clone <repository-url>
cd bayan

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### 2. Environment Variables Setup

Create a `.env.local` file in the project root:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Mapbox Configuration
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_token

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Run the Project

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Run production build
npm run start

# Lint code
npm run lint
```

Open your browser at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
bayan/
├── public/                      # Static files
│   ├── locales/                # Translation files
│   │   ├── ar/                 # Arabic translation
│   │   └── en/                 # English translation
│   ├── images/                 # Images and icons
│   └── fonts/                  # Fonts
│
├── src/
│   ├── app/                    # Next.js pages (App Router)
│   │   ├── dashboard/          # Dashboard pages
│   │   ├── analytics/          # Analytics pages
│   │   ├── maps/               # Maps pages
│   │   ├── charts/             # Charts pages
│   │   ├── tables/             # Tables pages
│   │   ├── forms/              # Forms pages
│   │   └── settings/           # Settings pages
│   │
│   ├── components/             # React components
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx      # Header component
│   │   │   ├── Sidebar.tsx     # Sidebar component
│   │   │   └── Footer.tsx      # Footer component
│   │   ├── charts/             # Chart components
│   │   ├── maps/               # Map components
│   │   ├── tables/             # Table components
│   │   ├── forms/              # Form components
│   │   ├── cards/              # Info cards
│   │   └── ui/                 # General UI components
│   │
│   ├── lib/                    # Libraries and utilities
│   │   ├── firebase.ts         # Firebase setup
│   │   ├── utils.ts            # Utility functions
│   │   └── constants.ts        # Constants
│   │
│   ├── hooks/                  # Custom React Hooks
│   │   ├── useAuth.ts          # Authentication hook
│   │   ├── useFirestore.ts     # Database hook
│   │   └── useTheme.ts         # Theme hook
│   │
│   ├── context/                # React Context
│   │   ├── AuthContext.tsx     # Authentication context
│   │   └── ThemeContext.tsx    # Theme context
│   │
│   ├── types/                  # TypeScript Types
│   │   ├── index.ts            # General types
│   │   └── api.ts              # API types
│   │
│   └── styles/                 # Stylesheets
│       ├── globals.css         # Global styles
│       └── themes.css          # Custom themes
│
├── .env.local                  # Environment variables (not in Git)
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies
```

## 🛠️ Tech Stack

### Core
| Technology | Version | Usage |
|-----------|---------|-------|
| Next.js | 15.3.2 | React framework |
| React | 18.3.1 | UI library |
| TypeScript | 5.x | Programming language |

### UI Framework
| Library | Usage |
|---------|-------|
| Material-UI | Ready-made UI components |
| Tailwind CSS | Utility-first styling |
| Bootstrap 5 | Grid system and components |
| styled-components | CSS-in-JS |

### Charts & Visualization
| Library | Chart Types |
|---------|-------------|
| Chart.js | Line, Bar, Pie, Radar |
| ApexCharts | Area, Candlestick, Treemap |
| Recharts | Fully customizable |

### Maps
| Library | Usage |
|---------|-------|
| Mapbox GL | Interactive 3D maps |
| react-map-gl | Mapbox React integration |
| jVectorMap | Statistical maps |
| react-simple-maps | SVG maps |

### Internationalization
- **i18next**: Translation management
- **react-i18next**: React integration
- **next-i18next**: SSR support

### Backend & Database
- **Firebase**: Authentication, Firestore, Storage
- **react-firebase-hooks**: Firebase hooks

### Icons
- **FontAwesome**: 10,000+ icons
- **Lucide React**: Modern icons
- **MUI Icons**: Material Design Icons

## 📚 Main Pages

### 🏠 Dashboard Home
- Statistics overview
- KPI cards
- Quick charts
- Latest updates and notifications

### 📊 Analytics
- Detailed analytics
- Time comparisons
- Custom reports
- Data export

### 🗺️ Maps
- Geographic data visualization
- Heat maps
- Location tracking
- Spatial analysis

### 📈 Charts
- All chart types
- Customizable charts
- Live data
- Fully interactive

### 📋 Tables
- Sortable tables
- Advanced search and filtering
- Pagination
- CSV/Excel export

### 📝 Forms
- Dynamic forms
- Data validation
- File upload
- Multi-step forms

### ⚙️ Settings
- Account settings
- System preferences
- Notification management
- Interface customization

## 🔧 Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
        // ...
      }
    }
  }
}
```

### Add New Language

1. Create a folder in `public/locales/`
2. Add JSON translation files
3. Update i18next configuration

### Customize Theme

Edit `src/styles/themes.css` or use MUI theme provider.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Other Servers
```bash
npm run build
npm run start
```

## 📝 Commit Convention

The project uses Conventional Commits:

```bash
# Use commitizen
npm run commit

# Or manually
git commit -m "feat: add new chart component"
git commit -m "fix: resolve navigation issue"
git commit -m "docs: update README"
```

### Commit Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build/tooling changes

## 🐛 Troubleshooting

### Issue: Mapbox Error
```bash
# Make sure to add token in .env.local
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_token
```

### Issue: Firebase Not Working
```bash
# Check all Firebase variables in .env.local
# Enable required services in Firebase Console
```

### Issue: Translation Not Working
```bash
# Ensure translation files exist in public/locales/
# Check i18next configuration
```

### Issue: Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and redistribution is not permitted.

## 👥 Team

- **Lead Developer**: Ahmed Mahmoud
- **Designer**: Ahmed Mahmoud
- **Project Manager**: Ahmed Mahmoud

## 📞 Contact

- **Email**: ahmedelmansy579@gmail.com


## 🙏 Acknowledgments

Thanks to all open-source libraries and tools used in this project:
- Next.js team for the amazing framework
- Vercel for hosting solutions
- Material-UI team for beautiful components
- Mapbox for powerful mapping tools
- Firebase for backend services

## 📈 Project Stats

![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![License](https://img.shields.io/badge/License-Private-red)

---

Made with ❤️ by Bayan Team
