# PowerShell script to download images from free stock services

# Create necessary directories
$directories = @(
    "public/images",
    "public/team",
    "public/blog",
    "public/services/keyword-research",
    "public/services/on-page-seo",
    "public/services/off-page-seo",
    "public/services/technical-seo",
    "public/services/local-seo",
    "public/services/content-marketing",
    "public/services/ecommerce-seo",
    "public/services/analytics-reporting",
    "public/services/seo-audits"
)

foreach ($dir in $directories) {
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force
    }
}

# Image sources with their Unsplash/Pexels IDs
$images = @{
    # Team photos (Unsplash)
    "public/team/john-smith.jpg" = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    "public/team/emma-davis.jpg" = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
    "public/team/sarah-johnson.jpg" = "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    "public/team/michael-chen.jpg" = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"

    # Blog images (Unsplash)
    "public/blog/ai-seo-future.jpg" = "https://images.unsplash.com/photo-1677442136019-21780ecad995"
    "public/blog/core-web-vitals.jpg" = "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    "public/blog/local-seo.jpg" = "https://images.unsplash.com/photo-1523540939399-141cbff6a8d7"
    "public/blog/ecommerce-content.jpg" = "https://images.unsplash.com/photo-1563013544-824ae1b704d3"
    "public/blog/link-building.jpg" = "https://images.unsplash.com/photo-1562577309-4932fdd64cd1"

    # Service hero images (Unsplash)
    "public/services/keyword-research/hero.jpg" = "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    "public/services/on-page-seo/hero.jpg" = "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3"
    "public/services/off-page-seo/hero.jpg" = "https://images.unsplash.com/photo-1552664730-d307ca884978"
    "public/services/technical-seo/hero.jpg" = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
    "public/services/local-seo/hero.jpg" = "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
    "public/services/content-marketing/hero.jpg" = "https://images.unsplash.com/photo-1542435503-956c469947f6"
    "public/services/ecommerce-seo/hero.jpg" = "https://images.unsplash.com/photo-1563013544-824ae1b704d3"
    "public/services/analytics-reporting/hero.jpg" = "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    "public/services/seo-audits/hero.jpg" = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"

    # Additional service images
    "public/services/keyword-research/process.jpg" = "https://images.unsplash.com/photo-1543286386-2e659306cd6c"
    "public/services/keyword-research/tools.jpg" = "https://images.unsplash.com/photo-1559028012-481c04fa702d"

    # Homepage images
    "public/images/hero.jpg" = "https://images.unsplash.com/photo-1557804506-669a67965ba0"
    "public/images/about-preview.jpg" = "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
    "public/images/testimonials-bg.jpg" = "https://images.unsplash.com/photo-1521737711867-e3b97375f902"
    "public/images/cta-background.jpg" = "https://images.unsplash.com/photo-1557804506-669a67965ba0"
}

# Download images
foreach ($image in $images.GetEnumerator()) {
    $outputPath = $image.Key
    $url = $image.Value

    if (!(Test-Path $outputPath)) {
        Write-Host "Downloading $($image.Key)..."
        Invoke-WebRequest -Uri $url -OutFile $outputPath
        Write-Host "Downloaded to $outputPath"
    } else {
        Write-Host "Skipping $($image.Key) - already exists"
    }
}

Write-Host "Image download complete!"
