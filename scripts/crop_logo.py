from PIL import Image
import os

input_path = 'public/assets/logo-transparent.png'
output_path = 'public/assets/logo-transparent.png'

if os.path.exists(input_path):
    img = Image.open(input_path)
    print(f"Original Size: {img.size}")
    
    # Get bounding box (non-zero alpha pixels)
    bbox = img.getbbox()
    
    if bbox:
        print(f"Bounding Box: {bbox}")
        # Crop to the bounding box
        cropped_img = img.crop(bbox)
        print(f"New Size: {cropped_img.size}")
        
        # Save overwriting the original
        cropped_img.save(output_path)
        print("Logo cropped and saved.")
    else:
        print("No content found in image (empty alpha channel).")
else:
    print(f"File not found: {input_path}")
