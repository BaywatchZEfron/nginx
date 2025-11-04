```markdown
# Evidencias del despliegue “Jedi–Sith” (Ubuntu Server + Nginx)

En esta sección se documentan las capturas de pantalla del proceso de instalación, configuración y verificación del servidor web en **Ubuntu Server 24.04**.

---

## Fase 1 — Preparación del entorno web
**Descripción:**  
Se creó la estructura de carpetas `public/` y `config/` para almacenar los archivos estáticos (HTML, CSS, JS) de las aplicaciones “Jedi” y “Sith”.

*> Estructura de carpetas:*
![Estructura de carpetas](images/Screenshot_1.png)
*> Fase 1 final:*
![Fase 1 final](images/Screenshot_74.png)

---

## Fase 2 — Instalación del servidor web

**Descripción:**  
Instalación y activación del servicio Nginx en Ubuntu Server.
````bash
sudo apt update
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
````

*> systemctl running:*

![systemctl running](images/Screenshot_2.png)

---

## Fase 3 — Configuración básica

**Descripción:**  
Se configuró Nginx para servir archivos estáticos desde las carpetas `public/jedi` y `public/sith`, utilizando distintos puertos para cada aplicación.  
Se verificó el acceso a través de `localhost`.


*> fase 3 final:*

![fase 3 final](images/Screenshot_5.png)

*> curl ok:*

![curl](images/Screenshot_6.png)

---

## Fase 4 — Configuración avanzada (dominios locales)

**Descripción:**  
Se añadieron dominios locales personalizados (`jedi.local` y `sith.local`) mediante la edición del archivo `/etc/hosts`.  
Se configuraron bloques virtuales en Nginx para responder en los puertos correspondientes.


*> curl jedi:*

![jedi](images/Screenshot_9.png)

*> curl sith:*

![sith](images/Screenshot_10.png)

*> /etc/hosts:*

![etc/hosts](images/Screenshot_11.png)
---

## Fase 5 — Verificación final

**Descripción:**  
Se comprobó el funcionamiento completo del entorno con ambas aplicaciones accesibles simultáneamente.  
Además, se verificó la correcta carga de estilos CSS personalizados (estética Jedi y Sith).

*> jedi:*

![fase 3 final](images/Screenshot_7.png)

*> sith:*

![sith](images/Screenshot_8.png)

---

## Conclusión visual

Ambas aplicaciones estáticas se sirven correctamente desde el mismo contenedor, demostrando modularidad y escalabilidad del entorno web.

