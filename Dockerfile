# Stage 1: Build
FROM node:20-slim AS builder

# Install dependencies needed for build (if any)
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy project files
COPY . .

# Build the project using the Node.js preset for Nitro
# This ensures it runs on a standard Node server instead of Cloudflare
RUN npx cross-env NITRO_PRESET=node-server npm run build

# Stage 2: Runtime
FROM node:20-slim

WORKDIR /app

# Copy the built output (Nitro generates it in .output for node-server)
COPY --from=builder /app/.output ./.output

# Expose the default Nitro port
EXPOSE 3000

# Start the server
CMD ["node", ".output/server/index.mjs"]
