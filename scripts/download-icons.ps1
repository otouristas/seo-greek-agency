# PowerShell script to download SVG icons

# Create icons directory
$directories = @(
    "public/icons",
    "public/tools",
    "public/services"
)

foreach ($dir in $directories) {
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force
    }
}

# Create a simple SVG icon function
function Create-SVGIcon {
    param (
        [string]$path,
        [string]$name,
        [string]$color = "#4F46E5"
    )
    
    $icons = @{
        'site-architecture' = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'
        'page-speed' = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'
        'mobile' = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>'
        'schema-markup' = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>'
        'sitemap' = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>'
        'security' = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>'
        'crawl' = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>'
        'core-web-vitals' = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>'
        'lcp' = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>'
        'fid' = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/></svg>'
        'cls' = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>'
        'meta-tags' = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/></svg>'
        'content' = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>'
    }
    
    if ($icons.ContainsKey($name)) {
        $svg = $icons[$name]
        $svg = $svg.Replace('currentColor', $color)
        Set-Content -Path "$path/$name.svg" -Value $svg
        Write-Host "Created $name.svg"
    }
}

# Create tool brand SVGs
$toolLogos = @{
    'screaming-frog' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="10" y="30" font-family="Arial" font-size="20" fill="#4F46E5">Screaming Frog</text></svg>'
    'gtmetrix' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="10" y="30" font-family="Arial" font-size="20" fill="#4F46E5">GTmetrix</text></svg>'
    'pagespeed-insights' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="10" y="30" font-family="Arial" font-size="20" fill="#4F46E5">PageSpeed Insights</text></svg>'
    'search-console' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="10" y="30" font-family="Arial" font-size="20" fill="#4F46E5">Search Console</text></svg>'
    'ahrefs' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="10" y="30" font-family="Arial" font-size="20" fill="#4F46E5">Ahrefs</text></svg>'
    'semrush' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="10" y="30" font-family="Arial" font-size="20" fill="#4F46E5">SEMrush</text></svg>'
    'google-analytics' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="10" y="30" font-family="Arial" font-size="20" fill="#4F46E5">Google Analytics</text></svg>'
}

# Create all icons
foreach ($icon in $icons.Keys) {
    Create-SVGIcon -path "public/icons" -name $icon
}

# Create tool logos
foreach ($tool in $toolLogos.GetEnumerator()) {
    Set-Content -Path "public/tools/$($tool.Key).svg" -Value $tool.Value
    Write-Host "Created $($tool.Key).svg"
}

# Create service visualization SVGs
$serviceVisuals = @{
    'technical-audit-visualization' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"><rect width="800" height="400" fill="#f3f4f6"/><text x="400" y="200" font-family="Arial" font-size="24" fill="#4F46E5" text-anchor="middle">Technical Audit Visualization</text></svg>'
    'audit-process' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"><rect width="800" height="400" fill="#f3f4f6"/><text x="400" y="200" font-family="Arial" font-size="24" fill="#4F46E5" text-anchor="middle">Audit Process</text></svg>'
    'audit-report-preview' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"><rect width="800" height="400" fill="#f3f4f6"/><text x="400" y="200" font-family="Arial" font-size="24" fill="#4F46E5" text-anchor="middle">Audit Report Preview</text></svg>'
    'on-page-seo-example' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"><rect width="800" height="400" fill="#f3f4f6"/><text x="400" y="200" font-family="Arial" font-size="24" fill="#4F46E5" text-anchor="middle">On-Page SEO Example</text></svg>'
    'before-optimization' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"><rect width="800" height="400" fill="#f3f4f6"/><text x="400" y="200" font-family="Arial" font-size="24" fill="#4F46E5" text-anchor="middle">Before Optimization</text></svg>'
    'after-optimization' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"><rect width="800" height="400" fill="#f3f4f6"/><text x="400" y="200" font-family="Arial" font-size="24" fill="#4F46E5" text-anchor="middle">After Optimization</text></svg>'
}

# Create service visuals
foreach ($visual in $serviceVisuals.GetEnumerator()) {
    Set-Content -Path "public/services/$($visual.Key).svg" -Value $visual.Value
    Write-Host "Created $($visual.Key).svg"
}

Write-Host "All SVGs created successfully!"
