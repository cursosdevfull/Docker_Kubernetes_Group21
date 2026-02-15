# Commit

### Crear un contenedor
```bash
docker run -d --name server-web -p 5000:80 nginx:alpine
```

### Crear un imagen desde un contenedor existente
```bash
docker commit server-web web:1.0.0
```