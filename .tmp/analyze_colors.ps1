Add-Type -AssemblyName System.Drawing
$imagePath = "d:\Users\Murphy\Documents\antigravity\tandemacq-website\.tmp\Images\Logo\Tandem Logo.jpg"
if (Test-Path $imagePath) {
    try {
        $img = [System.Drawing.Bitmap]::FromFile($imagePath)
        $colors = @{}
        for ($x=0; $x -lt $img.Width; $x+=50) {
            for ($y=0; $y -lt $img.Height; $y+=50) {
                if ($x -lt $img.Width -and $y -lt $img.Height) {
                    $p = $img.GetPixel($x, $y)
                    $key = "$($p.R),$($p.G),$($p.B)"
                    if ($colors.ContainsKey($key)) { $colors[$key]++ } else { $colors[$key] = 1 }
                }
            }
        }
        $sorted = $colors.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First 5
        $sorted | ForEach-Object { Write-Output "Color: $($_.Key) Count: $($_.Value)" }
        $img.Dispose()
    } catch {
        Write-Error "Error processing image: $_"
    }
} else {
    Write-Error "Image not found at $imagePath"
}
