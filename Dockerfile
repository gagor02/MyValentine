# Etapa 1: Build (Construcción)
FROM node:22-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Production (Servidor Nginx)
FROM nginx:alpine
# Copiamos los archivos construidos en la etapa anterior a la carpeta de Nginx
COPY --from=build /app/dist /usr/share/nginx/html
# Copiamos nuestra configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
