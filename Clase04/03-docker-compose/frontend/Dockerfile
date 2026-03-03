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

FROM nginx:alpine AS stage-production
COPY --from=stage-build /app/dist/frontend/browser /usr/share/nginx/html
COPY --from=stage-deps /app/node_modules /usr/share/nginx/html/node_modules
COPY ./public/env.js /usr/share/nginx/html/env2.js
EXPOSE 80
CMD ["sh", "-c", "envsubst < /usr/share/nginx/html/env2.js > /usr/share/nginx/html/env.js && nginx -g 'daemon off;'"]
