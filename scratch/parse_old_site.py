import re
from html import unescape

file_path = r"C:\Users\SiN\.gemini\antigravity\brain\c69109cf-8c40-4130-85f3-ccf17ac6de76\.system_generated\steps\10146\content.md"

with open(file_path, "r", encoding="utf-8") as f:
    html_content = f.read()

if "---" in html_content:
    parts = html_content.split("---", 1)
    if len(parts) > 1:
        html_content = parts[1]

# Clean up html content (like strip newlines)
html_content_clean = html_content.replace("\n", " ").replace("\r", "")

# 1. Extract all links
links = re.findall(r'href=["\']([^"\']+)["\']', html_content_clean)
internal_links = set()
for link in links:
    link_clean = unescape(link).strip()
    if "adaptive-engg.com" in link_clean or (link_clean.startswith("/") and not link_clean.startswith("//")):
        internal_links.add(link_clean)

# 2. Extract all headings
headings = re.findall(r'<h([1-6])\b[^>]*>(.*?)</h\1>', html_content_clean, re.IGNORECASE)
headings_clean = []
for level, text in headings:
    # Remove inner html tags from heading text
    text_clean = re.sub(r'<[^>]+>', '', text).strip()
    text_clean = unescape(text_clean)
    if text_clean:
        headings_clean.append((level, text_clean))

# 3. Extract text paragraphs
paragraphs = re.findall(r'<p\b[^>]*>(.*?)</p>', html_content_clean, re.IGNORECASE)
paragraphs_clean = []
for p in paragraphs:
    p_clean = re.sub(r'<[^>]+>', '', p).strip()
    p_clean = unescape(p_clean)
    if p_clean and len(p_clean) > 20: # ignore very short text snippets
        paragraphs_clean.append(p_clean)

print("=== INTERNAL LINKS ===")
for link in sorted(internal_links):
    print(link)

print("\n=== HEADINGS ===")
for level, text in headings_clean:
    print(f"H{level}: {text}")

print("\n=== PARAGRAPHS ===")
for p in paragraphs_clean[:15]:
    print(f"- {p}")
