FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
COPY ws-server.js ./
RUN npm --no-audit --no-fund ci --only=production || true
EXPOSE 4001
CMD ["node", "ws-server.js"]
