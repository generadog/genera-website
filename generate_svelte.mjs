import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('wispr_genera.html', 'utf8');
const $ = cheerio.load(html);

const htmlTagAttrs = $('html').attr();
const bodyTagAttrs = $('body').attr();

// Clean out scripts for the body content to avoid script tag issues inside Svelte component
const bodyHtmlRaw = $('body').html()?.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

// We want to escape ` and $ so that we can put this inside a JS template literal in Svelte.
// We also replace </script> with <\/script> so it doesn't break Svelte parser.
// Note: to escape $ we must use /\$/g
const escapedBodyHtml = bodyHtmlRaw.replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/<\/script>/gi, '<\\/script>');
const escapedHeadHtml = $('head').html()?.replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/<\/script>/gi, '<\\/script>');

let svelteCode = `<script>
  import { onMount } from 'svelte';
  
  onMount(() => {
    // Scripts have been moved to index.html for safety and exact functionality
  });
</script>

<svelte:head>
  {@html \`${escapedHeadHtml}\`}
</svelte:head>

{@html \`${escapedBodyHtml}\`}
`;

fs.writeFileSync('src/App.svelte', svelteCode);

let indexHtmlBase = fs.readFileSync('index.html', 'utf8');

const bodyScriptsArray = $('body').find('script').map((i, el) => $.html(el)).get();
const bodyScripts = bodyScriptsArray.join('\\n');

indexHtmlBase = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Genera</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
    
${bodyScripts}
  </body>
</html>`;

const newIndexHtml = indexHtmlBase
  .replace('<html lang="en">', `<html lang="en" data-wf-domain="wisprflow.ai" data-wf-page="683210d52506361959ff8fc2" data-wf-site="682f84b3838c89f8ff7667db">`)
  .replace('<body>', `<body class="${bodyTagAttrs.class || ''}">`);

fs.writeFileSync('index.html', newIndexHtml);

console.log("Written App.svelte and index.html safely");
