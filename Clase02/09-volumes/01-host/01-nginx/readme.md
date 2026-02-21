# NGINX con volumen host

### Con ruta absoluta
``` bash
docker run -d \
    --name server-web \
    -p 3200:80 \
    -v D://Cursos/Docker_Kubernetes_Group21/Clase02/09-volumes/01-host/01-nginx/www:/usr/share/nginx/html \
    nginx:alpine
```

### Con ruta relativa (Git Bash)
``` bash
docker run -d \
    --name server-web \
    -p 3200:80 \
    -v $(pwd -W)/www:/usr/share/nginx/html \
    nginx:alpine
```

### Con ruta relativa (Powershell)
``` bash
docker run -d `
    --name server-web `
    -p 3200:80 `
    -v ${PWD}/www:/usr/share/nginx/html `
    nginx:alpine
```