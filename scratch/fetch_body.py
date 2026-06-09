import urllib.request
import re
from html import unescape

url = "https://adaptive-engg.com/"

try:
    print(f"Fetching {url}...")
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=15) as response:
        html = response.read().decode('utf-8')
    print(f"Successfully fetched {len(html)} bytes.")
except Exception as e:
    print(f"Error fetching URL: {e}")
    exit(1)

# Remove style tags
html_clean = re.sub(r'<style\b[^>]*>.*?</style>', '', html, flags=re.DOTALL | re.IGNORECASE)
# Remove script tags
html_clean = re.sub(r'<script\b[^>]*>.*?</script>', '', html_clean, flags=re.DOTALL | re.IGNORECASE)

# Find all links
links = re.findall(r'href=["\']([^"\']+)["\']', html_clean)
internal_links = set()
for link in links:
    link_clean = unescape(link).strip()
    if "adaptive-engg.com" in link_clean or (link_clean.startswith("/") and not link_clean.startswith("//")):
        internal_links.add(link_clean)

# Find all headings
headings = re.findall(r'<h([1-6])\b[^>]*>(.*?)</h\1>', html_clean, flags=re.DOTALL | re.IGNORECASE)
headings_clean = []
for level, text in headings:
    text_clean = re.sub(r'<[^>]+>', '', text).strip()
    text_clean = unescape(re.sub(r'\s+', ' ', text_clean))
    if text_clean:
        headings_clean.append((level, text_clean))

# Find all text content from the body
# Let's extract everything inside the <body> tag if it exists
body_match = re.search(r'<body\b[^>]*>(.*?)</body>', html_clean, flags=re.DOTALL | re.IGNORECASE)
body_text = ""
if body_match:
    body_html = body_match.group(1)
    # Remove HTML tags to get clean text
    body_text = re.sub(r'<[^>]+>', ' ', body_html)
    body_text = unescape(re.sub(r'\s+', ' ', body_text)).strip()

# Save output
output_path = r"d:\Work\code\adaptive engg\scratch\old_site_clean.txt"
with open(output_path, "w", encoding="utf-8") as f:
    f.write("=== INTERNAL LINKS ===\n")
    for link in sorted(internal_links):
        f.write(f"{link}\n")
    
    f.write("\n=== HEADINGS ===\n")
    for level, text in headings_clean:
        f.write(f"H{level}: {text}\n")
        
    f.write("\n=== CLEAN BODY TEXT ===\n")
    f.write(body_text)

print(f"Cleaned output saved to {output_path}")
print(f"Found {len(internal_links)} links, {len(headings_clean)} headings.")
