# NGINX con volumen host

### Con ruta absoluta
``` bash
docker run -d \
    --name server-web02 \
    -p 3200:80
    nginx:alpine
```