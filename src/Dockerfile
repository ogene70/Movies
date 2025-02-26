FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile
COPY source dest
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx","-g","deamon off;" ]