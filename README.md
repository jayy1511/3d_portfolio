# F1-Inspired 3D Portfolio

A high-performance, immersive developer portfolio engineered with Next.js 15, React Three Fiber, and TypeScript. This project treats the user interface as a high-speed telemetry dashboard, blending 3D interactivity with modern web architectural patterns.

## Technological Architecture

This application is built on a modern, type-safe stack designed for performance, scalability, and developer experience.

### Core Framework
- **Next.js 15 (App Router)**: Utilizing React Server Components (RSC) for optimal initial load performance and SEO.
- **TypeScript**: Strict type adherence for robust code quality and maintainability.
- **TailwindCSS**: Utility-first styling with a custom configuration for the "Papaya" and "Carbon" design system.

### Interactive & 3D Engine
- **React Three Fiber (R3F)**: Declarative bridge for Three.js, managing the Hero scene's 3D lifecycle.
- **Drei**: Abstractions for complex 3D implementations (Environment, Float, Sparkles).
- **GSAP (GreenSock)**: High-performance animation engine for complex timelines and DOM transitions.
- **Framer Motion**: Gesture-based animations for UI components (modals, cards, hover states).

### State & Performance
- **Lenis**: Smooth scrolling library for a premium, inertial scroll experience.
- **Zustand / Context API**: Global state management for system-wide toggles like the DRS (Drag Reduction System) mode.
- **Suspense**: Streaming and loading state management for 3D assets.

## Key Features

### 3D Hero Environment
Centers around an interactive 3D model integrated into a dynamic environment. The scene responds to user input and application state (DRS Mode), altering lighting intensity and particle behavior in real-time.

### Drag Reduction System (DRS)
A global performance toggle that simulates the F1 mechanic. activating "DRS" boosts animation speeds, intensifies visual effects (chromatic aberration, motion blur), and transforms the static 3D environment into a high-energy state.

### Project Telemetry System
Instead of simple external links, projects utilize a detailed "Pit Stop" modal system. This overlay provides a deep dive into each project's engineering, displaying:
- Technical Architecture (Tech Stack)
- Core Systems & Features
- Engineering Challenges & Solutions
- Performance Metrics

### Certifications Module
A dedicated section for displaying professional credentials (Meta, Google) styled as high-grade motorsport licenses. Fully responsive layout ensures legibility across all viewport sizes.

### Command Menu interface
Integrated keyboard-driven navigation accessible via `Ctrl+K`. This system provides instant access to all sections of the portfolio and external links, mimicking IDE command palettes.

## Project Structure

The codebase follows a modular architecture:

- **app/**: Next.js App Router structure. Contains page entries and global layouts.
- **components/3d/**: Three.js scenes and R3F components.
- **components/sections/**: Major UI sections (Hero, About, Projects, Certifications).
- **components/ui/**: Reusable, atomic UI components (Buttons, Badges, Modals).
- **lib/data.ts**: Centralized data source. All content (projects, experience, bio) is managed here for easy updates without code changes.

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jayy1511/3d_portfolio.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Access the application at `http://localhost:3000`.

## Configuration

### Content Management
All personal data, project details, and text content are decoupled from the UI logic. Modify `lib/data.ts` to update:
- Personal Profile (Name, Role, Location)
- Work Experience & History
- Project Case Studies (Titles, tech stacks, detailed descriptions)
- Social Links & Contact Info

### Customization
The design system defaults to a McLaren-inspired "Papaya" orange. To adapt this to another brand identity, navigate to `app/globals.css` and adjust the root CSS variables (`--papaya`, `--carbon`) to your preferred Oklch color values.

## Deployment

This project is optimized for deployment on Vercel.

1. Push your changes to a GitHub repository.
2. Import the repository into Vercel.
3. The default Next.js build settings (`next build`) are pre-configured.
4. Deploy.

---
*Engineered for speed and precision.*
