# Wordpress

### Crear una red
```bash
docker network create net-wordpress -d bridge
```
### Contenedor de MySQL
```bash
docker run -d --name server-mysql \
    -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=4321 \
    -e MYSQL_DATABASE=cursosdev \
    -e MYSQL_USER=user \
    -e MYSQL_PASSWORD=password \
    -v $(pwd -W)/data:/var/lib/mysql \
    --network net-wordpress \
    mysql:8
```
### Contenedor de Wordpress
```bash
docker run -d --name server-wordpress \
    -p 3000:80 \
    -e WORDPRESS_DB_HOST=server-mysql \
    -e WORDPRESS_DB_USER=user \
    -e WORDPRESS_DB_PASSWORD=password \
    -e WORDPRESS_DB_NAME=cursosdev \
    -v $(pwd -W)/wp:/var/www/html \
    --network net-wordpress \
    wordpress
```