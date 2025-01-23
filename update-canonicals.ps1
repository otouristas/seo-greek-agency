$files = Get-ChildItem -Path "src/app" -Recurse -Filter "metadata.ts"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    if ($content -match "canonical: '([^']*)'") {
        $path = $matches[1]
        if ($path -notlike "https://*") {
            $newCanonical = "https://kasiotisg.com$path"
            $content = $content -replace "canonical: '[^']*'", "canonical: '$newCanonical'"
            Set-Content -Path $file.FullName -Value $content
            Write-Host "Updated canonical in $($file.FullName) to $newCanonical"
        }
    }
}
