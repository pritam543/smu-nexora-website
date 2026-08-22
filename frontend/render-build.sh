#!/usr/bin/env bash
# Exit on error
set -o errexit

# Install Node dependencies and build frontend
npm install
npm run build

# Install Python dependencies for backend
pip install -r backend/requirements.txt