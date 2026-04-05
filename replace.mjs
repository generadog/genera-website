import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('wispr.html', 'utf8');
const $ = cheerio.load(html);

// Remove specific webflow stuff that might break
// $('script[src*="webflow"]').remove();
// We actually *need* the webflow js for the animations to be exactly the same

// Text replacements
const dictionary = [
  // Nav
  { match: /Flow/i, replace: "Genera" },
  { match: /Wispr/i, replace: "Genera" },

  // Hero
  { match: /The voice-to-text AI that turns speech into clear, polished writing in every app\./i, replace: "The software that actually understands your daycare." },
  { match: /Seamless speech-to-text in every application on your phone or computer\./i, replace: "Built by the people behind Duncan's Dog Co — 15 years in the industry, finally turning that experience into software that makes your business run the way it should." },
  
  { match: /4x faster/i, replace: "Built by a daycare," },
  { match: /than typing/i, replace: "for daycares" },
  
  { match: /Write faster in all your apps, on any device/i, replace: "From a dog walking round in South West London to software used across the UK." },
  
  { match: /After 150 years of using the same keyboard, voice that actually works is finally here.*?handle the rest./ig, replace: "You got into this for the dogs — not the admin. Genera handles the rest. Bookings, payments, transport, staff and pet records in one place." },
  
  { match: /Try Flow|Download for free/i, replace: "Start Free Trial" },
  { match: /Download now/i, replace: "Book a Demo" },

  { match: /Teams at Clay/i, replace: "Paws & Play" },
  { match: /Reid the Cofounder of LinkedIn/i, replace: "Bark & Stride" },
  { match: /Steven Bartlett the CEO/i, replace: "Wag Walkers" },
  { match: /Tijs the Marathon Maker/i, replace: "Tail End Daycare" },

  { match: /Flow is made for you/i, replace: "Running a daycare is harder than it looks." },
  { match: /Flow for Accessibility/i, replace: "Bookings from every direction" },
  { match: /Your voice deserves a shortcut.*naturally./i, replace: "Texts, emails, DMs, calls — all landing in different places. You spend more time managing messages than caring for dogs." },
  
  { match: /Flow for Creators/i, replace: "Sunday evenings lost to invoicing" },
  { match: /Ideas hit fast, but execution is slow.*type less./i, replace: "Manually building invoices for every client, every week. Chasing payments. Wondering who's paid and who hasn't." },

  { match: /Flow for Customer Support/i, replace: "Pickup logistics that break your brain" },
  { match: /Speak naturally to resolve tickets faster.*DMs./i, replace: "Juggling driver routes, pickup windows and last-minute changes with no real system. Just a spreadsheet and a prayer." },

  { match: /Flow for Developers/i, replace: "Every pet. Every detail. One place." },
  { match: /Dictate in natural language.*with Flow./i, replace: "Full client and pet profiles — feeding notes, vet contacts, vaccination records — accessible in seconds by anyone on your team." },

  { match: /Flow for Lawyers/i, replace: "Bookings that run themselves" },
  { match: /Legal precision demands.*Enterprise plans./i, replace: "24/7 online booking portal for your clients. No more inbound messages — just a clean calendar that fills itself." },

  { match: /Flow for Leaders/i, replace: "Get paid without chasing anyone" },
  { match: /Who doesn’t want faster teams.*break anything./i, replace: "Auto-charge on collection, bulk invoicing, direct debit and card payments. Your money arrives on time, every time." },

  { match: /Flow for Sales/i, replace: "Routes planned in minutes, not hours" },
  { match: /Slow follow ups mean lost deals.*word./i, replace: "Drag-and-drop transport scheduling with optimised routes for your drivers. No more scrambling on collection day." },

  { match: /Flow for Students/i, replace: "Your team, sorted" },
  { match: /Blank pages and looming deadlines\?.*effort./i, replace: "Staff schedules, shift planning and payroll prep — all in one system. Know who's in, who's driving, and what everyone's owed." },

  { match: /Flow for Teams/i, replace: "Support that actually understands" },
  { match: /Fewer meetings, faster alignment.*pricing./i, replace: "UK-based support from people who've run a daycare. GDPR & DEFRA compliant, cloud-based and always up to date." },

  { match: /Speak naturally and Flow transcribes.*typos./i, replace: "Everything you need. Nothing you don't. Designed to remove the friction of running a daycare." },
  
  { match: /Personal dictionary/i, replace: "Today's bookings at a glance" },
  { match: /Flow automatically learns your unique words and adds them to your personal dictionary./i, replace: "See all your data in one simple view." },
  
  { match: /Snippet library/i, replace: "Automated payment collection" },
  { match: /Create voice shortcuts for the things your team says over and over.*formatted text./i, replace: "Direct debit integration directly inside your dashboard." },

  { match: /Different tones for each app/i, replace: "Driver routes, ready to go" },
  { match: /Flow automatically adjusts tone based on the app you’re using.*robot./i, replace: "Optimize your pickups immediately." },

  { match: /100\+ languages/i, replace: "The Founding One Hundred" },
  { match: /Flow automatically detects and transcribes.*do./i, replace: "We're selecting 100 pet businesses to join Genera before we open to the public. You'll get three months completely free, priority onboarding and a direct line to our team." },

  { match: /On-the-go or at your desk/i, replace: "A dashboard built for busy people." },
  { match: /Flow is the only voice-to-text tool.*everywhere./i, replace: "You got into this because you love dogs. Let us handle the rest. Start your 3-month free trial today. No credit card required." },
  
  { match: /Flow love/i, replace: "Businesses already on board" }
];

function replaceTextInNode(node) {
  if (node.type === 'text') {
    let newText = node.data;
    if (newText.trim().length > 0) {
      dictionary.forEach(entry => {
        if (typeof entry.match === 'string') {
          newText = newText.split(entry.match).join(entry.replace);
        } else {
          newText = newText.replace(entry.match, entry.replace);
        }
      });
      // Replace isolated Wispr / Flow with Genera
      newText = newText.replace(/\bWispr\b/gi, 'Genera').replace(/\bFlow\b/gi, 'Genera');
      node.data = newText;
    }
  } else if (node.type === 'tag' && node.name !== 'script' && node.name !== 'style') {
    $(node).contents().each((i, childNode) => replaceTextInNode(childNode));
  }
}

$('body').contents().each((i, node) => replaceTextInNode(node));

// Replace images with placeholders
$('img').each((i, el) => {
  const $img = $(el);
  const w = $img.attr('width') || "800";
  const h = $img.attr('height') || "600";
  $img.attr('src', `https://placehold.co/${w}x${h}/222/FFF?text=Image+Placeholder`);
  $img.removeAttr('srcset');
  $img.removeAttr('sizes');
});
// Replace videos with placeholder images if possible or strip
$('video').each((i, el) => {
  const $vid = $(el);
  $vid.replaceWith(`<img src="https://placehold.co/800x600/222/FFF?text=Video+Placeholder" width="100%" class="${$vid.attr('class') || ''}">`);
});
$('iframe').each((i, el) => {
  const $if = $(el);
  $if.replaceWith(`<img src="https://placehold.co/800x600/222/FFF?text=Video+Placeholder" width="100%" class="${$if.attr('class') || ''}">`);
});


const finalHtml = $.html();

fs.writeFileSync('wispr_genera.html', finalHtml);
console.log("Written wispr_genera.html");
