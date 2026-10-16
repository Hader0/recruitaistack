import rawTools from '../data/tools.json';
const tools = [...rawTools].sort((a, b) => (b.affiliate?.found ? 1 : 0) - (a.affiliate?.found ? 1 : 0));
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (p) => BASE + p;
export const SITE = { name: 'RecruitAIStack', url: (import.meta.env.SITE || '').replace(/\/$/, '') + BASE, tagline: 'The directory of AI tools for recruiters' };
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
