# Usamos la versión ligera de nginx
FROM nginx:alpine

# Copiamos nuestro archivo de configuración personalizado
COPY nginx.conf /etc/nginx/nginx.conf

# Copiamos los archivos estáticos
COPY ./public /usr/share/nginx/html

# Exponemos el puerto 80 (interno)
EXPOSE 80

# Ejecutar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
