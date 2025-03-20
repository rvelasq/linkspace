FROM node:22-alpine
LABEL org.opencontainers.image.authors="dev@velasq.com"
LABEL org.opencontainers.image.description="A customizable, self-hosted alternative to link-in-bio services."
LABEL org.opencontainers.image.url="https://github.com/rvelasq/linkspace"
LABEL org.opencontainers.image.source=https://github.com/rvelasq/linkspace

WORKDIR /app
COPY ./ /app
RUN npm install && npm run build
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
ENTRYPOINT ["node", "/app/dist/server/entry.mjs"]