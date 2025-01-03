FROM node:18

# We don't need the standalone Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV PUPPETEER_SKIP_CHROME_HEADLESS_SHELL_DOWNLOAD true

RUN apt-get update && apt-get install -y \
    gnupg \
    wget \
    fonts-liberation \
    chromium \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

RUN npm install -g pnpm

# Add package file
COPY package.json pnpm-lock.yaml tsconfig.json ./

RUN DEBUG=puppeteer:* pnpm install

# Copy source
COPY src ./src

# Build dist
RUN pnpm build

# Expose port 3000
EXPOSE 3000
CMD ["pnpm", "start"]
