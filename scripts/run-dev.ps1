$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

$OutLog = Join-Path $Root "next-dev.out.log"
$ErrLog = Join-Path $Root "next-dev.err.log"

"Starting npm run dev at $(Get-Date -Format o)" | Set-Content -Path $OutLog -Encoding UTF8
"" | Set-Content -Path $ErrLog -Encoding UTF8

& npm.cmd run dev -- -p 3000 -H 127.0.0.1 *>> $OutLog
