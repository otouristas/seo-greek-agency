# Download Magento logo
$url = "https://upload.wikimedia.org/wikipedia/en/5/53/Magento.svg"
$outputPath = "./public/platforms/magento.svg"

try {
    Invoke-WebRequest -Uri $url -OutFile $outputPath -Headers @{
        "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    Write-Host "Successfully downloaded Magento logo"
} catch {
    Write-Host "Error downloading Magento logo: $_"
}
