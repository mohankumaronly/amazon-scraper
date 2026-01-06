FROM mcr.microsoft.com/playwright:v1.40.0-jammy

WORKDIR /app

COPY package*.json ./
RUN npm install

# RUN npx playwright install --with-deps chromium

COPY . .

EXPOSE 8000

CMD ["node", "server.js"]
