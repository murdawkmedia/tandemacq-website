import fitz  # PyMuPDF
import numpy as np
import os

def remove_black_background(input_path, output_path, threshold=30):
    print(f"Processing: {input_path}")
    
    if not os.path.exists(input_path):
        print(f"Error: Input file not found at {input_path}")
        return

    try:
        # Open image
        pix = fitz.Pixmap(input_path)
        
        # Ensure alpha channel
        if pix.alpha == 0:
            # Drop the colorspace arg if just adding alpha to existing pixmap
            # Or use fitz.Pixmap(pix, 1) which adds alpha channel
            try:
                pix = fitz.Pixmap(pix, 1)
            except:
                # Fallback if that fails: convert to RGB then add alpha
                # but fitz.Pixmap(fitz.csRGB, pix, 1) seemed to fail.
                # Try creating new empty RGBA and copy?
                # Actually, simply:
                pix = fitz.Pixmap(fitz.csRGB, pix) # ensure RGB
                pix = fitz.Pixmap(pix, 1) # add alpha

        
        # Access pixel data
        # samples_mv returns a memoryview of the pixel data
        data = np.frombuffer(pix.samples_mv, dtype=np.uint8)
        
        # Reshape to (height, width, 4) -> RGBA
        # Note: PyMuPDF pixmap data is row-major
        data = data.reshape(pix.height, pix.width, 4)
        
        # Separate channels
        r, g, b = data[:,:,0], data[:,:,1], data[:,:,2]
        
        # Create mask for black pixels (below threshold)
        mask = (r < threshold) & (g < threshold) & (b < threshold)
        
        # Set alpha to 0 for masked pixels
        data[mask, 3] = 0
        
        # Save result
        output_dir = os.path.dirname(output_path)
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
            
        pix.save(output_path)
        print(f"Success: Saved to {output_path}")
        
    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    input_file = r"d:\Users\Murphy\Documents\antigravity\tandemacq-website\.tmp\Images\Logo\Tandem Logo.jpg"
    output_file = r"d:\Users\Murphy\Documents\antigravity\tandemacq-website\public\assets\logo-transparent.png"
    
    remove_black_background(input_file, output_file)
