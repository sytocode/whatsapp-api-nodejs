FROM node:alpine

RUN apk add --update \
  git \
&& rm -rf /var/cache/apk/*

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3333

ENV PORT 3333

CMD ["npm", "start"]
