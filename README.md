# Micro SaaS AI Starter with Next.js 13, React, Tailwind, Prisma, Stripe & GeneratedBy API

> **Note:** This project is a fork of [next13-ai-saas](https://github.com/AntonioErdeljac/next13-ai-saas) by Antonio Erdeljac.

![Micro SaaS AI Starter](https://github.com/0xGeegZ/ai-micro-saas-starter/blob/master/public/repo-amin-image.png?raw=true)

This is a repository for Build a Micro SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe and GeneratedBy for the AI part.

Features:

- AI prompts folders to generate main project pages (Terms, FAQ, Privacy Policy, About, Documentation, etc.)
- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Clerk Authentication (Email, Google, 9+ Social Logins)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- GeneratedBy Prompt based Application connectors
- Page loading state
- Stripe monthly subscription
- Free tier with API limiting
- Folder structure in Next 13 App Router

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

**Node version 18.x.x**

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
