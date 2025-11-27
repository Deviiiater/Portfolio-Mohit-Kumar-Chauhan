#!/bin/bash
echo "--- Git Status ---"
git status
echo "--- Git Remote ---"
git remote -v
echo "--- Git Push ---"
git push origin main 2>&1
