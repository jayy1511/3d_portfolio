# F1-Inspired 3D Portfolio

A high-performance, motorsport-themed developer portfolio built with Next.js 15, React Three Fiber, and TailwindCSS.

## 🏁 Quick Start

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the pit lane.

## 🏎️ Features

-   **3D Hero Scene**: Interactive "Energy Orb" and starfield (React Three Fiber).
-   **DRS Mode**: Performance toggle that boosts particle effects and animation speed.
-   **Telemetry UI**: "Lap Timer", "System Check" ignition sequence, and data-driven layouts.
-   **Garage Grid**: Bento-style project showcase.
-   **Command Palette**: `Ctrl+K` navigation.
-   **Smooth Scroll**: Lenis integration for "gliding" feel.

## 📂 Project Structure

-   `app/`: Next.js App Router pages and global layouts.
    -   `page.tsx`: Main entry point assembling all sections.
    -   `globals.css`: Tailwind 4 theme configuration (Papaya/Carbon colors).
-   `components/`:
    -   `3d/`: R3F scenes (`HeroScene.tsx`).
    -   `sections/`: Major page sections (`Hero`, `About`, `Projects`, etc.).
    -   `ui/`: Reusable widgets (`LapTimer`, `Ignition`, `Badge`).
-   `lib/`: 
    -   `data.ts`: **Source of Truth** for all content (CV data).

## 🛠️ How to Edit Content

**Everything is controlled by `lib/data.ts`.**

1.  **Update Resume Data**: Open `lib/data.ts` and modify the `RESUME_DATA` object.
2.  **Change Images**:
    -   Place your images in `public/assets/`.
    -   Update paths in `RESUME_DATA` (e.g., `avatarUrl`, `project.image`).
3.  **Adjust Colors**:
    -   Open `app/globals.css`.
    -   Modify `--papaya` or `--carbon` Oklch values to change the team livery.

## 🚀 Deployment (Vercel)

1.  Push this code to GitHub.
2.  Import the project in Vercel.
3.  **Build Settings**:
    -   Framework Preset: `Next.js`
    -   Build Command: `next build` (default)
    -   Install Command: `npm install` (default)
4.  **Deploy**: Hit "Deploy".

> **Note**: The 3D scene uses `MeshDistortMaterial`. On very old devices, this might be slow, but `DRSProvider` handles performance toggling.

## 📝 TODOs for Launch
- [ ] Replace placeholder images in `public/assets/`.
- [ ] Add real links to all projects in `lib/data.ts`.
- [ ] Verify SEO metadata in `app/layout.tsx`.
