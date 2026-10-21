# bhasaSetu AI

**bhasaSetu AI** is a classroom language-assistance prototype for bridging Hindi, Hinglish, and English with Indian tribal languages. It is designed for rural classrooms and supports Santali, Gondi, Bhili, and Kui.

The app combines a local multilingual dictionary, browser speech recognition, learning cards, printable worksheet generation, and locally saved progress in a warm, Indian-inspired interface.

> **Important:** This is an educational prototype. Dictionary entries marked `[Pending]`, and all other tribal-language content, should be reviewed by native speakers and language experts before classroom or production use.

## Features

- Hindi, Hinglish, and English source-language input
- Santali, Gondi, Bhili, and Kui translation targets
- Browser-based voice input through the Web Speech API
- Translation fallback pipeline:
  1. Local classroom dictionary
  2. MyMemory translation to English
  3. English fallback when no reviewed tribal-language entry exists
- Vocabulary flashcards with locally saved learning progress
- Classroom worksheet generation and printing
- Recent translation history stored in the browser
- Responsive multi-section interface
- No account, backend, or database required

## Technology

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Browser Web Speech and Speech Synthesis APIs
- Browser `localStorage`

## Project structure

This repository uses React and TypeScript rather than separate vanilla `styles.css` and `app.js` files:

```text
.
├── index.html                  # Vite HTML entry shell
├── package.json               # Dependencies and project scripts
├── pnpm-lock.yaml             # Reproducible dependency versions
├── src/
│   ├── main.tsx               # React entry point
│   ├── App.tsx                # Website layout and application functionality
│   ├── index.css              # Tailwind import, theme, fonts, and shared styles
│   └── data/
│       └── dictionary.ts      # Dictionary, aliases, flashcards, and worksheet data
├── tsconfig.json
└── vite.config.ts
```

Equivalent files from a plain HTML/CSS/JavaScript project are:

| Plain project file | This repository |
| --- | --- |
| `index.html` | `index.html` and `src/main.tsx` |
| `styles.css` | `src/index.css` |
| `app.js` | `src/App.tsx` |
| `README.md` | `README.md` |

## Run locally

### Requirements

- Node.js 22
- pnpm

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/bhasasetu-ai.git
cd bhasasetu-ai
pnpm install
pnpm dev
```

Open the local URL shown by Vite.

### Production build

```bash
pnpm build
pnpm preview
```

The production output is created in `dist/`.

## Create a GitHub repository

1. Create an empty repository named `bhasasetu-ai` on GitHub.
2. From this project directory, run:

```bash
git init
git add .
git commit -m "Initial bhasaSetu AI prototype"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bhasasetu-ai.git
git push -u origin main
```

If this directory is already a Git repository, skip `git init`. If an `origin` remote already exists, update it instead:

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/bhasasetu-ai.git
git push -u origin main
```

## How translation works

1. The app normalizes the entered Hindi, Hinglish, or English phrase.
2. It searches the local dictionary in `src/data/dictionary.ts`.
3. If no local entry exists and the browser is online, the app asks MyMemory for an English translation.
4. It searches the local English dictionary for a reviewed target-language entry.
5. If no tribal-language match exists, it displays the English result as a clearly identified fallback.

The MyMemory request is made directly from the browser. Do not place private API keys in client-side source code.

## Offline behavior

Core dictionary lookup, flashcards, worksheet data, and saved browser progress do not require a backend. The MyMemory fallback, Google Fonts, and Unsplash photography require a network connection. Browser speech-recognition support also varies by browser and may require connectivity.

This prototype does not currently install a service worker, so a first-time page load still requires the deployed site to be reachable.

## Browser support

For the best voice-input experience, use a recent Chromium-based browser. Browsers without Web Speech recognition can still use typed input. Speech synthesis voices and pronunciation quality depend on the voices installed on the device.

## Dictionary contributions

To add or review content:

1. Open `src/data/dictionary.ts`.
2. Add or update the relevant Hindi or English phrase.
3. Preserve `[Pending]` until a translation has been validated.
4. Ask native speakers to review spelling, dialect, context, and cultural appropriateness.
5. Run a production build before submitting the change.

Please do not represent illustrative or machine-generated translations as verified language data.

## Privacy

Translation history and learning progress are stored in the user's browser with `localStorage`. Core app data is not sent to an application server. Text not found locally may be sent to the third-party MyMemory service as part of the fallback process.

## Available scripts

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the Vite development server |
| `pnpm build` | Create a production build |
| `pnpm preview` | Preview the production build |
| `pnpm format` | Format the project with oxfmt |

## Project status

bhasaSetu AI is a demo prototype and is not yet intended for production or unsupervised classroom use.

Link to our web prototype: https://swab-smoky-18035111.figma.site
