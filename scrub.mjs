import fs from 'fs';

let content = fs.readFileSync('src/App.svelte', 'utf8');

const replacements = [
  // Titles / Main Catchphrases
  [/Effortless Voice Dictation/gi, 'Effortless Daycare Management'],
  [/The voice-to-text AI that turns speech into clear, polished writing in every app/gi, 'The software that actually understands your daycare'],
  [/voice dictation/gi, 'daycare software'],
  [/voice-to-text/gi, 'daycare software'],
  [/turn speech into/gi, 'turn chaos into'],
  [/speech-to-text/gi, 'admin software'],
  [/turn speech into clear, polished writing/gi, 'turn bookings into clean dashboards'],
  [/turns speech into clear, polished writing/gi, 'turns bookings into clean dashboards'],

  // Words
  [/\bVoice\b/g, 'Software'],
  [/\bvoice\b/g, 'management'],
  [/\bspeech\b/gi, 'bookings'],
  [/\bdictation\b/gi, 'admin'],
  [/\bdictate\b/gi, 'manage'],
  [/\bwriting\b/gi, 'tracking'],
  [/\btyping\b/gi, 'spreadsheets'],
  [/\btype\b/gi, 'struggle'],
  [/\bkeyboard\b/gi, 'paperwork'],

  // Other missed blocks from Wispr
  [/AI Auto Edits/gi, 'Payment Processing'],
  [/Personal dictionary/gi, 'Pet Profiles'],
  [/Snippet library/gi, 'Staff Scheduling'],
  [/100\+ languages/gi, 'Transport Routes'],
  [/Different tones for each app/gi, 'Automated Invoicing'],
  [/On-the-go or at your desk/gi, 'Access anywhere, anytime'],
  
  // Specific weird sentences found in grep
  [/4x faster responses/gi, 'Book in seconds'],
  [/50\+ hours saved/gi, '20+ hours saved every week'],
  [/AI commands and auto-edits/gi, 'auto-billing and reminders'],
  [/Let ChatGPT, Claude, or Perplexity do the thinking for you/gi, 'Ask AI why Genera is the best choice'],
  [/Click a button and see what your favorite AI says about/gi, 'Click a button and see what AI says about']
];

for (const [regex, replacement] of replacements) {
    content = content.replace(regex, replacement);
}

fs.writeFileSync('src/App.svelte', content);
console.log("App.svelte scrubbed of voice/dictation terms.");

// Scrub index.html as well for metadata
let indexContent = fs.readFileSync('index.html', 'utf8');
for (const [regex, replacement] of replacements) {
    indexContent = indexContent.replace(regex, replacement);
}
fs.writeFileSync('index.html', indexContent);
console.log("index.html scrubbed.");
