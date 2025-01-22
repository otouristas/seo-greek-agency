# Script to copy Bootstrap icons to the project

# Configuration
$sourceDir = "./node_modules/bootstrap-icons/icons"
$iconsDir = "./public/icons"
$socialDir = "./public/social"
$platformsDir = "./public/platforms"
$toolsDir = "./public/tools"

# Create directories if they don't exist
@($iconsDir, $socialDir, $platformsDir, $toolsDir) | ForEach-Object {
    if (-not (Test-Path $_)) {
        New-Item -ItemType Directory -Path $_ -Force
    }
}

# Icon mapping
$iconMap = @{
    # Technical SEO Icons
    "site-architecture.svg" = "diagram-3.svg"
    "page-speed.svg" = "speedometer2.svg"
    "mobile.svg" = "phone.svg"
    "schema-markup.svg" = "code-square.svg"
    "sitemap.svg" = "diagram-2.svg"
    "security.svg" = "shield-check.svg"
    "crawl.svg" = "bug.svg"
    "core-web-vitals.svg" = "graph-up.svg"
    "lcp.svg" = "hourglass-split.svg"
    "fid.svg" = "mouse.svg"
    "cls.svg" = "arrows-move.svg"

    # On-Page SEO Icons
    "meta-tags.svg" = "tags.svg"
    "content.svg" = "file-text.svg"
    "url.svg" = "link-45deg.svg"
    "internal-links.svg" = "link.svg"
    "image-opt.svg" = "image.svg"
    "headers.svg" = "type-h1.svg"

    # Keyword Research Icons
    "research.svg" = "search.svg"
    "analysis.svg" = "bar-chart.svg"
    "strategy.svg" = "bullseye.svg"
    "implementation.svg" = "check2-square.svg"

    # Local SEO Icons
    "google-business.svg" = "building.svg"
    "citations.svg" = "geo-alt.svg"
    "local-links.svg" = "pin-map.svg"
    "reviews.svg" = "star.svg"
    "local-content.svg" = "file-earmark-text.svg"
    "schema.svg" = "code.svg"

    # Off-Page SEO Icons
    "guest-post.svg" = "pencil-square.svg"
    "digital-pr.svg" = "newspaper.svg"
    "broken-link.svg" = "x-circle.svg"
    "resource.svg" = "journal-text.svg"
    "competitor.svg" = "graph-up-arrow.svg"
    "mentions.svg" = "chat-quote.svg"

    # Content Marketing Icons
    "blog-post.svg" = "file-richtext.svg"
    "case-study.svg" = "file-earmark-text.svg"
    "infographic.svg" = "pie-chart.svg"
    "whitepaper.svg" = "file-earmark-pdf.svg"
    "video.svg" = "play-circle.svg"
    "newsletter.svg" = "envelope-paper.svg"
    "creation.svg" = "pencil.svg"
    "optimization.svg" = "gear.svg"
    "distribution.svg" = "share.svg"
    "arrow-right.svg" = "arrow-right.svg"
    "traffic.svg" = "graph-up.svg"
    "engagement.svg" = "hand-thumbs-up.svg"
    "conversions.svg" = "cart-check.svg"

    # E-commerce SEO Icons
    "product-page.svg" = "box-seam.svg"
    "category-page.svg" = "collection.svg"
    "product-schema.svg" = "braces.svg"
    "site-structure.svg" = "diagram-3.svg"
    "internal-linking.svg" = "link-45deg.svg"
    "conversion.svg" = "cart-check.svg"

    # SEO Audit Icons
    "technical-analysis.svg" = "gear-wide-connected.svg"
    "on-page-review.svg" = "file-earmark-check.svg"
    "off-page-assessment.svg" = "link-45deg.svg"
    "user-experience.svg" = "person-workspace.svg"
    "content-evaluation.svg" = "file-richtext.svg"
    "competitive-analysis.svg" = "graph-up-arrow.svg"
    "executive-summary.svg" = "clipboard-data.svg"
    "technical-report.svg" = "file-earmark-code.svg"
    "action-plan.svg" = "list-check.svg"
    "roadmap.svg" = "map.svg"

    # Analytics & Reporting Icons
    "dashboard.svg" = "grid-3x3-gap.svg"
    "real-time.svg" = "clock.svg"
    "conversion-tracking.svg" = "graph-up.svg"
    "traffic-analysis.svg" = "bar-chart-line.svg"
    "user-behavior.svg" = "people.svg"
    "roi-reporting.svg" = "cash-stack.svg"
    "organic-traffic.svg" = "graph-up.svg"
    "conversion-rate.svg" = "arrow-up-right.svg"
    "rankings.svg" = "trophy.svg"
    "roi.svg" = "currency-dollar.svg"

    # Service Process Icons
    "audit-process.svg" = "clipboard-check.svg"
    "audit-report-preview.svg" = "file-earmark-bar-graph.svg"
    "before-optimization.svg" = "arrow-left-circle.svg"
    "after-optimization.svg" = "arrow-right-circle.svg"

    # Social Media Icons
    "facebook.svg" = "facebook.svg"
    "instagram.svg" = "instagram.svg"
    "linkedin.svg" = "linkedin.svg"
    "twitter.svg" = "twitter.svg"
}

# Platform logos mapping
$platformMap = @{
    "shopify.svg" = "shop.svg"
    "woocommerce.svg" = "wordpress.svg"
    "magento.svg" = "shop.svg"
    "bigcommerce.svg" = "cart4.svg"
}

# SEO tool logos mapping
$toolMap = @{
    "screaming-frog.svg" = "bug-fill.svg"
    "ahrefs.svg" = "graph-up.svg"
    "semrush.svg" = "search.svg"
    "google-analytics.svg" = "bar-chart-line.svg"
    "data-studio.svg" = "easel.svg"
    "search-console.svg" = "search.svg"
    "tag-manager.svg" = "tags.svg"
}

# Function to copy and rename icon
function Copy-Icon {
    param (
        [string]$targetName,
        [string]$sourceName,
        [string]$directory
    )

    $sourcePath = Join-Path $sourceDir $sourceName
    $targetPath = Join-Path $directory $targetName

    if (Test-Path $sourcePath) {
        Copy-Item -Path $sourcePath -Destination $targetPath -Force
        Write-Host "Copied $sourceName to $targetName"
    } else {
        Write-Host "Warning: Source icon not found: $sourceName"
    }
}

# Copy icons
foreach ($icon in $iconMap.GetEnumerator()) {
    $directory = if ($icon.Key -match "facebook|instagram|linkedin|twitter") {
        $socialDir
    } else {
        $iconsDir
    }

    Copy-Icon -targetName $icon.Key -sourceName $icon.Value -directory $directory
}

# Copy platform logos
foreach ($platform in $platformMap.GetEnumerator()) {
    Copy-Icon -targetName $platform.Key -sourceName $platform.Value -directory $platformsDir
}

# Copy tool logos
foreach ($tool in $toolMap.GetEnumerator()) {
    Copy-Icon -targetName $tool.Key -sourceName $tool.Value -directory $toolsDir
}

Write-Host "Icon replacement complete!"
Write-Host "Note: Logo and favicon remain unchanged."
