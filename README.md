# Shenanigan's CardStop

A comprehensive website for Shenanigan's CardStop, a premier Magic: The Gathering specialty store.

## Features

### 🏪 Store Pages
- **Homepage** - Hero section, featured products, upcoming events, and store information
- **Shop** - Comprehensive inventory with advanced filtering, search, and categories
- **Events** - Tournament calendar, registration system, and results tracking
- **About** - Store information, staff profiles, policies, and contact details
- **Community** - Player leaderboards, discussion forums, and social integration

### 🎯 Key Functionality
- **Product Catalog** - Singles, booster packs, preconstructed decks, and accessories
- **Event Management** - Tournament registration, formats (Draft, Standard, Commander, etc.)
- **Community Features** - Player rankings, discussion boards, social links
- **Store Information** - Hours, location, contact details, policies

### 🎨 Design System
- **MTG-Themed UI** - Dark slate color scheme with blue/purple accents
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Component Library** - Built on shadcn/ui for consistency
- **Accessibility** - Proper ARIA labels and keyboard navigation

## Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: TanStack Query
- **Routing**: React Router DOM
- **Build Tool**: Vite with SWC
- **Development**: ESLint + TypeScript strict mode

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
# Install dependencies
npm install

# Start development server (runs on port 8080, or next available port)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Development Server
The dev server runs on `http://localhost:8080` (or next available port) with network access enabled.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui component library
│   ├── Navbar.tsx      # Main navigation
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   ├── Shop.tsx        # Product catalog
│   ├── Events.tsx      # Tournament calendar
│   ├── About.tsx       # Store information
│   └── Community.tsx   # Community hub
├── lib/                # Utilities and configs
└── hooks/              # Custom React hooks
```

## Features by Page

### Homepage (`/`)
- Hero section with store branding
- Quick stats (years in business, cards in stock, etc.)
- Featured product showcase
- Upcoming events preview
- Store visit information with hours and location

### Shop (`/shop`)
- Product grid with card images and pricing
- Advanced filtering by category, set, rarity, condition
- Search functionality across all products
- Product categories: Singles, Boosters, Precons, Accessories
- Shopping cart integration ready

### Events (`/events`)
- Upcoming tournament listings
- Event registration with capacity tracking
- Format badges (Draft, Standard, Commander, etc.)
- Recent tournament results
- Calendar integration ready

### About (`/about`)
- Store mission and history
- Staff member profiles
- Store policies (returns, trade-ins, tournaments)
- Contact information and hours
- Store statistics and achievements

### Community (`/community`)
- Player leaderboards with rankings
- Recent tournament results and winners
- Discussion forums with hot topics
- Social media integration
- Format-specific filtering

## Customization

### Content Management
All content can be easily updated by modifying the respective page components. Key data includes:

- **Store Information**: Located in Footer.tsx and About.tsx
- **Product Data**: Sample data in Shop.tsx (ready for API integration)
- **Event Data**: Sample events in Events.tsx and Index.tsx
- **Staff Information**: Staff profiles in About.tsx

### Styling
The design uses a consistent MTG-themed color palette:
- **Primary**: Slate grays (900, 800, 700) for backgrounds
- **Accents**: Blue (600-700) for interactive elements
- **Success**: Green (600-700) for positive actions
- **Warning**: Purple (600-700) for format badges
- **Text**: White/slate-300 for readability on dark backgrounds

### API Integration
The application is structured to easily integrate with:
- **TCGPlayer API** for real-time pricing and product data
- **Tournament Management** systems for event registration
- **Inventory Management** systems for stock tracking
- **Payment Processing** for online orders

## Future Enhancements

- **Shopping Cart & Checkout** - Complete e-commerce functionality
- **User Accounts** - Customer registration and order history
- **Real-time Inventory** - Live stock updates and pricing
- **Tournament Brackets** - Interactive tournament trees
- **Admin Panel** - Content management and inventory control
- **Mobile App** - React Native version for mobile users

## Contributing

This website was built with modern web development best practices:
- Component-driven architecture
- TypeScript for type safety
- Responsive design patterns
- SEO optimization
- Performance optimizations

## License

© 2024 Shenanigan's CardStop. All rights reserved.

---

**Note**: This is a demonstration website for a fictional MTG store. All store information, events, and products are sample data for demonstration purposes.
