# Script to download and replace icons from Hugeicons
# Note: You need to have a Hugeicons Pro account to download the icons

# Configuration
$hugeiconsToken = "" # Add your Hugeicons API token here
$baseUrl = "https://api.hugeicons.com/icons"
$iconStyle = "stroke-standard" # Options: stroke-standard, solid-standard, etc.

# Create directories if they don't exist
$directories = @(
    "./public/icons",
    "./public/social"
)

foreach ($dir in $directories) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir
    }
}

# Icon mapping
$iconMap = @{
    # Technical SEO Icons
    "site-architecture" = "hierarchy/site-structure"
    "page-speed" = "dashboard/speed-meter"
    "mobile" = "devices/mobile"
    "schema-markup" = "programming/code-block"
    "sitemap" = "hierarchy/flow-chart"
    "security" = "security/shield-check"
    "crawl" = "technology/spider-web"
    "core-web-vitals" = "dashboard/analytics"
    "lcp" = "dashboard/loading"
    "fid" = "mouse/click"
    "cls" = "animation/transform"

    # On-Page SEO Icons
    "meta-tags" = "programming/tags"
    "content" = "notes/document-text"
    "url" = "link/chain"
    "internal-links" = "link/internal-link"
    "image-opt" = "images/image-check"
    "headers" = "notes/heading"

    # Keyword Research Icons
    "research" = "search/magnifier-chart"
    "analysis" = "dashboard/analytics-graph"
    "strategy" = "business/strategy"
    "implementation" = "check/checklist"

    # Local SEO Icons
    "google-business" = "maps/location-business"
    "citations" = "building/store-location"
    "local-links" = "link/location-link"
    "reviews" = "communication/chat-star"
    "local-content" = "notes/location-document"
    "schema" = "programming/code-structure"

    # Service Process Icons
    "audit-process" = "check/audit"
    "audit-report-preview" = "notes/report-analytics"
    "before-optimization" = "arrow/before"
    "after-optimization" = "arrow/after"

    # Social Media Icons
    "facebook" = "logos/facebook"
    "instagram" = "logos/instagram"
    "linkedin" = "logos/linkedin"
    "twitter" = "logos/twitter"
}

# Function to download icon
function Download-Icon {
    param (
        [string]$iconName,
        [string]$hugeiconsPath,
        [string]$outputPath
    )

    $url = "$baseUrl/$iconStyle/$hugeiconsPath"
    $headers = @{
        "Authorization" = "Bearer $hugeiconsToken"
        "Accept" = "image/svg+xml"
    }

    try {
        Write-Host "Downloading $iconName..."
        Invoke-RestMethod -Uri $url -Headers $headers -OutFile $outputPath
        Write-Host "Successfully downloaded $iconName"
    }
    catch {
        Write-Host "Error downloading $iconName: $_"
    }
}

# Main execution
if ([string]::IsNullOrEmpty($hugeiconsToken)) {
    Write-Host "Please add your Hugeicons API token to the script first."
    exit 1
}

foreach ($icon in $iconMap.GetEnumerator()) {
    $outputPath = if ($icon.Key -like "facebook" -or $icon.Key -like "instagram" -or $icon.Key -like "linkedin" -or $icon.Key -like "twitter") {
        "./public/social/$($icon.Key).svg"
    } else {
        "./public/icons/$($icon.Key).svg"
    }
    
    Download-Icon -iconName $icon.Key -hugeiconsPath $icon.Value -outputPath $outputPath
}

Write-Host "Icon download and replacement complete!"
Write-Host "Note: Make sure to check each icon and adjust sizes/colors as needed."
