#!/bin/bash

git fetch origin main

git reset --hard origin/main

git pull

# npm install

#npx babel-node installation/db_tables.js 