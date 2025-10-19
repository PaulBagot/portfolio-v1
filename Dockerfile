FROM node:alpine
WORKDIR /app
COPY ./dist/ .
RUN npm install -g serve
EXPOSE 3000
CMD ["serve"]
