# parameter NODE_VERSION
ARG NODE_VERSION=21.7.0
ARG NGINX_VERSION=1.25.4

FROM node:${NODE_VERSION}-alpine3.19 as react_development

WORKDIR /usr/src/project/

COPY package.json ./
COPY package-lock.json ./

COPY . /usr/src/project/

VOLUME [ "/usr/src/project/node_modules" ]

# Install dependencies
# Show executed commands
RUN set -eux; \
    npm install;

CMD ["npm", "run", "dev"]

# Construction of application
FROM react_development as react_build

RUN set -eux; \
    npm run build;

# Nginx server
FROM nginx:${NGINX_VERSION}-alpine as react_nginx

WORKDIR /usr/share/nginx/html

COPY --from=react_build /usr/src/project/dist /usr/share/nginx/html