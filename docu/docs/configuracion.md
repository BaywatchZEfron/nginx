### `configuracion.md`

````markdown
# Explicaciones de configuración

## Configuración del servidor Nginx

El archivo `nginx.conf` se configuró para servir dos sitios estáticos diferentes usando bloques `server`:

```nginx
events {}

http {
    server {
        listen 8080;
        server_name jedi.local;

        root /usr/share/nginx/html/jedi;
        index index.html;

        location / {
            try_files $uri $uri/ =404;
        }
    }

    server {
        listen 9090;
        server_name sith.local;

        root /usr/share/nginx/html/sith;
        index index.html;

        location / {
            try_files $uri $uri/ =404;
        }
    }
}
````

### Descripción técnica

* **listen 8080 / 9090:** define el puerto en el que escucha cada sitio.
* **server_name:** asigna el dominio local personalizado (configurado en `/etc/hosts`).
* **root:** ruta donde se encuentran los archivos HTML, CSS y JS de cada sitio.
* **location /** y `try_files`: garantizan que solo se sirvan archivos existentes (evita errores 404 falsos).
* **index:** especifica el archivo principal de cada sitio.

---

## Configuración de dominios locales

Se añadió lo siguiente en el archivo `/etc/hosts` del sistema local:

```
127.0.0.1 jedi.local
127.0.0.1 sith.local
```

Esto permite que ambos dominios respondan como si fueran sitios independientes en el navegador.

---

## Docker Compose

El archivo `docker-compose.yml` se utilizó para automatizar la creación del contenedor y la construcción del entorno:

```yaml
version: "3"
services:
  nginx:
    container_name: nginx_starwars
    image: nginx:alpine
    ports:
      - "8080:8080"
      - "9090:9090"
    volumes:
      - ./html:/usr/share/nginx/html
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
```

### Explicación:

* **container_name:** nombre identificativo del contenedor.
* **image:** usa la imagen ligera de Nginx basada en Alpine.
* **ports:** mapea los puertos del host a los del contenedor.
* **volumes:** vincula las carpetas locales con el contenedor para actualizar los contenidos sin reconstruir.

---

## Verificación

Una vez ejecutado:

```bash
docker compose up --build
```

Se puede acceder a:

* **[http://jedi.local:8080](http://jedi.local:8080)**
* **[http://sith.local:9090](http://sith.local:9090)**

Ambos sitios funcionan correctamente y muestran sus estilos respectivos (Jedi en verde/azul, Sith en tonos oscuros).


