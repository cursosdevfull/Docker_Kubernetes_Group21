ARG NODE_VERSION=24

FROM node:${NODE_VERSION}-alpine AS stage-base
WORKDIR /app

FROM stage-base AS stage-deps
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    npm ci --omit=dev

FROM stage-deps AS stage-build
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    npm ci
COPY . .
RUN npm run build

FROM stage-base AS stage-production
RUN apk add --no-cache curl
COPY --from=stage-deps /app/node_modules ./node_modules
COPY --from=stage-build /app/dist ./dist
COPY package.json .

USER node

EXPOSE 4000

CMD ["npm", "run", "start:prod"]