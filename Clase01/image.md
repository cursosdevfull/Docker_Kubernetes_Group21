# Images

### Listar
```bash
docker images
docker image ls
```

### Filtrar lista de imágenes
```bash
docker images | grep nginx
docker image ls | grep nginx
```

### Inspeccionar una imagen
```bash
docker image inspect <nombre de la imagen | token de la imagen>
```

### Descargar una image
```bash
docker pull <nombre de la imagen>:<tag o versión de la imagen>
```

### Descargar una imagen desde un repositorio diferente a hub.docker.com
```bash
docker pull public.ecr.aws/lambda/nodejs:24.2026.02.06.22
```

### Eliminar una imagen
```bash
docker rmi <nombre de la imagen | id o token>:<tag o versión>
docker rmi -f <nombre de la imagen | id o token>:<tag o versión>
```