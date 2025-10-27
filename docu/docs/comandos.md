# Comandos utilizados

## Instalación y preparación del entorno

### Configuración inicial
```bash
# Descarga de imagen
docker pull nginx:alpine

# Ejecución del contenedor
docker run -d --name nginx_starwars -p 8080:8080 -p 9090:9090 nginx:alpine
```

### Gestión con Docker Compose
```bash
# Construcción y ejecución
docker compose up --build

# Verificación de contenedores
docker ps
docker exec -it nginx_starwars sh
```

### Pruebas de conectividad
```bash
curl -I http://jedi.local:8080
curl -I http://sith.local:9090
```

El archivo principal `nginx.conf` define dos bloques `server`:
- **jedi.local:8080** → Sirve los archivos desde `/usr/share/nginx/html/jedi/`
- **sith.local:9090** → Sirve los archivos desde `/usr/share/nginx/html/sith/`

Ambos sitios comparten una estructura modular basada en carpetas independientes, con estilos CSS personalizados para cada uno.

También se modificó el archivo `/etc/hosts` local para mapear los dominios:


127.0.0.1 jedi.local
127.0.0.1 sith.local


Esto permite acceder a cada sitio desde el navegador como si fueran dominios separados.