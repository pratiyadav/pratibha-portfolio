# Pratibha Yadav — Portfolio

A polished, responsive, no-build personal portfolio for software development and backend engineering opportunities. Prepared from the five project archives and two resumes supplied by Pratibha Yadav.

## Preview locally (Windows)

1. Unzip the package.
2. Open `site/index.html` in Chrome or Edge. No installation or npm command is needed.
3. All layout, interactions, dark/light toggle, and project detail dialogs work offline. Google Fonts are optional; the site falls back to local fonts when offline. External social, demo and email links require internet or an email app.

Optional local server, from the directory containing `site`:

```powershell
cd site
python -m http.server 8000
```

Browse to http://localhost:8000. Stop with Ctrl+C.

## Deploy for free

### Easiest: Netlify Drop

1. Open https://app.netlify.com/drop and log in.
2. Drag the **`site` folder** (not the outer ZIP) onto the drop area.
3. Netlify gives you a public `*.netlify.app` address. You can rename the site from its settings.
4. Open the URL and verify the resume, contact links, project popups, and mobile layout.

### Vercel (Git-connected)

1. Create a new repository in your GitHub account.
2. Upload the **contents of this ZIP** to its root, keeping `vercel.json` and `site/` where they are.
3. Go to https://vercel.com/new, connect GitHub, and import the repository.
4. Framework preset: **Other**. The included `vercel.json` sets output directory to `site`; there are no build dependencies.
5. Click **Deploy**. Vercel will provide your public portfolio URL and future pushes will redeploy it.

If the host prompts you for commands manually, use no install or build command, and use `site` as the publish/output directory.

**The portfolio has been built and checked locally, not published to a live account by ChatGPT.** Publishing needs your own Vercel/Netlify login.

## Customize

| Need to change | File / location |
|---|---|
| Name, headline, intro, skills, experience, education, achievement | `site/index.html` |
| Project case studies, repository URLs and demos | `site/app.js` → `projects` |
| Colors, layout, spacing and type | `site/styles.css` → `:root` and `[data-theme='light']` |
| Résumé download | Replace `site/assets/Pratibha-Yadav-Resume.pdf` (same filename) |
| Add a real profile photo | Place a JPG image named exactly **`profile.jpg`** in `site/assets/` — no code changes needed |
| Professional contact links | `site/index.html` and `site/app.js` |
| Website title, SEO and preview | `site/index.html` and `site/assets/og-cover.svg` |

### Add your profile photo (Windows / no coding)

1. Find a professional, front-facing photo of yourself. A square JPG (roughly 600 × 600 pixels or larger) works well.
2. Rename the image exactly `profile.jpg` (not `profile.jpg.jpg`, `Profile.JPG`, or `profile.png`). In Windows File Explorer, enable **View → Show → File name extensions** to confirm.
3. Open the extracted package → `site` → `assets`. Copy `profile.jpg` into this folder, alongside the two PDFs and favicon.
4. Double-click `site/index.html` and refresh the page (Ctrl+Shift+R). The circular desktop portrait and mobile avatar will automatically use your photo. If the photo is missing, the **PY** monogram remains.
5. To publish the change, redeploy the updated `site` folder to your hosting provider or commit and push the photo in your GitHub website repository.

If you use the standalone **single HTML preview** instead of the full website folder, upload your photo into this chat and ask for a new preview with the photo embedded. Adding `profile.jpg` beside the standalone preview will **not** update that file; use `site/index.html` for the easy drag-and-drop method above.

The portfolio's five projects are in the **Selected projects** section. Click **Projects** in the top navigation, **Explore my work** on the first screen, or scroll below the introduction. Click a project card to see its case study.

## Content and verification notes

- Five uploaded projects are featured. Some are team/shared repositories; the site labels these links **Shared project repository** to avoid implying exclusive ownership.
- The project details are grounded in the supplied READMEs/source files; professional experience, education, certificates and 300+ LeetCode achievement come from the supplied resumes.
- The only project-specific demo URL found was SpendWise AI (`https://spendwise-ai-roan.vercel.app`). It appears in the uploaded project README and public repository. Its live availability could not be independently confirmed; please check before sending the portfolio to recruiters.
- No personal photo was uploaded, so the hero currently uses a designed **PY** monogram rather than inventing a person's image.
- No specific GitHub links were supplied for the Disaster Response or IT Helpdesk projects; those modal dialogs provide an email contact instead. Add verified URLs in `app.js` when you publish their repositories.
- Some uploaded original projects contained populated `.env` files. These original files were not copied into this package. Before publishing those repositories, **check for exposed credentials, remove committed secrets from Git history and rotate/revoke exposed keys as appropriate**.
- The CSS-built project visuals are **illustrations/mockups** of features, not screenshots of the running projects.
- The site is static and collects no contact form data; clicking the email link opens the visitor's email app.

## Structure

```
pratibha-portfolio/
├── README.md
├── vercel.json
├── .gitignore
└── site/
    ├── index.html
    ├── styles.css
    ├── app.js
    ├── robots.txt
    ├── site.webmanifest
    └── assets/
        ├── favicon.svg
        ├── og-cover.svg
        ├── Pratibha-Yadav-Resume.pdf
        └── Pratibha-Yadav-AI-Resume.pdf
```

### Built-in interactions

- Dark/light theme, saved in browser local storage
- Responsive mobile navigation
- Project category filtering
- Expandable case-study dialogs with keyboard and Escape support
- Copy-to-clipboard email contact
- Smooth in-page links, reveal animations, and scrolling progress bar
- Respects reduced-motion accessibility preferences

No API keys, backend server, external database, or Node package installation required.


## November 2026 update — Credit Risk & Loan Default Prediction

A sixth project was added to the **AI & Data** filter, with a working case study, direct GitHub source link, real evaluation plots, and sourced test metrics from the supplied project archive.

- Source: https://github.com/pratiyadav/Credit_Risk_Loan_Default_Prediction
- Validation picked XGBoost by average precision; held-out test ROC-AUC **0.873**, average precision **0.404**.
- The selected F2 threshold improved recall but increased false positives. These are *educational results*, not a system approved for lending decisions.
- Its supplied `results/test_diagnostics.png` is copied to `site/assets/credit-risk-evaluation.png` for the project case study.
- All **six** projects are visible under **All projects**, with the new project appearing under **AI & Data**.

### Profile photo: JPG or JPEG both supported

Copy your real photo to `site/assets/profile.jpg` **or** `site/assets/profile.jpeg` before deployment. You do not need to rename the actual image format. (Windows users: View → Show → File name extensions.) Both desktop and mobile portraits will use your image. The downloadable packages do not contain a personal photo because no photograph was uploaded to this conversation.

### Updating your existing Netlify URL

Extract the **Website ZIP**, add your photo to `assets/` if desired, then re-deploy the folder containing `index.html` to the same Netlify site's **Deploys** screen. Do not upload the original credit risk project ZIP or its model pickle files; only the portfolio website files belong on the public host.
