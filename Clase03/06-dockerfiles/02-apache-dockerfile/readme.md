# Apache - Dockerfile

### Crear un imagen
```bash
docker build -f all/Dockerfile -t mi-imagen:2.0.0 .
```

### Crear contenedor
```bash
docker run -d --name server-nginx \
    -p 9000:80 \
    mi-imagen:2.0.0
```