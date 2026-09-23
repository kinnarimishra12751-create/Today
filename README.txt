Kinnari Mishra — Academic Portfolio
=====================================

FOLDER STRUCTURE
----------------
Website/
├── index.html                  Main page
├── css/style.css                All page styling
├── js/script.js                 Theme toggle, mobile nav, scroll-reveal animations
├── images/kinnari-mishra.jpg    Portrait (used in hero + gallery)
├── assets/Kinnari_Mishra_CV.pdf CV served by the "Download CV" button
└── README.txt                   This file

RUNNING LOCALLY
---------------
Just double-click index.html, or serve the folder with any static server
(e.g. `python3 -m http.server` from inside Website/) and open it in a browser.
All paths are relative, so it works the same either way.

DEPLOYING TO GITHUB PAGES
--------------------------
1. Create a new GitHub repository and push the contents of this Website/
   folder to it (index.html must sit at the repo root, or in /docs if you
   prefer that Pages source option).
2. In the repo Settings → Pages, set the source branch (and /docs folder
   if used).
3. GitHub Pages will serve index.html directly — no build step, no
   changes needed. All CSS/JS/image/asset references are relative paths
   within this folder, so nothing breaks after upload.

EXTERNAL RESOURCES (require an internet connection to load)
-------------------------------------------------------------
These could not be bundled locally because they are served from third-party
CDNs/services. They are referenced by URL and will keep working once the
site is live, but won't render if opened fully offline:

1. Google Fonts — "Fraunces" and "Inter" typefaces
   https://fonts.googleapis.com/css2?family=Fraunces...&family=Inter...

2. Google Maps embed (Parul University location pin)
   https://www.google.com/maps?q=Parul+University,Vadodara,Gujarat&output=embed

3. LinkedIn profile link (external site, opens in a new tab)
   https://www.linkedin.com/in/kinnari-mishra-a211391a4

Everything else — all layout, color, animation, icons (inline SVG),
the photo, and the CV — is fully self-contained in this folder.

CUSTOMIZING
-----------
- Swap images/kinnari-mishra.jpg for a different photo (keep the same
  filename, or update the two <img src="..."> references in index.html).
- Replace assets/Kinnari_Mishra_CV.pdf with an updated CV (same filename,
  or update the href in the "Download CV" button).
- Placeholder cards for Awards, Patents, Gallery photos, and Testimonials
  are marked in index.html with the word "Placeholder" or a dashed border
  — search for "Placeholder" to find and edit them.
