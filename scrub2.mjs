import fs from 'fs';

let content = fs.readFileSync('src/App.svelte', 'utf8');

const regexes = [
  // Wispr Flow
  [/Wispr Flow/g, 'Genera'],
  [/Wispr/g, 'Genera'],
  
  // Specific occurrences of Flow that are text
  [/>Flow</g, '>Genera<'],
  [/\bFlow makes\b/g, 'Genera makes'],
  [/\bFlow is\b/g, 'Genera is'],
  [/\bFlow for\b/g, 'Genera for'],
  [/\bFlow status\b/g, 'Genera status'],
  [/\bFlow Logo\b/g, 'Genera Logo'],
  [/\bTry Flow\b/g, 'Try Genera'],
  [/Flow\./g, 'Genera.'],
  [/>Flow\b/g, '>Genera'],
  [/\bFlow</g, 'Genera<'],
  [/\bFlow\s/g, 'Genera '],
  [/\sFlow\b/g, ' Genera'],
  [/"Flow"/g, '"Genera"'],
  
  // Clean up remaining voice/dictation terms missed in attributes
  [/voice dictation/gi, 'daycare management'],
  [/voice-to-text/gi, 'pet business software'],
  [/speech into clear, polished writing/gi, 'chaos into clear schedules'],
  [/tracking quick and clear/gi, 'bookings quick and clear'],
  [/struggle with your management/gi, 'manage your daycare'],
  
  // URLs cleanup (optional, but good to scrub visible text)
  [/>WisprFlow</g, '>Genera<']
];

for (const [regex, replacement] of regexes) {
    // Avoid replacing in URLs like cdn.prod.website-files.com
    // but honestly we can just do a naive replace first and if any URL breaks, it's a lottie file that will just not load.
    if (regex.toString().includes('Flow')) {
        let lines = content.split('\\n');
        for (let i = 0; i < lines.length; i++) {
            if (!lines[i].includes('website-files.com') && !lines[i].includes('lottie')) {
                lines[i] = lines[i].replace(regex, replacement);
            }
        }
        content = lines.join('\\n');
    } else {
        content = content.replace(regex, replacement);
    }
}

// Ensure the logo text is changed if missed
content = content.replace(/<span class="nav-logo-name">[^<]+<\/span>/g, '<span class="nav-logo-name">GENERA</span>');
content = content.replace(/<span class="nav-logo-tag">[^<]+<\/span>/g, '<span class="nav-logo-tag">A Better Breed of Software</span>');

fs.writeFileSync('src/App.svelte', content);
console.log("App.svelte deeply scrubbed of Wispr and Flow.");

let idx = fs.readFileSync('index.html', 'utf8');
for (const [regex, replacement] of regexes) {
    if (regex.toString().includes('Flow')) {
        let lines = idx.split('\\n');
        for (let i = 0; i < lines.length; i++) {
            if (!lines[i].includes('website-files.com') && !lines[i].includes('lottie')) {
                lines[i] = lines[i].replace(regex, replacement);
            }
        }
        idx = lines.join('\\n');
    } else {
        idx = idx.replace(regex, replacement);
    }
}
fs.writeFileSync('index.html', idx);
console.log("index.html deeply scrubbed.");
