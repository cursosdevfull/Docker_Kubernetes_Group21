# MySQL

### Server
```bash
docker run -d --name server-mysql \
    -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=4321 \
    -e MYSQL_DATABASE=cursosdev \
    -e MYSQL_USER=user \
    -e MYSQL_PASSWORD=password \
    mysql:8
```

### Client
```bash
docker run -d --name client-mysql -e PMA_ARBITRARY=1 -p 8090:80 phpmyadmin
docker run -d --name client-mysql -e PMA_HOST=172.17.0.4 -p 8090:80 phpmyadmin
docker run -d --name client-mysql -e PMA_HOST=172.17.0.4 -e PMA_USER=user -e PMA_PASSWORD=password -p 8090:80 phpmyadmin
```