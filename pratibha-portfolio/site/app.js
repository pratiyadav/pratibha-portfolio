/* Portfolio interaction layer. All project details below are based on the supplied archives and resumes. */
'use strict';
const EMAIL = 'pratiyadav27@gmail.com';
const projects = {
  keyvalue: {
    index:'01 / BACKEND & DISTRIBUTED SYSTEMS',
    title:'Distributed Key-Value Storage System',
    summary:'A C-based distributed storage simulation built to explore how systems distribute data, survive node failures, and retrieve values efficiently.',
    challenge:'How can a key-value service keep data available while nodes join, leave, or fail, without needing to remap every key?',
    approach:[
      'Used consistent hashing to place keys on a logical ring and reduce key movement as nodes change.',
      'Combined a Trie, HashMap, and linked-list structures for indexed storage and fast average-case lookups.',
      'Added file-backed persistence with basic symmetric encryption for stored values.',
      'Implemented primary–replica replication and automatic read failover in a distributed-system simulation.'
    ],
    result:'A working educational prototype demonstrating consistent hashing, hybrid indexing, replication and fault-tolerant reads. This is a simulation, not a production multi-machine datastore.',
    tech:['C','Consistent hashing','Replication','Trie / HashMap','File I/O'],
    repository:'https://github.com/ridzRUSH/Distributed-Key-Value-Storage-System-Using-Consistent-Hashing-and-Replication',
    repoLabel:'Shared project repository ↗'
  },
  helpdesk: {
    index:'02 / AI & BACKEND SYSTEMS',
    title:'Multi-Tenant IT Helpdesk Assistant',
    summary:'An organization-aware RAG service that answers employee questions from their own policy documents, includes source citations, and can create support tickets.',
    challenge:'Help people find trustworthy answers in internal policy documents while preventing one organization from accessing another organization’s data.',
    approach:[
      'Created a FastAPI service with JWT-based organization scoping and admin/employee role separation.',
      'Built document ingestion for PDF and Markdown policies and hybrid retrieval with pgvector, Postgres full-text search, and reciprocal rank fusion.',
      'Implemented streamed answers with source-chunk citations, a validated create_ticket tool, and a safe fallback when documents lack an answer.',
      'Added retrieval evaluation scripts, request logs, and a cross-tenant isolation test.'
    ],
    result:'A backend-first RAG prototype, runnable with Docker Compose. Its repository notes that a dedicated frontend and public deployment are not built yet.',
    tech:['Python','FastAPI','PostgreSQL / pgvector','RAG','Gemini API','Docker'],
    repository:null,
    repoLabel:null
  },
  creditrisk: {
    index:'03 / MACHINE LEARNING & CREDIT RISK',
    title:'Credit Risk & Loan Default Prediction',
    summary:'A reproducible Python machine-learning experiment predicting serious delinquency within two years, with transparent model comparisons, validation-based threshold selection and held-out evaluation.',
    challenge:'How do you evaluate an imbalanced credit-risk classification task without letting a high accuracy score hide the cases a model misses?',
    approach:[
      'Built reproducible data validation and model-training modules using 150,000 records from the Give Me Some Credit dataset.',
      'Constructed preprocessing pipelines with median imputation and missingness indicators, and isolated duplicate feature rows between splits.',
      'Compared Logistic Regression, Random Forest, XGBoost and an equal-weight soft-voting ensemble using validation average precision.',
      'Selected XGBoost, tuned an F2-based decision threshold on validation data, evaluated once on a held-out test set, and added JSON/CSV predictions and automated tests.'
    ],
    result:'Selected XGBoost achieved test ROC-AUC 0.873 and average precision 0.404. Recall increased from 20.5% at threshold 0.5 to 67.1% at the validation-selected threshold 0.104, with precision falling to 29.5%. This is an educational experiment, not an approved lending decision system.',
    tech:['Python','scikit-learn','XGBoost','Pandas','Model Evaluation','Pytest'],
    repository:'https://github.com/pratiyadav/Credit_Risk_Loan_Default_Prediction',
    repoLabel:'View GitHub repository ↗',
    image:'assets/credit-risk-evaluation.png',
    imageAlt:'Held-out test diagnostic plots: ROC curve, precision-recall curve, confusion matrix and score calibration.',
    imageCaption:'Actual diagnostic plots from the uploaded project: held-out test set, selected threshold approximately 0.104.'
  },
  disaster: {
    index:'04 / DECISION SUPPORT & OPTIMIZATION',
    title:'Disaster Response Resource Allocation System',
    summary:'A decision-support dashboard for ambulance allocations in simulated disaster scenarios, comparing a severity-first baseline with an optimized approach.',
    challenge:'How can emergency coordinators compare allocation strategies across affected areas when resources, demand and travel times are constrained?',
    approach:[
      'Developed a React dashboard with an interactive Leaflet map, allocations view, travel matrix, and run-history comparison.',
      'Implemented FastAPI endpoints and PostgreSQL/PostGIS persistence for scenarios, revisions, assignments, and saved runs.',
      'Integrated OSRM routing estimates, with flagged approximations when road data is unavailable.',
      'Compared a severity-first baseline against an OR-Tools-based constrained optimizer; retained results so coordinators can review alternatives.'
    ],
    result:'A Docker Compose prototype with three simulated scenarios and reproducible allocation comparisons. It supports coordinator decisions rather than making real emergency dispatch decisions.',
    tech:['React','TypeScript','FastAPI','PostgreSQL / PostGIS','OR-Tools','Leaflet','Docker'],
    repository:null,
    repoLabel:null
  },
  spendwise: {
    index:'05 / FULL-STACK & APPLIED AI',
    title:'SpendWise AI — Personal Finance Analytics',
    summary:'A full-stack personal finance app with secure accounts, income and expense management, analytics dashboards, and AI-assisted receipt entry.',
    challenge:'Reduce the effort of manually recording expenses while still giving users clear spending insights and control over their records.',
    approach:[
      'Built the React interface and Express backend with MongoDB models, scoped CRUD APIs, and JWT authentication via httpOnly cookies.',
      'Created aggregation-driven charts for trends and category breakdowns, with CSV exports.',
      'Integrated Google Gemini receipt extraction to pre-fill merchant, amount and date fields for user confirmation.',
      'Added password-reset workflows, Cloudinary uploads, and responsive dark/light modes.'
    ],
    result:'The project README documents deployment of its frontend to Vercel and backend to Render. Check the public demo availability before sharing with recruiters.',
    tech:['React','Node.js','Express','MongoDB','Google Gemini API','Recharts'],
    repository:'https://github.com/pratiyadav/expense-tracker',
    repoLabel:'View source code ↗',
    demo:'https://spendwise-ai-roan.vercel.app'
  },
  campus: {
    index:'06 / FULL-STACK APPLICATION',
    title:'CampusHub — School Management Platform',
    summary:'A role-based school management application with separate user experiences for administrators, teachers and students.',
    challenge:'Bring course management, faculty onboarding, enrollment and learning workflows into one role-aware platform.',
    approach:[
      'Developed a React/Vite frontend and an Express REST API backed by MongoDB.',
      'Implemented JWT authentication and role-based access controls for administrative and learner workflows.',
      'Added course management, faculty listings, media uploads through Cloudinary, and indexed lookups.',
      'Containerized the stack with Docker Compose and Nginx for a consistent local setup.'
    ],
    result:'A Dockerized full-stack school platform. The uploaded source README describes a shared repository; individual team contributions should be confirmed before public release.',
    tech:['React','Node.js','Express','MongoDB','JWT / RBAC','Docker'],
    repository:'https://github.com/garvagrawal9084/School-Expertise',
    repoLabel:'Shared project repository ↗'
  }
};

const $$ = selector => Array.from(document.querySelectorAll(selector));
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
function syncThemeLabel() {
  const light = root.getAttribute('data-theme') === 'light';
  themeToggle?.setAttribute('aria-label', `Switch to ${light ? 'dark' : 'light'} theme`);
  themeToggle?.setAttribute('title', `Switch to ${light ? 'dark' : 'light'} theme`);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#f6f7f2' : '#0a101a');
}
syncThemeLabel();
themeToggle?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('pratibha-portfolio-theme', next); } catch (e) {}
  syncThemeLabel();
});

const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
function closeMenu(){ if(!mobileNav) return; mobileNav.hidden = true; menuToggle?.setAttribute('aria-expanded','false'); menuToggle?.setAttribute('aria-label','Open navigation'); }
menuToggle?.addEventListener('click', () => {
  const opening = mobileNav.hidden;
  mobileNav.hidden = !opening;
  menuToggle.setAttribute('aria-expanded', String(opening));
  menuToggle.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
});
$$('#mobile-nav a').forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => { if (window.innerWidth > 680) closeMenu(); });

const chips = $$('.filter-chip');
const cards = $$('.project-card');
chips.forEach(chip => chip.addEventListener('click', () => {
  const choice = chip.dataset.filter;
  chips.forEach(c => { const active=c===chip; c.classList.toggle('active',active); c.setAttribute('aria-pressed',String(active)); });
  cards.forEach(card => { card.hidden = !(choice === 'all' || card.dataset.categories.split(' ').includes(choice)); });
}));

const dialog = document.getElementById('project-dialog');
const dialogContent = document.getElementById('dialog-content');
const dialogClose = document.getElementById('dialog-close');
const escapeHTML = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
let opener = null;
function openProject(id, element) {
  const p=projects[id]; if(!p || !dialog?.showModal) return;
  opener=element;
  const actions = [];
  if(p.repository) actions.push(`<a href="${escapeHTML(p.repository)}" target="_blank" rel="noopener noreferrer">${escapeHTML(p.repoLabel || 'View project repository ↗')}</a>`);
  if(p.demo) actions.push(`<a class="secondary" href="${escapeHTML(p.demo)}" target="_blank" rel="noopener noreferrer">Open live demo ↗</a>`);
  actions.push(`<a class="secondary" href="mailto:${EMAIL}?subject=${encodeURIComponent('Question about '+p.title)}">Ask me about it ↗</a>`);
  dialogContent.innerHTML=`<span class="dialog-index">${escapeHTML(p.index)}</span><h2 id="dialog-title">${escapeHTML(p.title)}</h2><p class="dialog-subtitle">${escapeHTML(p.summary)}</p><hr class="dialog-divider"><section class="dialog-block"><h3>The challenge</h3><p>${escapeHTML(p.challenge)}</p></section><section class="dialog-block"><h3>What I built</h3><ul>${p.approach.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul></section><section class="dialog-block"><h3>Outcome & scope</h3><p>${escapeHTML(p.result)}</p></section><section class="dialog-block"><h3>Tech stack</h3><div class="dialog-tech">${p.tech.map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div></section>${p.image ? `<section class="dialog-block"><h3>Evaluation plots</h3><figure class="case-figure"><img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.imageAlt || 'Project evaluation chart')}" loading="lazy"><figcaption>${escapeHTML(p.imageCaption || '')}</figcaption></figure></section>` : ''}<div class="dialog-actions">${actions.join('')}</div>`;
  dialog.showModal();
  document.body.classList.add('modal-open');
  dialogClose?.focus();
}
function closeProject(){ if(dialog?.open) dialog.close(); }
cards.forEach(card => {
  card.addEventListener('click', () => openProject(card.dataset.project,card));
  card.addEventListener('keydown', event => {
    if(event.key==='Enter' || event.key===' '){ event.preventDefault(); openProject(card.dataset.project,card); }
  });
});
dialogClose?.addEventListener('click',closeProject);
dialog?.addEventListener('click',e=>{ if(e.target===dialog) closeProject(); });
dialog?.addEventListener('close',()=>{document.body.classList.remove('modal-open'); opener?.focus(); opener=null;});

let toastTimer;
function showToast(message) {
  const toast=document.getElementById('toast'); if(!toast) return;
  clearTimeout(toastTimer); toast.textContent=message; toast.classList.add('show');
  toastTimer=setTimeout(()=>toast.classList.remove('show'),2600);
}
async function copyEmail(){
  let copied=false;
  if(navigator.clipboard?.writeText){try {await navigator.clipboard.writeText(EMAIL);copied=true;} catch(e) {}}
  if(!copied){
    const temp=document.createElement('textarea'); temp.value=EMAIL; temp.style.position='fixed';temp.style.left='-9999px';
    document.body.appendChild(temp);temp.select();try{copied=document.execCommand('copy');}catch(e){}temp.remove();
  }
  showToast(copied?'Email copied to clipboard':'Select the email address above to copy it');
}
document.getElementById('copy-email')?.addEventListener('click',copyEmail);
const year = document.getElementById('year'); if(year) year.textContent=String(new Date().getFullYear());

const progress = document.getElementById('reading-progress');
let rafScheduled=false;
function onScroll(){
  if(rafScheduled) return;rafScheduled=true;
  requestAnimationFrame(()=>{ const max = document.documentElement.scrollHeight-window.innerHeight; if(progress) progress.style.width=(max>0 ? 100*window.scrollY/max : 0)+'%';rafScheduled=false; });
}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const observer=new IntersectionObserver((entries)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:0.08,rootMargin:'0px 0px 25px 0px'});
  $$('.reveal').forEach(el=>{
    // Never hide anything already onscreen or above the current scroll position.
    // This also keeps the page readable if the animation observer cannot run.
    if(el.getBoundingClientRect().top > window.innerHeight-45){el.classList.add('will-reveal');observer.observe(el);}
    else el.classList.add('visible');
  });
} else $$('.reveal').forEach(el=>el.classList.add('visible'));
document.addEventListener('keydown',event=>{if(event.key==='Escape') closeMenu();});
