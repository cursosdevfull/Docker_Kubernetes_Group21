# Networks

### Listar
```bash
docker network ls
```

### Crear
```bash
docker network create <nombre de la red> --driver bridge
docker network create <nombre de la red> -d bridge
```

### Crear contenedor asociado a un red
```bash
docker run -d --name <nombre contenedor> --network <nombre red> <nombre de la imagen>
```

### Inspeccionar una red
```bash
docker network inspect <nombre de la red>
```

### Asociar un contenedor existente a una red
```bash
docker network connect <nombre de la red> <nombre | token del contenedor>
```

### Crear una red con gateway y subnet personalizados
```bash
docker network create <nombre de la red> -d bridge --gateway <direccion ip> --subnet <direccion ip>/<sub-mask>
```

### Crear un contenedor con una ip especifica
```bash
docker run -d --name server-nginx-03 --network net-02 --ip 180.4.0.10 nginx:alpine
```