# Container

### Listar contenedores que estén ejecutándose
```bash
docker ps
```

### Listar contenedores que estén ejecutándose o no
```bash
docker ps -a
```
### Filtrar contenedores
```bash
docker ps -a | grep nginx
```

### Eliminar contenedor
```bash
docker rm <nombre del contenedor | token>
docker rm -f <nombre del contenedor | token>
```

### Eliminar múltiples contenedores
```bash
docker rm -f <nombre del contenedor | token> ...
```

### Inspeccionar un contenedor
```bash
docker inspect <nombre del contenedor | token>
```