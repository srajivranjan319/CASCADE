Create a complete, polished and functional web prototype called “bhasaSetu AI” (भाषा सेतु).

PROJECT PURPOSE:
bhasaSetu AI is an offline-first classroom language assistant designed to help students and teachers communicate between Hindi and Indian tribal/local languages, especially in areas with limited internet connectivity.

IMPORTANT:
Do NOT make it look like a generic AI-generated website template.
It should look like a real startup/product prototype designed by a professional UI/UX designer.
Use a distinctive visual identity, natural spacing, tasteful animations, strong typography, realistic interactions and a cohesive design system.

TECH STACK:
- HTML5
- CSS3
- Vanilla JavaScript
- No backend required for the prototype
- Use localStorage for local data persistence
- Make it work by simply opening the HTML file in a browser
- Keep the code clean, modular and well commented
- Make the entire interface responsive for desktop, mobile and Android tablets

BRAND:
Name: bhasaSetu AI
Hindi name: भाषा सेतु
Tagline:
“One voice. Many languages.”
Secondary tagline:
“Bridging Languages. Empowering Communities.”

VISUAL DESIGN:
Create a premium, modern and warm Indian-inspired visual identity.

Color direction:
- Deep forest green
- Emerald green
- Soft mint
- Warm cream/off-white
- Subtle orange/golden accent
- Small violet accent for AI elements

Avoid excessive gradients, excessive glassmorphism and excessive rounded cards.
Use gradients only where they improve the design.

TYPOGRAPHY:
Use attractive professional fonts:
- Space Grotesk for major English headings
- DM Sans for UI/body text
- Noto Sans Devanagari for Hindi
Make typography one of the strongest parts of the design.
Use strong hierarchy, excellent spacing and subtle letter spacing.

LOGO:
Create a simple custom bhasaSetu AI logo using CSS/SVG.
It should represent:
- language
- connection/bridge
- communication
- AI
Do NOT use a random stock logo.

LANDING PAGE:
Create a strong hero section containing:
- bhasaSetu AI branding
- “One voice. Many languages.”
- short explanation of the project
- “Open Live Translator” CTA
- “See How It Works” CTA
- attractive animated visual representing communication/language
- floating status cards such as:
  “Voice Ready”
  “Works Offline”
  “AI Powered”
  “1.8 sec Demo”

Add subtle floating animations, not excessive animations.

MAIN NAVIGATION:
Create these sections/tabs:

1. Translate
2. Learn
3. Worksheet
4. Offline
5. How It Works

TRANSLATOR:
Build a genuinely interactive translator UI.

Features:
- Hindi text input
- Target language dropdown:
  - Santali
  - Gondi
  - Bhili
  - Kui
- Translate button
- Clear button
- Translation output
- Copy button
- Pronunciation button
- Voice input button

VOICE INPUT:
Use browser SpeechRecognition/Web Speech API when available.
Set Hindi recognition to hi-IN.
When the user speaks:
Speech → Text → Translation → Output

If SpeechRecognition is unavailable, gracefully use a demo fallback phrase rather than breaking the application.

TRANSLATION:
For this prototype, DO NOT pretend to have a real AI translation model.

Create a small local demonstration dictionary/phrase database in JavaScript.

Example entries can include:
Hindi:
नमस्ते
धन्यवाद
पानी
घर
स्कूल
किताब
दोस्त
शिक्षक
बच्चा
पानी कहाँ है?
आपका नाम क्या है?

Create illustrative demo outputs for the supported languages.

Clearly display:
“Demo language pack”
and somewhere explain:
“Production translations should be validated with native speakers and teachers.”

For unknown phrases, show a graceful “No offline phrase found” message.

PRONUNCIATION:
Use browser speechSynthesis where possible.
Add a polished pronunciation interaction.

LEARNING MODE:
Create a daily learning dashboard.

Include:
- vocabulary cards
- Hindi word
- local-language equivalent
- pronunciation button
- “Mark Learned” button
- progress percentage
- words learned counter

Save learned words using localStorage.

WORKSHEET GENERATOR:
Create a functional bilingual worksheet generator.

Controls:
- Level:
  Beginner
  Class 6–8
  Class 9–10

- Activity:
  Read Aloud
  Match Words
  Fill in the Blank

Generate a clean bilingual worksheet table dynamically from the selected language pack.

Buttons:
- Generate
- Print / Save PDF using browser print
- Download worksheet as TXT

OFFLINE DASHBOARD:
Create a professional “Offline Control Room”.

Show:
- Translation Pack — Ready
- Classroom Phrases — 124
- Voice Prompts — Ready
- Local Progress — Saved
- Demo Pack Loaded — progress bar

Explain visually that the core prototype works without continuous internet because the demo language data is embedded locally.

Add:
“Reset Local Data”

RECENT TRANSLATIONS:
Store recent translations using localStorage.
Display them in the Offline section.

HOW IT WORKS:
Create a visual pipeline:

🎙️ Hindi Voice
      ↓
📝 Speech to Text
      ↓
🧠 Offline Translation
      ↓
🔊 Local Language Voice

Add three cards:
- Modular Language Packs
- Community Validation
- Privacy-minded / Local-first

ANIMATIONS:
Use tasteful CSS animations:
- hero visual floating
- subtle button hover
- card hover
- animated voice waveform
- section fade/slide transitions
- progress bar animation
- small status indicators

Do NOT overanimate the page.

IMAGES / VISUALS:
Do not depend on external stock-image URLs.
Create lightweight visuals using CSS/SVG/HTML so the project remains usable offline.

Create a distinctive hero illustration that visually suggests:
people/community + communication + language connection.

Make it feel intentionally designed rather than AI-generated.

RESPONSIVE DESIGN:
It must work properly on:
- laptop
- desktop
- Android tablet
- mobile phone

For mobile:
- stack sections vertically
- keep buttons touch-friendly
- make navigation horizontally scrollable
- maintain readable Hindi typography

FUNCTIONALITY:
All major buttons must actually work.

Required working interactions:
- Translate
- Clear
- Copy
- Pronounce
- Voice input
- Language switching
- Learning progress
- localStorage
- Worksheet generation
- Print
- Download
- Reset local data
- Navigation between sections

ACCESSIBILITY:
- proper labels
- readable contrast
- keyboard-friendly controls
- visible focus states
- buttons should have clear text/icons

IMPORTANT PRODUCT NOTE:
This is a demonstration MVP, not a production-grade tribal-language translation system.
Do not make fake claims about translation accuracy.
Clearly label illustrative language outputs as demo data.

FINAL OUTPUT:
Return the complete working project as:
1. index.html
2. styles.css
3. app.js

If possible also include:
- README.md
- simple SVG logo

The project should run by opening index.html directly in a browser without requiring a server.

Overall design goal:
Make bhasaSetu AI look like a real, competition-ready EdTech/AI product — polished, human-designed, culturally respectful, functional and pre