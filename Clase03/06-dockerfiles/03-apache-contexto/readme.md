# Apache - Dockerfile

### Crear un imagen
```bash
docker build -f all/my-script.yml -t mi-imagen:4.0.0 ./all
```

### Crear contenedor
```bash
docker run -d --name server-nginx \
    -p 9000:80 \
    mi-imagen:4.0.0
```