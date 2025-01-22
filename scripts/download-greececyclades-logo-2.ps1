$url = "https://greececyclades.com/favicon.svg"
$outputPath = "../public/portfolio/greece-cyclades-favicon.svg"

# Create portfolio directory if it doesn't exist
$portfolioDir = Join-Path $PSScriptRoot "../public/portfolio"
if (-not (Test-Path $portfolioDir)) {
    New-Item -ItemType Directory -Path $portfolioDir
}

# Download the SVG file
Invoke-WebRequest -Uri $url -OutFile (Join-Path $PSScriptRoot $outputPath)

Write-Host "Downloaded Greece Cyclades logo to $outputPath"
