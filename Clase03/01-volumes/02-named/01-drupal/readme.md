# Drupal

### Crear una red
```bash
docker network create net-drupal -d bridge
```

### Crear volúmenes nombrados
```bash

docker volume create vol-mysql
docker volume create vol-modules
docker volume create vol-profiles
docker volume create vol-sites
docker volume create vol-themes
```

### Contenedor de MySQL
```bash
docker run -d --name server-mysql \
    -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=4321 \
    -e MYSQL_DATABASE=cursosdev \
    -e MYSQL_USER=user \
    -e MYSQL_PASSWORD=password \
    -v vol-mysql:/var/lib/mysql \
    --network net-drupal \
    mysql:8
```

### Contenedor de Drupal
```bash
docker run -d --name server-drupal \
    -p 3000:80 \
    -v vol-modules:/var/www/html/modules \
    -v vol-profiles:/var/www/html/profiles \
    -v vol-sites:/var/www/html/sites \
    -v vol-themes:/var/www/html/themes \
    --network net-drupal \
    drupal
```