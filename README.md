# Tactile Constellation — Web Companion

A whimsical, child-friendly web companion for the Tactile Constellation physical kit.

## What's inside

```
tactile-constellation-web/
├── index.html              # Landing page (hero, how-it-works, books)
├── prince.html             # The Little Prince book page
├── alice.html              # Alice in Wonderland book page
├── charlotte.html          # Charlotte's Web book page
├── character.html          # Dynamic character detail page
├── style.css               # All styling
├── script.js               # Interactions + audio playback + SVG shapes
├── characters-data.js      # All characters' data (3 books)
└── audio/                  # Folder for future MP3 voiceovers
    ├── prince/
    ├── alice/
    └── charlotte/
```

## Features

- **3 books**: The Little Prince (11 chars), Alice in Wonderland (10 chars), Charlotte's Web (8 chars)
- **One physical piece per character**: every character uses a unique shape + size combination, so each printed token maps to exactly one character
- **Step-by-step assembly guides** for each book — child reads and builds along
- **Character detail pages** with shape, size, board position, famous quote, and relations
- **Audio quote playback** — uses browser Speech Synthesis as fallback, ready for MP3 upgrades
- **Interactive board visualization** — SVG showing where characters go on the 400×280mm board
- **Mobile-friendly responsive design**

## Note on character counts

Each character is represented by a unique combination of shape (star, triangle, circle,
square, pentagon, diamond, heart, arrow) and size (Large 44mm / Medium 32mm / Small 24mm).
Because only one physical piece of each shape+size combination is printed, characters that
would have shared an identical piece were removed, keeping the most frequently mentioned one:

- **The Little Prince** — removed the Merchant, Drunkard, and Switchman
- **Alice in Wonderland** — removed the Caterpillar and the Duchess
- **Charlotte's Web** — removed Lurvy and the Gander

## Audio system

The site plays a real recording when one exists, and otherwise reads the
quote aloud with the browser's built-in voice. There is no toggle to flip.

To add a real recording for a character, upload an MP3 to the repository's
**root folder** (next to index.html), named:

```
[book]-[characterKey].mp3
```

Examples:

- `prince-king.mp3`   → The King (The Little Prince)
- `prince-fox.mp3`    → The Fox
- `alice-madHatter.mp3` → The Mad Hatter
- `charlotte-wilbur.mp3` → Wilbur

The moment the file exists in the repo, that character's "Listen" button uses
the recording. Characters without an MP3 keep using the browser voice. You can
add them one at a time, in any order.

See `AUDIO-FILENAMES.txt` for the complete list of every expected filename.

## Design system

- **Fonts**: Fraunces (display, with WONK + SOFT variable settings) + Nunito (body)
- **Palette**: Cream paper (#FAF6EB), deep ink (#1A2138), berry (#B84668), gold (#E8B130)
- **Style**: Warm, hand-drawn, magazine-meets-children's-book aesthetic
- **Animations**: Gentle (twinkling stars, slow rotations, floating shapes)

## Deploy to GitHub Pages — Step by step

### 1. Create a GitHub account

If you don't have one yet: go to [github.com](https://github.com) and sign up.

### 2. Create a new repository

- Click the **+** icon in the top-right corner → **New repository**
- Name it something like `tactile-constellation`
- Make it **Public** (required for free GitHub Pages)
- Don't initialize with README (we already have files)
- Click **Create repository**

### 3. Upload these files

The easiest way: drag-and-drop in the browser.

- On your new repo page, click **"uploading an existing file"** link
- Select **all files** from the `tactile-constellation-web` folder (drag the contents, NOT the folder itself)
- Wait for upload to finish
- Scroll down, write a commit message like "Initial upload", and click **Commit changes**

### 4. Enable GitHub Pages

- In your repo, click the **Settings** tab (top right)
- In the left sidebar, click **Pages**
- Under "Source", select **Deploy from a branch**
- Branch: **main** (or **master**), folder: **/ (root)**
- Click **Save**

### 5. Wait 1-2 minutes, then visit your site

- GitHub will show you a URL like: `https://YOUR-USERNAME.github.io/tactile-constellation/`
- Visit that URL — your site is live!

### 6. Generate the QR code

Now that you have a live URL, generate a QR code for the acrylic board.

**Option A: Direct URL** (easier, but URL is long)
1. Go to a QR generator like [cli.im](https://cli.im) (草料二维码) or [qrcode-monkey.com](https://www.qrcode-monkey.com/)
2. Paste your GitHub Pages URL
3. Download as SVG (best for laser engraving)
4. Replace the placeholder QR code in your laser engraving SVG file

**Option B: Short URL** (recommended — you can change destination later without re-engraving!)
1. Create a short link (Bitly, or cli.im's own short-link feature)
2. Generate the QR code from the short URL
3. **Important**: If you ever change your website URL, just update the short link's destination. The QR code on the acrylic stays valid forever!

### Updating the site

To make changes to your live site:

- Go to your GitHub repo
- Click any file → pencil icon (edit) → make changes → commit
- Or: upload new versions of files
- Changes go live in ~1 minute

## Browser support

- Chrome, Safari, Edge, Firefox (all recent versions)
- iOS Safari + Android Chrome (mobile)
- Speech synthesis works best in Chrome on desktop and Safari on iOS

## License

Made for a senior design project. Free to remix and improve.

---

*Tactile Constellation · A character network you can hold*
