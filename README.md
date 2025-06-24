# ServiceNow Playwright Practice

Automated E2E testing project using [Playwright](https://playwright.dev/), TypeScript, ESLint, and Prettier – designed to ensure code quality and test coverage in a structured, maintainable way.

## Resources & Learning Materials
While developing this Playwright testing project, I actively used various public resources to learn best practices and improve the structure and quality of the code.
- [Playwright Docs](https://playwright.dev/docs/intro)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [ESLint (Flat Config)](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- [Prettier](https://prettier.io/docs/en/index.html)

- [Youtube: jaktestowac.pl – Praktyczne wprowadzenie do testów automatycznych z Playwright](https://www.youtube.com/watch?v=JqEp2cjnzAo&list=PLfKhn9AcZ-cD2TCB__K7NP5XARaCzZYn7)
- [Youtube: freeCodeCamp – Learn TypeScript - Full Course for Beginners](https://www.youtube.com/watch?v=SpwzRDUQ1GI)

## Project Structure

├── fixtures/ # Test data (e.g. credentials in JSON)\
├── pages/ # Page Object Model (POM) files\
│ ├── creatorStudioPage.ts\
│ └── loginPage.ts\
├── tests/ # E2E test specs\
│ ├── creatorStudio.spec.ts\
│ └── login.spec.ts\
├── .eslintrc / .prettierrc # Code quality and formatting configs\
├── eslint.config.js # ESLint v9+ Flat Config\
├── playwright.config.ts # Playwright test configuration\
├── package.json # Scripts and dependencies\
└── tsconfig.json # TypeScript settings\

## Getting Started

### Install dependencies
```bash
npm install
```
### Run Playwright tests
```bash
npx playwright test
```

### View HTML report
```bash
npx playwright show-report
```

### Available Scripts
| Script            | Description                                       |
|-------------------|---------------------------------------------------|
| `npm test`        | Run Playwright tests                              |
| `npm run lint`    | Check code with ESLint                            |
| `npm run lint:fix`| Auto-fix code issues using ESLint & Prettier      |
| `npm run format`  | Format code using Prettier                        |

### Code Quality & Style
This project uses:

 - **ESLint v9+** (Flat Config) – with DRY & KISS-focused rules and many more
 - **Prettier** – consistent formatting across the project
 - **Editor integration (WebStorm)** – on-save linting and formatting
 - **SonarLint** – for real-time static code analysis in the IDE

### Linting Rules Philosophy

This project follows well-established software engineering principles enforced through ESLint rules:

| Principle              | Enforced via ESLint rule(s)                                |
|------------------------|------------------------------------------------------------|
| **DRY**                | `no-duplicate-imports`                                     |
| **KISS / SRP**         | `complexity`, `max-lines-per-function`, `max-nested-callbacks` |
| **YAGNI**              | `no-unused-vars`                                           |
| **SOC / POM**          | `no-restricted-imports` – discourages logic leaking across layers |
| **Async hygiene**      | `@typescript-eslint/require-await`                        |
| **Playwright best practices** | `playwright/no-wait-for-timeout`, `playwright/no-page-pause` |
| **Formatting & clarity** | `prettier/prettier` – formatting violations are treated as errors |

 These rules help ensure that the test code remains:
- modular and clean,
- free from overengineering,
- testable and maintainable over time.

## Planned Test Coverage (TBD)
- [ ] TBD
- [ ] TBD
- [ ] TBD
- [ ] TBD


___
This project was built as a learning experience. It combines structured tutorials with guided configuration, self-study, and experimentation to simulate a real-world E2E automation workflow.