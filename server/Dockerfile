

# Copy source files
WORKDIR /source 
COPY . /source

# Move source file with node_modules
RUN rm -Rf /app/source
RUN rm -Rf /source/node_modules
RUN mv /source/* /app

# Install dependencies
WORKDIR /app
RUN yarn install

# Set env vars
ENV DB_HOST localhost
ENV NODE_PORT 3000
ENV NODE_API /api

# Expose port
EXPOSE 3000
