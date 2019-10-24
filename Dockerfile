ARG BUILD_ENV=production
FROM alpine:3.7 AS builder

COPY . .
RUN npm install &&\  
    export NODE_ENV=${BUILD_ENV} &&\
    npm run build
