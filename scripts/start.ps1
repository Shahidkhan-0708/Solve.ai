param([switch]$Production)
$ErrorActionPreference = 'Stop'
Set-Location (Split-Path $PSScriptRoot -Parent)
$taskNodePath = $env:SOLVE_NODE_BIN
if (-not $taskNodePath) {
  $taskInstalls = Join-Path $env:LOCALAPPDATA 'Author Software\nvm\installs'
  if (Test-Path -LiteralPath $taskInstalls) {
    $taskInstall = Get-ChildItem -LiteralPath $taskInstalls -Directory |
      Where-Object { $_.Name -match '^v\d+\.\d+\.\d+$' } |
      Sort-Object { [version]($_.Name.Substring(1)) } -Descending |
      Select-Object -First 1
    if ($taskInstall) { $taskNodePath = Join-Path $taskInstall.FullName 'node.exe' }
  }
}
if (-not $taskNodePath) { $taskNodePath = (Get-Command node -ErrorAction Stop).Source }
$taskArgs = @('scripts/dev.mjs')
if ($Production) { $taskArgs += '--production' }
& $taskNodePath @taskArgs
exit $LASTEXITCODE
