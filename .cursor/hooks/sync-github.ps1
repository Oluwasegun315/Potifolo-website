# Cursor stop hook — sync project to GitHub after agent finishes
$root = Join-Path $PSScriptRoot "..\.."
$script = Join-Path $root "scripts\sync-to-github.ps1"
if (Test-Path $script) {
  & powershell -ExecutionPolicy Bypass -File $script 2>&1 | Out-Null
}
exit 0
