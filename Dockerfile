# Stage 1: Build
FROM node:22-slim AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy project files
COPY . .

# Build the project using the Node.js preset for Nitro
# Adjusted memory limit to 1.5GB to leave room for the OS/Docker on small VPS
ENV NODE_OPTIONS="--max-old-space-size=1536"
RUN npx cross-env NITRO_PRESET=node-server npm run build

# Stage 2: Runtime
FROM node:22-slim

WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV PORT=3000

# Copy the built output
COPY --from=builder /app/.output ./.output

# Expose the port
EXPOSE 3000

# Start the server
CMD ["node", ".output/server/index.mjs"]
