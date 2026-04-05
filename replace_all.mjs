import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('wispr.html', 'utf8');

const replacements = [
  ['Wispr Flow', 'Genera'],
  ['Wispr', 'Genera'],
  ['Flow', 'Genera'],
  
  ["The voice-to-text AI that turns speech into clear, polished writing in every app.", "The software that actually understands your daycare."],
  ["Don’t type, just speak", "Built by a daycare, for daycares"],
  ["Write faster in all your apps, on any device", "Everything you need. Nothing you don't."],
  ["Seamless speech-to-text in every application on your phone or computer.", "Built by the people behind Duncan's Dog Co — 15 years in the industry, finally turning that experience into software that makes your business run the way it should."],
  ["4x faster than typing", "Running a daycare is harder than it looks."],
  ["Used by professionals everywhere to speed up their thoughts", "You got into this for the dogs — not the admin. Genera handles the rest."],
  ["Flow is made for you", "Genera is built for your pet business"],
  ["Flow for Accessibility", "Dog Daycares"],
  ["Flow for Creators", "Dog Walkers"],
  ["Flow for Customer Support", "Boarding Kennels"],
  ["Flow for Developers", "Pet Groomers"],
  ["Flow for Lawyers", "Pet Sitters"],
  ["Flow for Leaders", "Training Centers"],
  ["Flow for Sales", "Grooming Salons"],
  ["Flow for Students", "Veterinarians"],
  ["Flow for Teams", "Multi-Location"],
  
  ["AI Auto Edits", "Bookings from every direction"],
  ["Personal dictionary", "Every pet. Every detail. One place."],
  ["Flow automatically learns your unique words and adds them to your personal dictionary.", "Full client and pet profiles — feeding notes, vet contacts, vaccination records — accessible in seconds by anyone on your team."],
  ["Snippet library", "Bookings that run themselves"],
  ["Different tones for each app", "Get paid without chasing anyone"],
  ["Flow automatically adjusts tone based on the app you’re using. Sound like you—not a robot.", "Auto-charge on collection, bulk invoicing, direct debit and card payments. Your money arrives on time, every time."],
  ["100+ languages", "Routes planned in minutes"],
  ["100+ Languages", "Routes planned in minutes"],
  ["On-the-go or at your desk", "Your team, sorted"],
  ["Love letters to Flow", "A dashboard built for busy people."],
  ["The \"surprisingly fast\" advisor.", "Routes planned in minutes, not hours."],
  ["Before Flow, writing was a battle. Now, it’s a conversation.", "Drag-and-drop transport scheduling with optimised routes for your drivers. No more scrambling on collection day."],
  ["Start flowing", "Let us handle the rest"],
  ["Effortless voice dictation in every application: 4x faster than typing, AI commands and auto-edits.", "Start your 3-month free trial today. No credit card required. No commitment. Just the tools you need to run your business properly."],
  ["Still not sure that Wispr Flow is right for you?", "Still not sure that Genera is right for you?"],
  ["Available on Mac, Windows, iPhone, and Android", "Available on Mac, Windows, iOS, and Android"],
  ["Download for free", "Start Free Trial"],
  ["Try Flow", "Book a Demo"],
  ["Let ChatGPT, Claude, or Perplexity do the thinking for you", "Ask AI why Genera is the best choice"],
  ["Click a button and see what your favorite AI says about Wispr Flow.", ""],
  
  // Specific blocks handling
  ["Your voice deserves a shortcut. Flow supports anyone who feels slowed down by a keyboard by turning speech into structured, polished text—quietly, reliably, naturally.", "Texts, emails, DMs, calls — all landing in different places. You spend more time managing messages than caring for dogs."],
  ["Ideas hit fast, but execution is slow. Breeze through unread DMs, comment replies, and draft content with your voice. Create more, type less.", "Sunday evenings lost to invoicing. Manually building invoices for every client, every week. Chasing payments."],
  ["Speak naturally to resolve tickets faster. Skip the script. Flow helps reps speak naturally while still sending perfect replies—across tickets, chats, and DMs.", "Pickup logistics that break your brain. Juggling driver routes, pickup windows and last-minute changes with no real system. Just a spreadsheet and a prayer."],
  ["Dictate in natural language and let Flow translate—perfect for Cursor, VS Code, or wherever you build. From commit messages to refactors, stay in the zone with Flow.", "Full client and pet profiles — feeding notes, vet contacts, vaccination records — accessible in seconds by anyone on your team."],
  ["Legal precision demands perfect transcription. Flow delivers smart dictation for contracts, case notes, and client records—with formatting that catches every clause, not typos.", "24/7 online booking portal for your clients. No more inbound messages — just a clean calendar that fills itself."],
  ["Who doesn’t want faster teams and happier people? Flow delivers instant productivity your team will actually use.", "Auto-charge on collection, bulk invoicing, direct debit and card payments. Your money arrives on time, every time."],
  ["Slow follow ups mean lost deals. With Flow, you can follow up instantly after meetings, personalize outreach, and punch up your pitch—without typing a word.", "Drag-and-drop transport scheduling with optimised routes for your drivers. No more scrambling on collection day."],
  ["Blank pages and looming deadlines? Flow’s got you. Capture class notes, draft cover letters, and break through writer’s block with minimal effort.", "Staff schedules, shift planning and payroll prep — all in one system. Know who's in, who's driving, and what everyone's owed."],
  ["Fewer meetings, faster alignment, and a voice for everyone when it matters most. Teams also get centralized admin controls and special pricing.", "UK-based support from people who've run a daycare. GDPR & DEFRA compliant, cloud-based and always up to date."],
  ["Speak naturally and Flow transcribes and edits your voice, instantly. Rambled thoughts become clear, perfectly formatted text, without the filler words or typos.", "Everything you need. Nothing you don't. Designed to remove the friction of running a daycare."],
  ["Flow is the only voice-to-text tool that works on any app or device, with your personal dictionary, style, and settings synced everywhere.", "Genera handles everything from onboarding, feeding schedules, bookings, and payment in a single portal syncing everywhere."],

  ["Effortless Voice Dictation", "Dog Daycare Management Software"],
  ["Flow makes writing quick and clear with seamless voice dictation. It is the fastest, smartest way to type with your voice.", "Genera handles bookings, payments, and pet records so you can get back to what matters most: the dogs."],

  // Menu items 
  ["Use cases", "Benefits"],
  ["Developers", "Updates"],
  ["Research", "Features"],
  ["Features", "Tour"],
  ["Pricing", "Plans"]
];

const $ = cheerio.load(html);

function replaceTextInNode(node) {
  if (node.type === 'text') {
    let newText = node.data;
    if (newText.trim().length > 0) {
      for (const [matchStr, replaceStr] of replacements) {
        if (matchStr === 'Flow' || matchStr === 'Wispr') {
             newText = newText.replace(new RegExp('\\\\b' + matchStr + '\\\\b', 'gi'), replaceStr);
        } else {
             newText = newText.split(matchStr).join(replaceStr);
        }
      }
      newText = newText.replace(/Flow/gi, 'Genera').replace(/Wispr/gi, 'Genera');
      node.data = newText;
    }
  } else if (node.type === 'tag' && node.name !== 'script' && node.name !== 'style') {
    $(node).contents().each((i, childNode) => replaceTextInNode(childNode));
  }
}

$('body').contents().each((i, node) => replaceTextInNode(node));

// Update images: replace everything except the logo with placeholders,
// and set the logo to Genera's logo.
$('img').each((i, el) => {
  const $img = $(el);
  const w = $img.attr('width') || "800";
  const h = $img.attr('height') || "600";
  
  const src = $img.attr('src') || "";
  
  // If it looks like a logo, replace with Genera logo
  if (src.includes('logo') || src.includes('ws-favi') || src.includes('flow-wc-v2')) {
      $img.attr('src', 'https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/genera-paw-fixed_92730de9.png');
      $img.removeAttr('srcset');
      $img.removeAttr('sizes');
  } else if (!src.includes('favicon') && !src.includes('icon')) {
      $img.attr('src', `https://placehold.co/${w}x${h}/222/FFF?text=Genera+App`);
      $img.removeAttr('srcset');
      $img.removeAttr('sizes');
  }
});

$('video, iframe').each((i, el) => {
  const $vid = $(el);
  $vid.replaceWith(`<img src="https://placehold.co/800x600/222/FFF?text=Genera+Demo" width="100%" class="${$vid.attr('class') || ''}">`);
});

const htmlTagAttrs = $('html').attr();
const bodyTagAttrs = $('body').attr();

const bodyHtmlRaw = $('body').html()?.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
const escapedBodyHtml = bodyHtmlRaw.replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/<\/script>/gi, '<\\/script>');
const escapedHeadHtml = $('head').html()?.replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/<\/script>/gi, '<\\/script>');

let svelteCode = `<script>
  import { onMount } from 'svelte';
</script>

<svelte:head>
  {@html \`${escapedHeadHtml}\`}
</svelte:head>

{@html \`${escapedBodyHtml}\`}
`;

fs.writeFileSync('src/App.svelte', svelteCode);

let indexHtmlBase = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/genera-paw-fixed_92730de9.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Genera — Dog Daycare Management Software</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
    
${$('body').find('script').map((i, el) => $.html(el)).get().join('\n')}
  </body>
</html>`;

indexHtmlBase = indexHtmlBase
  .replace('<html lang="en">', `<html lang="en" data-wf-domain="wisprflow.ai" data-wf-page="683210d52506361959ff8fc2" data-wf-site="682f84b3838c89f8ff7667db">`)
  .replace('<body>', `<body class="${bodyTagAttrs.class || ''}">`);

fs.writeFileSync('index.html', indexHtmlBase);

console.log("Updated fully aligned copy with Genera and Genera logo.");
