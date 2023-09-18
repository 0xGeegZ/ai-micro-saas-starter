# Micro SaaS AI Starter with Next.js 13, React, Tailwind, Prisma, Stripe & GeneratedBy API

![Micro SaaS AI Starter](https://github.com/AntonioErdeljac/next13-ai-saas/assets/23248726/c47e604a-b50b-4eb0-b420-fda20908f522)

This is a repository for Build a Micro SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe and GeneratedBy for the AI part.

Features:

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

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/next13-ai-saas.git
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

Running commands with pnpm `pnpm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
