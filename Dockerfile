# # Build Stage
# FROM node:24-alpine AS build

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build
 
# # Production Stage
# FROM nginx:mainline-alpine AS production

# COPY --from=build /app/dist /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

# Stage 1: Build the React app
# FROM node:24-alpine AS build
FROM node:24-alpine AS build
# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable
WORKDIR /app

# Leverage caching by installing dependencies first
COPY package.json ./
RUN npm install

# Copy the rest of the application code and build for production
COPY . ./
RUN npm run build

# Stage 2: Development environment
FROM node:24-alpine AS development
# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable
WORKDIR /app

# Install dependencies again for development
COPY package.json ./
RUN npm install

# Copy the full source code
COPY . ./

# Expose port for the development server
EXPOSE 4173
CMD ["npm", "preview"]

# Stage 3: Production environment
FROM nginx:alpine AS production

# Remove unnecessary files
RUN rm -rf /usr/share/nginx/html/*.html

# Copy the production build artifacts from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default NGINX port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]