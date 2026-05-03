# Stage 1: Build
FROM node:20-slim AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
# We use npm install instead of ci because package-lock might be outdated or missing
RUN npm install

# Copy project files
COPY . .

# Build the project using the Node.js preset for Nitro
# Increase memory limit for Node to prevent crashes during heavy builds
ENV NODE_OPTIONS="--max-old-space-size=2048"
RUN npx cross-env NITRO_PRESET=node-server npm run build

# Stage 2: Runtime
FROM node:20-slim

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
