# PowerShell script to create tool logos

# Create tools directory if it doesn't exist
if (!(Test-Path "public/tools")) {
    New-Item -ItemType Directory -Path "public/tools" -Force
}

# Tool logo SVGs with consistent branding
$toolLogos = @{
    # Original names
    'screaming-frog' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="10" y="30" font-family="Arial" font-size="20" fill="#4F46E5">Screaming Frog</text></svg>'
    'gtmetrix' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="10" y="30" font-family="Arial" font-size="20" fill="#4F46E5">GTmetrix</text></svg>'
    'pagespeed-insights' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="10" y="30" font-family="Arial" font-size="20" fill="#4F46E5">PageSpeed Insights</text></svg>'
    'search-console' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="10" y="30" font-family="Arial" font-size="20" fill="#4F46E5">Search Console</text></svg>'
    'ahrefs' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="10" y="30" font-family="Arial" font-size="20" fill="#4F46E5">Ahrefs</text></svg>'
    'semrush' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="10" y="30" font-family="Arial" font-size="20" fill="#4F46E5">SEMrush</text></svg>'
    'google-analytics' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="10" y="30" font-family="Arial" font-size="20" fill="#4F46E5">Google Analytics</text></svg>'
    
    # Additional variations
    'semrush-logo' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="10" y="30" font-family="Arial" font-size="20" fill="#4F46E5">SEMrush</text></svg>'
    'ahrefs-logo' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="10" y="30" font-family="Arial" font-size="20" fill="#4F46E5">Ahrefs</text></svg>'
    'moz-logo' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="10" y="30" font-family="Arial" font-size="20" fill="#4F46E5">Moz</text></svg>'
    'google-search-console' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="10" y="30" font-family="Arial" font-size="20" fill="#4F46E5">Google Search Console</text></svg>'
    'data-studio' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="10" y="30" font-family="Arial" font-size="20" fill="#4F46E5">Google Data Studio</text></svg>'
    'tag-manager' = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="10" y="30" font-family="Arial" font-size="20" fill="#4F46E5">Google Tag Manager</text></svg>'
}

# Create all tool logos
foreach ($tool in $toolLogos.GetEnumerator()) {
    $path = "public/tools/$($tool.Key).svg"
    Set-Content -Path $path -Value $tool.Value
    Write-Host "Created $($tool.Key).svg"
}

Write-Host "All tool logos created successfully!"
