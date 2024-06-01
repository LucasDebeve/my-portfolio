FROM node:20.11.0-alpine3.18 AS development
ENV NODE_ENV=development

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN set -eux; \
    npm install;

EXPOSE 3000

CMD ["npm", "run dev"]

FROM development AS production

ENV NODE_ENV=production

RUN set-eux; \
    npm run build;

