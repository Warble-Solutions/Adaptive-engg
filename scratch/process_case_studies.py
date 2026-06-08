import os
import shutil
import fitz  # PyMuPDF
import json
import re

# Paths
source_dir = "d:/Work/code/adaptive engg/case studies"
pdf_dest_dir = "d:/Work/code/adaptive engg/public/case-studies"
img_dest_dir = "d:/Work/code/adaptive engg/public/imgs/case-studies"

# Ensure destination directories exist
os.makedirs(pdf_dest_dir, exist_ok=True)
os.makedirs(img_dest_dir, exist_ok=True)

def clean_title(filename):
    # Remove extension
    name = os.path.splitext(filename)[0]
    # Replace dashes and underscores with spaces
    name = name.replace("-", " ").replace("_", " ")
    # Remove leading/trailing "Final", numbers, etc.
    name = re.sub(r'(?i)\b(final)\b', '', name)
    name = re.sub(r'(?i)\b(case study)\b', '', name)
    # Clean up double spaces
    name = re.sub(r'\s+', ' ', name).strip()
    return name

def generate_slug(title):
    slug = title.lower()
    slug = re.sub(r'[^a-z0-9\s-]', '', slug)
    slug = re.sub(r'[\s_]+', '-', slug)
    return slug.strip('-')

def get_category(filename):
    fn = filename.lower()
    if "solar" in fn or "khavda" in fn:
        return "Renewable Energy"
    elif "water" in fn or "milk" in fn or "hydropneumatic" in fn or "supply" in fn or "schemes" in fn:
        return "Water & Process"
    elif "tunnel" in fn:
        return "Infrastructure"
    elif "kusum" in fn:
        return "PM-KUSUM"
    return "Industrial Automation"

case_studies = []

# Scan for PDFs
files = [f for f in os.listdir(source_dir) if f.endswith(".pdf")]
files.sort()  # Sort alphabetically

for idx, filename in enumerate(files):
    pdf_path = os.path.join(source_dir, filename)
    title = clean_title(filename)
    slug = generate_slug(title)
    
    # Destination paths
    pdf_dest_name = filename
    pdf_dest_path = os.path.join(pdf_dest_dir, pdf_dest_name)
    
    img_dest_name = f"{slug}.png"
    img_dest_path = os.path.join(img_dest_dir, img_dest_name)
    
    # 1. Copy PDF to public folder
    shutil.copy2(pdf_path, pdf_dest_path)
    
    # 2. Extract first page as image
    doc = fitz.open(pdf_path)
    if len(doc) > 0:
        page = doc.load_page(0)  # load first page
        pix = page.get_pixmap(dpi=150)  # 150 DPI is good for thumbnails
        pix.save(img_dest_path)
        print(f"Generated thumbnail for {filename} -> {img_dest_name}")
    else:
        print(f"Warning: PDF {filename} has no pages")
    doc.close()
    
    # 3. Create JSON metadata
    case_studies.append({
        "id": f"static-cs-{idx + 1}",
        "title": title,
        "slug": slug,
        "thumbnailUrl": f"/imgs/case-studies/{img_dest_name}",
        "pdfUrl": f"/case-studies/{pdf_dest_name}",
        "description": f"Detailed engineering case study on {title}.",
        "category": get_category(filename),
        "sortOrder": idx + 1
    })

# Write output metadata JSON
metadata_path = os.path.join(source_dir, "metadata.json")
with open(metadata_path, "w") as f:
    json.dump(case_studies, f, indent=2)

print("\nProcessing complete! Static case studies JSON:")
print(json.dumps(case_studies, indent=2))
