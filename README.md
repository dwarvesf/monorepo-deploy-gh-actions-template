
<h1 align="center">
  Turborepo Vercel CLI Deployment
</h1>
<p align="center">
    <a href="https://github.com/dwarvesf">
        <img src="https://img.shields.io/badge/-make%20by%20dwarves-%23e13f5e?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAD1BMVEUAAAD///////////////+PQt5oAAAABXRSTlMAQL//gOnhmfMAAAAJcEhZcwAAHsIAAB7CAW7QdT4AAACYSURBVHicndLRDYJAEIThMbGAI1qAYAO6bAGXYP81uSGBk+O/h3Mev4dhWJCkYZqreOi1xoh0eSIvoCaBRjc1B9+I31g9Z2aJ5jkOsYScBW8zDerO/fObnY/FiTl3caOEH2nMzpyZhezIlgqXr2OlOX617Up/nHnPUg0+LHl18YO50d3ghOy1ioeIq1ceTypsjpvYeJohfQEE5WtH+OEYkwAAAABJRU5ErkJggg==&&logoColor=white" alt="Dwarves Foundation" />
    </a>
    <a href="https://discord.gg/dwarvesv">
        <img src="https://img.shields.io/badge/-join%20the%20community-%235865F2?style=for-the-badge&logo=discord&&logoColor=white" alt="Dwarves Foundation Discord" />
    </a>
</p>

This repository is a template for creating Turborepo project that can be deployed to Vercel using the Vercel CLI and GitHub Actions. This template provides a basic structure and configuration for managing dependencies, running scripts, and deploying each application to different Vercel projects. The template also includes GitHub workflows that automates the deployment process whenever a push or pull request is made to the specific branch based on the branch or the tag. By using this template, you can easily set up a Turborepo project that leverages the benefits of Vercel's serverless platform, Turbo and GitHub's collaboration features.

## Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

## Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Build

To build all apps and packages, run the following command:

```bash
cd my-turborepo
yarn build
```

## Develop

To develop all apps and packages, run the following command:

```bash
cd my-turborepo
yarn dev
```

## Deployment

### Setup in Vercel Project

- Get vercel project id, vercel team, and vercel organization id.
- Set up Vercel Access Token to use in CI/CD
- Set up Build Command at the root of project.
  
  Ex: `turbo run build --filter=docs --remote-only`

- Output directory for each project

  Ex: `apps/docs/.next`

### Setup Github Secret and Variables

- For each vercel project application will has a specific id and set them to Github Secret, they will be used in environment variable is `VERCEL_PROJECT_ID` for getting the remote env and deploy to Vercel
  Ex: `VERCEL_WEB_PROJECT_ID` for web application, `VERCEL_DOCS_PROJECT_ID` for docs application ...
- Add `VERCEL_ORG_ID`, `VERCEL_ACCESS_TOKEN` to Github secrets.
- If use the remote cache add: `TURBO_TOKEN` to secrets and `TURBO_TEAM` to variables.

### Branch Deployment

- In [release.yml](./.github/workflows/release.yml), update the branch deployment to specific suffix tags matching with `beta`, `alpha` for the purpose of releasing.

Default: beta is `staging` and alpha is `testing` branch, and leave empty is the `main` branch

For more detailed information on how to deploy with Vercel CLI, please refer to this article: [Deploy with Vercel CLI](https://brain.d.foundation/Engineering/DevOps/Deploy+Branch+with+Vercel+CLI).
