# Configuración del servidor Nginx (Ubuntu Server)

## Instalación

El servidor web se desplegó sobre **Ubuntu Server 24.04 LTS** en una máquina virtual (VirtualBox). Se eligió Ubuntu Server por su ligereza y estabilidad. El servidor seleccionado fue **Nginx** por su alto rendimiento en archivos estáticos y bajo consumo de recursos.

### Comandos de instalación

```bash
sudo apt update
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
# Verificar estado del servicio
systemctl status nginx   # debe aparecer: active (running)
```

## Configuración del servicio

Se configuraron dos sitios estáticos independientes (Jedi y Sith) mediante bloques `server` en `/etc/nginx/nginx.conf`:

```nginx
worker_processes 1;

events {
  worker_connections 1024;
}

http {
  include       mime.types;
  default_type  application/octet-stream;

  sendfile        on;
  keepalive_timeout  65;

  server {
    listen 8080;
    server_name jedi.local;
    root /usr/share/nginx/html/jedi;
    index index.html;

    location /css/ {
      alias /usr/share/nginx/html/jedi/css/;
    }

    location /dist/ {
      alias /usr/share/nginx/html/jedi/dist/;
    }

    location / {
      try_files $uri $uri/ =404;
    }
  }

  server {
    listen 9090;
    server_name sith.local;
    root /usr/share/nginx/html/sith;
    index index.html;

    location /css/ {
      alias /usr/share/nginx/html/sith/css/;
    }

    location /dist/ {
      alias /usr/share/nginx/html/sith/dist/;
    }

    location / {
      try_files $uri $uri/ =404;
    }
  }
}
```

## Directorios de los sitios

Rutas de los archivos HTML/CSS/JS:

- `/usr/share/nginx/html/jedi`
- `/usr/share/nginx/html/sith`

Comandos usados:

```bash
sudo mkdir -p /usr/share/nginx/html/{jedi,sith}
sudo cp -r ./public/jedi/* /usr/share/nginx/html/jedi/
sudo cp -r ./public/sith/* /usr/share/nginx/html/sith/
```

## Configuración de red (VirtualBox)

Se configuró Port Forwarding para permitir el acceso desde el host:

| Host Port | Guest Port | Descripción |
|-----------:|-----------:|------------|
| 8080      | 8080       | Sitio Jedi  |
| 9090      | 9090       | Sitio Sith  |

URLs desde el host:

- http://localhost:8080 → Jedi
- http://localhost:9090 → Sith

Ambos devuelven HTTP 200 OK cuando están correctamente desplegados.

## Justificación técnica

- Ubuntu Server: ligero y adecuado para entornos de producción (sin GUI).
- Nginx: alto rendimiento con archivos estáticos y arquitectura asíncrona.
- Separación por bloques `server`: modularidad y mantenimiento más sencillo (dos sitios con configuración similar).
- Port forwarding: permite acceder a la VM desde la máquina física.
