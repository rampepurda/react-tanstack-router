# react-tanstack-router Install with Vite
npm install @tanstack/react-router | yarn add @tanstack/react-router

## react-tanstack-router Install CLI
npm install -D @tanstack/router-cli | yarn add -D @tanstack/router-cli

### Update package.json: script
    "generate-routes": "tsr generate",
    "watch-routes": "tsr watch",
    "build": "npm run generate-routes && ...",
    "dev": "npm run watch-routes && ..."
