import re

with open('src/App.svelte', 'r') as f:
    content = f.read()

# See how many {@html ` ... `} blocks there are
html_blocks = re.findall(r'{@html `(.*?)`}', content, re.DOTALL)
print(f"Found {len(html_blocks)} HTML blocks")
