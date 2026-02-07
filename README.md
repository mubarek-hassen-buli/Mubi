# Portfolio

A modern, minimalist portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a dynamic grainy gradient background, smooth animations, and a clean, responsive design.



## Features

-   **Dynamic Background**: Custom WebGL-based grainy gradient background (`Grainient`) that adds depth and movement.
-   **Animations**: Smooth transitions and effects using `framer-motion` and `magicui` components (BlurFade, WordRotate, ShimmerButton).
-   **Typography**: Elegant typography with custom fonts (`Argent CF`, `Quincy CF`) loaded via `next/font/local`.
-   **Responsive Design**: Fully responsive layout that looks great on all devices.
-   **Dark Mode**: Built-in dark mode support (defaulting to dark theme).
-   **Project Showcase**: Dedicated projects page and section to highlight your work.
-   **Resume Download**: Easy access to download your resume.

## Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/), [Magic UI](https://magicui.design/)
-   **Graphics**: [OGL](https://github.com/oframe/ogl) (for WebGL background)

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Run the development server:**

    ```bash
    pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information

Update your personal details, experience, education, and projects in `src/data/resume.tsx`. This file acts as the central data source for the website.

### Styling

-   **Colors**: Customize the color theme in `src/app/globals.css`.
-   **Fonts**: Add or change fonts in `src/app/layout.tsx`.

### Projects

Add new projects to the `projects` array in `src/data/resume.tsx`. The images should be placed in the `public` directory.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is open source and available under the [MIT License](LICENSE).
