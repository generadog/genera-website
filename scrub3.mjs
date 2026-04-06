import fs from 'fs';

let content = fs.readFileSync('src/App.svelte', 'utf8');

const regexes = [
  [/Genera Flow/g, 'Genera'],
  [/\bFlow makes\b/g, 'Genera makes'],
  [/"Flow"/g, '"Genera"'],
  [/Flow\b/g, 'Genera']
];

for (const [regex, replacement] of regexes) {
    let lines = content.split('\\n');
    for (let i = 0; i < lines.length; i++) {
        // Do not touch URLs to Wisprflow APIs and packages 
        if (!lines[i].includes('website-files.com') && !lines[i].includes('wisprflow.ai') && !lines[i].includes('wispr.ai') && !lines[i].includes('lottie') && !lines[i].includes('class=')) {
            lines[i] = lines[i].replace(regex, replacement);
        }
    }
    content = lines.join('\\n');
}

fs.writeFileSync('src/App.svelte', content);
console.log("Cleaned up remaining text");

let idx = fs.readFileSync('index.html', 'utf8');
for (const [regex, replacement] of regexes) {
    let lines = idx.split('\\n');
    for (let i = 0; i < lines.length; i++) {
        if (!lines[i].includes('website-files.com') && !lines[i].includes('wisprflow.ai') && !lines[i].includes('wispr.ai') && !lines[i].includes('lottie') && !lines[i].includes('class=')) {
            lines[i] = lines[i].replace(regex, replacement);
        }
    }
    idx = lines.join('\\n');
}
fs.writeFileSync('index.html', idx);
