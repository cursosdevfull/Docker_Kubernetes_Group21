# Apache - Dockerfile

### Crear un imagen
```bash
docker build -t mi-imagen:1.0.0 .
```

### Crear contenedor
```bash
docker run -d --name server-nginx \
    -p 9000:80 \
    mi-imagen:1.0.0
```