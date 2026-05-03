# Stage 1: Build
FROM node:22-slim AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy project files
COPY . .

# Build the project
ENV NODE_OPTIONS="--max-old-space-size=1536"
RUN npm run build

# Stage 2: Runtime
FROM node:22-slim

WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV PORT=3000

# Copy the built output, node_modules, and server script
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/server.mjs ./server.mjs

# Expose the port
EXPOSE 3000

# Start the server
CMD ["node", "server.mjs"]
