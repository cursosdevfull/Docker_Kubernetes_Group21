# MySQL

### Crear un contenedor con volumen host
```bash
docker run -d --name server-mysql \
    -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=4321 \
    -e MYSQL_DATABASE=cursosdev \
    -e MYSQL_USER=user \
    -e MYSQL_PASSWORD=password \
    -v $(pwd -W)/data:/var/lib/mysql \
    mysql:8
```