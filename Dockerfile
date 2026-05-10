### 1. Build stage ###
FROM oven/bun:1.3.13-alpine AS build-stage
WORKDIR /build

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

RUN rm -r node_modules
RUN bun install --production --frozen-lockfile

RUN mkdir -p /prod \
    && mv /build/node_modules /prod/ \
    && mv /build/dist /prod/

### 2. Deploy stage ###
FROM node:24.15.0-alpine AS deploy-stage
WORKDIR /app

COPY --from=build-stage /prod .

EXPOSE 4321

USER node
CMD ["node", "/app/dist/server/entry.mjs"]