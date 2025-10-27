# Imagen base de Nginx (ya configurada para servir HTML)
FROM nginx:alpine

# Copiar tu carpeta "public" al directorio donde Nginx sirve archivos
COPY public/ /usr/share/nginx/html/

# Exponer el puerto estándar HTTP
EXPOSE 80

# Ejecutar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
