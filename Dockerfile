# ----------------------------
# Stage 1: Build
# ----------------------------
FROM node:20-alpine AS builder

# Create app directory
WORKDIR /app

# Install dependencies first (use cache)
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# You can switch to yarn or pnpm by modifying the install command
RUN npm install

# Copy the rest of the code
COPY . .

# Build the Next.js app
RUN npm run build

# ----------------------------
# Stage 2: Production
# ----------------------------
FROM node:20-alpine AS runner

# Enable non-root user (security)
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Set working directory
WORKDIR /app

# Install only production dependencies
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Copy built assets
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/tsconfig.json ./tsconfig.json

# If you use a custom server (e.g., server.js), copy it here too:
# COPY --from=builder /app/server.js ./server.js

# Expose the port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
