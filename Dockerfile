FROM node:18.13.0-bullseye-slim AS node-base
ENV APP_PATH="/usr/src/app"

FROM node-base AS app-builder
WORKDIR $APP_PATH
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --omit=dev

FROM app-builder AS dev
WORKDIR $APP_PATH
COPY . .
RUN npm install
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "run", "dev"]