Here's a README for a monorepo boilerplate built with Next.js, Shadcn UI, Tailwind CSS, Storybook, and Playwright.

<br>

---

## Next.js Monorepo Boilerplate

This is a modern boilerplate for a Next.js monorepo application. It includes a robust stack designed for rapid development, testing, and documentation.

### 🚀 Tech Stack

- **Next.js**: A React framework for building full-stack web applications.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Shadcn UI**: A collection of reusable components built with Radix UI and Tailwind CSS.
- **Storybook**: An open-source tool for developing UI components in isolation.
- **Playwright**: A reliable end-to-end testing framework.
- **TypeScript**: A superset of JavaScript that adds static typing.

### 📦 Getting Started

1.  **Clone the repository**:

    ```bash
    git clone [repository-url]
    cd [repository-name]
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server**:

    ```bash
    npm run dev
    ```

    Your application will be available at `http://localhost:3000`.

### 📖 Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Builds the Next.js application for production.
- `npm run start`: Starts the Next.js production server.
- `npm run storybook`: Starts the Storybook development server for component documentation.
- `npm run test:e2e`: Runs end-to-end tests with Playwright.
- `npm run test:e2e:ui`: Runs Playwright tests with the UI test runner.
- `npm run lint`: Lints the codebase to enforce code style and catch errors.
- `npm run format`: Formats the codebase using Prettier.

### 📚 Folder Structure

- `app/`: Next.js App Router for application pages and routes.
- `components/`: Reusable React components, including Shadcn UI components.
- `.storybook/`: Storybook configuration files.
- `e2e/`: Playwright end-to-end tests.
- `public/`: Static assets like images and fonts.
- `lib/`: Utility functions and helper classes.
- `styles/`: Global CSS files and other stylesheets.

### 📝 Conventions

- **Components**: Store all shared components in the `components/` directory. Each component should have its own folder with the component file and a story file (e.g., `Button.tsx` and `Button.stories.tsx`).
- **Styling**: Use Tailwind CSS utility classes for styling components. Add custom styles or global styles in the `styles/` directory.
- **Storybook**: Create a corresponding story file (`.stories.tsx`) for each reusable component to document and test its states.
- **Testing**: Write end-to-end tests in the `e2e/` directory using Playwright.

### 💡 Customization

- **Theme**: Customize the theme by editing `tailwind.config.js` and `globals.css`.
- **Components**: Add new Shadcn UI components using the CLI.
  ```bash
  npx shadcn-ui@latest add [component-name]
  ```
- **Linting**: Configure ESLint and Prettier by editing the `.eslintrc.json` and `.prettierrc` files.
