# Product Dashboard with Material UI

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Material UI](https://img.shields.io/badge/Material%20UI-5.14.0-blueviolet)

A responsive product dashboard built with React and Material UI, designed to practice component composition, theming, and responsive layout techniques.

## Key Features

- 🎨 Custom Material UI theme with modified color palette and typography
- 📱 Fully responsive grid layout using MUI's Grid system
- ♻️ Reusable `ProductCard` component
- 🛒 Integrated Material UI icons
- 🧪 Basic test coverage for core functionality

## Project Requirements

### Setup & Theming
- Created with Create React App
- Custom theme configuration (primary/secondary colors, typography)

### Dashboard Components
- Responsive Grid layout displaying ≥4 products
- Each product card displays:
  - Product name
  - Description
  - Price
  - Material UI icon
- Custom "Buy"/"Details" buttons

### Technical Implementation
- Created reusable `ProductCard` component
- Integrated Material UI icons (minimum 1 per card)
- Applied styling via `sx` prop and inline styles
- Implemented responsive behavior using `xs`, `sm`, `md` Grid props
- Included basic test in `App.test.js`

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
1. Clone the repository
   ```bash
   git clone [repository-url]
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   npm start
   ```

## Testing
Run the test suite to verify component rendering:
```bash
npm test
```

## Project Structure
```
/src
├── components
│   └── ProductCard.js  # Reusable product component
├── theme
│   └── theme.js        # Custom MUI theme configuration
├── App.js              # Main application component
└── App.test.js         # Basic rendering tests
```

## Potential Enhancements
- Add product filtering functionality
- Implement dark mode toggle
- Connect to real product API
- Add shopping cart feature
