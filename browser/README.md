# Thumbnails

This service is  an Express app built on Node.js that uses Puppeteer to capture screenshots of various elements on web pages. It provides several endpoints to generate and return these screenshots in base64 format.

## Local configuration
To run this service locally, make sure you add a `.env` file within the `src` directory.

For local development this file should contain the following:

```
NODE_ENV=development
CHANNEL_APP_URL=http://localhost:3000
CHROME_BIN_PATH=<PATH TO YOUR CHROME/CHROMIUM BROWSER>
```

## Running the service
`make install`

`make run`