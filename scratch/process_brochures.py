import os
import shutil
import fitz  # PyMuPDF
import json
import re

# Paths
source_dir = "d:/Work/code/adaptive engg/brochures"
pdf_dest_dir = "d:/Work/code/adaptive engg/public/brochures"
img_dest_dir = "d:/Work/code/adaptive engg/public/imgs/brochures"

# Ensure destination directories exist
os.makedirs(pdf_dest_dir, exist_ok=True)
os.makedirs(img_dest_dir, exist_ok=True)

def clean_title(filename):
    # Remove extension
    name = os.path.splitext(filename)[0]
    # Replace dashes, underscores with spaces
    name = name.replace("-", " ").replace("_", " ")
    
    # Specific cleanup for known files
    if "AEPL" in filename and "3 Fold" in name:
        return "AEPL 3-Fold Brochure"
    if "AMC" in name:
        return "AMC Program Brochure"
    if "Adaptive Flyer" in name:
        return "Adaptive Corporate Flyer"
    if "Advanced analytics" in name:
        return "Advanced Analytics Brochure"
    if "AssetWiz" in name:
        return "AssetWiz Asset Management"
    if "CMS" in name:
        return "Central Monitoring System (CMS)"
    if "LT Panels" in name:
        return "Solar LT Panels"
    if "Plant SCADA" in name:
        return "Plant SCADA Solutions"
    if "WaterWiz" in name:
        return "WaterWiz Water SCADA Platform"
    if "Solarwiz" in name:
        return "SolarWiz IoT SCADA"
    
    # Clean up double spaces
    name = re.sub(r'\s+', ' ', name).strip()
    # Capitalize words
    return name.title()

def generate_slug(title):
    slug = title.lower()
    slug = re.sub(r'[^a-z0-9\s-]', '', slug)
    slug = re.sub(r'[\s_]+', '-', slug)
    return slug.strip('-')

def get_category(filename):
    fn = filename.lower()
    if "kusum" in fn or "solarwiz" in fn:
        return "PM-KUSUM"
    elif "solar" in fn or "renewable" in fn or "sustainable" in fn or "ems" in fn:
        return "Renewable Energy"
    elif "water" in fn or "waterwiz" in fn:
        return "Water Solutions"
    elif "tunnel" in fn:
        return "Infrastructure"
    elif "scada" in fn or "automation" in fn or "amc" in fn or "flyer" in fn or "3-fold" in fn or "3_fold" in fn or "3fold" in fn:
        return "SCADA & Automation"
    elif "cms" in fn or "analytics" in fn or "assetwiz" in fn or "ams" in fn:
        return "Unified Platform"
    elif "panels" in fn or "lt" in fn or "ht" in fn:
        return "HT/LT Panels"
    return "Unified Platform"

brochures = []

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
    try:
        doc = fitz.open(pdf_path)
        if len(doc) > 0:
            page = doc.load_page(0)  # load first page
            pix = page.get_pixmap(dpi=150)  # 150 DPI
            pix.save(img_dest_path)
            print(f"Generated thumbnail for {filename} -> {img_dest_name}")
        else:
            print(f"Warning: PDF {filename} has no pages")
        doc.close()
    except Exception as e:
        print(f"Error extracting page from {filename}: {e}")
    
    # 3. Create JSON metadata
    brochures.append({
        "id": f"static-br-{idx + 1}",
        "title": title,
        "slug": slug,
        "thumbnailUrl": f"/imgs/brochures/{img_dest_name}",
        "pdfUrl": f"/brochures/{pdf_dest_name}",
        "category": get_category(filename),
        "sortOrder": idx + 1
    })

# Write output metadata JSON
metadata_path = os.path.join(source_dir, "metadata.json")
with open(metadata_path, "w") as f:
    json.dump(brochures, f, indent=2)

print("\nProcessing complete! Static brochures JSON:")
print(json.dumps(brochures, indent=2))
