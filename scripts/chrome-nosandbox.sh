#!/bin/sh
# Chrome launcher for the taste-skill and hallmark scripts on this VM.
# This VM runs as root, so raw Chrome refuses to start without --no-sandbox.
# Kept in the project (not /tmp, which gets wiped) so CHROME_PATH stays valid.
# Usage: CHROME_PATH=~/workspace/portfolio-rebuild/scripts/chrome-nosandbox.sh
exec "$HOME/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome" --no-sandbox "$@"
