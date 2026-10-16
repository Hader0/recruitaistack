import rawTools from '../data/tools.json';
// Editorial order: completeness of verified info (no commercial weighting).
export const score = (t) => (t.pricing !== 'Contact for pricing' ? 2 : 0) + (!t.bestFor.startsWith('Teams looking for AI') ? 2 : 0) + Math.min(t.features.length, 3) / 3 + (t.description.length > 60 ? 1 : 0);
const tools = [...rawTools].sort((a, b) => score(b) - score(a) || a.name.localeCompare(b.name));
// Category order: tools whose main category matches first, then by completeness.
export const inCategory = (slug) => tools.filter((t) => t.categories.includes(slug)).sort((a, b) => (b.categories[0] === slug) - (a.categories[0] === slug) || score(b) - score(a));
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (p) => BASE + p;
export const SITE = { name: 'RecruitPicks', url: (import.meta.env.SITE || '').replace(/\/$/, '') + BASE, tagline: 'The directory of AI tools for recruiters' };
export const categories = [
  { slug: 'sourcing', name: 'Sourcing', task: 'candidate sourcing', blurb: 'Find passive candidates across hundreds of millions of profiles.' },
  { slug: 'screening', name: 'Screening', task: 'candidate screening', blurb: 'Screen applicants with AI, video and interview intelligence.' },
  { slug: 'interview-scheduling', name: 'Interview Scheduling', task: 'interview scheduling', blurb: 'Automate the back-and-forth of booking interviews.' },
  { slug: 'crm-ats', name: 'CRM / ATS', task: 'applicant tracking and recruiting CRM', blurb: 'Applicant tracking systems and recruiting CRMs with AI built in.' },
  { slug: 'outreach', name: 'Outreach', task: 'candidate outreach', blurb: 'Automated, personalised sequences to candidates and clients.' },
  { slug: 'assessments', name: 'Assessments', task: 'skills assessments', blurb: 'Skills and coding tests to hire on evidence.' },
  { slug: 'job-descriptions', name: 'Job Description Writing', task: 'writing job descriptions', blurb: 'Write better, more inclusive job ads.' },
  { slug: 'analytics', name: 'Analytics', task: 'recruiting analytics', blurb: 'Talent intelligence, labour-market data and hiring analytics.' },
];
export const catName = (s) => categories.find((c) => c.slug === s)?.name ?? s;
export const pairs = [
  ['hireez','seekout'],['juicebox','seekout'],['juicebox','pin'],['fetcher','hireez'],['greenhouse','lever'],['ashby','greenhouse'],
  ['recruitcrm','loxo'],['bullhorn','recruitcrm'],['manatal','recruitcrm'],['workable','breezyhr'],['testgorilla','vervoe'],
  ['hackerrank','codility'],['codesignal','hackerrank'],['goodtime','modernloop'],['willo','spark-hire'],['brighthire','metaview'],
  ['lemlist','sourcewhale'],['textio','datapeople'],['eightfold','beamery'],['paradox','humanly'],
];
export { tools };
export const bySlug = (s) => tools.find((t) => t.slug === s);
export const logo = (t, sz = 64) => `https://www.google.com/s2/favicons?domain=${new URL(t.url).hostname}&sz=${sz}`;
export const CHECKED = 'October 2026';
