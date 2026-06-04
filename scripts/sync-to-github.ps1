# Sync local changes to GitHub (commit + push)
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

$porcelain = git status --porcelain 2>&1
if (-not $porcelain) {
  Write-Host "Nothing to sync - working tree clean."
  exit 0
}

git add -A
$msg = "Auto-sync: portfolio updates $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git -c user.name="Idowu Elijah" -c user.email="idowuoluwasegun197@gmail.com" commit -m $msg
git push origin main

Write-Host "Pushed to GitHub origin main"
