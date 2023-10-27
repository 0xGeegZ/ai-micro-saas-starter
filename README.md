# Micro SaaS AI Starter with Next.js 14, React, Tailwind, Prisma, Stripe & GeneratedBy API

![Micro SaaS AI Starter](https://github.com/0xGeegZ/ai-micro-saas-starter/blob/master/public/repo-amin-image.png?raw=true)

> **Note:** This project is a fork of [next13-ai-saas](https://github.com/AntonioErdeljac/next13-ai-saas) by Antonio Erdeljac.

This is a repository for Build a Micro SaaS AI Platform with Next.js 14, Shadcn, Prisma, Stripe and GeneratedBy for the AI part.

Features:

- AI prompts folders to generate main project pages (Terms, FAQ, Privacy Policy, About, Documentation, etc.)
- Folder structure in [Next 14 App Router](https://nextjs.org/docs/app)
- [Next Intl](https://next-intl-docs.vercel.app/) for Internationalization (compatible with App Router Server 1 Client components)
- [Shadcn](https://ui.shadcn.com/) UI on top of Radix UI
- [Tailwind](https://tailwindcss.com/docs/installation) & [Framer Motion](https://www.framer.com/motion/) animations and effects
- [Clerk Authentication](https://clerk.com/docs) (Email, Google, 9+ Social Logins)
- Client form validation and handling using [react-hook-form](https://react-hook-form.com/get-started)
- Server error handling using [react-toast](https://react-hot-toast.com/docs)
- [GeneratedBy](https://generatedby.com/docs) Prompt based Application API
- [Stripe](https://stripe.com/docs) monthly subscription
- Free tier with API limiting
- Full responsiveness

> **Note:** Took some piece of code from open source projects :
>
> - [llm.report](https://github.com/dillionverma/llm.report) by Dillion Verma.
> - [callsquare](https://github.com/JaleelB/callsquare) by Jaleel Bennett.

## AI Prompts Directory

The [prompts](./prompts) directory contains a collection of AI prompts that can be used to generate useful content and information for a Software as a Service (SaaS) business. Here is a brief overview of the prompts:

1. [`README.md`](./prompts/README.md): Contains details about the prompts directory.
2. [`terms.md`](./prompts/terms.md): Generates terms of service for a startup.
3. [`onboarding-guide.md`](./prompts/onboarding-guide.md): Creates a user onboarding guide for a SaaS startup.
4. [`faq.md`](./prompts/faq.md): Generates a detailed FAQ page for a SaaS startup.
5. [`unit-test-case.md`](./prompts/unit-test-case.md): Creates a suite of automated test cases for a startup.
6. [`api-documentation.md`](./prompts/api-documentation.md): Generates comprehensive API documentation for a startup.
7. [`database-schema.md`](./prompts/database-schema.md): Creates a database schema for a startup.
8. [`error-message-library.md`](./prompts/error-message-library.md): Generates a library of user-friendly error messages for a startup.
9. [`privacy.md`](./prompts/privacy.md): Generates a comprehensive privacy policy for a SaaS startup.

These prompts are designed to help individuals and teams quickly start a SaaS business. They provide a starting point and can be customized to suit your specific needs.

## Getting Started

### Prerequisites

**Node version 20.x.x**

### Cloning the repository

```shell
git clone https://github.com/0xGeegZ/ai-micro-saas-starter
```

### Install packages

```shell
pnpm i
```

### Setup .env file

```bash
cp env.example .env
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma db push

```

### Start the app

```shell
pnpm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command       | description                              |
| :------------ | :--------------------------------------- |
| `dev`         | Starts a development instance of the app |
| `build`       | Builds the application for production    |
| `start`       | Starts the production application        |
| `lint`        | Lints the application code               |
| `postinstall` | Generates Prisma client after install    |

## Internationalization

This project has been fully set up for internationalization, using [Next Intl](https://next-intl-docs.vercel.app/). However, the pages and components have not been translated yet. This means that while the infrastructure for supporting multiple languages is in place, the actual content in different languages is not available.

If you would like to contribute to this project, we have created an issue for translating the pages and components. Any help in this regard would be greatly appreciated. You can find the issue on our GitHub repository and contribute by providing translations for the various strings used throughout the application.

Please note that while contributing, you should follow the guidelines provided in the issue to ensure consistency and quality in translations. Thank you in advance for your contributions!
