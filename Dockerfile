# Stage 1: Build the React application
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# The build script in your package.json will create a 'dist' folder
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:1.23-alpine
# Copy our custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy the built static files from the 'builder' stage
COPY --from=builder /app/dist /usr/share/nginx/html
# Expose port 80 for initial setup and HTTP, and 443 for final HTTPS
EXPOSE 80
EXPOSE 443
# Start Nginx
CMD ["nginx", "-g", "daemon off;"]