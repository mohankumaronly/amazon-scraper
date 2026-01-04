FROM node:18-bullseye

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN npx playwright install --with-deps chromium

COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]
