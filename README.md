# Pork and Garlic Ice Cream Season 2 Decision Tool

An interactive classroom planning tool for comparing two Season 2 strategies. It verifies the supplied Season 1 result first, then lets you change production, milk, market spending, premises, machine costs, borrowing and actual sales allocation. It calculates P&L, cash risk, closing cash and spoilage for each option.

The preloaded Season 1 data calculates Sh 100,000 revenue (50,000 units × Sh 2) and Sh 73,546 closing cash. All planning values remain editable estimates until the trainer confirms the Year 2 rules.

## Run locally

1. Install [Node.js](https://nodejs.org/) (version 20 or later).
2. Open a terminal in this project folder.
3. Run `npm install`.
4. Run `npm run dev` and open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

Run `npm run build`. Vite writes the deployable site to `dist/`.

## Upload to a new GitHub repository

1. On GitHub, create a new empty repository named `pork-garlic-ice-cream-year2-decision-tool`. Do not add a README, `.gitignore`, or license there.
2. In a terminal opened in this exact folder, run:

   ```bash
   git init
   git add .
   git commit -m "Initial Year 2 decision tool"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/pork-garlic-ice-cream-year2-decision-tool.git
   git push -u origin main
   ```

3. Replace `YOUR-USERNAME` with your GitHub username. The included `.gitignore` keeps dependencies, build output, and environment files out of the repository.

## Deploy on Vercel

1. Sign in at [Vercel](https://vercel.com/) with GitHub.
2. Click **Add New → Project**, then import `pork-garlic-ice-cream-year2-decision-tool`.
3. Vercel detects Vite automatically. Leave the build command as `npm run build` and output directory as `dist`.
4. Click **Deploy**. Later pushes to `main` automatically publish an updated site.

## Project structure

```text
pork-garlic-ice-cream-year2-decision-tool/
├── public/
│   └── mark.svg
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
