FROM node:16 as build

WORKDIR /app
COPY . .

RUN npm  i
RUN npm run build

FROM nginx:1.24 as runtime

COPY docker/config/nginx/nginx.conf docker/config/nginx/site.conf /etc/nginx/

WORKDIR /app
COPY --from=build /app/dist ./dist

CMD ["nginx", "-g", "daemon off;"]
