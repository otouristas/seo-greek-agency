# Download platform logos
$logoUrls = @{
    "react.svg" = "https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg"
    "opencart.svg" = "https://raw.githubusercontent.com/opencart/opencart.github.io/master/image/opencart-logo.svg"
    "prestashop.svg" = "https://raw.githubusercontent.com/PrestaShop/prestashop.github.io/master/assets/images/prestashop-logo.svg"
}

$platformsDir = "./public/platforms"

# Create directory if it doesn't exist
if (-not (Test-Path $platformsDir)) {
    New-Item -ItemType Directory -Path $platformsDir -Force
}

foreach ($logo in $logoUrls.GetEnumerator()) {
    $outputPath = Join-Path $platformsDir $logo.Key
    Invoke-WebRequest -Uri $logo.Value -OutFile $outputPath
    Write-Host "Downloaded $($logo.Key)"
}

Write-Host "Platform logos download complete!"
