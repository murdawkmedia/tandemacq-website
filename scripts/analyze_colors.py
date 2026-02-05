
import fitz
import numpy as np
import sys
from collections import Counter

def get_dominant_colors(image_path, num_colors=5):
    try:
        doc = fitz.open(image_path)
        page = doc[0]
        pix = page.get_pixmap()
        
        # Convert to numpy array
        # samples is a bytes object, convert to buffer then to numpy
        img_data = np.frombuffer(pix.samples, dtype=np.uint8)
        
        # Reshape: height, width, n_channels
        # Identify n_channels
        n = pix.n
        img_data = img_data.reshape(pix.height, pix.width, n)
        
        # If RGBA, ignore alpha or handle it? Assuming RGB for JPG source.
        if n >= 3:
            pixels = img_data[:, :, :3]
        else:
            print("Image is not RGB.")
            return

        # Flatten pixels to a list of tuples for counting
        pixel_list = pixels.reshape(-1, 3)
        
        # Sample pixels if image is too large for speed
        if len(pixel_list) > 100000:
            indices = np.random.choice(len(pixel_list), 100000, replace=False)
            pixel_list = pixel_list[indices]

        # Convert to tuples for Counter
        pixel_tuples = [tuple(p) for p in pixel_list]
        
        # Count most common colors
        counts = Counter(pixel_tuples)
        common = counts.most_common(num_colors + 5) # Get a few more to filter out black/white if needed
        
        print("Dominant Colors found:")
        for color, count in common:
            hex_color = "#{:02x}{:02x}{:02x}".format(color[0], color[1], color[2])
            print(f"{hex_color} (count: {count})")
            
    except Exception as e:
        print(f"An error occurred: {str(e)}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python analyze_colors.py <image_path>")
    else:
        # Check if file exists
        import os
        if not os.path.exists(sys.argv[1]):
            print(f"File not found: {sys.argv[1]}")
        else:
            get_dominant_colors(sys.argv[1])
