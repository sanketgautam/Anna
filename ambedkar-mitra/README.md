# Ambedkar Mitra — landing page

A single-page, dependency-free landing site for **Ambedkar Mitra**, the forthcoming
voice & video AI companion inspired by the life and thought of Dr B. R. Ambedkar —
built for [ambedkarmitra.com](https://ambedkarmitra.com/).

No build step. Open `index.html`, or serve the folder with any static server:

```bash
cd ambedkar-mitra
python3 -m http.server 4173   # then visit http://localhost:4173
```

## What's on the page

| Section | What it does |
| --- | --- |
| Hero | Portrait, value props, waitlist form, share button, EN / हिंदी / मराठी switcher (hero + talk sections localised) |
| Talk (`#talk`) | Working phone preview: tap a suggested question → sourced, scripted answer → **Listen** reads it aloud (browser speech synthesis, `en-IN` / `hi-IN` / `mr-IN`). Mic button previews the voice-first idea |
| Stories (`#stories`) | Six 1-minute life stories (Mahad 1927, Columbia 1913–16, Barrister 1923, Rajgruha 1934, Constitution 1947–49, Nagpur 1956) as a scroll/snap reel — full-story reader, "Keep" (saved on device), and share via Web Share API with WhatsApp / X fallbacks. This is the in-app snippet feed and the social-marketing unit |
| His journey (`#journey`) | 1891–1956 timeline + rotating attributed quotes |
| Books & sources (`#library`) | *Annihilation of Caste* (Columbia), *The Problem of the Rupee* & *The Buddha and His Dhamma* (collected works, Internet Archive), the Constitution (Legislative Dept.), plus the Dr. Ambedkar Foundation and Columbia's Ambedkar pages |
| Schools & museums (`#community`) | Use cases for students, classrooms/exhibits and community circles + share strip |
| FAQ + Waitlist | Honest "this is an AI interpretation, not the historical person" answers; waitlist form |

## Behaviour & integrations (current state)

- **Waitlist** matches the live holding page: it validates the email, then opens a
  pre-addressed email to `hello@ambedkarmitra.com` ("Ambedkar Mitra waitlist").
  Swap `data-waitlist` handling in `app.js` for Formspree / ConvertKit / your API
  when a real list exists — one function to change.
- **Chat answers are scripted previews**, each labelled with its source. They are
  deliberately *not* presented as the historical person's words.
- **Sharing** uses `navigator.share` where available, clipboard otherwise; story
  cards also expose explicit X / WhatsApp intents in the reader.
- Language choice, kept stories and waitlist emails persist in `localStorage`
  (keys: `am-lang`, `am-likes`, `am-waitlist`) — client-side only, nothing is sent
  anywhere except the mailto above.

## Deploying to ambedkarmitra.com (Vercel)

The live domain already serves a static build from Vercel. To ship this page:

1. Import/point the Vercel project at this repository and set **Root Directory**
   to `ambedkar-mitra` (no framework preset, no build command, output = root), **or**
   drag this folder into a new Vercel project.
2. Keep the domain `ambedkarmitra.com` attached to that project.
3. `vercel.json` here only sets long-lived caching for `/assets/*`.

## Content & images — please review before launch

- Historical photographs are from **Wikimedia Commons** (mostly public domain;
  Deekshabhoomi and Rajgruha are CC BY-SA) — credited in the footer. Files:
  `Dr. Bhimrao Ambedkar.jpg`, `Dr. Babasaheb Ambedkar in Columbia University.jpg`,
  `Dr B R Ambedkar as Barrister in 1922.jpg`, `Dr Babasaheb Ambedkar reading a book.jpg`,
  `Dr. B. R. Ambedkar at Delhi in 1948.jpg`,
  `…presenting the final draft of the Indian Constitution… 25 November, 1949.jpg`,
  `…Drafting Committee… Aug. 29, 1947.jpg`,
  `Flyer published before Mahad Satyagraha in 1927.jpg`,
  `Ambedkar with the Executive Committee Members at Historical Conversion Ceremony at Nagpur 1956.jpg`,
  `Dr Babasaheb Ambedkar addresses a gathering… Buddha Jayanti… 2 May 1951….jpg`,
  `Deekshabhoomi, Nagpur in India.jpg`, `Rajgruh, the residence of Babasaheb Ambedkar in Dadar, Mumbai.jpg`.
- Story texts are original, short retellings of well-documented events; quotes are
  the documented ones used on the current site plus *Annihilation of Caste* (1936).
  **Have a historian / community reviewer read the six stories and FAQ before
  public launch**, and expand the Hindi/Marathi localisation from the hero/talk
  chrome to stories and timeline.
- The disclaimer ("independent AI interpretation… no affiliation with any
  organisation, family, trust, party or government body") is carried over verbatim
  in spirit from the live site — keep it.
