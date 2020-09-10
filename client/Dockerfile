

# Copy source files
WORKDIR /build 
COPY . /build

# Move source file with node_modules
RUN mv /source/node_modules /build/node_modules

# Environment vars
ENV REACT_APP_ENDPOINT /api

# Install dependencies
RUN yarn install

# Build prod
RUN yarn run build

# ----------------------------------
# Prepare production environment
FROM nginx:alpine
# ----------------------------------

# Clean nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy dist
COPY --from=builder /build/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

# Permission
RUN chown root /usr/share/nginx/html/*
RUN chmod 755 /usr/share/nginx/html/*

# Expose port
EXPOSE 2000

# Start
CMD ["nginx", "-g", "daemon off;"]
