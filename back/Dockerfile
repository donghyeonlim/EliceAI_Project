# Step 1
## base image for Step 1: Node 10
FROM node:16-alpine AS builder
WORKDIR /app
# package json copy
COPY package*.json ./
COPY yarn.lock ./
RUN yarn
## 프로젝트의 모든 파일을 WORKDIR(/app)로 복사한다
COPY . .
## Nest.js project를 build 한다
RUN yarn build

EXPOSE 5001
CMD ["yarn", "start"]
